import { ArrowDown, Mail, ChevronRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import fotoProfil from '../assets/Padellan.jpeg'

export default function Hero() {
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
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center bg-lavender pt-24 md:pt-32 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Hero Panel - Bevel Plate */}
        <div className="bevel-plate rounded-md p-6 sm:p-8 md:p-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left reveal">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-carbon rounded-xs mb-6">
                <span className="w-2 h-2 bg-signal-orange rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-on-primary uppercase tracking-wider">
                  Full Stack Developer
                </span>
              </div>

              {/* Display Title */}
              <h1 className="display-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6">
                Padellan
                <br />
                <span className="text-nav-gold">Riski</span>
              </h1>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-carbon font-bold mb-4">
                "Gorgeous graphics, great code, and a passion for development."
              </p>

              <p className="text-base text-carbon/80 max-w-md mb-8 md:mb-10 mx-auto md:mx-0">
                Turning ideas into functional and elegant digital solutions with modern technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 btn-signal px-6 py-3 rounded-xs"
                >
                  <Mail size={16} />
                  Contact Me
                  <ChevronRight size={14} />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 btn-nintendo px-6 py-3 rounded-xs"
                >
                  View Projects
                  <ArrowDown size={14} />
                </a>
              </div>
            </div>

            {/* Profile Image - Bevel Frame */}
            <div className="flex-shrink-0 reveal" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Outer bevel frame */}
                <div className="bevel-plate rounded-md p-2">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-sm overflow-hidden border-2 border-chrome-indigo">
                    <img
                      src={fotoProfil}
                      alt="Padellan Riski"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative corner badge */}
                <div className="absolute -bottom-3 -right-3 bg-nintendo-red px-3 py-1 rounded-xs shadow-lg">
                  <span className="text-xs font-bold text-on-primary uppercase tracking-wider">
                    Dev
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <div className="mt-8 pt-6 border-t border-chrome-indigo/50 grid grid-cols-3 gap-4 reveal" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display font-black text-nintendo-red">
                5+
              </div>
              <div className="text-xs font-bold text-carbon uppercase tracking-wider mt-1">
                Projects
              </div>
            </div>
            <div className="text-center border-x border-chrome-indigo/50">
              <div className="text-2xl md:text-3xl font-display font-black text-signal-orange">
                15+
              </div>
              <div className="text-xs font-bold text-carbon uppercase tracking-wider mt-1">
                Tech Stack
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display font-black text-nav-gold">
                100%
              </div>
              <div className="text-xs font-bold text-carbon uppercase tracking-wider mt-1">
                Passion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
