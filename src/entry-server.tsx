import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppContent } from './App'
import { matchPage } from './routes'

export async function render(path: string) {
  const route = matchPage(path)
  if (!route) throw new Error(`No route for prerendering: ${path}`)
  // Import the active page first so static HTML cannot contain a loading fallback.
  const { default: Component } = await route.load()
  return renderToString(<StaticRouter location={path}><AppContent resolvedRoute={{ path: route.path, Component }} /></StaticRouter>)
}
