import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations'; // Import the single translation file

i18n.use(initReactI18next).init({
  resources: translations, // Load translations from the single file
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  debug: true, // Enable debug mode in development
});

export default i18n;