import { useState, useEffect, useRef } from 'react'
import { Award, ChevronRight, X, FileText, Download, ExternalLink } from 'lucide-react'
// Import asset sertifikat PDF
import pdfAlgoritma from '../assets/ACE Scanner_20260924(2).pdf'
import pdfDatabase from '../assets/ACE Scanner_20260929(4).pdf'
import pdfHtml from '../assets/ACE Scanner_20261008(2).pdf'
import pdfGit from '../assets/ACE Scanner_20261008.pdf'
import pdfReact from '../assets/ACE Scanner_20260929(5).pdf'
import pdfReactLanjutan from '../assets/ACE Scanner_20260929(6).pdf'
import pdfReactJava from '../assets/ACE Scanner_20260924.pdf'

interface Certificate {
  title: string
  track: string
  score?: number
  file: string
}

const certificates: Certificate[] = [
  {
    title: 'Algoritma',
    track: 'Computer Science',
    file: pdfAlgoritma,
  },
  {
    title: 'Database',
    track: 'Basis Data',
    file: pdfDatabase,
  },
  {
    title: 'HTML',
    track: 'Web Development',
    file: pdfHtml,
  },
  {
    title: 'Git & GitHub',
    track: 'Version Control',
    file: pdfGit,
  },
  {
    title: 'React',
    track: 'Frontend',
    score: 80,
    file: pdfReact,
  },
  {
    title: 'React Lanjutan',
    track: 'Frontend',
    score: 87,
    file: pdfReactLanjutan,
  },
  {
    title: 'React Java',
    track: 'Java Spring Boot',
    score: 88,
    file: pdfReactJava,
  },
]

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

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
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedCert])

  return (
    <section ref={sectionRef} id="certificates" className="py-16 sm:py-20 bg-canvas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Label Bar */}
        <div className="section-label px-4 py-3 flex items-center gap-2 mb-8 reveal">
          <Award size={16} className="text-nintendo-red" />
          <span className="text-xs font-bold text-ink uppercase tracking-wider">
            Certificates
          </span>
          <ChevronRight size={12} className="text-muted-indigo ml-auto" />
        </div>

        {/* Header */}
        <div className="text-center mb-12 reveal" style={{ animationDelay: '0.1s' }}>
          <h2 className="display-text text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
            Certificate
            <br />
            <span className="text-nav-gold">Collection</span>
          </h2>
          <p className="text-sm text-carbon max-w-lg mx-auto">
            Sertifikat penyelesaian kursus yang telah saya peroleh, tersedia dalam format PDF.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              onClick={() => setSelectedCert(cert)}
              className="bevel-plate rounded-md overflow-hidden reveal group cursor-pointer hover:border-nav-gold transition-all duration-200"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="bg-carbon px-4 py-3 flex items-center gap-2">
                <Award size={14} className="text-nav-gold" />
                <span className="text-xs font-bold text-on-primary uppercase tracking-wider">
                  Sertifikat
                </span>
                {cert.score !== undefined && (
                  <span className="ml-auto px-2 py-0.5 bg-nav-gold text-carbon text-[10px] font-black uppercase tracking-wider rounded-xs">
                    Nilai {cert.score}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2 bg-platinum bevel-inset rounded-xs text-ink-soft">
                    <FileText size={16} />
                  </div>
                  <span className="px-2 py-0.5 bg-carbon text-on-primary text-[10px] font-bold uppercase tracking-wider rounded-xs">
                    PDF
                  </span>
                </div>

                <h3 className="text-base font-bold text-carbon mb-1 font-display uppercase tracking-wide">
                  {cert.title}
                </h3>
                <p className="text-xs text-ink-soft font-medium mb-4">{cert.track}</p>

                <span className="inline-flex items-center gap-1 px-3 py-1.5 btn-signal rounded-xs text-xs font-bold">
                  Lihat Sertifikat
                  <ChevronRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview Sertifikat */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bevel-plate bg-canvas max-w-2xl w-full rounded-lg overflow-hidden border border-chrome-indigo shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 p-1.5 bg-carbon/80 text-on-primary rounded-full hover:bg-nintendo-red transition-colors z-20"
            >
              <X size={18} />
            </button>

            {/* Header Modal */}
            <div className="bg-carbon px-5 py-4 flex items-center gap-2">
              <Award size={16} className="text-nav-gold" />
              <span className="text-sm font-bold text-on-primary uppercase tracking-wider">
                {selectedCert.title}
              </span>
              {selectedCert.score !== undefined && (
                <span className="ml-auto px-2 py-0.5 bg-nav-gold text-carbon text-[10px] font-black uppercase tracking-wider rounded-xs">
                  Nilai {selectedCert.score}
                </span>
              )}
            </div>

            {/* Preview PDF */}
            <div className="p-4">
              <iframe
                src={selectedCert.file}
                title={`Sertifikat ${selectedCert.title}`}
                className="w-full h-72 sm:h-96 rounded-sm border border-chrome-indigo bg-surface"
              />
            </div>

            {/* Aksi */}
            <div className="px-6 pb-6 flex flex-wrap gap-2">
              <a
                href={selectedCert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 btn-nintendo rounded-xs text-xs font-bold"
              >
                <ExternalLink size={12} />
                Buka di Tab Baru
              </a>
              <a
                href={selectedCert.file}
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 btn-signal rounded-xs text-xs font-bold"
              >
                <Download size={12} />
                Unduh PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
