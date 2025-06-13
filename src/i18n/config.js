import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Load translations using http (e.g., from /public/locales)
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Default language
    debug: false, // Set to true for debugging
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/the-trinity-metals/locales/{{lng}}/translation.json', // Path to translation files
    },
  });

export default i18n;