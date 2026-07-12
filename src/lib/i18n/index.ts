import { derived, writable } from 'svelte/store';
import type { Writable, Readable } from 'svelte/store';

export type Language = 'en' | 'it' | 'de';

export interface Translations {
  [key: string]: string | Translations;
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      leopoldo: 'Leopoldo',
      stories: 'Stories',
      otherStories: 'Other Stories',
      shorts: 'Shorts',
      blogPosts: 'Blog Posts'
    },
    ui: {
      language: 'Language',
      home: 'Home'
    }
  },
  it: {
    nav: {
      leopoldo: 'Leopoldo',
      stories: 'Storie',
      otherStories: 'Altre Storie',
      shorts: 'Racconti Brevi',
      blogPosts: 'Post del Blog'
    },
    ui: {
      language: 'Lingua',
      home: 'Home'
    }
  },
  de: {
    nav: {
      leopoldo: 'Leopoldo',
      stories: 'Geschichten',
      otherStories: 'Andere Geschichten',
      shorts: 'Kurzgeschichten',
      blogPosts: 'Blog-Beiträge'
    },
    ui: {
      language: 'Sprache',
      home: 'Startseite'
    }
  }
};

export const currentLanguage: Writable<Language> = writable<Language>('en');

export const t: Readable<(key: string) => string> = derived(
  currentLanguage,
  ($currentLanguage) => {
    return (key: string): string => {
      const keys = key.split('.');
      let value: any = translations[$currentLanguage];
      
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k];
        } else {
          return key;
        }
      }
      
      return typeof value === 'string' ? value : key;
    };
  }
);

if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('language') as Language;
  if (savedLang && ['en', 'it', 'de'].includes(savedLang)) {
    currentLanguage.set(savedLang);
  }
}

currentLanguage.subscribe((lang) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
});
