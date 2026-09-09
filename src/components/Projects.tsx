import { useState, useEffect, useRef } from 'react'
import { Coffee, ChevronRight, ChevronLeft, Terminal, Globe, Component, Layout, ShoppingCart, CheckCircle, X, Wallet } from 'lucide-react'
// Import asset gambar
import flashscoreImg from '../assets/flashScore_Clone.png'
import flashscoreImg2 from '../assets/flashScore_Clone2.png'
import flashscoreImg3 from '../assets/flashScore_Clone3.png'
import movieImg from '../assets/movieProject.png'
import movieImg2 from '../assets/movieProject2.png'
import movieImg3 from '../assets/movieProject3.png'
import movieImg4 from '../assets/movieProject4.png'
import movieImg5 from '../assets/movieProject5.png'
import movieImg6 from '../assets/movieProject6.png'
import ecommerceImg from '../assets/ecommercer.png'
import ecommerceImg2 from '../assets/ecommercer2.png'
import ecommerceImg3 from '../assets/ecommercer3.png'
import ecommerceImg4 from '../assets/ecommercer4.png'
import ecommerceImg5 from '../assets/ecommercer5.png'
import ecommerceImg6 from '../assets/ecommercer6.png'
import ecommerceImg7 from '../assets/ecommercer7.png'
import projectCImg from '../assets/project_c.png'
import projectCImg2 from '../assets/project_c2.png'
import projectCImg3 from '../assets/project_c3.png'
import projectCImg4 from '../assets/project_c4.png'
import projectCImg5 from '../assets/project_c5.png'
import projectCImg6 from '../assets/project_c6.png'
import projectCImg7 from '../assets/project_c7.png'
import webprofileImg from '../assets/php1.png'
import webprofileImg2 from '../assets/php2.png'
import webprofileImg3 from '../assets/php3.png'

import wallet from '../assets/wallet1.png'
import wallet2 from '../assets/wallet2.png'
import wallet3 from '../assets/wallet3.png'
import wallet4 from '../assets/wallet4.png'
import wallet5 from '../assets/wallet5.png'

interface Project {
  title: string
  tech: string
  techStack: string[]
  description: string
  icon: any
  images: string[]
  status: string
  statusIcon: any
  statusColor: string
}

const projects: Project[] = [
  {
    title: 'Bimbel OK Console',
    tech: 'C',
    techStack: ['C Programming Language', 'Console Application'],
    description: 'Aplikasi konsol manajemen bimbingan belajar menggunakan bahasa C.',
    icon: Terminal,
    images: [projectCImg, projectCImg2, projectCImg3, projectCImg4, projectCImg5, projectCImg6, projectCImg7],
    status: 'Selesai',
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
  {
    title: 'Flashscore Clone',
    tech: 'HTML',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'Kloning antarmuka situs skor olahraga Flashscore.',
    icon: Globe,
    images: [flashscoreImg, flashscoreImg2, flashscoreImg3],
    status: 'Selesai',
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
  {
    title: 'Movie App',
    tech: 'React',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'TMDB API'],
    description: 'Aplikasi pencarian film interaktif beserta riwayat tontonan dan halaman detail.',
    icon: Component,
    images: [movieImg2, movieImg, movieImg3, movieImg4, movieImg5, movieImg6], 
    status: 'Selesai',
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
  {
    title: 'Web Profile',
    tech: 'Laravel + Bootstrap',
    techStack: ['PHP', 'Laravel Framework', 'Bootstrap', 'MySQL'],
    description: 'Situs web profil profesional dengan fitur dashboard admin dan halaman publik.',
    icon: Layout,
    images: [webprofileImg, webprofileImg2, webprofileImg3], 
    status: 'Selesai',
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
  {
    title: 'E-Commerce & Peminjaman',
    tech: 'React',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL'],
    description: 'Platform e-commerce dan sistem peminjaman barang.',
    icon: ShoppingCart,
    images: [ecommerceImg, ecommerceImg2, ecommerceImg3, ecommerceImg4, ecommerceImg5, ecommerceImg6, ecommerceImg7],
    status: 'Selesai',
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
  {
    title: 'Java API',
    tech: 'Java, SpringBoot',
    techStack: ['Java', 'Spring Boot', 'TypeScript', 'RESTful API', 'PostgreSQL'],
    description: 'Backend API untuk pengelolaan akun digital wallet.',
    icon: Wallet,
    images: [wallet, wallet2, wallet3, wallet4, wallet5],
    status: 'Selesai',
    statusIcon: CheckCircle,
    statusColor: 'bg-nintendo-red',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  // Observer untuk efek scroll reveal
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

  // Lock Body Scroll saat Modal Aktif
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const handleNextImage = () => {
    if (!selectedProject || selectedProject.images.length === 0) return
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
  }

  const handlePrevImage = () => {
    if (!selectedProject || selectedProject.images.length === 0) return
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

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
            const coverImage = project.images[0]

            return (
              <div
                key={project.title}
                onClick={() => openModal(project)}
                className="bevel-plate rounded-md overflow-hidden reveal group cursor-pointer hover:border-nav-gold transition-all duration-200"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className="bg-carbon p-2">
                  {coverImage ? (
                    <img
                      src={coverImage}
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

                  <h3 className="text-base font-bold text-carbon mb-2 font-display uppercase tracking-wide">
                    {project.title}
                  </h3>

                  <span className="inline-block px-2 py-0.5 bg-carbon text-on-primary text-[10px] font-bold uppercase tracking-wider rounded-xs">
                    {project.tech}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal Pop-up Slider */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)} // Menutup modal saat backdrop diklik
        >
          <div 
            className="bevel-plate bg-canvas max-w-xl w-full rounded-lg overflow-hidden border border-chrome-indigo shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat konten modal diklik
          >
            
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 p-1.5 bg-carbon/80 text-on-primary rounded-full hover:bg-nintendo-red transition-colors z-20"
            >
              <X size={18} />
            </button>

            {/* Slider / Galeri Gambar Modal */}
            <div className="bg-carbon p-3 relative group">
              {selectedProject.images.length > 0 ? (
                <>
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-52 sm:h-64 object-cover rounded-md border border-chrome-indigo transition-all duration-300"
                  />

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-5 top-1/2 -translate-y-1/2 p-2 bg-carbon/80 text-on-primary rounded-full hover:bg-nav-gold hover:text-carbon transition-all"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-5 top-1/2 -translate-y-1/2 p-2 bg-carbon/80 text-on-primary rounded-full hover:bg-nav-gold hover:text-carbon transition-all"
                      >
                        <ChevronRight size={20} />
                      </button>

                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 bg-carbon/70 px-3 py-1 rounded-full">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`h-2 rounded-full transition-all ${
                              idx === currentImageIndex ? 'w-5 bg-nav-gold' : 'w-2 bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="w-full h-52 sm:h-64 bg-gradient-to-br from-chrome-indigo to-muted-indigo flex items-center justify-center rounded-md border border-chrome-indigo">
                  <selectedProject.icon size={64} className="text-periwinkle/50" />
                </div>
              )}
            </div>

            {/* Detail Proyek */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-nav-gold uppercase tracking-widest">
                  Detail Proyek
                </span>
                <div className={`flex items-center gap-1 px-2 py-0.5 ${selectedProject.statusColor} rounded-xs`}>
                  <selectedProject.statusIcon size={12} className="text-on-primary" />
                  <span className="text-[10px] font-bold text-on-primary uppercase tracking-wider">
                    {selectedProject.status}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-carbon font-display uppercase tracking-wide mb-2">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-carbon/80 mb-4 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Stack Teknologi */}
              <div>
                <h4 className="text-xs font-bold text-carbon uppercase tracking-wider mb-2">
                  Teknologi & Bahasa Pemrograman:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-carbon text-on-primary text-xs font-medium rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}