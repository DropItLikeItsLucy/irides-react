// src/App.tsx
import Navbar from './components/Navbar' // Import Navbar
import Hero from './components/Hero'     // Import Hero
// Import other components later
import USP from './components/USP' // <-- Import USP
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'   // Import Footer later

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-800"> {/* Added base font styles */}
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <USP /> 
        <Services /> 
        <HowItWorks /> 
        <Testimonials />
        <CTA />
      </main>
      <Footer />
       
    </div>
  )
}

export default App