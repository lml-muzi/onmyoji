import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import Reveal from './components/Reveal.jsx'
import Section from './components/Section.jsx'
import { cast, faction, footer, rule, shikigami, story, world } from './data/content.js'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />

      <main>
        {/* 壹 · 世界观 */}
        <Section id="world" index={world.index} kicker={world.kicker} title={world.title}>
          <div className="split">
            <div className="prose">
              {world.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <div className="term-list">
              {world.concepts.map((c, i) => (
                <Reveal key={c.term} className="term-card" delay={i * 70}>
                  <h3>{c.term}</h3>
                  <p>{c.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* 贰 · 主角 */}
        <Section
          id="cast"
          index={cast.index}
          kicker={cast.kicker}
          title={cast.title}
          intro={cast.intro}
        >
          <div className="cast-grid">
            {cast.members.map((m, i) => (
              <Reveal key={m.name} className="cast-card" delay={i * 60}>
                <span className="cast-tag">{m.tag}</span>
                <h3>{m.name}</h3>
                <p className="cast-desc">{m.desc}</p>
                <p className="cast-spirit">御灵 · {m.spirit}</p>
                <blockquote className="cast-line">{m.line}</blockquote>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 叁 · 主线 */}
        <Section
          id="story"
          index={story.index}
          kicker={story.kicker}
          title={story.title}
          intro={story.lead}
        >
          <ol className="acts">
            {story.acts.map((a, i) => (
              <Reveal as="li" key={a.title} className="act-item" delay={i * 60}>
                <div className="act-mark">
                  <span>{a.act}</span>
                </div>
                <div className="act-body">
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="callout">
            <span className="callout-mark">注</span>
            <p>{story.note}</p>
          </Reveal>
        </Section>

        {/* 肆 · 势力 */}
        <Section
          id="faction"
          index={faction.index}
          kicker={faction.kicker}
          title={faction.title}
          intro={faction.intro}
        >
          <div className="faction-grid">
            {faction.groups.map((g, i) => (
              <Reveal key={g.name} className="faction-card" delay={i * 55}>
                <span className="faction-mark">{g.mark}</span>
                <h3>{g.name}</h3>
                <p>{g.desc}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 伍 · 式神志 */}
        <Section
          id="shikigami"
          index={shikigami.index}
          kicker={shikigami.kicker}
          title={shikigami.title}
          intro={shikigami.intro}
        >
          {shikigami.groups.map((group) => (
            <div key={group.group} className="bestiary">
              <Reveal className="bestiary-head">
                <h3>{group.group}</h3>
                <span className="bestiary-rule" />
              </Reveal>
              <div className="shiki-grid">
                {group.items.map((s, i) => (
                  <Reveal key={s.name} className="shiki-card" delay={i * 55}>
                    <div className="shiki-top">
                      <h4>{s.name}</h4>
                      <span className="shiki-from">{s.from}</span>
                    </div>
                    <p>{s.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </Section>

        {/* 陆 · 法则 */}
        <Section
          id="rule"
          index={rule.index}
          kicker={rule.kicker}
          title={rule.title}
          intro={rule.intro}
        >
          <div className="sys-grid">
            {rule.items.map((item, i) => (
              <Reveal key={item.title} className="sys-card" delay={i * 60}>
                <div className="sys-head">
                  <h3>{item.title}</h3>
                  <span className="sys-metric">{item.metric}</span>
                </div>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p className="footer-note">{footer.note}</p>
          <p className="footer-disclaimer">{footer.disclaimer}</p>
          <div className="footer-bottom">
            <span className="footer-brand">陰陽師 · ONMYOJI</span>
            <a href="#top">回到顶端</a>
          </div>
        </div>
      </footer>
    </>
  )
}
