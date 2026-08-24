import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { RevealChars } from '../components/common/RevealChars'
import { RevealHeading } from '../components/common/RevealHeading'
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
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.blog-headline-row-1 .reveal-item',
        {
          opacity: 0,
          filter: 'blur(8px)',
          y: 18,
          scale: 0.95,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          duration: 0.48,
          stagger: 0.022,
          ease: 'power3.out',
        }
      )
      .fromTo(
        '.blog-headline-row-2 .reveal-item',
        {
          opacity: 0,
          filter: 'blur(8px)',
          y: 18,
          scale: 0.95,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          duration: 0.48,
          stagger: 0.02,
          ease: 'power3.out',
        },
        '-=0.35'
      )
      .from('.blog-hero-sub', { opacity: 0, y: 16, duration: 0.45 }, '-=0.2')
      .from('.blog-hero-cta', { opacity: 0, y: 16, duration: 0.4 }, '-=0.2')
      .from('.blog-post-card', {
        opacity: 0,
        y: 30,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power2.out',
      }, '-=0.15')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="blog-page">
      {/* Blog Hero Card */}
      <section className="blog-hero-card" ref={heroRef}>
        <div className="blog-hero-container">
          <div className="blog-headline-wrap">
            <div className="blog-headline-row blog-headline-row-1">
              <h1 className="blog-h1 blog-dark">
                <RevealChars text="Ideas that" />
              </h1>
              <div className="hero-pill-anim-wrap reveal-item">
                <div className="hero-pill-img hero-pill-1">
                  <img src="https://framerusercontent.com/images/fXkEtDrUaMJaQ5o6xEuGLn1PBA.jpg?width=1024&height=1024" alt="Ideas highlight" />
                </div>
              </div>
              <h1 className="blog-h1 blog-accent">
                <RevealChars text="Shape" />
              </h1>
            </div>
            <div className="blog-headline-row blog-headline-row-2">
              <h1 className="blog-h1 blog-dark">
                <RevealChars text="the" />
              </h1>
              <div className="hero-pill-anim-wrap reveal-item">
                <div className="hero-pill-img hero-pill-2">
                  <img src="https://framerusercontent.com/images/uKMtELWjwXKRRO31gDwrfD0ULZk.jpg?width=1400&height=933" alt="Future highlight" />
                </div>
              </div>
              <h1 className="blog-h1 blog-accent">
                <RevealChars text="Digital Future" />
              </h1>
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
            <RevealHeading as="h2" className="blog-giant-heading" text="Blog Insights" />
          </div>

          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="blog-post-card">
                <div className="blog-post-img-wrap">
                  <img src={post.image} alt={post.title} className="blog-post-img" loading="lazy" />
                </div>

                <div className="blog-post-content">
                  <RevealHeading as="h3" className="blog-post-title" text={post.title} />
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
