"use client"

import { useLanguage } from "./language-provider"

export function useTranslation() {
  const { language, translations } = useLanguage()

  const t = (key: string) => {
    const keys = key.split(".")
    let value = translations

    for (const k of keys) {
      if (value[k]) {
        value = value[k]
      } else {
        return key
      }
    }

    if (typeof value === "object" && value[language]) {
      return value[language]
    }

    return key
  }

  return { t, language }
}
