// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files directly (simplest setup)
// You'll create these JSON files in the next step
import enTranslation from '../public/locales/en/translation.json';
import kaTranslation from '../public/locales/ka/translation.json';

i18n
  // Detect user language
  // Learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  // For all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: import.meta.env.DEV, // Enable debug output in development
    fallbackLng: 'ka', // Use 'en' if detected language is not available
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: enTranslation, // English translations
      },
      ka: {
        translation: kaTranslation, // Georgian translations
      },
    },
    // Configuration for language detector (optional but recommended)
    detection: {
      // Order and from where user language should be detected
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      // Caches the language selection in localStorage
      caches: ['localStorage'],
    },
  });

export default i18n;