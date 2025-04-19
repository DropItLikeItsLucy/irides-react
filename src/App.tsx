// src/App.tsx
import Navbar from './components/Navbar' // Import Navbar
import Hero from './components/Hero'     // Import Hero
// Import other components later
import USP from './components/USP' // <-- Import USP
import Services from './components/Services'
import Footer from './components/Footer'   // Import Footer later

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-800"> {/* Added base font styles */}
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <USP /> {/* <-- Add USP component here */}
        <Services /> {/* <-- Add Services component here */}
        {/* Add other section components here later */}
        {/* <USP /> */}
        {/* <Services /> */}
        {/* <HowItWorks /> */}
        {/* <Testimonials /> */}
        {/* <CTA /> */}
      </main>
      {/* <Footer /> Add Footer component later */}
       <footer className="bg-gray-100 text-gray-600 text-center p-4 mt-12"> {/* Temporary Footer */}
          © {new Date().getFullYear()} IRIDES Printing House. All rights reserved.
       </footer>
    </div>
  )
}

export default App