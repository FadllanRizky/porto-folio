import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const subNavLinks = [
  { label: 'GitHub', href: 'https://github.com/FadllanRizky' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fadllan-rizky-a4a7723aa/' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Primary Nav Bar - Carbon Navy */}
      <nav className="carbon-slab">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          {/* Logo Pill */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="px-3 py-1 bg-surface rounded-pill border-2 border-nintendo-red">
              <span className="font-display text-nintendo-red text-sm font-black tracking-tight">
                P
              </span>
            </div>
            <span className="font-display text-nav-gold text-sm font-bold tracking-wide uppercase hidden sm:inline">
              Padellan
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                {index > 0 && (
                  <span className="text-chrome-indigo mx-1 text-xs">|</span>
                )}
                <a
                  href={link.href}
                  className="px-3 py-1 text-nav-gold text-xs font-bold uppercase tracking-wider hover:text-amber transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1 btn-signal px-4 py-1.5 rounded-xs"
          >
            Contact
            <ChevronRight size={12} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-nav-gold hover:text-amber"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Secondary Nav Strip - Pale Sky */}
      <div className="hidden md:block bg-canvas-soft border-b border-chrome-indigo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-bold text-ink-soft uppercase tracking-wider">
            {subNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-nintendo-red transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="text-xs text-ink-soft font-medium">
            Full Stack Developer Portfolio
          </span>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden carbon-slab border-t border-chrome-indigo">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-nav-gold text-sm font-bold uppercase tracking-wider hover:text-amber hover:bg-carbon-light rounded-xs transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 space-y-2">
            {subNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2 btn-nintendo rounded-xs"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-3 btn-signal rounded-xs"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
