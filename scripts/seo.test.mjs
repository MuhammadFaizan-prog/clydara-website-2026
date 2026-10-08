import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'

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

test('the performance example preserves all three measured runs and supported update dates', async () => {
  const data = JSON.parse(await readFile('seo/evidence/psi-high-priority.json', 'utf8'))
  const html = await readFile('dist/blog/startup-website-mistakes.html', 'utf8')
  const markdown = await readFile('dist/blog/startup-website-mistakes.md', 'utf8')
  assert.ok(html.includes('<table'), 'Comparable measurements should be published as a readable table')
  for (const capture of [data.before, data.after, data.afterFonts]) {
    assert.ok(html.includes(capture.report), 'Readers must be able to inspect every capture, including mixed results')
    for (const value of [capture.mobile.performance, capture.mobile.lcpMs / 1000, capture.desktop.performance, capture.desktop.tbtMs]) {
      assert.ok(html.includes(String(value)), `Published example must preserve the recorded measurement ${value}`)
    }
  }
  for (const page of manifest.pages.filter(page => page.path.startsWith('/blog/'))) {
    const articleHtml = await readFile(`dist/${page.path.slice(1)}.html`, 'utf8')
    assert.ok(!articleHtml.includes('18th March 2025'), 'Unverified template publication-date labels must not be presented as facts')
  }
  const schema = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1])
  const article = schema['@graph'].find(node => node['@type'] === 'BlogPosting')
  assert.equal(article.dateModified, '2026-10-08')
  assert.ok(/datetime="2026-10-08"/i.test(html), 'Visible update date must agree with the graph')
  assert.ok(markdown.includes('| Mobile LCP | 3.637 s | 3.687 s | 3.492 s |'), 'The agent-readable version must retain metric-to-column relationships')
  assert.ok((await readFile('dist/sitemap.xml', 'utf8')).includes('<loc>https://www.clydralab.com/blog/startup-website-mistakes</loc><lastmod>2026-10-08</lastmod>'))
})

test('link-following crawlers can discover every canonical page from a public site map', async () => {
  assert.ok(known.has('/sitemap'), 'A public navigation page must exist')
  const html = await readFile('dist/sitemap.html', 'utf8')
  const links = new Set([...html.matchAll(/<a[^>]*href="([^"#?]+)"/g)].map(match => match[1]))
  for (const page of manifest.pages.filter(page => page.path !== '/sitemap')) {
    assert.ok(links.has(page.path), `Missing public navigation link: ${page.path}`)
  }
  const home = await readFile('dist/index.html', 'utf8')
  assert.ok(/<footer[\s\S]*href="\/sitemap"/.test(home), 'Site map must be reachable through ordinary HTML navigation')
})

test('agency contact identity is coherent in visible content and structured data', async () => {
  const about = await readFile('dist/about.html', 'utf8')
  const contact = await readFile('dist/contact.html', 'utf8')
  for (const html of [about, contact]) assert.ok(html.includes('clydara1@gmail.com'))
  assert.ok(about.includes('www.clydralab.com'), 'About must identify the official agency domain')
  for (const page of manifest.pages) {
    const html = await readFile(`dist/${page.path === '/' ? 'index' : page.path.slice(1)}.html`, 'utf8')
    const graph = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1])['@graph']
    const organization = graph.find(node => node['@type'] === 'Organization')
    assert.equal(organization.url, manifest.origin + '/')
    assert.equal(organization.email, 'clydara1@gmail.com')
    assert.equal(organization.contactPoint.email, organization.email)
    assert.equal(organization.contactPoint.url, manifest.origin + '/contact')
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

test('direct page loads include built route assets without every page bundle', async () => {
  const bundles = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'))
  const pageFiles = new Set(Object.values(bundles).filter(bundle => bundle.src?.startsWith('src/pages/')).map(bundle => '/' + bundle.file))
  for (const page of [...manifest.pages, { path: '/404' }]) {
    const html = await readFile(`dist/${page.path === '/' ? 'index' : page.path.slice(1)}.html`, 'utf8')
    const refs = new Set([...html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="(\/assets\/[^"?]+\.(?:js|css))"/g)].map(match => match[1]))
    assert.ok([...refs].some(ref => ref.endsWith('.css')), 'Direct HTML must load styles before hydration')
    const referencedPages = [...refs].filter(ref => pageFiles.has(ref))
    assert.ok(referencedPages.length >= 1 && referencedPages.length < pageFiles.size, `${page.path} must exclude inactive page bundles while allowing shared dependencies`)
    for (const ref of refs) assert.ok((await stat('dist' + ref)).size > 0, `Missing direct-load asset: ${ref}`)
    assert.ok(!html.includes('<!--$?-->'), 'Static pages cannot require a streaming script to reveal their content')
  }
  const contactHtml = await readFile('dist/contact.html', 'utf8')
  assert.ok(!contactHtml.includes(bundles['src/pages/BlogDetailPage.tsx'].file), 'Enquiries must not load the large guide-detail bundle')
})
