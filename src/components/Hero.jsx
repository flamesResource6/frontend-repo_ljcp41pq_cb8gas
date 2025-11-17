import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Learn AI skills for the new economy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-neutral-300 text-lg"
            >
              OMA — Online Money Academy. Live, cohort-based classes with recordings, community, and certifications. Start with videos, design, dev, writing & marketing, or automations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#categories" className="inline-flex justify-center items-center px-6 py-3 rounded-md text-neutral-900 bg-gradient-to-tr from-yellow-300 via-amber-400 to-yellow-500 font-semibold">
                Explore Categories
              </a>
              <a href="#live" className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-white/20 hover:bg-white/5">
                See Live Schedule
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950"></div>
    </section>
  )
}
