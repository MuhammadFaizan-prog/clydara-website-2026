import './LogoTicker.css'

const techLogos = [
  { name: 'JavaScript', icon: 'https://framerusercontent.com/images/IlhOQiFdnNhnnE9d4JHoPWvvQfY.svg?width=24&height=24' },
  { name: 'MongoDB', icon: 'https://framerusercontent.com/images/7tIcMHfDfyHlLdwRYvvhZIIHBI.svg?width=24&height=24' },
  { name: 'Next.js', icon: 'https://framerusercontent.com/images/xRePzAlsClqyClBmp5JEHPDKQoY.svg?width=24&height=24' },
  { name: 'WordPress', icon: 'https://framerusercontent.com/images/7DarRccYGVQx76OY3ZcoIHJ890.svg?width=512&height=104' },
  { name: 'GitHub', icon: 'https://framerusercontent.com/images/CwGormojvzTKkpssYgMLZUTOHs.svg?width=24&height=24' },
  { name: 'OpenAI', icon: 'https://framerusercontent.com/images/s0DOdCGE3A1TL0kSjfradL8m28.png?width=512&height=512' },
  { name: 'React', icon: 'https://framerusercontent.com/images/3zBv79y1aenuHUKSgCZxdTmB9A.png?width=512&height=512' },
  { name: 'Node.js', icon: 'https://framerusercontent.com/images/X4SdovIFYo7WQkamD9wwOEADx0.png?width=512&height=512' },
  { name: 'CSS3', icon: 'https://framerusercontent.com/images/B48VbTdgCXT0Kt0a7JxAmJaM6Q.png?width=512&height=512' },
]

const blueRibbonItems = [
  'SaaS Dashboards',
  'MERN Stack Development',
  'AI Integration',
  'SaaS Dashboards',
  'MERN Stack Development',
  'AI Integration',
  'SaaS Dashboards',
  'MERN Stack Development',
  'AI Integration',
]

const darkRibbonItems = [
  'Graphic Design',
  'Mobile App Development',
  'CRM - ERP Solutions',
  'Graphic Design',
  'Mobile App Development',
  'CRM - ERP Solutions',
  'Graphic Design',
  'Mobile App Development',
  'CRM - ERP Solutions',
]

const flowerIcon = 'https://framerusercontent.com/images/InxDM6L8xjRn2ZsMquQwkLQ0VLA.svg?width=19&height=19'

export default function LogoTicker() {
  return (
    <div className="logo-ticker-wrapper">
      {/* Upper Card containing the infinite scrolling Tech Logos with rounded bottom border */}
      <section className="tech-logos-card">
        <div className="tech-logos-marquee-wrapper">
          <div className="tech-logos-track">
            {[...techLogos, ...techLogos, ...techLogos, ...techLogos].map((tech, i) => (
              <div key={i} className="tech-logo-item">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="tech-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overlapping Angled Ribbons (Tapes) */}
      <section className="angled-tapes-section">
        {/* Dark Ribbon: angled down (back) */}
        <div className="tape tape-dark">
          <div className="tape-track tape-track-right">
            {[...darkRibbonItems, ...darkRibbonItems, ...darkRibbonItems].map((item, i) => (
              <span key={i} className="tape-item">
                <span className="tape-cross">✕</span>
                <span className="tape-text">{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Blue Ribbon: angled up (front) */}
        <div className="tape tape-blue">
          <div className="tape-track tape-track-left">
            {[...blueRibbonItems, ...blueRibbonItems, ...blueRibbonItems].map((item, i) => (
              <span key={i} className="tape-item">
                <img src={flowerIcon} alt="✦" className="tape-flower-icon" width={16} height={16} />
                <span className="tape-text">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
