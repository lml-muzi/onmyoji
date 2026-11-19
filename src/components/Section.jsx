import Reveal from './Reveal.jsx'

export default function Section({ id, index, kicker, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="wrap">
        <Reveal>
          <header className="sec-head">
            <div className="sec-meta">
              <span className="sec-index">{index}</span>
              <span className="sec-kicker">{kicker}</span>
            </div>
            <h2 className="sec-title">{title}</h2>
            {intro && <p className="sec-intro">{intro}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
