// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 md:py-32 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight drop-shadow-sm">
          Quality Printing, Fast Turnaround, Great Prices
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          From business cards and leaflets to magazines, books, and custom packaging – IRIDES delivers professional printing solutions tailored for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#quote-form" // Placeholder link
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded text-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Request a Custom Quote
          </a>
          <a
            href="#services" // Link to services section
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded text-lg transition duration-150 ease-in-out border border-gray-300 shadow-sm hover:shadow"
          >
            Browse Services
          </a>
          {/* We could potentially make the second button an order link for simple items later */}
        </div>
        {/* Optional: Add a high-quality visual below the buttons later */}
        {/* <img
             src="/images/irides-hero-montage.jpg" // Example path - Place images in public/images
             alt="Examples of print work by IRIDES: business cards, magazines, packaging"
             className="mt-12 mx-auto max-w-4xl rounded-lg shadow-lg"
             width={1200} // Add dimensions for performance
             height={600} // Add dimensions for performance
           /> */}
      </div>
    </section>
  );
};

export default Hero;