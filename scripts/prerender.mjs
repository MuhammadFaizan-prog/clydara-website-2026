import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true, watch: null }, appType: 'custom' })
const escape = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;|\u00a0/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
const save = async (path, content) => {
  const target = resolve('dist', path)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, content)
}

function markdown(html, page, origin) {
  let body = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || ''
  body = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '')
    .replace(/<img\b[^>]*>/g, '')
    .replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, (_, href, text) => {
      const label = decode(text.replace(/<[^>]*>/g, '')).trim()
      return label ? `[${label}](${new URL(decode(href), origin).href})` : ''
    })
    .replace(/<h([1-6])\b[^>]*>/g, (_, level) => '\n\n' + '#'.repeat(Number(level)) + ' ')
    .replace(/<\/h[1-6]>/g, '\n\n')
    .replace(/<li\b[^>]*>/g, '\n- ')
    .replace(/<\/(?:p|div|section|article|li)>|<br\s*\/?\s*>/g, '\n\n')
    .replace(/<[^>]*>/g, '')
  body = decode(body).replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').replace(/\n{3,}/g, '\n\n').trim()
  return `# ${page.name}\n\n> ${page.description}\n\nCanonical: ${origin}${page.path}\n\n${body}\n`
}

try {
  const { render } = await server.ssrLoadModule('/src/entry-server.tsx')
  const { routeEntry } = await server.ssrLoadModule('/src/routes.ts')
  const { pages, SITE_ORIGIN, getSchema, serializeSchema } = await server.ssrLoadModule('/src/seo/site.ts')
  const template = (await readFile('dist/index.html', 'utf8')).replace(/<title>[\s\S]*?<\/title>/, '')
  const bundles = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'))
  function routeAssets(path) {
    const tags = new Set()
    const visited = new Set()
    function collect(key) {
      if (visited.has(key)) return
      visited.add(key)
      const bundle = bundles[key]
      if (!bundle) throw new Error(`Missing built route asset: ${key}`)
      tags.add(`<link rel="modulepreload" crossorigin href="/${bundle.file}">`)
      for (const css of bundle.css || []) {
        if (!template.includes(`href="/${css}"`)) tags.add(`<link rel="stylesheet" crossorigin href="/${css}">`)
      }
      for (const dependency of bundle.imports || []) collect(dependency)
    }
    collect(routeEntry(path))
    return [...tags].join('\n')
  }
  const manifest = []
  let previous = []
  let baselineStatus = 'unavailable'
  try {
    const response = await fetch(SITE_ORIGIN + '/seo-manifest.json', { signal: AbortSignal.timeout(10000) })
    if (response.ok) {
      const prior = await response.json()
      if (prior.origin === SITE_ORIGIN && Array.isArray(prior.pages)) {
        previous = prior.pages
        baselineStatus = 'available'
      }
    } else if (response.status === 404) baselineStatus = 'first-deployment'
  } catch {
    console.warn('Previous production manifest unavailable; automatic change notification will require verification.')
  }
  for (const page of pages) {
    const url = SITE_ORIGIN + page.path
    const mdPath = (page.path === '/' ? '/index' : page.path) + '.md'
    const image = page.image || SITE_ORIGIN + '/clydara-seal.png'
    const meta = (key, value, property = false) => `<meta data-seo ${property ? 'property' : 'name'}="${key}" content="${escape(value)}">`
    const head = [
      `<title>${escape(page.title)}</title>`,
      meta('description', page.description), meta('robots', 'index,follow,max-image-preview:large'),
      `<link data-seo rel="canonical" href="${url}">`,
      `<link data-seo rel="describedby" href="${SITE_ORIGIN}/llms.txt" type="text/plain">`,
      `<link data-seo rel="alternate" href="${SITE_ORIGIN}${mdPath}" type="text/markdown">`,
      `<link data-seo rel="alternate" href="${SITE_ORIGIN}/feed.xml" type="application/rss+xml" title="Clydara founder guides">`,
      meta('og:title', page.title, true), meta('og:description', page.description, true),
      meta('og:url', url, true), meta('og:site_name', 'Clydara', true),
      meta('og:type', page.author ? 'article' : 'website', true), meta('og:image', image, true),
      meta('og:image:alt', page.author ? page.name : 'Clydara', true),
      meta('twitter:card', 'summary_large_image'), meta('twitter:title', page.title),
      meta('twitter:description', page.description), meta('twitter:image', image),
      `<script data-seo type="application/ld+json">${serializeSchema(getSchema(page))}</script>`,
    ].join('\n')
    const content = await render(page.path)
    const html = template.replace('</head>', routeAssets(page.path) + '\n' + head + '\n</head>').replace('<div id="root"></div>', `<div id="root">${content}</div>`)
    const file = page.path === '/' ? 'index.html' : page.path.slice(1) + '.html'
    await save(file, html)
    await save(mdPath.slice(1), markdown(content, page, SITE_ORIGIN))
    // Hydration boundary markers are not a meaningful content update for IndexNow.
    const meaningfulContent = content.replace(/<!--\/?\$-->/g, '')
    const contentHash = createHash('sha256').update(meaningfulContent + JSON.stringify(page) + serializeSchema(getSchema(page))).digest('hex')
    manifest.push({ path: page.path, title: page.title, canonical: url, intent: page.intent, htmlBytes: Buffer.byteLength(html), markdown: mdPath, contentHash })
  }
  const notFound = template.replace('</head>', routeAssets('/__not-found__') + '<title>Page Not Found | Clydara</title><meta data-seo name="robots" content="noindex,follow"></head>')
    .replace('<div id="root"></div>', `<div id="root">${await render('/__not-found__')}</div>`)
  await save('404.html', notFound)
  await save('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${SITE_ORIGIN}${page.path}</loc></url>`).join('\n')}\n</urlset>\n`)
  await save('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`)
  await save('feed.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Clydara founder guides</title><link>${SITE_ORIGIN}/blog</link><description>Practical software, SaaS and AI guides for founders.</description><language>en</language><atom:link href="${SITE_ORIGIN}/feed.xml" rel="self" type="application/rss+xml"/>${pages.filter(page => page.author).map(page => `<item><title>${escape(page.name)}</title><link>${SITE_ORIGIN}${page.path}</link><guid isPermaLink="true">${SITE_ORIGIN}${page.path}</guid><description>${escape(page.description)}</description></item>`).join('')}</channel></rss>\n`)
  const sections = [
    ['Company and services', pages.filter(page => ['/', '/services', '/about', '/contact', '/works'].includes(page.path))],
    ['Founder guides', pages.filter(page => page.author)],
    ['Policies', pages.filter(page => ['/privacy-policy', '/terms-and-condition'].includes(page.path))],
  ]
  await save('llms.txt', `# Clydara\n\n> Clydara is a development and design agency providing websites, custom SaaS and business software, AI integration, and branding.\n\nThis file provides navigation to public company information. Contact Clydara for project-specific scope and pricing. Markdown copies mirror the visible pages; canonical HTML links appear in each copy.\n\n${sections.map(([heading, items]) => `## ${heading}\n\n${items.map(page => `- [${page.name}](${SITE_ORIGIN}${page.path === '/' ? '/index' : page.path}.md): ${page.description}`).join('\n')}`).join('\n\n')}\n`)
  const revision = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
  const changedUrls = manifest.filter(page => previous.find(prior => prior.path === page.path)?.contentHash !== page.contentHash).map(page => page.canonical)
  const deletedUrls = previous.filter(page => !manifest.some(current => current.path === page.path)).map(page => page.canonical)
  await save('seo-manifest.json', JSON.stringify({ origin: SITE_ORIGIN, revision, baselineStatus, changedUrls, deletedUrls, pages: manifest }, null, 2) + '\n')
  const indexnow = JSON.parse(await readFile('seo/indexnow.json', 'utf8'))
  await save(indexnow.key + '.txt', indexnow.key)
  console.log(`Prerendered ${pages.length} canonical pages, Markdown copies, sitemap, robots.txt and a 404 page.`)
} finally {
  await server.close()
}
