import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-card">
          {/* Carbon metallic background texture */}
          <div
            className="footer-card-bg"
            style={{
              backgroundImage: `url('https://framerusercontent.com/images/kPlYyuZ289mcZcMBiIfdaNJ3wdM.png?width=1672&height=941')`,
            }}
          />
          <div className="footer-card-overlay" />

          <div className="footer-card-inner">
            {/* Giant Full-Width Clydara Signature Wordmark (White CLY + Cyan DARA) */}
            <div className="footer-wordmark-container">
              <Link to="/" className="footer-wordmark-link" aria-label="Clydara">
                <svg
                  viewBox="0 0 187.02 21.74"
                  className="footer-wordmark-vector"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                >
                  <g id="Layer_x0020_1">
                    {/* D */}
                    <path
                      fill="#00AEEF"
                      d="M96.77 0l-17.57 0 1.24 5.09 16.34 0c0.2,0 0.39,0.03 0.58,0.11 0.19,0.09 0.36,0.2 0.52,0.35 0.15,0.15 0.26,0.32 0.34,0.52 0.09,0.2 0.12,0.41 0.12,0.63l0 8.34c0,0.22 -0.04,0.43 -0.12,0.63 -0.08,0.19 -0.19,0.37 -0.34,0.52 -0.15,0.15 -0.32,0.26 -0.52,0.35 -0.19,0.08 -0.39,0.12 -0.6,0.12l-19.9 0 1.24 5.09 18.67 0c0.9,0 1.77,-0.17 2.6,-0.53 0.8,-0.34 1.51,-0.82 2.12,-1.44 0.6,-0.61 1.07,-1.32 1.4,-2.11 0.36,-0.83 0.53,-1.72 0.53,-2.62l0 -8.34c0,-0.91 -0.17,-1.79 -0.53,-2.62 -0.34,-0.79 -0.81,-1.5 -1.4,-2.11 -0.6,-0.61 -1.31,-1.09 -2.1,-1.44 -0.82,-0.36 -1.69,-0.53 -2.59,-0.53z"
                    />
                    {/* A */}
                    <polygon
                      fill="#00AEEF"
                      points="117.86,6.73 109.63,21.74 103.84,21.74 115.79,0 119.95,0 131.9,21.74 126.11,21.74"
                    />
                    {/* Y */}
                    <polygon
                      fill="#FEFEFE"
                      points="62.89,9.93 70.84,0 77.48,0 65.43,14.87 65.43,21.74 60.36,21.74 60.36,14.9 48.32,0 54.95,0"
                    />
                    {/* L */}
                    <polygon
                      fill="#FEFEFE"
                      points="34.56,16.65 56.07,16.65 54.83,21.74 29.52,21.74 29.52,0 34.56,0"
                    />
                    {/* C */}
                    <path
                      fill="#FEFEFE"
                      d="M6.62 0l17.57 0 -1.24 5.09 -16.34 0c-0.2,0 -0.39,0.03 -0.58,0.11 -0.19,0.09 -0.36,0.2 -0.52,0.35 -0.15,0.15 -0.26,0.32 -0.34,0.52 -0.09,0.2 -0.12,0.41 -0.12,0.63l0 8.34c0,0.22 0.04,0.43 0.12,0.63 0.08,0.19 0.19,0.37 0.34,0.52 0.15,0.15 0.32,0.26 0.52,0.35 0.19,0.08 0.39,0.12 0.6,0.12l19.9 0 -1.24 5.09 -18.67 0c-0.9,0 -1.77,-0.17 -2.6,-0.53 -0.8,-0.34 -1.51,-0.82 -2.12,-1.44 -0.6,-0.61 -1.07,-1.32 -1.4,-2.11 -0.36,-0.83 -0.53,-1.72 -0.53,-2.62l0 -8.34c0,-0.91 0.17,-1.79 0.53,-2.62 0.34,-0.79 0.81,-1.5 1.4,-2.11 0.6,-0.61 1.31,-1.09 2.1,-1.44 0.82,-0.36 1.69,-0.53 2.59,-0.53z"
                    />
                    {/* R + A */}
                    <path
                      fill="#00AEEF"
                      d="M159.88 20.06l11.02 -20.06 4.17 0 11.95 21.74 -5.79 0 -8.25 -15.01 -8.23 15.01 -11.07 0 -8.18 -5.96 -7.2 0 0 5.96 -5.07 0 0 -11.02 18.38 0c0.36,0 0.7,-0.07 1.03,-0.21 0.34,-0.15 0.65,-0.36 0.91,-0.62 0.26,-0.26 0.45,-0.56 0.59,-0.9 0.15,-0.35 0.22,-0.71 0.22,-1.09 0,-0.37 -0.06,-0.73 -0.21,-1.08 -0.15,-0.34 -0.35,-0.65 -0.61,-0.91 -0.25,-0.26 -0.54,-0.46 -0.88,-0.6 -0.34,-0.15 -0.68,-0.21 -1.05,-0.21l-18.38 0 0 -5.09 18.38 0c1.06,0 2.08,0.2 3.05,0.62 0.94,0.4 1.78,0.98 2.5,1.71 0.7,0.72 1.25,1.56 1.65,2.49 0.42,0.98 0.62,2.01 0.62,3.08 0,1.06 -0.2,2.1 -0.62,3.08 -0.4,0.93 -0.95,1.76 -1.65,2.49 -0.71,0.74 -1.55,1.31 -2.5,1.71 -0.33,0.14 -0.66,0.26 -1,0.35l6.22 4.55z"
                    />
                  </g>
                </svg>
              </Link>
            </div>

            {/* Links Grid */}
            <div className="footer-links-grid">
              <div className="footer-links-col">
                <span className="footer-col-title">Navigation</span>
                <ul className="footer-col-list">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/works">Works</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                </ul>
              </div>

              <div className="footer-links-col">
                <span className="footer-col-title">Social</span>
                <ul className="footer-col-list">
                  <li><a href="https://x.com/" target="_blank" rel="noreferrer">Twitter(X)</a></li>
                  <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                  <li><a href="https://dribbble.com/" target="_blank" rel="noreferrer">Dribble</a></li>
                </ul>
              </div>

              <div className="footer-links-col">
                <span className="footer-col-title">Legals</span>
                <ul className="footer-col-list">
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms-and-condition">Term of Service</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="footer-bottom-row">
              <p className="footer-copyright">
                © {new Date().getFullYear()} Clydara. All rights reserved.
              </p>

              <button onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top">
                <span>Back to top</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 11V1M6 1L1 6M6 1L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
