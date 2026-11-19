import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <header className="hero" id="top">
      {/* 背景装饰：圆相 + 波纹 */}
      <div className="hero-deco" aria-hidden="true">
        <svg className="enso" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="196" stroke="url(#g1)" strokeWidth="1" />
          <circle cx="200" cy="200" r="150" stroke="url(#g1)" strokeWidth="0.7" strokeDasharray="2 7" />
          <circle cx="200" cy="200" r="104" stroke="url(#g1)" strokeWidth="0.7" />
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c9a227" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#c9a227" stopOpacity="0.02" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="wrap hero-inner">
        <p className="hero-eyebrow">
          <span className="rule" />
          平安 · 阴阳道
          <span className="rule" />
        </p>

        <h1 className="hero-title">
          {hero.kanji.map((ch, i) => (
            <span key={ch} style={{ animationDelay: `${i * 140}ms` }}>
              {ch}
            </span>
          ))}
        </h1>

        <p className="hero-romaji">{hero.romaji}</p>

        <p className="hero-lead">
          {hero.lead.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </p>

        <blockquote className="hero-quote">
          <p>{hero.quote}</p>
          <cite>{hero.quoteFrom}</cite>
        </blockquote>
      </div>

      <a className="scroll-hint" href="#origin" aria-label="向下滚动">
        <span />
      </a>
    </header>
  )
}
