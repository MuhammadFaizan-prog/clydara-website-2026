// Responsive attributes for images served by framerusercontent.com.
// The CDN encodes the original size as ?width=&height= and accepts scale-down-to=<px>,
// which caps the LONGER side, so srcset descriptors use the resulting real width.
// width/height attributes let the browser reserve space before the image loads (CLS).
export function framerImage(src: string, sizes: string) {
  const query = src.split('?')[1] || ''
  const params = new URLSearchParams(query)
  const width = Number(params.get('width')) || undefined
  const height = Number(params.get('height')) || undefined
  if (!width || !height || params.has('scale-down-to')) return { src, width, height }
  const longest = Math.max(width, height)
  const steps = [512, 1024, 2048].filter(step => step < longest)
  const candidates = steps.map(step => ({ url: `${src}&scale-down-to=${step}`, w: Math.round(width * step / longest) }))
  candidates.push({ url: src, w: width })
  const fallback = candidates.find(candidate => candidate.w >= 1024) || candidates[candidates.length - 1]
  return {
    src: fallback.url,
    srcSet: candidates.map(candidate => `${candidate.url} ${candidate.w}w`).join(', '),
    sizes,
    width,
    height,
  }
}
