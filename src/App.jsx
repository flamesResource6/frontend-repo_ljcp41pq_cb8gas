import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import LiveSchedule from './components/LiveSchedule'
import Community from './components/Community'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <Categories />
      <LiveSchedule />
      <Community />
      <Footer />
    </div>
  )
}

export default App
