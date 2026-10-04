import { getPage, SITE_ORIGIN } from './site'

export const MEASUREMENT_ID = 'G-49SWMH6WVL'
export const CONSENT_KEY = 'clydara-analytics-consent'
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
let lastPath = ''

export function hasAnalyticsConsent() {
  try { return localStorage.getItem(CONSENT_KEY) === 'granted' } catch { return false }
}

export function trackPage(path: string) {
  const page = getPage(path)
  if (!page || window.location.origin !== SITE_ORIGIN || !hasAnalyticsConsent() || lastPath === path) return
  const target = window as AnalyticsWindow
  if (!target.gtag) {
    target.dataLayer = target.dataLayer || []
    target.gtag = function (..._args: unknown[]) { target.dataLayer!.push(arguments) }
    target.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })
    target.gtag('js', new Date())
    target.gtag('config', MEASUREMENT_ID, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: SITE_ORIGIN + page.path, page_referrer: safeReferrer() })
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    document.head.appendChild(script)
  }
  lastPath = path
  target.gtag('set', { page_location: SITE_ORIGIN + page.path, page_referrer: safeReferrer() })
  target.gtag('event', 'page_view', { page_title: page.title, page_location: SITE_ORIGIN + page.path, page_referrer: safeReferrer() })
}

function safeReferrer() {
  try { const url = new URL(document.referrer); return url.origin + url.pathname } catch { return '' }
}

export function trackEnquiry() {
  if (window.location.origin !== SITE_ORIGIN || !hasAnalyticsConsent()) return
  ;(window as AnalyticsWindow).gtag?.('event', 'generate_lead', { form_name: 'project_enquiry', page_location: SITE_ORIGIN + '/contact' })
}

export function setAnalyticsConsent(granted: boolean) {
  try { localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied') } catch { /* Storage restrictions keep analytics disabled. */ }
  if (!granted) {
    ;(window as AnalyticsWindow).gtag?.('consent', 'update', { analytics_storage: 'denied' })
    // Reload unloads the tag and prevents further automatic measurement after withdrawal.
    if ((window as AnalyticsWindow).gtag) window.location.reload()
  }
}
