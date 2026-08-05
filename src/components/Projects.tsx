import { useEffect, useRef } from 'react'
import { Coffee, ChevronRight, Terminal, Globe, Component, Layout, ShoppingCart, CheckCircle, Clock } from 'lucide-react'
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
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
  {
    title: 'Flashscore Clone',
    tech: 'HTML',
    icon: Globe,
    image: flashscoreImg,
    status: 'Selesai',
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
  {
    title: 'Movie App',
    tech: 'React',
    icon: Component,
    image: movieImg,
    status: 'Selesai',
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
  {
    title: 'Web Profile',
    tech: 'Laravel + Bootstrap',
    icon: Layout,
    image: webprofileImg,
    status: 'Selesai',
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
  {
    title: 'E-Commerce & Peminjaman',
    tech: 'React',
    icon: ShoppingCart,
    image: ecommerceImg,
    status: 'Selesai',
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
  {
    title: 'Java API',
    tech: 'Java, SpringBoot',
    icon: Coffee,
    image: null,
    status: 'In Progress',
    statusIcon: Clock,
    statusColor: 'bg-nav-gold',
  },
]

export default function Projects() {
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
    <section ref={sectionRef} id="projects" className="py-16 sm:py-20 bg-canvas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Label Bar */}
        <div className="section-label px-4 py-3 flex items-center gap-2 mb-8 reveal">
          <Coffee size={16} className="text-nintendo-red" />
          <span className="text-xs font-bold text-ink uppercase tracking-wider">
            Projects
          </span>
          <ChevronRight size={12} className="text-muted-indigo ml-auto" />
        </div>

        {/* Header */}
        <div className="text-center mb-12 reveal" style={{ animationDelay: '0.1s' }}>
          <h2 className="display-text text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
            Project
            <br />
            <span className="text-nav-gold">Showcase</span>
          </h2>
          <p className="text-sm text-carbon max-w-lg mx-auto">
            Beberapa proyek yang pernah saya kerjakan selama perjalanan belajar.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            const StatusIcon = project.statusIcon
            return (
              <div
                key={project.title}
                className="bevel-plate rounded-md overflow-hidden reveal group"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Thumbnail - Carbon Frame */}
                <div className="bg-carbon p-2">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-36 sm:h-40 w-full object-cover rounded-sm border border-chrome-indigo"
                    />
                  ) : (
                    <div className="h-36 sm:h-40 bg-gradient-to-br from-chrome-indigo to-muted-indigo flex items-center justify-center rounded-sm border border-chrome-indigo">
                      <Icon size={48} className="text-periwinkle/50" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Top row - Icon & Status */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-platinum bevel-inset rounded-xs text-ink-soft">
                      <Icon size={16} />
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-0.5 ${project.statusColor} rounded-xs`}>
                      <StatusIcon size={10} className="text-on-primary" />
                      <span className="text-[10px] font-bold text-on-primary uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-carbon mb-2 font-display uppercase tracking-wide">
                    {project.title}
                  </h3>

                  {/* Tech Badge */}
                  <span className="inline-block px-2 py-0.5 bg-carbon text-on-primary text-[10px] font-bold uppercase tracking-wider rounded-xs">
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
