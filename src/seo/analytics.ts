import { getPage, SITE_ORIGIN } from './site'

export const MEASUREMENT_ID = 'G-49SWMH6WVL'
export const CONSENT_KEY = 'clydara-analytics-consent'
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
let lastPath = ''

// Preserve useful campaign labels without forwarding arbitrary form/query data.
export function safePageLocation(path: string, search = window.location.search || '') {
  const url = new URL(SITE_ORIGIN + path)
  const params = new URLSearchParams(search)
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
    const value = params.get(key)
    if (value && value.length <= 100 && /^[a-zA-Z0-9_.~ -]+$/.test(value)) url.searchParams.set(key, value)
  }
  return url.href
}

export function referralPlatform(referrer: string) {
  let host = ''
  try { host = new URL(referrer).hostname.toLowerCase() } catch { return 'unknown' }
  const sources: [string, string[]][] = [
    ['chatgpt', ['chatgpt.com', 'chat.openai.com']], ['perplexity', ['perplexity.ai']],
    ['claude', ['claude.ai']], ['bing', ['bing.com']], ['google', ['google.com']],
    ['duckduckgo', ['duckduckgo.com']], ['brave', ['search.brave.com']],
    ['yandex', ['yandex.com', 'yandex.ru']], ['qwant', ['qwant.com']], ['ecosia', ['ecosia.org']],
    ['naver', ['naver.com']], ['seznam', ['seznam.cz']], ['kagi', ['kagi.com']], ['mojeek', ['mojeek.com']],
    ['yahoo', ['yahoo.com']], ['you', ['you.com']], ['mistral', ['chat.mistral.ai']], ['grok', ['grok.com']],
  ]
  return sources.find(([, domains]) => domains.some(domain => host === domain || host.endsWith('.' + domain)))?.[0] || 'other'
}

export function hasAnalyticsConsent() {
  try { return localStorage.getItem(CONSENT_KEY) === 'granted' } catch { return false }
}

export function trackPage(path: string) {
  const page = getPage(path)
  if (!page || window.location.origin !== SITE_ORIGIN || !hasAnalyticsConsent() || lastPath === path) return
  const target = window as AnalyticsWindow
  const location = safePageLocation(page.path)
  if (!target.gtag) {
    target.dataLayer = target.dataLayer || []
    target.gtag = function (..._args: unknown[]) { target.dataLayer!.push(arguments) }
    target.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })
    target.gtag('js', new Date())
    target.gtag('config', MEASUREMENT_ID, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: location, page_referrer: safeReferrer() })
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    document.head.appendChild(script)
  }
  lastPath = path
  target.gtag('set', { page_location: location, page_referrer: safeReferrer() })
  target.gtag('event', 'page_view', { page_title: page.title, page_location: location, page_referrer: safeReferrer(), discovery_platform: referralPlatform(document.referrer) })
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
