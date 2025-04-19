// src/components/Footer.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto"> {/* mt-auto helps stick to bottom in flex-col layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="text-center text-gray-600">
          {/* Copyright */}
          <p className="text-sm mb-2">
            © {currentYear} {t('footerCopyright')}
          </p>

          {/* Optional Links (Add actual links later) */}
          <div className="text-sm space-x-4">
            {/* <a href="/privacy-policy" className="hover:text-gray-900 hover:underline">Privacy Policy</a>
            <span aria-hidden="true">|</span>
            <a href="/terms-of-service" className="hover:text-gray-900 hover:underline">Terms of Service</a> */}
            {/* Add other links if needed, e.g., Contact page */}
          </div>

          {/* Optional: Minimal Contact Info (If desired in footer) */}
          {/* <p className="text-xs mt-3 text-gray-500">
              Contact us: <a href="mailto:sales@irides.example.com" className="hover:text-gray-900">sales@irides.example.com</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;