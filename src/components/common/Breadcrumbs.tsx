import { Link } from 'react-router-dom'
import { getBreadcrumbs } from '../../seo/site'
import './Breadcrumbs.css'

// Visible trail that mirrors the BreadcrumbList in the page's JSON-LD (same names, same order).
export function Breadcrumbs({ path, className = '' }: { path: string; className?: string }) {
  const items = getBreadcrumbs(path)
  if (items.length < 2) return null
  return (
    <nav className={`seo-breadcrumbs ${className}`.trim()} aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={item.path}>
            {index < items.length - 1
              ? <Link to={item.path}>{item.name}</Link>
              : <span aria-current="page">{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
