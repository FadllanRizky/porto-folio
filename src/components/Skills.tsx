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
      { name: 'HTML', level: 90 },
      { name: 'TypeScript', level: 75 },
      { name: 'React', level: 80 },
    ],
  },
  {
    label: 'Backend',
    icon: Server,
    color: 'text-signal-orange',
    bgColor: 'bg-signal-orange',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 70 },
      { name: 'Node.js', level: 75 },
      { name: 'PHP', level: 65 },
      { name: 'Laravel', level: 60 },
      { name: 'C', level: 50 },
      { name: 'C++', level: 45 },
    ],
  },
  {
    label: 'Database',
    icon: Database,
    color: 'text-nav-gold',
    bgColor: 'bg-nav-gold',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'Supabase', level: 60 },
    ],
  },
  {
    label: 'Tools',
    icon: Wrench,
    color: 'text-amber',
    bgColor: 'bg-amber',
    skills: [
      { name: 'XAMPP', level: 75 },
      { name: 'Git', level: 70 },
      { name: 'VS Code', level: 90 },
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
            Berbagai teknologi yang saya kuasai dalam pengembangan aplikasi.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, catIndex) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.label}
                className="bevel-plate rounded-md overflow-hidden reveal"
                style={{ animationDelay: `${0.1 + catIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className={`px-4 py-3 flex items-center gap-2 ${cat.bgColor}`}>
                  <Icon size={14} className="text-on-primary" />
                  <span className="text-xs font-bold text-on-primary uppercase tracking-wider">
                    {cat.label}
                  </span>
                </div>

                {/* Skills List */}
                <div className="p-4 space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-carbon">
                          {skill.name}
                        </span>
                        <span className="text-xs text-ink-soft font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar - Bevel Inset */}
                      <div className="h-3 bg-platinum bevel-inset rounded-xs overflow-hidden">
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
  )
}
