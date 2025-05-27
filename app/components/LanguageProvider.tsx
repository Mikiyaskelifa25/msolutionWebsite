"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "./ui/use-toast";

type Language = "en" | "sv" | "am" | "ti" | "om";

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Default translations
const translations: Translations = {
  "hero.title": {
    en: "Connecting Continents with Innovative Design and Technology",
    sv: "Förenar design och teknik mellan kontinenter",
    am: "በአህጉራት መካከል ዲዛይንና ቴክኖሎጂን ማገናኘት",
    ti: "Connecting Continents with Innovative Design and Technology", // Placeholder
    om: "Connecting Continents with Innovative Design and Technology", // Placeholder
  },
  "hero.subtitle": {
    en: "We are a modern software agency with roots in Ethiopia and Sweden, delivering cutting-edge digital solutions that transcend borders.",
    sv: "Vi är en modern mjukvarubyrå med rötter i Etiopien och Sverige, som levererar banbrytande digitala lösningar som överskrider gränser.",
    am: "በኢትዮጵያና በስዊድን ሥር መሠረት ያለን ዘመናዊ የሶፍትዌር ኤጀንሲ፣ ድንበሮችን አቋርጦ የሚያልፉ ዘመናዊ ዲጂታል መፍትሔዎችን እናቀርባለን።",
    ti: "We are a modern software agency with roots in Ethiopia and Sweden, delivering cutting-edge digital solutions that transcend borders.", // Placeholder
    om: "We are a modern software agency with roots in Ethiopia and Sweden, delivering cutting-edge digital solutions that transcend borders.", // Placeholder
  },
  "hero.cta": {
    en: "Get Started",
    sv: "Kom igång",
    am: "ይጀምሩ",
    ti: "Get Started", // Placeholder
    om: "Get Started", // Placeholder
  },
  "services.title": {
    en: "Our Services",
    sv: "Våra tjänster",
    am: "የእኛ አገልግሎቶች",
    ti: "Our Services", // Placeholder
    om: "Our Services", // Placeholder
  },
  "services.uiux": {
    en: "UI/UX Design",
    sv: "UI/UX-design",
    am: "UI/UX ዲዛይን",
    ti: "UI/UX Design", // Placeholder
    om: "UI/UX Design", // Placeholder
  },
  "services.graphicDesign": {
    en: "Graphic Design",
    sv: "Grafisk design",
    am: "ግራፊክ ዲዛይን",
    ti: "Graphic Design", // Placeholder
    om: "Graphic Design", // Placeholder
  },
  "services.businessCards": {
    en: "Business Cards",
    sv: "Visitkort",
    am: "የንግድ ካርዶች",
    ti: "Business Cards", // Placeholder
    om: "Business Cards", // Placeholder
  },
  "services.digitalMarketing": {
    en: "Digital Marketing",
    sv: "Digital marknadsföring",
    am: "ዲጂታል ማርኬቲንግ",
    ti: "Digital Marketing", // Placeholder
    om: "Digital Marketing", // Placeholder
  },
  "services.multilingual": {
    en: "Multilingual Support",
    sv: "Flerspråkigt stöd",
    am: "በብዙ ቋንቋዎች ድጋፍ",
    ti: "Multilingual Support", // Placeholder
    om: "Multilingual Support", // Placeholder
  },
  "portfolio.title": {
    en: "Our Portfolio",
    sv: "Vår portfölj",
    am: "የእኛ ስራዎች",
    ti: "Our Portfolio", // Placeholder
    om: "Our Portfolio", // Placeholder
  },
  "portfolio.viewMore": {
    en: "View More Projects",
    sv: "Visa fler projekt",
    am: "ተጨማሪ ፕሮጀክቶችን ይመልከቱ",
    ti: "View More Projects", // Placeholder
    om: "View More Projects", // Placeholder
  },
  "about.title": {
    en: "About Us",
    sv: "Om oss",
    am: "ስለ እኛ",
    ti: "About Us", // Placeholder
    om: "About Us", // Placeholder
  },
  "about.description": {
    en: "MSolutions is a digital agency that bridges cultures and expertise between East Africa and Scandinavia, bringing unique perspectives to every project.",
    sv: "MSolutions är en digital byrå som överbryggar kulturer och expertis mellan Östafrika och Skandinavien, och ger unika perspektiv på varje projekt.",
    am: "ኤም ሶሉሽንስ በምሥራቅ አፍሪካና በስካንዲኔቪያ መካከል ባህሎችንና ባለሙያዎችን የሚያገናኝ፣ ለእያንዳንዱ ፕሮጀክት ልዩ አመለካከቶችን የሚያመጣ ዲጂታል ኤጀንሲ ነው።",
    ti: "MSolutions is a digital agency that bridges cultures and expertise between East Africa and Scandinavia, bringing unique perspectives to every project.", // Placeholder
    om: "MSolutions is a digital agency that bridges cultures and expertise between East Africa and Scandinavia, bringing unique perspectives to every project.", // Placeholder
  },
  "languageSwitch": {
    en: "Language",
    sv: "Språk",
    am: "ቋንቋ",
    ti: "Language", // Placeholder
    om: "Language", // Placeholder
  },
  "themeSwitch": {
    en: "Theme",
    sv: "Tema",
    am: "ጭብጥ",
    ti: "Theme", // Placeholder
    om: "Theme", // Placeholder
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize with a default language or a safe fallback
  const [language, setLanguage] = useState<Language>("en"); 

  useEffect(() => {
    // This effect runs only on the client side after initial render
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && ["en", "sv", "am", "ti", "om"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Fallback to browser language if no saved language or invalid saved language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === "sv") setLanguage("sv");
      else if (browserLang === "am") setLanguage("am");
      else if (browserLang === "ti") setLanguage("ti");
      else if (browserLang === "om") setLanguage("om");
      // else it remains the default 'en' set in useState initial value
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    // This effect runs whenever the language state changes (on the client side)
    localStorage.setItem("language", language);
    
    // Show toast notification when language changes
    if (language === "en") {
      document.documentElement.lang = "en";
      toast({
        title: "Language changed",
        description: "The website language is now English"
      });
    } else if (language === "sv") {
      document.documentElement.lang = "sv";
      toast({
        title: "Språk ändrat",
        description: "Webbplatsens språk är nu Svenska"
      });
    } else if (language === "am") {
      document.documentElement.lang = "am";
      toast({
        title: "ቋንቋ ተቀይሯል",
        description: "የድህረ ገጹ ቋንቋ አሁን አማርኛ ነው"
      });
    } else if (language === "ti") {
      document.documentElement.lang = "ti";
      toast({
        title: "Language changed (Tigrinya)", // Placeholder
        description: "The website language is now Tigrinya" // Placeholder
      });
    } else if (language === "om") {
      document.documentElement.lang = "om";
      toast({
        title: "Language changed (Afaan Oromoo)", // Placeholder
        description: "The website language is now Afaan Oromoo" // Placeholder
      });
    }
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    
    return translations[key][language] || translations[key].en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
