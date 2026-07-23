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
    image: projectCImg,
    status: 'Selesai',
    statusColor: 'bg-coral/10 text-coral border-coral/30',
    statusIcon: CheckCircle,
  },
  {
    title: 'Flashscore Clone',
    tech: 'HTML',
    icon: Globe,
    image: flashscoreImg,
    status: 'Selesai',
    statusColor: 'bg-coral/10 text-coral border-coral/30',
    statusIcon: CheckCircle,
  },
  {
    title: 'Movie App',
    tech: 'React',
    icon: Component,
    image: movieImg,
    status: 'Selesai',
    statusColor: 'bg-coral/10 text-coral border-coral/30',
    statusIcon: CheckCircle,
  },
  {
    title: 'Web Profile',
    tech: 'Laravel + Bootstrap',
    icon: Layout,
    image: webprofileImg,
    status: 'Selesai',
    statusColor: 'bg-coral/10 text-coral border-coral/30',
    statusIcon: CheckCircle,
  },
  {
    title: 'E-Commerce & Peminjaman',
    tech: 'React',
    icon: ShoppingCart,
    image: ecommerceImg,
    status: 'Selesai',
    statusColor: 'bg-coral/10 text-coral border-coral/30',
    statusIcon: CheckCircle,
  },
  {
    title: 'Java API',
    tech: 'Java, SpringBoot',
    icon: Coffee,
    thumbGradient: 'from-hairline to-soft-stone',
    status: 'In Progress',
    statusColor: 'bg-muted/10 text-muted border-muted/30',
    statusIcon: Clock,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-soft-stone">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-coral text-white text-xs font-medium rounded-pill mb-6 tracking-[0.28px] uppercase">
            <Coffee size={14} />
            Projects
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-normal leading-tight tracking-[-0.48px] text-ink mb-4">
            Pengalaman Proyek
          </h2>
          <p className="text-muted max-w-lg mx-auto">
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
                className="group bg-canvas rounded-sm border border-hairline hover:border-muted transition-colors overflow-hidden"
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
                ) : (
                  <div className={`h-40 bg-linear-to-br ${project.thumbGradient} flex items-center justify-center`}>
                    <Icon size={48} className="text-muted/40" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 border border-hairline rounded-xs text-muted">
                      <Icon size={18} />
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-pill border ${project.statusColor}`}>
                      <StatusIcon size={12} />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-medium text-ink mb-2">
                    {project.title}
                  </h3>

                  <span className="inline-block px-3 py-1 text-xs text-muted border border-hairline rounded-xs">
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
