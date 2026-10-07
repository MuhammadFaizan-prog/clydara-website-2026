import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, useEffect, type ComponentType } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'lenis/dist/lenis.css'
import './styles/globals.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import { appRoutes } from './routes'
import Seo from './seo/Seo'
import Analytics from './seo/ConsentAnalytics'

gsap.registerPlugin(ScrollTrigger)

let globalLenis: Lenis | null = null

// Automatically scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (globalLenis) {
      globalLenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

export function AppContent({ resolvedRoute }: { resolvedRoute?: { path: string, Component: ComponentType } } = {}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.65, // slower, weighted smooth scroll physics matching Framer
      touchMultiplier: 1.2,
    })

    globalLenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
      globalLenis = null
    }
  }, [])
  return (
    <div className="page-wrapper">
      <Seo />
      <ScrollToTop />
      <Navigation />

      <Suspense fallback={<div role="status" style={{ minHeight: '60vh', padding: '120px 24px' }}>Loading page…</div>}>
        <Routes>
          {appRoutes.map(({ path, Component }) => {
            const Page = resolvedRoute?.path === path ? resolvedRoute.Component : Component
            return <Route key={path} path={path} element={<Page />} />
          })}
        </Routes>
      </Suspense>
      <Footer />
      <Analytics />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
