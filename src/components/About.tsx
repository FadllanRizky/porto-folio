import { useEffect, useRef } from 'react'
import { User, ChevronRight } from 'lucide-react'

export default function About() {
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
    <section ref={sectionRef} id="about" className="py-16 sm:py-20 bg-canvas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Label Bar */}
        <div className="section-label px-4 py-3 flex items-center gap-2 mb-8 reveal">
          <User size={16} className="text-nintendo-red" />
          <span className="text-xs font-bold text-ink uppercase tracking-wider">
            About
          </span>
          <ChevronRight size={12} className="text-muted-indigo ml-auto" />
        </div>

        {/* Content Panel */}
        <div className="bevel-plate rounded-md p-6 sm:p-8 reveal" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left - Info Box */}
            <div className="w-full md:w-1/3">
              <div className="bg-platinum bevel-inset rounded-sm p-4">
                <div className="text-xs font-bold text-ink-soft uppercase tracking-wider mb-3 border-b border-chrome-indigo/30 pb-2">
                  Profile
                </div>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex justify-between">
                    <span className="font-bold">Name:</span>
                    <span>Padellan Riski</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-bold">Role:</span>
                    <span>Full Stack Developer</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-bold">Location:</span>
                    <span>Indonesia</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Description */}
            <div className="flex-1">
              <h2 className="display-text text-3xl sm:text-4xl font-black leading-tight mb-6">
                About
                <br />
                <span className="text-nav-gold">Me</span>
              </h2>

              <p className="text-base text-carbon leading-relaxed mb-6">
                Halo! Saya <span className="font-bold text-nintendo-red">Padellan Riski</span>,
                seorang Full Stack Developer yang antusias dalam membangun aplikasi web
                dari ujung ke ujung. Dengan pengalaman di berbagai teknologi modern,
                saya selalu berusaha menghadirkan solusi yang efisien, scalable, dan
                ramah pengguna.
              </p>

              <p className="text-base text-carbon/80 leading-relaxed mb-6">
                Saya percaya bahwa setiap baris kode harus memiliki tujuan dan setiap
                desain harus melayani pengguna. Dari frontend yang interaktif hingga
                backend yang robust, saya menikmati setiap tantangan dalam pengembangan.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {['React', 'Java', 'Spring Boot', 'Node.js', 'TypeScript'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-carbon text-on-primary text-xs font-bold uppercase tracking-wider rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
