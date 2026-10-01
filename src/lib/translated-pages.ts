import type { Language } from '$lib/i18n';

// Language each page was originally written in. The original lives at its
// base path (e.g. /stories/<slug>); automatic translations live at <base>/<lang>.
export const originalLanguage: Record<string, Language> = {
  '/stories/hubert-herbert-emmenthal': 'it',
  '/stories/pablo-maiale-bellota': 'it',
  '/stories/bruno-bradipo-amazonia': 'it',
  '/stories/die-frau-chefin': 'de',
  '/stories/coda-leopoldo': 'it',
  '/blog/10-tips-soon-to-be-dads': 'en',
  '/blog/berlino-raccolta-vetro': 'it',
  '/blog/caccheidi': 'it',
  '/blog/comune-berlino': 'it',
  '/blog/diario-cattivo-studente-tedesco': 'it',
  '/blog/guerra-mondi-notte-berlino': 'it',
  '/blog/jazz-club': 'it',
  '/blog/re-dei-cagacazzi': 'it',
  '/blog/tedeschi-non-dicono-mangiano': 'it'
};

export function localizedHref(base: string, lang: Language): string {
  const original = originalLanguage[base];
  if (!original || original === lang) return base;
  return `${base}/${lang}`;
}

export function translatedBaseFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/(stories|blog)\/[^/]+/);
  return match && match[0] in originalLanguage ? match[0] : null;
}
