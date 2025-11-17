export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold">OMA</h4>
            <p className="mt-2 text-sm text-neutral-400">Online Money Academy — empowering Cameroonians with AI skills for the digital economy.</p>
          </div>
          <div>
            <h5 className="text-white font-semibold">Academy</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#categories" className="hover:text-white">Tracks</a></li>
              <li><a href="#live" className="hover:text-white">Live sessions</a></li>
              <li><a href="#community" className="hover:text-white">Community</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Company</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Policy</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-neutral-500">© {new Date().getFullYear()} OMA. All rights reserved.</div>
      </div>
    </footer>
  )
}
