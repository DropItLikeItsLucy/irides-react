// src/components/Testimonials.tsx
import React from 'react';

// Interface for testimonial data
interface TestimonialData {
  quote: string;
  name: string;
  title: string; // e.g., "CEO, ExampleCorp" or "Small Business Owner"
  // imageUrl?: string; // Optional: Add image URL for avatar later
}

// Sample testimonial data
const testimonials: TestimonialData[] = [
  {
    quote: "IRIDES delivered our marketing materials ahead of schedule and the quality was outstanding for our recent trade show. Their pricing is very competitive too!",
    name: 'Jane D.',
    title: 'Marketing Manager, Tech Startup',
    // imageUrl: "/images/testimonials/jane-d.jpg"
  },
  {
    quote: "We needed complex book printing with specific binding for a corporate event. IRIDES handled everything professionally and the final product exceeded our expectations. Highly recommended.",
    name: 'John S.',
    title: 'Events Coordinator, Finance Group',
    // imageUrl: "/images/testimonials/john-s.jpg"
  },
  // Add a third one if you have it - 2 or 3 is usually good
  // {
  //   quote: "Fast, reliable, and the print quality for our packaging was top-notch. IRIDES is our go-to printer now.",
  //   name: 'Maria Garcia',
  //   title: 'Founder, Artisan Goods Co.'
  // }
];

// Main Testimonials Component
const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-b from-green-50 via-green-100 to-green-50"> {/* Light blue background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Businesses Like Yours
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our satisfied clients are saying about IRIDES.
          </p>
        </div>

        {/* Testimonials Grid/Container */}
        {/* Using max-w-5xl to constrain width a bit, adjust as needed */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 flex flex-col">
              {/* Optional: Add Quote Icon */}
               <svg className="w-8 h-8 text-green-200 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                 <path d="M9.333 8h-8v16h10.667v-10.667h-2.667q0-2.048 1.365-4.031t3.281-2.635v-3.031q-3.646 1.042-6.198 4.198t-2.453 7.135h-4.667zM25.333 8h-8v16h10.667v-10.667h-2.667q0-2.048 1.365-4.031t3.281-2.635v-3.031q-3.646 1.042-6.198 4.198t-2.453 7.135h-4.667z"></path>
               </svg>

              {/* Quote Text */}
              <p className="text-gray-700 italic text-lg leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <footer className="flex items-center mt-auto">
                {/* Optional: Avatar Image */}
                {/* {testimonial.imageUrl && (
                  <img className="w-12 h-12 rounded-full mr-4 object-cover" src={testimonial.imageUrl} alt={testimonial.name} loading="lazy"/>
                )} */}
                {/* Placeholder if no image */}
                 {!testimonial.imageUrl && (
                    <div className="w-12 h-12 rounded-full mr-4 bg-green-100 flex items-center justify-center text-green-600 font-semibold">
                       {testimonial.name.substring(0, 1)} {/* Initials */}
                    </div>
                 )}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Optional: Add client logos here later */}
        {/* <div className="mt-16 text-center">
          <h4 className="text-sm font-semibold uppercase text-gray-500 mb-6 tracking-wider">Proudly Serving Clients Including:</h4>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition duration-300">
             <img src="/images/logos/client-logo-1.svg" alt="Client Logo 1" className="h-10 lg:h-12"/>
             <img src="/images/logos/client-logo-2.svg" alt="Client Logo 2" className="h-10 lg:h-12"/>
             <img src="/images/logos/client-logo-3.png" alt="Client Logo 3" className="h-10 lg:h-12"/>
             Add more logos
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;