// src/components/Hero.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className=" from-green-50 via-white to-green-50 py-20 md:py-32 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight drop-shadow-sm">
        {t('heroHeadline')}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        {t('heroDescription')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/quote" // Placeholder link
            className="inline-block bg-irides-700 hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded text-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-irides-500 active:bg-irides-800"
          >
            {t('requestQuote')}
          </Link>
          <a
            href="#services" // Link to services section
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded text-lg transition duration-150 ease-in-out border border-gray-300 shadow-sm hover:shadow"
          >
            {t('browseServices')}
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