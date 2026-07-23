import { Terminal, Globe, Component, Layout, ShoppingCart, Coffee, CheckCircle, Clock } from 'lucide-react'
import flashscoreImg from '../assets/flashScore_Clone.png'
import movieImg from '../assets/movieProject.png'
import ecommerceImg from '../assets/ecommercer.png'
import webprofileImg from '../assets/profile.webp'
import projectCImg from '../assets/project_c.png'

const projects = [
  {
    title: 'Bimbel Console',
    tech: 'C',
    icon: Terminal,
    image:projectCImg,
    status: 'Selesai',
    statusColor: 'text-green-300 bg-green-900/40 border-green-800/50',
    statusIcon: CheckCircle,
  },
  {
    title: 'Flashscore Clone',
    tech: 'HTML',
    icon: Globe,
    image: flashscoreImg,
    status: 'Selesai',
    statusColor: 'text-green-300 bg-green-900/40 border-green-800/50',
    statusIcon: CheckCircle,
  },
  {
    title: 'Movie App',
    tech: 'React',
    icon: Component,
    image: movieImg,
    status: 'Selesai',
    statusColor: 'text-green-300 bg-green-900/40 border-green-800/50',
    statusIcon: CheckCircle,
  },
  {
    title: 'Web Profile',
    tech: 'Laravel + Bootstrap',
    icon: Layout,
    image: webprofileImg,
    status: 'Selesai',
    statusColor: 'text-green-300 bg-green-900/40 border-green-800/50',
    statusIcon: CheckCircle,
  },
  {
    title: 'E-Commerce & Peminjaman',
    tech: 'React',
    icon: ShoppingCart,
    image: ecommerceImg,
    status: 'Selesai',
    statusColor: 'text-green-300 bg-green-900/40 border-green-800/50',
    statusIcon: CheckCircle,
  },
  {
    title: 'Java API',
    tech: 'Java, SpringBoot',
    icon: Coffee,
    thumbGradient: 'from-cyan-600 to-blue-700',
    status: 'In Progress',
    statusColor: 'text-amber-300 bg-amber-900/40 border-amber-800/50',
    statusIcon: Clock,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/50 text-indigo-300 text-sm font-medium rounded-full border border-indigo-800/50 mb-6">
            <Coffee size={16} />
            Proyek
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pengalaman Proyek
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Beberapa proyek yang pernah saya kerjakan selama perjalanan belajar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon
            const StatusIcon = project.statusIcon
            return (
              <div
                key={project.title}
                className="group bg-slate-900 rounded-xl border border-slate-800 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all overflow-hidden"
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} className="h-36 w-full object-cover" />
                ) : (
                  <div className={`h-36 bg-linear-to-br ${project.thumbGradient} flex items-center justify-center`}>
                    <Icon size={48} className="text-white/40" />
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-slate-800 text-gray-400 group-hover:bg-indigo-900/50 group-hover:text-indigo-300 transition-colors">
                      <Icon size={18} />
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${project.statusColor}`}>
                      <StatusIcon size={12} />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  <span className="inline-block px-3 py-1 text-xs font-medium text-gray-400 bg-slate-800 rounded-full">
                    {project.tech}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
