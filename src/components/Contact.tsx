import { useEffect, useRef } from 'react'
import { Mail, Send, ChevronRight } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-16 sm:py-20 carbon-slab">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Label Bar - Carbon Light */}
        <div className="bg-carbon-light border-b-2 border-chrome-indigo px-4 py-3 flex items-center gap-2 mb-8 reveal">
          <Mail size={16} className="text-signal-orange" />
          <span className="text-xs font-bold text-on-primary uppercase tracking-wider">
            Contact
          </span>
          <ChevronRight size={12} className="text-muted-indigo ml-auto" />
        </div>

        {/* Contact Panel */}
        <div className="bevel-plate rounded-md p-6 sm:p-8 md:p-10 text-center reveal" style={{ animationDelay: '0.2s' }}>
          {/* Display Title */}
          <h2 className="display-text text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
            Hubungi
            <br />
            <span className="text-nav-gold">Saya</span>
          </h2>

          <p className="text-base text-carbon/80 mb-8 max-w-md mx-auto">
            Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya.
          </p>

          {/* Email Button */}
          <a
            href="mailto:fadllanrizky321@gmail.com"
            className="inline-flex items-center gap-3 btn-signal px-8 py-4 rounded-xs text-base"
          >
            <Mail size={20} />
            <span className="hidden sm:inline">fadllanrizky321@gmail.com</span>
            <span className="sm:hidden">Email Me</span>
            <Send size={16} />
          </a>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-chrome-indigo/50">
            <p className="text-xs text-carbon/60 uppercase tracking-wider font-bold mb-4">
              Or find me on
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/FadllanRizky"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nintendo px-4 py-2 rounded-xs inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fadllan-rizky-a4a7723aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nintendo px-4 py-2 rounded-xs inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://id.jobstreet.com/id/profile/me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nintendo px-4 py-2 rounded-xs inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                Jobstreet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
