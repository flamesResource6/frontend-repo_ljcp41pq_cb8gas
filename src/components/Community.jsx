import { MessageSquare, Tag, Users } from 'lucide-react'

const topics = [
  { category: 'AI for Videos', threads: 42, tag: 'video' },
  { category: 'AI for Design', threads: 31, tag: 'design' },
  { category: 'AI for Developers', threads: 55, tag: 'dev' },
  { category: 'Writing & Marketing', threads: 27, tag: 'writing' },
  { category: 'Automations', threads: 19, tag: 'automation' },
]

export default function Community() {
  return (
    <section id="community" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-amber-600" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">Community by category</h2>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {topics.map((t, i) => (
            <a key={i} href={`#category-${t.tag}`} className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-neutral-900">{t.category}</h3>
                  <p className="text-sm text-neutral-600 mt-1">{t.threads} active threads</p>
                </div>
                <div className="inline-flex items-center gap-2 text-amber-700 text-sm">
                  <MessageSquare className="h-4 w-4" /> Join discussion
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-xs text-neutral-600 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1">
                  <Tag className="h-3 w-3" /> {t.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
