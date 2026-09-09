import { useEffect, useRef } from 'react'
import {
  Terminal,
  ChevronRight,
  Code,
  Server,
  Database,
  Wrench,
} from 'lucide-react'

const categories = [
  {
    label: 'Frontend',
    icon: Code,
    color: 'text-nintendo-red',
    bgColor: 'bg-nintendo-red',
    skills: [
      { name: 'HTML', level: 99 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 99 },
    ],
  },
  {
    label: 'Backend',
    icon: Server,
    color: 'text-signal-orange',
    bgColor: 'bg-signal-orange',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 90 },
      { name: 'Node.js', level: 99 },
      { name: 'PHP', level: 70 },
      { name: 'Laravel', level: 70 },
      { name: 'C', level: 99 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    label: 'Database',
    icon: Database,
    color: 'text-nav-gold',
    bgColor: 'bg-nav-gold',
    skills: [
      { name: 'MySQL', level: 99 },
      { name: 'PostgreSQL', level: 99 },
      { name: 'MongoDB', level: 70 },
      { name: 'Supabase', level: 85 },
    ],
  },
  {
    label: 'Tools & Productivity',
    icon: Wrench,
    color: 'text-amber',
    bgColor: 'bg-amber', // Diperbaiki dari 'bg-g'
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Nginx', level: 85 },
      { name: 'ngrok', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'VS Code', level: 90 },
      { name: 'XAMPP', level: 80 },
      { name: 'Microsoft Word', level: 90 },
      { name: 'Microsoft Excel', level: 85 },
    ],
  },
]

export default function Skills() {
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
    <section ref={sectionRef} id="skills" className="py-16 sm:py-20 bg-canvas-soft">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Label Bar */}
        <div className="section-label px-4 py-3 flex items-center gap-2 mb-8 reveal">
          <Terminal size={16} className="text-nintendo-red" />
          <span className="text-xs font-bold text-ink uppercase tracking-wider">
            Skills
          </span>
          <ChevronRight size={12} className="text-muted-indigo ml-auto" />
        </div>

        {/* Header */}
        <div className="text-center mb-12 reveal" style={{ animationDelay: '0.1s' }}>
          <h2 className="display-text text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
            Tech
            <br />
            <span className="text-nav-gold">Stack</span>
          </h2>
          <p className="text-sm text-carbon max-w-lg mx-auto">
            Berbagai teknologi dan alat yang saya kuasai dalam pengembangan aplikasi.
          </p>
        </div>

        {/* Categories Grid - Penyesuaian Alignment & Ukuran */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {categories.map((cat, catIndex) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.label}
                className="bevel-plate rounded-md overflow-hidden reveal h-full"
                style={{ animationDelay: `${0.1 + catIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className={`px-4 py-3 flex items-center gap-2 ${cat.bgColor}`}>
                  <Icon size={14} className="text-on-primary" />
                  <span className="text-xs font-bold text-on-primary uppercase tracking-wider">
                    {cat.label}
                  </span>
                </div>

                {/* Skills List - Diperketat Spasingnya Agar Rapi */}
                <div className="p-4 space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs sm:text-sm font-bold text-carbon">
                          {skill.name}
                        </span>
                        <span className="text-xs text-ink-soft font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-2.5 bg-platinum bevel-inset rounded-xs overflow-hidden">
                        <div
                          className={`h-full ${cat.bgColor} rounded-xs transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )}