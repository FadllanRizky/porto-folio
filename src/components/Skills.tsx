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
  { label: 'Frontend', color: 'bg-blue-900/40 text-blue-300 border-blue-800/50', skills: ['HTML', 'TypeScript', 'React'] },
  { label: 'Backend', color: 'bg-green-900/40 text-green-300 border-green-800/50', skills: ['Java', 'Spring Boot', 'Node.js', 'PHP', 'Laravel', 'C', 'C++'] },
  { label: 'Database', color: 'bg-purple-900/40 text-purple-300 border-purple-800/50', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'] },
  { label: 'Tools', color: 'bg-orange-900/40 text-orange-300 border-orange-800/50', skills: ['XAMPP'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/50 text-indigo-300 text-sm font-medium rounded-full border border-indigo-800/50 mb-6">
            <Terminal size={16} />
            Keahlian
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Berbagai teknologi yang saya kuasai dalam pengembangan aplikasi.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${cat.color}`}>
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
                        className="group flex flex-col items-center gap-3 p-5 bg-slate-900 rounded-xl border border-slate-800 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5 hover:border-indigo-700/50 transition-all"
                      >
                        <div className="p-3 rounded-lg bg-slate-800 text-gray-400 group-hover:bg-indigo-900/50 group-hover:text-indigo-300 transition-colors">
                          <Icon size={24} />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-indigo-300 transition-colors">
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
