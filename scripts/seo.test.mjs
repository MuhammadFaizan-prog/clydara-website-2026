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

test('sitemap lists every canonical page once and the discovery monitor derives its expectations', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8')
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
  assert.equal(locs.length, manifest.pages.length)
  assert.equal(new Set(locs).size, locs.length)
  for (const page of manifest.pages) assert.ok(locs.includes(page.canonical), page.canonical)
  for (const [, date] of sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) assert.match(date, /^\d{4}-\d{2}-\d{2}$/)
  const monitor = await readFile('scripts/discovery-check.mjs', 'utf8')
  assert.ok(!/length === 1[0-9]\b/.test(monitor), 'Discovery monitor must not hard-code the page count')
})

test('SaaS cost guide publishes only sourced third-party figures, each with a visible reference', async () => {
  const html = await readFile('dist/blog/saas-development-cost.html', 'utf8')
  assert.ok(html.includes('not Clydara quotes'), 'Third-party ranges must be labelled as such')
  for (const url of ['https://projectcostestimator.com/blog/saas-development-cost-2026', 'https://ssntpl.com/saas-mvp-cost-in-2026/', 'https://www.gilzor.com/insights/saas-development-cost', 'https://saasdevelopment.us/services/saas-mvp-development', 'https://stripe.com/billing/pricing', 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm']) {
    assert.ok(html.includes(`href="${url}"`), `Missing visible source: ${url}`)
  }
  assert.ok(/datetime="2026-10-13"/i.test(html))
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
    assert.deepEqual(organization.sameAs, ['https://dev.to/clydaralab', 'https://www.behance.net/clydaralab', 'https://dribbble.com/clydara'])
  }
})

test('public pages stay brand-only: no personal names, personal profiles, LinkedIn links or personal bylines', async () => {
  const banned = /linkedin\.com|Muhammad Faizan|Rohan Baig|Mr\. ?Faizan|founder-image|portfolio-zxs1|rohan-baig-dev/i
  for (const page of manifest.pages) {
    const base = page.path === '/' ? 'index' : page.path.slice(1)
    for (const file of [`dist/${base}.html`, `dist/${base}.md`]) {
      const text = await readFile(file, 'utf8')
      assert.ok(!banned.test(text), `${file} must not expose personal names or LinkedIn: ${text.match(banned)?.[0]}`)
    }
  }
  for (const file of ['dist/llms.txt', 'dist/feed.xml']) assert.ok(!banned.test(await readFile(file, 'utf8')), file)
})

test('Organization entity carries only verified company facts and articles are attributed to it', async () => {
  const html = await readFile('dist/about.html', 'utf8')
  const graph = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1])['@graph']
  const organization = graph.find(node => node['@type'] === 'Organization')
  assert.equal(organization.foundingDate, '2025')
  assert.deepEqual(organization.numberOfEmployees, { '@type': 'QuantitativeValue', minValue: 5, maxValue: 10 })
  assert.equal(organization.address.addressLocality, 'Lahore')
  assert.equal(organization.address.addressCountry, 'PK')
  assert.ok(!organization.address.streetAddress, 'Do not publish an unverified street address')
  for (const fact of ['2025', 'Lahore, Pakistan', '5 to 10']) assert.ok(html.includes(fact), `Visible About content must state: ${fact}`)
  for (const page of manifest.pages.filter(page => page.path.startsWith('/blog/'))) {
    const article = await readFile(`dist/${page.path.slice(1)}.html`, 'utf8')
    const nodes = JSON.parse(article.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1])['@graph']
    assert.deepEqual(nodes.find(node => node['@type'] === 'BlogPosting').author, { '@id': manifest.origin + '/#organization' })
  }
  const llms = await readFile('dist/llms.txt', 'utf8')
  assert.ok(llms.includes('founded in 2025') && llms.includes('Lahore, Pakistan'))
})

test('headings keep word boundaries between animated rows for text extraction', async () => {
  const contact = await readFile('dist/contact.md', 'utf8')
  assert.ok(!/BuiltSomething|BuildSomething/.test(contact), 'Animated heading rows must not run together')
  assert.ok(/Let's Build/.test(contact), 'Contact headline typo must stay fixed')
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
      assert.equal(article.author['@id'], manifest.origin + '/#organization', 'Guides are attributed to the Clydara organization, not a person')
      assert.ok(/class="seo-article-byline"[^>]*>[^<]*<a[^>]*href="\/about"[^>]*>Clydara<\/a>/.test(html), 'The visible attribution must name Clydara')
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

test('direct page loads style every class they render (no styles that only arrive after client navigation)', async () => {
  const { readdir } = await import('node:fs/promises')
  const cssFiles = (await readdir('dist/assets')).filter(file => file.endsWith('.css'))
  const classesIn = {}
  for (const file of cssFiles) {
    const css = (await readFile(`dist/assets/${file}`, 'utf8')).replace(/url\([^)]*\)/g, '')
    classesIn[file] = new Set([...css.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)].map(match => match[1]))
  }
  const styledSomewhere = new Set(Object.values(classesIn).flatMap(set => [...set]))
  // Pure animation-delay helpers shared by hero pills are harmless if absent.
  const allowed = new Set(['hero-pill-1', 'hero-pill-2', 'hero-pill-3'])
  for (const page of manifest.pages) {
    const html = await readFile(`dist/${page.path === '/' ? 'index' : page.path.slice(1)}.html`, 'utf8')
    const linked = [...html.matchAll(/href="\/assets\/([^"]+\.css)"/g)].map(match => match[1])
    const available = new Set(linked.flatMap(file => [...(classesIn[file] || [])]))
    const body = html.split('<div id="root">')[1] || ''
    const used = new Set([...body.matchAll(/class="([^"]+)"/g)].flatMap(match => match[1].split(/\s+/)))
    const missing = [...used].filter(name => styledSomewhere.has(name) && !available.has(name) && !allowed.has(name))
    assert.deepEqual(missing, [], `${page.path} renders classes whose styles are not loaded on a direct visit`)
  }
})
