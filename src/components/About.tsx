import { Code2, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/50 text-indigo-300 text-sm font-medium rounded-full border border-indigo-800/50 mb-6">
          <Sparkles size={16} />
          Tentang Saya
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Siapa Saya?
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed mb-8">
          Halo! Saya <span className="font-semibold text-white">Padellan Riski</span>,
          seorang Full Stack Developer yang antusias dalam membangun aplikasi web
          dari ujung ke ujung. Dengan pengalaman di berbagai teknologi modern,
          saya selalu berusaha menghadirkan solusi yang efisien, scalable, dan
          ramah pengguna.
        </p>

        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full shadow-md">
          <Code2 size={18} />
          # Full Stack Developer
        </div>
      </div>
    </section>
  )
}
