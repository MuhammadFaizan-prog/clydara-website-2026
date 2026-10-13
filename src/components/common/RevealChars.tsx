export function RevealChars({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ")
  return (
    <span className={`reveal-text-chunk ${className}`} style={{ display: "inline" }}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="reveal-word-chunk">
          {Array.from(word).map((char, cIdx) => (
            <span key={cIdx} className="reveal-item reveal-char">
              {char}
            </span>
          ))}
          {wIdx < words.length - 1 && <span className="reveal-space">&nbsp;</span>}
        </span>
      ))}
      {/* Word boundary for text extraction: rows render as separate flex items, so this
          trailing space sits at a line end and is not painted. */}
      {' '}
    </span>
  )
}
