import {
  Coffee,
  Leaf,
  Server,
  FileCode,
  Globe,
  Terminal,
  Braces,
  Zap,
  Database,
  Box,
  Cloud,
  HardDrive,
  Container,
  Component,
  Layout,
} from 'lucide-react'

const skills = [
  { name: 'Java', icon: Coffee },
  { name: 'Spring Boot', icon: Leaf },
  { name: 'Node.js', icon: Server },
  { name: 'TypeScript', icon: FileCode },
  { name: 'HTML', icon: Globe },
  { name: 'C', icon: Terminal },
  { name: 'C++', icon: Braces },
  { name: 'PHP', icon: Zap },
  { name: 'MySQL', icon: Database },
  { name: 'XAMPP', icon: Box },
  { name: 'Supabase', icon: Cloud },
  { name: 'MongoDB', icon: HardDrive },
  { name: 'PostgreSQL', icon: Container },
  { name: 'React', icon: Component },
  { name: 'Laravel', icon: Layout },
]

const categories = [
  { label: 'Frontend', skills: ['HTML', 'TypeScript', 'React'] },
  { label: 'Backend', skills: ['Java', 'Spring Boot', 'Node.js', 'PHP', 'Laravel', 'C', 'C++'] },
  { label: 'Database', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'] },
  { label: 'Tools', skills: ['XAMPP'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-canvas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-coral text-white text-xs font-medium rounded-pill mb-6 tracking-[0.28px] uppercase">
            <Terminal size={14} />
            Skills
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-normal leading-tight tracking-[-0.48px] text-ink mb-4">
            Tech Stack
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Berbagai teknologi yang saya kuasai dalam pengembangan aplikasi.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex px-4 py-1.5 text-xs font-medium text-ink border border-ink/30 rounded-xl tracking-wide">
                  {cat.label}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills
                  .filter((s) => cat.skills.includes(s.name))
                  .map((skill) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-3 p-5 bg-canvas rounded-sm border border-hairline hover:border-muted transition-colors"
                      >
                        <div className="p-3 text-muted">
                          <Icon size={24} />
                        </div>
                        <span className="text-sm font-medium text-ink">
                          {skill.name}
                        </span>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
