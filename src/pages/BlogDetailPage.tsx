import { useParams, Link } from 'react-router-dom'
import { blogPosts } from './BlogPage'
import './BlogPage.css'

export default function BlogDetailPage() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === id) || blogPosts[0]

  return (
    <main className="blog-detail-page" style={{ padding: '130px 0 100px' }}>
      <div className="container" style={{ maxWidth: '840px', margin: '0 auto', padding: '0 24px' }}>
        <Link
          to="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '32px',
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-secondary)',
          }}
        >
          ← Back to Blog
        </Link>

        <div style={{ marginBottom: '24px' }}>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: '50px',
              background: '#ffffff',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 500,
            }}
          >
            {post.readTime}
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 6vw, 56px)',
            lineHeight: 1.15,
            letterSpacing: '-1.5px',
            marginBottom: '20px',
          }}
        >
          {post.title}
        </h1>

        <div
          style={{
            display: 'flex',
            gap: '12px',
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-secondary)',
            marginBottom: '40px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <span>Written by {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>

        <div
          style={{
            borderRadius: '28px',
            overflow: 'hidden',
            marginBottom: '48px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
          }}
        >
          <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>

        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            lineHeight: '32px',
            color: 'var(--color-text-primary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <p style={{ fontSize: '22px', lineHeight: '36px', fontWeight: 500 }}>
            {post.excerpt}
          </p>

          <p>
            Building high-impact digital products requires alignment between engineering rigor, design thinking, and business goals. At Clydara, we help founders and leadership teams navigate complex technical architectures with confidence.
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', marginTop: '20px' }}>
            Key Strategic Considerations
          </h2>

          <p>
            When scaling digital operations, deciding between off-the-shelf software and custom-engineered solutions comes down to competitive advantage. If a workflow defines your core value proposition, owning the custom codebase and data pipeline provides immense long-term returns.
          </p>

          <p>
            Our team specializes in full-stack architecture, AI automation, and high-performance user interfaces that turn complex challenges into seamless digital assets.
          </p>
        </div>
      </div>
    </main>
  )
}
