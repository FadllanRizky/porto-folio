import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas border-b border-hairline">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-display font-medium text-ink tracking-tight">
          Padellan
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-body-muted hover:text-ink rounded-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 bg-primary text-on-primary text-sm font-medium rounded-pill hover:opacity-90 transition-opacity"
        >
          Hubungi Saya
        </a>

        <button
          className="md:hidden p-2 text-body-muted hover:text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-hairline bg-canvas">
          <ul className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-body-muted hover:text-ink rounded-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <a
              href="#contact"
              className="block text-center px-5 py-2 bg-primary text-on-primary text-sm font-medium rounded-pill hover:opacity-90 transition-opacity"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
