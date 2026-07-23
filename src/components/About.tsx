import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-soft-stone">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-coral text-white text-xs font-medium rounded-pill mb-6 tracking-[0.28px] uppercase">
          <Sparkles size={14} />
          About
        </span>

        <h2 className="font-display text-4xl sm:text-5xl font-normal leading-tight tracking-[-0.48px] text-ink mb-6">
          Tentang Saya
        </h2>

        <p className="text-lg text-body-muted leading-relaxed mb-8 max-w-2xl mx-auto">
          Halo! Saya <span className="font-semibold text-ink">Padellan Riski</span>,
          seorang Full Stack Developer yang antusias dalam membangun aplikasi web
          dari ujung ke ujung. Dengan pengalaman di berbagai teknologi modern,
          saya selalu berusaha menghadirkan solusi yang efisien, scalable, dan
          ramah pengguna.
        </p>

        <span className="inline-block px-4 py-2 text-xs text-muted border border-hairline rounded-sm tracking-[0.28px] uppercase">
          # Full Stack Developer
        </span>
      </div>
    </section>
  )
}
