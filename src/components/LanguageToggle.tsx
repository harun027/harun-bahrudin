"use client";

import { useTranslation } from "react-i18next";
import icons from "@/public/assets/icons";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || "id";

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "id" ? "en" : "id";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`w-18 h-9 rounded-full transition-all duration-300 ${
        currentLanguage === "id" 
          ? "bg-[#111111] border" 
          : "bg-[#F2F4F7] border border-gray-300"
      }`}
      aria-label={`Switch to ${currentLanguage === "id" ? "English" : "Indonesian"}`}
    >
      <div
        className={`w-6 h-6 rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center overflow-hidden ${
          currentLanguage === "id" ? "translate-x-10" : "translate-x-1"
        }`}
      >
        {currentLanguage === "id" ? (
          <icons.IdIcon />
        ) : (
          <icons.EnIcon />
        )}
      </div>
    </button>
  );
} 