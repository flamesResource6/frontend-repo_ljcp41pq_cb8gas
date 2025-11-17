import { motion } from 'framer-motion'
import { Video, Palette, Code2, PenTool, Zap, Megaphone } from 'lucide-react'

const categories = [
  { key: 'video', name: 'AI for Videos', icon: Video, color: 'from-yellow-200 via-amber-300 to-yellow-400' },
  { key: 'design', name: 'AI for Design', icon: Palette, color: 'from-amber-200 via-yellow-300 to-amber-400' },
  { key: 'dev', name: 'AI for Developers', icon: Code2, color: 'from-yellow-200 via-amber-300 to-yellow-400' },
  { key: 'writing', name: 'AI for Writing & Marketing', icon: Megaphone, color: 'from-amber-200 via-yellow-300 to-amber-400' },
  { key: 'automation', name: 'AI for Automations', icon: Zap, color: 'from-yellow-200 via-amber-300 to-yellow-400' },
  { key: 'money', name: 'Marketing & Monetization', icon: PenTool, color: 'from-amber-200 via-yellow-300 to-amber-400' },
]

export default function Categories() {
  return (
    <section id="categories" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Choose your path</h2>
          <p className="mt-3 text-neutral-600">Curated tracks with live cohorts, projects, and certificates upon completion.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ key, name, icon: Icon, color }) => (
            <motion.a
              key={key}
              href={`#category-${key}`}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr ${color} text-neutral-900`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{name}</h3>
              <p className="mt-2 text-sm text-neutral-600">Live classes, resources and a thriving community.</p>
              <div className="mt-4 text-sm font-medium text-amber-700">Explore →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
