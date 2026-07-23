export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Padellan Riski. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="hidden sm:inline">Full Stack Developer</span>
          <span className="hidden sm:inline">·</span>
          <a href="mailto:fadllanrizky321@gmail.com" className="hover:text-indigo-400 transition-colors">
            fadllanrizky321@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
