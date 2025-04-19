// src/components/Navbar.tsx
import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  // Later, maybe add state for mobile menu toggle
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-irides-700 hover:text-irides-950 transition duration-150 ease-in-out">
            {t('iridesBrand')}
            </a>
          </div>

          {/* Desktop Menu & CTA (Hidden on mobile for now) */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Optional: Add links here later if needed e.g., to #services */}
            {/* <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a> */}
            {/* <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a> */}
            <LanguageSwitcher /> 
            <a // Changed button to link for quote page/modal later
              href="#quote-form" // Placeholder link, update later
              className="bg-irides-green hover:bg-opacity-80 text-white font-bold py-2 px-5 rounded transition duration-150 ease-in-out shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-irides-green"
            >
              {t('getQuote')} 
            </a>
          </div>

          {/* Mobile Menu Button (Placeholder functionality) */}
          <div className="md:hidden flex items-center">
             <a // Changed button to link for quote page/modal later
              href="#quote-form" // Placeholder link, update later
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm transition duration-150 ease-in-out shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t('getQuote')} 
            </a>
            {/* <button
              // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Add state later
              type="button"
              className="ml-3 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false" // Change based on state later
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg> */}
              {/* Icon when menu is open. */}
              {/* <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
               </svg> */}
            {/* </button> */}
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state - Add later */}
      {/* <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
           <a href="#services" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Services</a>
           <a href="#contact" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
           <div className="px-2 space-y-1">
            <a
              href="#quote-form" // Placeholder link
              className="block w-full px-4 py-2 text-center text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get a Quote
            </a>
           </div>
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;