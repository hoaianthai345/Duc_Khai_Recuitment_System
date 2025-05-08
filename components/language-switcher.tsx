"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      title={language === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
    >
      <Globe className="h-5 w-5" />
      <span className="ml-2 hidden md:inline">{language === "vi" ? "EN" : "VI"}</span>
    </Button>
  )
}
