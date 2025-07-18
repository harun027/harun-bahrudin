import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./public/locales/en.json";
import id from "./public/locales/id.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: { translation: en },
    id: { translation: id },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
