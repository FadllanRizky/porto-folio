import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-deep-green">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-normal leading-tight tracking-[-0.48px] text-on-primary mb-4">
          Hubungi Saya
        </h2>

        <p className="text-base text-white/70 mb-10 max-w-md mx-auto">
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya.
        </p>

        <a
          href="mailto:fadllanrizky321@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-on-primary text-primary text-sm font-medium rounded-pill hover:opacity-90 transition-opacity"
        >
          <Mail size={20} />
          fadllanrizky321@gmail.com
          <Send size={18} />
        </a>

        <p className="mt-6 text-sm text-white/50">
          Klik untuk mengirim email langsung
        </p>
      </div>
    </section>
  )
}
