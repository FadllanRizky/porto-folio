import { ArrowDown, Mail } from 'lucide-react'
import fotoProfil from '../assets/Fadllan.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-canvas pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 py-20">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-normal leading-none tracking-[-1.92px] text-ink mb-5">
              Padellan Riski
            </h1>
            <p className="text-lg sm:text-xl text-body-muted font-normal mb-2">
              Full Stack Developer
            </p>
            <p className="text-base sm:text-lg text-muted max-w-md mb-10 md:mb-12 mx-auto md:mx-0">
              Turning ideas into functional and elegant digital solutions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary text-sm font-medium rounded-pill hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-1 py-2 text-sm font-medium text-ink border-b border-ink/30 hover:border-ink transition-colors"
              >
                View Projects
                <ArrowDown size={16} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-lg overflow-hidden border border-hairline bg-soft-stone">
              <img
                src={fotoProfil}
                alt="Padellan Riski"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
