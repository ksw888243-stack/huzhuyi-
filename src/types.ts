export type Language = 'en' | 'zh' | 'de';

export interface Translations {
  navProducts: string;
  navAbout: string;
  navAdvantages: string;
  navSolutions: string;
  navNews: string;
  navContact: string;
  heroTagline: string;
  heroSubtitle: string;
  heroCtA: string;
  heroCtALearn: string;
  categoryPivot: string;
  categorySingle: string;
  categoryDouble: string;
  categoryIron: string;
  categoryGarage: string;
  specsDimensions: string;
  specsMaterial: string;
  specsLock: string;
  specsThermal: string;
  specsAcoustic: string;
  advantagesTitle: string;
  advantagesSubtitle: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutOffice: string;
  aboutFactory: string;
  aboutShowroom: string;
  aboutCertificates: string;
  solutionsTitle: string;
  solutionsSubtitle: string;
  newsTitle: string;
  newsSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormPhone: string;
  contactFormDoorType: string;
  contactFormMessage: string;
  contactFormSubmit: string;
  contactFormSuccess: string;
  customDesignHeading: string;
  customDesignSubheading: string;
}

export type CategoryType = 'pivot' | 'single' | 'double' | 'iron' | 'garage';

export interface Product {
  id: string;
  category: CategoryType;
  name: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  features: Record<Language, string[]>;
  specifications: {
    dimensions: Record<Language, string>;
    material: Record<Language, string>;
    lockType: Record<Language, string>;
    thermalU: string; // Thermal heat coefficient
    acousticDb: string; // Acoustic noise reduction in dB
  };
}

export interface Advantage {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string; // Lucide icon name
  image: string;
  details: Record<Language, string[]>;
}

export interface Solution {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  bgImage: string;
  tags: Record<Language, string[]>;
}

export interface NewsArticle {
  id: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  date: string;
  category: Record<Language, string>;
  image: string;
  content: Record<Language, string>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  skype: string;
  address: Record<Language, string>;
}
