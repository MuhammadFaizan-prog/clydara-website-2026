import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CONSENT_KEY, setAnalyticsConsent, trackPage } from './analytics'
import './Analytics.css'

export default function Analytics() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    try { setOpen(localStorage.getItem(CONSENT_KEY) === null) } catch { setOpen(true) }
    trackPage(pathname)
  }, [pathname])
  const choose = (granted: boolean) => {
    setAnalyticsConsent(granted)
    setOpen(false)
    if (granted) trackPage(pathname)
  }
  return <>
    <button className="analytics-preferences" onClick={() => setOpen(true)}>Cookie preferences</button>
    {open && <aside className="analytics-consent" aria-label="Analytics cookie preferences">
      <p>Allow optional Google Analytics cookies to help us understand website visits? Your enquiry details are never sent to Analytics. <Link to="/privacy-policy">Privacy policy</Link></p>
      <div><button onClick={() => choose(false)}>Decline</button><button onClick={() => choose(true)}>Allow analytics</button></div>
    </aside>}
  </>
}
