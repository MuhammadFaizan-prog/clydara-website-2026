import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '150px 24px 100px' }}>
      <h1>Page not found</h1>
      <p>The page you requested is unavailable. Explore our services or return to the homepage.</p>
      <p><Link to="/">Return to Clydara</Link> · <Link to="/services">Explore services</Link> · <Link to="/contact">Contact us</Link></p>
    </main>
  )
}
