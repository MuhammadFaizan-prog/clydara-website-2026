import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPage, getSchema, serializeSchema, SITE_ORIGIN } from './site'

export default function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const page = getPage(pathname)
    const title = page?.title || 'Page Not Found | Clydara'
    document.title = title
    document.head.querySelectorAll('[data-seo]').forEach(node => node.remove())
    const meta = (key: string, content: string, property = false) => {
      const element = document.createElement('meta')
      element.setAttribute(property ? 'property' : 'name', key)
      element.content = content
      element.dataset.seo = ''
      document.head.appendChild(element)
    }
    meta('robots', page ? 'index,follow,max-image-preview:large' : 'noindex,follow')
    if (!page) return
    meta('description', page.description)
    meta('og:title', title, true)
    meta('og:description', page.description, true)
    meta('og:url', SITE_ORIGIN + page.path, true)
    meta('og:type', page.author ? 'article' : 'website', true)
    meta('og:site_name', 'Clydara', true)
    meta('og:image', page.image || SITE_ORIGIN + '/clydara-seal.png', true)
    meta('og:image:alt', page.author ? page.name : 'Clydara', true)
    meta('twitter:card', 'summary_large_image')
    meta('twitter:title', title)
    meta('twitter:description', page.description)
    meta('twitter:image', page.image || SITE_ORIGIN + '/clydara-seal.png')
    for (const [rel, href, type] of [
      ['canonical', SITE_ORIGIN + page.path, ''],
      ['describedby', SITE_ORIGIN + '/llms.txt', 'text/plain'],
      ['alternate', SITE_ORIGIN + (page.path === '/' ? '/index' : page.path) + '.md', 'text/markdown'],
    ]) {
      const link = document.createElement('link')
      link.rel = rel
      link.href = href
      if (type) link.type = type
      link.dataset.seo = ''
      document.head.appendChild(link)
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seo = ''
    script.textContent = serializeSchema(getSchema(page))
    document.head.appendChild(script)
  }, [pathname])
  return null
}
