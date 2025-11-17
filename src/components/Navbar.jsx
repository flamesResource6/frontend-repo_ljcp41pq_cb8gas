import { useState } from 'react'
import { Menu, X, Brain, GraduationCap, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Categories', href: '#categories' },
    { label: 'Live', href: '#live' },
    { label: 'Community', href: '#community' },
    { label: 'Certification', href: '#certification' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-yellow-400 via-amber-500 to-yellow-600 text-white">
              <Brain className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wider text-neutral-900">OMA</p>
              <p className="text-[10px] uppercase text-neutral-500">Online Money Academy</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a key={item.label} href={item.href} className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900">
              <User className="h-4 w-4" /> Sign in
            </a>
            <a href="#signup" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800">
              <GraduationCap className="h-4 w-4" /> Join as Student
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-neutral-200">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              {navItems.map(item => (
                <a key={item.label} href={item.href} className="px-2 py-2 rounded-md text-sm hover:bg-neutral-100">
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a href="#login" className="flex-1 text-center px-3 py-2 rounded-md border border-neutral-200 text-sm">Sign in</a>
                <a href="#signup" className="flex-1 text-center px-3 py-2 rounded-md bg-neutral-900 text-white text-sm">Join</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
