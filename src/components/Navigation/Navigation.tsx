import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo-link" aria-label="Clydara Home">
          <img
            src="https://framerusercontent.com/images/tTw2fkFV8DrTF8W7GkEBu0rGQ.png?width=177&height=116"
            alt="Clydara"
            className="nav-logo-img"
          />
        </Link>

        {/* Center Nav Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          <Link to="/works" className={`nav-link ${location.pathname === '/works' ? 'nav-link-active' : ''}`}>
            Works
          </Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'nav-link-active' : ''}`}>
            Services
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'nav-link-active' : ''}`}>
            About
          </Link>
          <Link to="/blog" className={`nav-link ${location.pathname.startsWith('/blog') ? 'nav-link-active' : ''}`}>
            Blog
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="nav-right">
          <Link to="/contact" className="nav-cta-btn">
            Contact
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <nav className="nav-mobile-links">
          <Link to="/works" className="nav-mobile-link">
            Works
          </Link>
          <Link to="/services" className="nav-mobile-link">
            Services
          </Link>
          <Link to="/about" className="nav-mobile-link">
            About
          </Link>
          <Link to="/blog" className="nav-mobile-link">
            Blog
          </Link>
          <Link to="/contact" className="nav-mobile-cta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
