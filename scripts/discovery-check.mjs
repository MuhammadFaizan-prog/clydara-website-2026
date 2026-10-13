import { writeFile, mkdir } from 'node:fs/promises'
const origin = 'https://www.clydralab.com'
const agents = ['Googlebot', 'bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Applebot', 'DuckDuckBot', 'DuckAssistBot', 'Qwantbot', 'MojeekBot', 'SeznamBot', 'Yeti']
const resources = ['/', '/services', '/contact', '/robots.txt', '/sitemap.xml', '/llms.txt', '/services.md', '/feed.xml']
const results = []
for (const agent of agents) {
  const checks = await Promise.all(resources.map(async path => {
    try {
      const response = await fetch(origin + path, { headers: { 'user-agent': agent }, signal: AbortSignal.timeout(15000) })
      const body = await response.text()
      const html = !path.includes('.')
      const canonical = body.match(/rel="canonical" href="([^"]+)"/)?.[1]
      const main = (body.match(/<main\b/g) || []).length
      const robots = response.headers.get('x-robots-tag') || ''
      const blocked = /noindex|none/i.test(robots) || (html && /name="robots" content="[^"]*(?:noindex|none)/i.test(body))
      const contentOk = html ? main === 1 && canonical === origin + path
        : path === '/robots.txt' ? body.includes('User-agent: *\nAllow: /') && body.includes(origin + '/sitemap.xml')
        : path === '/sitemap.xml' ? body.includes('<urlset') && (body.match(/<loc>/g) || []).length === 17
        : path === '/feed.xml' ? body.includes('<rss version="2.0"') && (body.match(/<item>/g) || []).length === 6
        : path === '/llms.txt' ? body.startsWith('# Clydara')
        : body.includes('Canonical: ' + origin + '/services')
      return { path, status: response.status, type: response.headers.get('content-type'), bytes: Buffer.byteLength(body), canonical, main: html ? main : undefined, xRobotsTag: robots, pass: response.status === 200 && !blocked && contentOk }
    } catch (error) { return { path, pass: false, error: error.message } }
  }))
  results.push({ agent, checks })
}
const output = { at: new Date().toISOString(), origin, method: 'HTTP User-Agent simulation from an ordinary client IP. This does not prove access from verified provider IPs, actual crawler visits, indexing or citations.', results }
await mkdir('seo/evidence', { recursive: true })
await writeFile('seo/evidence/discovery-http.json', JSON.stringify(output, null, 2) + '\n')
console.log(JSON.stringify({ at: output.at, checks: results.flatMap(r => r.checks).length, failures: results.flatMap(r => r.checks.filter(c => !c.pass).map(c => ({ agent: r.agent, ...c }))) }, null, 2))
if (results.some(r => r.checks.some(c => !c.pass))) process.exitCode = 1
