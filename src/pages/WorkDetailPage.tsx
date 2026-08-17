import { useParams, Link } from 'react-router-dom'
import Pricing from '../components/Pricing/Pricing'

const worksProjects = [
  {
    id: 'archin',
    title: 'Lehar Resorts',
    year: '2026',
    role: 'Full Stack Development',
    services: ['UI UX Design', 'Product Design', 'Branding', 'Full Stack Development'],
    desc: 'A premium resort website featuring modern design, smooth user experience, and optimized performance.',
    bg: 'https://framerusercontent.com/images/eXgkfupTU9VumIAtGExuQS48AHQ.png?width=855&height=570',
    cover: 'https://framerusercontent.com/images/NKjQpIy0A8AL3f3nojbPFF8DRW8.png?width=1536&height=1024',
  },
  {
    id: 'vntnr',
    title: 'JKM GLOBALS',
    year: '2026',
    role: 'Full Stack Developer',
    services: ['UI UX', 'Branding', 'Redesigning', 'Full Stack Development'],
    desc: "We've partnered with businesses across industries to build innovative digital solutions, scalable software, and powerful online experiences.",
    bg: 'https://framerusercontent.com/images/fsglg0XtrFPuX7STlnIcSf57BgM.png?width=1672&height=941',
    cover: 'https://framerusercontent.com/images/mea2IrOxhEXzllso3Pjfx51rCb8.png?width=1536&height=1024',
  },
  {
    id: 'aeorim',
    title: 'JKM solutions',
    year: '2026',
    role: 'Full stack developer',
    services: ['Branding', 'Revamp', 'Development', 'Designing'],
    desc: 'A modern business website developed for JKM Solutions, delivering a professional digital experience with clean design, intuitive navigation, and a scalable foundation for growth.',
    bg: 'https://framerusercontent.com/images/fsglg0XtrFPuX7STlnIcSf57BgM.png?width=1672&height=941',
    cover: 'https://framerusercontent.com/images/tPmf3Oa94gxsPCkGJGjL9vHW54c.png?width=1536&height=1024',
  },
]

export default function WorkDetailPage() {
  const { id } = useParams()
  const project = worksProjects.find((p) => p.id === id) || worksProjects[0]

  return (
    <main className="work-detail-page" style={{ padding: '130px 0 100px' }}>
      <div className="container" style={{ maxWidth: '1128px', margin: '0 auto', padding: '0 24px' }}>
        <Link
          to="/works"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '32px',
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-secondary)',
          }}
        >
          ← Back to Works
        </Link>

        {/* Title */}
        <div style={{ marginBottom: '40px' }}>
          <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', fontSize: '15px' }}>
            Case Study
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(44px, 8vw, 88px)',
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginTop: '8px',
            }}
          >
            {project.title}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '20px', lineHeight: '32px', color: 'var(--color-text-secondary)', maxWidth: '720px', marginTop: '16px' }}>
            {project.desc}
          </p>
        </div>

        {/* Metadata Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            background: '#ffffff',
            padding: '32px 40px',
            borderRadius: '24px',
            marginBottom: '48px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
          }}
        >
          <div>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>Year</span>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', marginTop: '4px' }}>{project.year}</p>
          </div>
          <div>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>Role</span>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', marginTop: '4px' }}>{project.role}</p>
          </div>
          <div>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>Services</span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
              {project.services.join(', ')}
            </p>
          </div>
        </div>

        {/* Big Showcase Image */}
        <div
          style={{
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.2)',
            marginBottom: '80px',
          }}
        >
          <img src={project.cover} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>

      <Pricing />
    </main>
  )
}
