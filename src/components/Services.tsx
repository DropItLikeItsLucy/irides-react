// src/components/Services.tsx
import React from 'react';

// Interface for individual service item data
interface ServiceItemData {
  title: string;
  imageUrl?: string; // Optional image URL (use placeholders for now)
  altText: string;
  icon?: React.ReactNode; // Optional icon component
}

// Data array for services - makes it easy to add/remove services
const servicesData: ServiceItemData[] = [
  { title: 'Business Cards', imageUrl: '/images/services/business-cards.png', altText: 'Business Cards Icon' }, // Example path
  { title: 'Leaflets & Flyers', imageUrl: '/images/services/flyers.png', altText: 'Leaflets & Flyers Icon' },
  { title: 'Books & Booklets', imageUrl: '/images/services/books.png', altText: 'Books & Booklets Icon' },
  { title: 'Magazines', imageUrl: '/images/services/magazines.png', altText: 'Magazines Icon' },
  { title: 'Posters', imageUrl: '/images/services/posters.png', altText: 'Posters Icon' },
  { title: 'Brochures', imageUrl: '/images/services/brochures.png', altText: 'Brochures Icon' },
  { title: 'Custom Packaging', imageUrl: '/images/services/packaging.png', altText: 'Custom Packaging Icon' },
  { title: 'And Much More...', imageUrl: '/images/services/more.png', altText: 'More printing services Icon' },
];


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
            className="w-80 h-80 mb-4 object-contain" // Use object-contain
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
  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"> {/* Subtle gradient background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Wide Range of Printing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We handle projects big and small, ensuring consistent quality across all your printed materials.
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
          <a
            href="#quote-form" // Link to quote form section
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded text-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;