# Security & Risk Model (Security.md)

## 1. Security Posture
- **Static Client-Side Bundle**: Zero server-side runtime attack surface, zero exposed backend endpoints.
- **External Asset Loading**: Verified HTTPS CDN sources (Framer CDN, Google Fonts, CDNFonts).
- **Links & Navigation**: External outbound links use `rel="noreferrer"` and `target="_blank"` safely.
- **XSS & Injection Protection**: Standard React JSX escaping protects all dynamic text bindings.
