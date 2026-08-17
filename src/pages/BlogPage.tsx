import { Link } from 'react-router-dom'
import './BlogPage.css'

export const blogPosts = [
  {
    id: 'custom-software-vs-saas',
    title: 'Custom Software vs SaaS: Which One Is Right for Your Business?',
    excerpt: 'A founder-first framework for the build vs buy software decision',
    readTime: '10 Min Read',
    image: 'https://framerusercontent.com/images/AWhJGkoO1R4OjT86q2SUa6hQtyg.png?width=916&height=1140',
    date: 'Jan 2026',
    author: 'Muhammad Faizan',
  },
  {
    id: 'is-mern-still-worth-it-2026',
    title: 'Is MERN Still Worth It in 2026?',
    excerpt: 'A practical 2026 assessment of the MERN stack for modern products',
    readTime: '11 Min Read',
    image: 'https://framerusercontent.com/images/chp7C8iulZpS7COcG0vizKTBw1k.png?width=916&height=1140',
    date: 'Feb 2026',
    author: 'Rohan Baig',
  },
  {
    id: 'ai-integration-for-startups',
    title: 'AI Integration for Startups: Where Should You Actually Begin?',
    excerpt: 'A practical roadmap for useful, secure, measurable AI adoption',
    readTime: '12 Min Read',
    image: 'https://framerusercontent.com/images/2g1ervfFGOFw7M9o9qPv7ognLs.png?width=916&height=1140',
    date: 'Feb 2026',
    author: 'Muhammad Faizan',
  },
  {
    id: 'agency-vs-in-house-developers',
    title: 'Agency vs In-House Developers: Which One Makes More Sense?',
    excerpt: 'A founder’s decision framework for building the right development team',
    readTime: '10 Min Read',
    image: 'https://framerusercontent.com/images/agh1fOKB68bmz5i7jTuchksYqs.png?width=916&height=1140',
    date: 'Mar 2026',
    author: 'Rohan Baig',
  },
  {
    id: 'saas-development-cost',
    title: 'How Much Does It Cost to Build a SaaS Platform?',
    excerpt: 'A transparent SaaS development cost guide for MVPs and enterprise platforms',
    readTime: '12 Min Read',
    image: 'https://framerusercontent.com/images/xaT5BrnsTobFUhkTLPEae7z2gc4.png?width=916&height=1140',
    date: 'Apr 2026',
    author: 'Muhammad Faizan',
  },
  {
    id: 'startup-website-mistakes',
    title: 'Why Most Startup Websites Never Generate Leads',
    excerpt: 'A technical and conversion-focused guide to fixing startup website mistakes',
    readTime: '11 Min Read',
    image: 'https://framerusercontent.com/images/6q3AkgZ10FtoWjmSoY6KZKf8tn0.png?width=916&height=1140',
    date: 'May 2026',
    author: 'Rohan Baig',
  },
]

export default function BlogPage() {
  return (
    <main className="blog-page">
      {/* Blog Hero Card */}
      <section className="blog-hero-card">
        <div className="blog-hero-container">
          <div className="blog-headline-wrap">
            <div className="blog-headline-row">
              <h1 className="blog-h1 blog-dark">Ideas that</h1>
              <div className="hero-pill-img hero-pill-1">
                <img src="https://framerusercontent.com/images/fXkEtDrUaMJaQ5o6xEuGLn1PBA.jpg?width=1024&height=1024" alt="Ideas highlight" />
              </div>
              <h1 className="blog-h1 blog-accent">Shape</h1>
            </div>
            <div className="blog-headline-row">
              <h1 className="blog-h1 blog-dark">the</h1>
              <div className="hero-pill-img hero-pill-2">
                <img src="https://framerusercontent.com/images/uKMtELWjwXKRRO31gDwrfD0ULZk.jpg?width=1400&height=933" alt="Future highlight" />
              </div>
              <h1 className="blog-h1 blog-accent">Digital Future</h1>
            </div>
          </div>

          <p className="blog-hero-sub">
            Stay ahead with expert insights on web development, AI, SaaS, branding, SEO, and digital innovation. Explore practical guides, industry trends, and strategies to help your business grow smarter.
          </p>

          <Link to="/contact" className="blog-hero-cta">
            Contact to get Featured&nbsp;&nbsp;→
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="blog-grid-container">
          <div className="blog-grid-header">
            <p className="blog-eyebrow">(Articles)</p>
            <h2 className="blog-giant-heading">Blog Insights</h2>
          </div>

          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="blog-post-card">
                <div className="blog-post-img-wrap">
                  <img src={post.image} alt={post.title} className="blog-post-img" loading="lazy" />
                </div>

                <div className="blog-post-content">
                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <div className="blog-post-badge-row">
                    <span className="blog-post-read-badge">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
