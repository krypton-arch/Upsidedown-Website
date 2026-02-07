import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ThreatMeter from './components/ThreatMeter'
import MissionBriefing from './components/MissionBriefing'
import Features from './components/Features'
import DownloadSection from './components/DownloadSection'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app crt-screen flicker">
      {/* CRT Effects Overlay */}
      <div className="crt-overlay"></div>
      <div className="crt-scanline"></div>
      <div className="vignette"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <ThreatMeter />
        <MissionBriefing />
        <Features />
        <HowItWorks />
        <Screenshots />
        <DownloadSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
