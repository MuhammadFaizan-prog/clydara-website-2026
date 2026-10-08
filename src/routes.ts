import { lazy, type ComponentType } from 'react'
import { matchRoutes } from 'react-router-dom'

// Share route-to-bundle mapping with prerendering so each HTML page loads its own CSS.
function page(load: () => Promise<{ default: ComponentType }>) {
  return { load, Component: lazy(load) }
}

export const appRoutes = [
  { path: '/', entry: 'src/pages/HomePage.tsx', ...page(() => import('./pages/HomePage')) },
  { path: '/works', entry: 'src/pages/WorksPage.tsx', ...page(() => import('./pages/WorksPage')) },
  { path: '/works/:id', entry: 'src/pages/WorkDetailPage.tsx', ...page(() => import('./pages/WorkDetailPage')) },
  { path: '/services', entry: 'src/pages/ServicesPage.tsx', ...page(() => import('./pages/ServicesPage')) },
  { path: '/about', entry: 'src/pages/AboutPage.tsx', ...page(() => import('./pages/AboutPage')) },
  { path: '/blog', entry: 'src/pages/BlogPage.tsx', ...page(() => import('./pages/BlogPage')) },
  { path: '/sitemap', entry: 'src/pages/SiteMapPage.tsx', ...page(() => import('./pages/SiteMapPage')) },
  { path: '/blog/:id', entry: 'src/pages/BlogDetailPage.tsx', ...page(() => import('./pages/BlogDetailPage')) },
  { path: '/contact', entry: 'src/pages/ContactPage.tsx', ...page(() => import('./pages/ContactPage')) },
  { path: '/privacy-policy', entry: 'src/pages/PrivacyPolicyPage.tsx', ...page(() => import('./pages/PrivacyPolicyPage')) },
  { path: '/terms-and-condition', entry: 'src/pages/TermsPage.tsx', ...page(() => import('./pages/TermsPage')) },
  { path: '*', entry: 'src/pages/NotFoundPage.tsx', ...page(() => import('./pages/NotFoundPage')) },
]

export function matchPage(path: string) {
  return matchRoutes(appRoutes, path)?.at(-1)?.route
}

export function routeEntry(path: string) {
  return matchPage(path)?.entry
}
