import { ArrowDown, Mail } from 'lucide-react'
import fotoProfil from '../assets/Fadllan.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-violet-700 to-purple-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto">
        <img
          src={fotoProfil}
          alt="Padellan Riski"
          className="w-28 h-28 mx-auto mb-8 rounded-full object-cover border-4 border-white/30 shadow-xl shadow-indigo-900/50"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Padellan Riski
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 font-medium mb-3">
          Full Stack Developer
        </p>

        <p className="text-white/60 max-w-lg mx-auto mb-10">
          Mengubah ide menjadi solusi digital yang fungsional dan elegan.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <Mail size={18} />
            Hubungi Saya
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            Lihat Proyek
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
