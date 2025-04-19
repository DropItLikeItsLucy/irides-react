// src/components/Services.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Interface for individual service item data
interface ServiceItemData {
  title: string;
  imageUrl?: string; // Optional image URL (use placeholders for now)
  altText: string;
  icon?: React.ReactNode; // Optional icon component
}




// Sub-component for a single Service Card
const ServiceCard: React.FC<ServiceItemData> = ({ title, imageUrl, altText, icon }) => {
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-200 ease-in-out border border-gray-100 flex flex-col items-center justify-center aspect-square">
      {/* Prioritize image if available, otherwise icon */}
      {imageUrl ? (
        <img
            // Use placeholder if actual image isn't ready
            src={imageUrl || `https://via.placeholder.com/80x80.png?text=${encodeURIComponent(title)}`}
            alt={altText}
            className="w-60 h-60 mb-4 object-contain" // Use object-contain
            loading="lazy" // Lazy load images below the fold
         />
      ) : icon ? (
        <div className="w-16 h-16 mb-4 flex items-center justify-center">{icon}</div>
      ) : (
         // Fallback placeholder if neither image nor icon provided
         <div className="w-16 h-16 mb-4 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
            Img
         </div>
      )}
      <h4 className="text-base md:text-lg font-semibold text-gray-800">{title}</h4>
    </div>
  );
};


// Main Services Section Component
const Services: React.FC = () => {
  const { t } = useTranslation();
  // Data array for services - makes it easy to add/remove services
  const servicesData: ServiceItemData[] = [
    { title: t('serviceBusinessCards'), imageUrl: '/images/services/business-cards.png', altText: t('serviceBusinessCardsAlt') },
    { title: t('serviceLeaflets'), imageUrl: '/images/services/flyers.png', altText: t('serviceLeafletsAlt') },
    { title: t('serviceBooks'), imageUrl: '/images/services/books.png', altText: t('serviceBooksAlt') },
    { title: t('serviceMagazines'), imageUrl: '/images/services/magazines.png', altText: t('serviceMagazinesAlt') },
    { title: t('servicePosters'), imageUrl: '/images/services/posters.png', altText: t('servicePostersAlt') },
    { title: t('serviceBrochures'), imageUrl: '/images/services/brochures.png', altText: t('serviceBrochuresAlt') },
    { title: t('servicePackaging'), imageUrl: '/images/services/packaging.png', altText: t('servicePackagingAlt') },
    { title: t('serviceMore'), imageUrl: '/images/services/more.png', altText: t('serviceMoreAlt') },
  ];
  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"> {/* Subtle gradient background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {t('servicesHeadline')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('servicesDescription')}
          </p>
        </div>

        {/* Responsive Grid for Service Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imageUrl={service.imageUrl}
              altText={service.altText}
              icon={service.icon} // Pass icon if defined in data
            />
          ))}
        </div>

        {/* Optional: Add a CTA linking to a more detailed services page or the quote form */}
        <div className="text-center mt-12 lg:mt-16">
          <Link
            to="/quote" // Link to quote form section
            className="inline-block bg-irides-green hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded text-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-irides-green"
          >
            {t('discussProject')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;