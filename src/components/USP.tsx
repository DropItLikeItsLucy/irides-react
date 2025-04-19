// src/components/USP.tsx
import React from 'react';

// Define an interface for the props of a single USP item for type safety
interface UspItemProps {
  icon: React.ReactNode; // Allows passing SVG components or other JSX
  title: string;
  description: string;
}

// Sub-component for individual USP items (optional, but good practice)
const UspItem: React.FC<UspItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 shadow-sm">
        {icon} {/* Render the SVG icon passed as a prop */}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};


// Main USP Section Component
const USP: React.FC = () => {
  return (
    <section id="usp" className="py-16 lg:py-24 bg-white"> {/* Added id for potential linking */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         {/* Optional: Add a section title if desired */}
         {/* <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose IRIDES?</h2> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {/* USP Item 1: Speed */}
          <UspItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-irides-green">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            }
            title="Lightning-Fast Turnaround"
            description="Get your prints delivered quickly without compromising on quality. We meet your deadlines, every time."
          />

          {/* USP Item 2: Quality */}
          <UspItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-irides-green">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            }
            title="Premium Print Quality"
            description="Experience vibrant colors, sharp details, and durable materials that make a professional impression."
          />

          {/* USP Item 3: Price */}
          <UspItem
            icon={
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-irides-green">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.75A.75.75 0 0 1 3 4.5h.75m12.75 0v.75a.75.75 0 0 0-.75.75h.75m0 0H21m-1.5-1.5v.75A.75.75 0 0 1 18.75 6h.75m0 0V4.5a.75.75 0 0 0-.75-.75h-.75M5.25 6h9.5M2.25 10.5v3a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75Zm13.5 0v3a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75Z" /> {/* Price Tag Icon */}
               </svg>
            }
            title="Competitive Pricing"
            description="Receive top-tier printing services that fit your budget. Get transparent quotes with no hidden fees."
          />
        </div>
      </div>
    </section>
  );
};

export default USP;