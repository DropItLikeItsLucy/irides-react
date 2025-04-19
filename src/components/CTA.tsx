// src/components/CTA.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="cta" className="bg-gradient-to-r from-irides-green via-green-700 to-green-800 py-16 lg:py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight drop-shadow">
        {t('ctaHeadline')}
        </h2>
        <p className="text-lg md:text-xl text-green-50 mb-8 max-w-3xl mx-auto">
        {t('ctaDescription')}
        </p>
        <Link
          to="/quote" // Should link to the actual quote form/section later
          className="bg-irides-green hover:bg-opacity-80 text-white font-bold py-2 px-5 rounded transition duration-150 ease-in-out shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-irides-green" // Added hover scale effect
        >
          {t('getFreeQuoteNow')}
        </Link>
        {/* Optional: Add a secondary, lower-commitment CTA */}
        {/* <p className="mt-6 text-sm text-gray-100">
             Have questions? <a href="mailto:sales@irides.example.com" className="underline hover:text-white">Contact our support team</a>.
           </p> */}
      </div>
    </section>
  );
};

export default CTA;