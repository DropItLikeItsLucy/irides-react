// src/components/HowItWorks.tsx
import React from 'react';

// Interface for step data
interface StepData {
  stepNumber: number;
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional: Add specific icons per step later
}

// Data for the steps
const steps: StepData[] = [
  {
    stepNumber: 1,
    title: 'Submit Your Request',
    description: 'Contact us with your project specs for a custom quote, or easily configure options for standard items like business cards.',
    // icon: <SomeIconComponent /> // Example
  },
  {
    stepNumber: 2,
    title: 'Upload & Approve',
    description: 'Use our simple upload tool for your design files. We’ll provide a digital proof for your review and approval before printing.',
  },
  {
    stepNumber: 3,
    title: 'Fast Production & Delivery',
    description: 'Once approved, your order moves swiftly through production. We print, finish, and ship your high-quality materials right to your door.',
  },
];

// Main HowItWorks Component
const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple Steps to Perfect Prints
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your professional printing done is easy with IRIDES.
          </p>
        </div>

        {/* Steps Container - using Flexbox for layout */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={step.stepNumber} className="flex-1 text-center max-w-sm mx-auto md:mx-0">
              {/* Step Number Circle */}
              <div className="relative mb-5">
                 {/* Optional: Connecting line for desktop view */}
                 {index < steps.length - 1 && (
                   <div className="hidden md:block absolute top-1/2 left-full w-1/2 border-t-2 border-dashed border-gray-300" style={{ transform: 'translateY(-50%)' }}></div>
                 )}
                 {index > 0 && (
                    <div className="hidden md:block absolute top-1/2 right-full w-1/2 border-t-2 border-dashed border-gray-300" style={{ transform: 'translateY(-50%)' }}></div>
                 )}

                <div className="relative z-10 bg-green-100 text-irides-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm text-2xl font-bold">
                  {step.stepNumber}
                </div>
              </div>


              {/* Step Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              {/* Step Description */}
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;