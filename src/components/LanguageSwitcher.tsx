// src/components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language.split('-')[0]; // Get base language ('en' or 'ka')

  return (
    <div className="flex items-center space-x-2 text-sm">
      <button
        onClick={() => changeLanguage('en')}
        className={`
          px-2 py-1 rounded transition-colors duration-150 ease-in-out
          ${currentLanguage === 'en' ? 'font-bold text-irides-950' : 'text-gray-500 hover:text-gray-800'}
        `}
        aria-pressed={currentLanguage === 'en'} // Accessibility
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => changeLanguage('ka')}
        className={`
          px-2 py-1 rounded transition-colors duration-150 ease-in-out
          ${currentLanguage === 'ka' ? 'font-bold text-irides-950' : 'text-gray-500 hover:text-gray-800'}
        `}
        aria-pressed={currentLanguage === 'ka'} // Accessibility
      >
        GE
      </button>
    </div>
  );
};

export default LanguageSwitcher;