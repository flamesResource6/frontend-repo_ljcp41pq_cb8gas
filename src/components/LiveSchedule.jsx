import { motion } from 'framer-motion'
import { CalendarDays, Clock, Video, User2 } from 'lucide-react'

const sessions = [
  { title: 'Kickoff: AI for Video Editing', teacher: 'Mireille N.', date: 'Fri, Nov 22', time: '6:00 PM WAT', duration: '90 min', icon: Video },
  { title: 'Prompting for Design', teacher: 'Boris A.', date: 'Sat, Nov 23', time: '4:00 PM WAT', duration: '75 min', icon: Video },
  { title: 'Building with AI APIs', teacher: 'Ndolo C.', date: 'Sun, Nov 24', time: '7:00 PM WAT', duration: '120 min', icon: Video },
]

export default function LiveSchedule() {
  return (
    <section id="live" className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-amber-600" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">Upcoming live sessions</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {sessions.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="rounded-2xl bg-white border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-amber-600" />
                <h3 className="font-semibold text-neutral-900">{s.title}</h3>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-neutral-600">
                <User2 className="h-4 w-4" /> {s.teacher}
              </div>
              <div className="mt-2 flex items-center gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {s.time}</div>
                <div className="text-neutral-500">{s.date}</div>
                <div className="text-neutral-500">{s.duration}</div>
              </div>
              <div className="mt-6">
                <button className="w-full rounded-md bg-neutral-900 text-white py-2 text-sm font-medium hover:bg-neutral-800">Notify me</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
