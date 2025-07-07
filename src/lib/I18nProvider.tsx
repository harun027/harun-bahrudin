// src/providers/I18nProvider.tsx
"use client";

import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n"; // pastikan ini benar

interface Props {
  children: ReactNode;
}

export default function I18nProvider({ children }: Props) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
