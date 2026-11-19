import { useEffect, useState } from 'react'
import { nav } from '../data/content.js'

export default function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${solid ? ' is-solid' : ''}`}>
      <div className="wrap nav-inner">
        <a className="nav-brand" href="#top">
          <span className="nav-seal">陰</span>
          <span className="nav-brand-text">阴阳师</span>
        </a>
        <div className="nav-links">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
