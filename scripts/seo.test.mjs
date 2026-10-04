import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const manifest = JSON.parse(await readFile('dist/seo-manifest.json', 'utf8'))
const known = new Set(manifest.pages.map(page => page.path))
const titles = new Set()
const descriptions = new Set()

test('RSS discovers the six existing guides using canonical permanent identifiers', async () => {
  const rss = await readFile('dist/feed.xml', 'utf8')
  assert.equal((rss.match(/<item>/g) || []).length, 6)
  assert.ok(rss.includes('rel="self" type="application/rss+xml"'))
  assert.ok(!rss.includes('<pubDate>'), 'Do not invent publication dates')
  for (const page of manifest.pages.filter(page => page.path.startsWith('/blog/'))) {
    assert.ok(rss.includes(`<guid isPermaLink="true">${page.canonical}</guid>`))
  }
})

for (const page of manifest.pages) {
  test(`${page.path}: initial content, unique metadata, schema, links and Markdown`, async () => {
    const html = await readFile(`dist/${page.path === '/' ? 'index' : page.path.slice(1)}.html`, 'utf8')
    assert.ok(html.includes('<main'), 'Content must be present without JavaScript')
    assert.equal((html.match(/<main\b/g) || []).length, 1, 'Initial HTML must contain the actual page, without a loading fallback')
    assert.ok(!html.includes('Loading page'), 'Do not publish loading placeholders to crawlers')
    assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Each page needs one coherent primary heading')
    const title = html.match(/<title>(.*?)<\/title>/)?.[1]
    const description = html.match(/name="description" content="([^"]*)"/)?.[1]
    assert.ok(title && description)
    assert.ok(!titles.has(title), 'Each canonical page needs a unique title')
    assert.ok(!descriptions.has(description), 'Each canonical page needs a unique description')
    titles.add(title); descriptions.add(description)
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1)
    assert.ok(html.includes(`rel="canonical" href="${page.canonical}"`))
    assert.ok(html.includes('index,follow,max-image-preview:large'))
    const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
    assert.equal(scripts.length, 1)
    const schema = JSON.parse(scripts[0][1])
    assert.equal(schema['@context'], 'https://schema.org')
    const nodes = schema['@graph']
    assert.ok(nodes.some(node => node.url === page.canonical && String(node['@type']).endsWith('Page')))
    const article = nodes.find(node => node['@type'] === 'BlogPosting')
    if (article) {
      assert.ok(html.includes(article.author.name), 'Article author must be visible')
      assert.ok(!article.datePublished, 'Do not invent a publication day')
      assert.ok(/Sources and further reading/.test(html), 'Technical guides must include references')
    }
    for (const [, href] of html.matchAll(/<a[^>]*href="([^"#?]*)[^"]*"/g)) {
      if (href.startsWith('/')) assert.ok(known.has(href.replace(/\/$/, '') || '/'), `Broken internal route: ${href}`)
    }
    assert.ok(html.includes('type="text/markdown"'))
    const markdown = await readFile('dist' + page.markdown, 'utf8')
    assert.ok(markdown.includes(page.canonical))
    assert.ok(markdown.length > 250)
    assert.ok(Buffer.byteLength(html) < 2_000_000)
  })
}

test('sitemap exactly matches canonical pages and crawler policy preserves wildcard access', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8')
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])
  assert.deepEqual(urls.sort(), manifest.pages.map(page => page.canonical).sort())
  assert.equal(new Set(urls).size, urls.length)
  const robots = await readFile('dist/robots.txt', 'utf8')
  assert.ok(robots.includes(`Sitemap: ${manifest.origin}/sitemap.xml`))
  assert.ok(robots.includes('User-agent: *\nAllow: /'))
  assert.ok(!/GPTBot|ClaudeBot|Google-Extended/.test(robots), 'Do not alter training-specific policy')
  const html404 = await readFile('dist/404.html', 'utf8')
  assert.ok(html404.includes('noindex,follow'))
  assert.ok(html404.includes('Page not found'))
})
