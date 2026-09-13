export type Lang = 'fr' | 'en';

export const ui = {
  fr: {
    brand: 'CSF Élèves d’abord',
    nav: {
      home: 'Accueil',
      enrolment: 'Effectif',
      legal: 'Dossier juridique',
      pushback: 'Réponses de la communauté',
      callToAction: 'Appel à l’action',
      evidence: 'Voir les preuves',
    },
    langSwitch: 'EN',
    stickyCta: 'Passez à l’action',
  },
  en: {
    brand: 'CSF Students First',
    nav: {
      home: 'Home',
      enrolment: 'Enrolment',
      legal: 'Legal case',
      pushback: 'Community response',
      callToAction: 'Call to Action',
      evidence: 'See the evidence',
    },
    langSwitch: 'FR',
    stickyCta: 'Take action',
  },
} as const;

export const routes = {
  fr: {
    home: '/',
    enrolment: '/effectif',
    legal: '/frais-juridiques',
    pushback: '/reactions',
    callToAction: '/appel-a-laction',
  },
  en: {
    home: '/en/',
    enrolment: '/en/enrolment',
    legal: '/en/legal-fees',
    pushback: '/en/pushback',
    callToAction: '/en/call-to-action',
  },
} as const;

export function twinPath(lang: Lang, path: string): string {
  const map: Record<string, string> = {
    '/': '/en/',
    '/effectif': '/en/enrolment',
    '/frais-juridiques': '/en/legal-fees',
    '/reactions': '/en/pushback',
    '/appel-a-laction': '/en/call-to-action',
    '/appel-a-laction/ecrire': '/en/call-to-action/email',
    '/appel-a-laction/voter': '/en/call-to-action/vote',
    '/en/': '/',
    '/en/enrolment': '/effectif',
    '/en/legal-fees': '/frais-juridiques',
    '/en/pushback': '/reactions',
    '/en/call-to-action': '/appel-a-laction',
    '/en/call-to-action/email': '/appel-a-laction/ecrire',
    '/en/call-to-action/vote': '/appel-a-laction/voter',
  };
  return map[path] ?? (lang === 'fr' ? '/en/' : '/');
}
