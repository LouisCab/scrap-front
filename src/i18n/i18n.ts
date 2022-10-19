import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from './translation.fr.json';

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
    },
  },
  fr: {
    translation: translation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
