export type Lang = 'fr' | 'en';

export const ui = {
  fr: {
    brand: 'CSF Élèves d’abord',
    nav: {
      home: 'Accueil',
      enrolment: 'Effectif',
      legal: 'Dossier juridique',
      pushback: 'Réactions',
      sign: 'Signer la pétition',
      evidence: 'Voir les preuves',
    },
    langSwitch: 'EN',
    stickyCta: 'Signer la pétition',
  },
  en: {
    brand: 'CSF Students First',
    nav: {
      home: 'Home',
      enrolment: 'Enrolment',
      legal: 'Legal case',
      pushback: 'Pushback',
      sign: 'Sign the petition',
      evidence: 'See the evidence',
    },
    langSwitch: 'FR',
    stickyCta: 'Sign the petition',
  },
} as const;

export const routes = {
  fr: {
    home: '/',
    enrolment: '/effectif',
    legal: '/frais-juridiques',
    pushback: '/reactions',
  },
  en: {
    home: '/en/',
    enrolment: '/en/enrolment',
    legal: '/en/legal-fees',
    pushback: '/en/pushback',
  },
} as const;

export function twinPath(lang: Lang, path: string): string {
  const map: Record<string, string> = {
    '/': '/en/',
    '/effectif': '/en/enrolment',
    '/frais-juridiques': '/en/legal-fees',
    '/reactions': '/en/pushback',
    '/en/': '/',
    '/en/enrolment': '/effectif',
    '/en/legal-fees': '/frais-juridiques',
    '/en/pushback': '/reactions',
  };
  return map[path] ?? (lang === 'fr' ? '/en/' : '/');
}
