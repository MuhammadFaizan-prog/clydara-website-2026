import { Link } from 'react-router-dom'
import { pages } from '../seo/site'
import './SiteMapPage.css'

const groups = [
  { name: 'Company and services', match: (path: string) => ['/', '/services', '/about', '/contact', '/works', '/blog'].includes(path) },
  { name: 'Selected projects', match: (path: string) => path.startsWith('/works/') },
  { name: 'Software, SaaS and AI guides', match: (path: string) => path.startsWith('/blog/') },
  { name: 'Policies', match: (path: string) => ['/privacy-policy', '/terms-and-condition'].includes(path) },
]

export default function SiteMapPage() {
  return (
    <main className="site-map-page">
      <h1>Clydara site map</h1>
      <p>Find our services, team, selected projects and practical software guides. For a project discussion, <Link to="/contact">contact Clydara</Link>.</p>
      <div className="site-map-groups">
        {groups.map(group => (
          <section key={group.name}>
            <h2>{group.name}</h2>
            <ul>
              {pages.filter(page => group.match(page.path)).map(page => (
                <li key={page.path}><Link to={page.path}>{page.path === '/' ? 'Clydara home' : page.name}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
