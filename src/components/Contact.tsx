import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-900/50 text-indigo-300 text-sm font-medium rounded-full border border-indigo-800/50 mb-6">
          <Mail size={16} />
          Kontak
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Hubungi Saya
        </h2>

        <p className="text-gray-500 mb-10 max-w-md mx-auto">
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya.
        </p>

        <a
          href="mailto:fadllanrizky321@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all"
        >
          <Mail size={20} />
          fadllanrizky321@gmail.com
          <Send size={18} />
        </a>

        <p className="mt-6 text-sm text-gray-500">
          Klik untuk mengirim email langsung
        </p>
      </div>
    </section>
  )
}
