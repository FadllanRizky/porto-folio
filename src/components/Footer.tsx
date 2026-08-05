import { Gamepad2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="carbon-slab border-t-2 border-chrome-indigo">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-nintendo-red rounded-xs">
              <Gamepad2 size={20} className="text-on-primary" />
            </div>
            <span className="font-display text-nav-gold text-sm font-bold uppercase tracking-wider">
              Padellan
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-canvas-soft text-center sm:text-right">
            &copy; {new Date().getFullYear()} Padellan Riski. All rights reserved.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-chrome-indigo/50 mb-6"></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-canvas-soft">
            <span className="font-bold uppercase tracking-wider">Full Stack Developer</span>
            <span className="text-chrome-indigo">|</span>
            <a
              href="mailto:fadllanrizky321@gmail.com"
              className="hover:text-signal-orange transition-colors"
            >
              fadllanrizky321@gmail.com
            </a>
          </div>

          {/* ESRB-style Badge */}
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 bg-amber rounded-xs">
              <span className="text-[8px] font-bold text-carbon uppercase tracking-wider">
                E
              </span>
            </div>
            <span className="text-[10px] text-canvas-soft uppercase tracking-wider font-bold">
              Everyone
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
