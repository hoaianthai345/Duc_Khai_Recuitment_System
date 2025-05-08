"use client"

import { createContext, useState, useContext, type ReactNode } from "react"

type Language = "vi" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  translations: Record<string, Record<string, string>>
}

const defaultTranslations = {
  common: {
    home: {
      vi: "Trang chủ",
      en: "Home",
    },
    about: {
      vi: "Về chúng tôi",
      en: "About Us",
    },
    careers: {
      vi: "Cơ hội nghề nghiệp",
      en: "Careers",
    },
    contact: {
      vi: "Liên hệ",
      en: "Contact",
    },
    login: {
      vi: "Đăng nhập",
      en: "Login",
    },
    register: {
      vi: "Đăng ký",
      en: "Register",
    },
  },
  landing: {
    hero: {
      title: {
        vi: "Tham gia đội ngũ Đức Khải",
        en: "Join Duc Khai Team",
      },
      description: {
        vi: "Chúng tôi luôn tìm kiếm những tài năng xuất sắc để cùng nhau phát triển và đổi mới. Khám phá cơ hội nghề nghiệp tại Đức Khải ngay hôm nay.",
        en: "We are always looking for outstanding talents to grow and innovate together. Explore career opportunities at Duc Khai today.",
      },
      viewJobs: {
        vi: "Xem vị trí tuyển dụng",
        en: "View Job Openings",
      },
      learnMore: {
        vi: "Tìm hiểu thêm",
        en: "Learn More",
      },
    },
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "vi",
  setLanguage: () => {},
  translations: defaultTranslations,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi")

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations: defaultTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
