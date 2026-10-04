import { readFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'

const { origin, key } = JSON.parse(await readFile(new URL('../seo/indexnow.json', import.meta.url), 'utf8'))
const { pages, revision, baselineStatus, changedUrls, deletedUrls } = await fetch(origin + '/seo-manifest.json', { signal: AbortSignal.timeout(20000) }).then(response => {
  if (!response.ok) throw new Error('Live SEO manifest is unavailable')
  return response.json()
})
const sha = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
if (revision !== sha) throw new Error('The current commit is not verified live; no URLs submitted')
if (!['available', 'first-deployment'].includes(baselineStatus)) throw new Error('Previous deployed content baseline unavailable; no speculative submissions')
const urlList = [...changedUrls, ...deletedUrls]
if (!urlList.length) { console.log('No meaningful page changes; no URLs submitted.'); process.exit(0) }
const allowed = new Set(pages.map(page => page.canonical))
for (const url of changedUrls) {
  if (!allowed.has(url)) throw new Error('Changed URL is not canonical')
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) })
  if (!response.ok) throw new Error('An updated page is not live: ' + url)
  const html = await response.text()
  if (!html.includes(`rel="canonical" href="${url}"`) || !html.includes('<main')) throw new Error('SEO verification failed: ' + url)
}
for (const url of deletedUrls) {
  if (new URL(url).origin !== origin) throw new Error('Deleted URL is outside the canonical origin')
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) })
  if (![404, 410].includes(response.status)) throw new Error('Deleted URL does not return 404/410: ' + url)
}
const keyLocation = `${origin}/${key}.txt`
const verification = await fetch(keyLocation, { signal: AbortSignal.timeout(20000) })
if (!verification.ok || (await verification.text()).trim() !== key) throw new Error('IndexNow ownership file verification failed')
if (!process.argv.includes('--submit')) {
  console.log(JSON.stringify({ action: 'verified-only', urls: urlList, revision }, null, 2))
  process.exit(0)
}
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ host: new URL(origin).host, key, keyLocation, urlList }),
  signal: AbortSignal.timeout(30000),
})
console.log(JSON.stringify({ at: new Date().toISOString(), status: response.status, accepted: [200, 202].includes(response.status), urls: urlList, revision, note: 'Submission receipt is not proof of indexing.' }, null, 2))
if (![200, 202].includes(response.status)) process.exitCode = 1
