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
      books: 'Books',
      blogPosts: 'Blog Posts'
    },
    home: {
      welcome: 'Welcome to My Stories',
      intro: 'A collection of stories, books, and blog posts written with passion and imagination.',
      storiesDescription: 'Long-form narratives and adventures that take you on a journey.',
      booksDescription: 'Longer works and book projects.',
      blogPostsDescription: 'Thoughts, reflections, and musings on writing and life.'
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
      books: 'Libri',
      blogPosts: 'Post del Blog'
    },
    home: {
      welcome: 'Benvenuti su My Stories',
      intro: 'Una raccolta di storie, libri e post del blog scritti con passione e immaginazione.',
      storiesDescription: 'Racconti lunghi e avventure che ti portano in viaggio.',
      booksDescription: 'Opere più lunghe e progetti di libri.',
      blogPostsDescription: 'Pensieri, riflessioni e divagazioni sulla scrittura e sulla vita.'
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
      books: 'Bücher',
      blogPosts: 'Blog-Beiträge'
    },
    home: {
      welcome: 'Willkommen bei My Stories',
      intro: 'Eine Sammlung von Geschichten, Büchern und Blog-Beiträgen, geschrieben mit Leidenschaft und Fantasie.',
      storiesDescription: 'Lange Erzählungen und Abenteuer, die dich auf eine Reise mitnehmen.',
      booksDescription: 'Längere Werke und Buchprojekte.',
      blogPostsDescription: 'Gedanken, Reflexionen und Betrachtungen über das Schreiben und das Leben.'
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
