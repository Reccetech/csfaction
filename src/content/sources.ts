import type { Lang } from './ui';

export type Source = {
  id: string;
  href: string;
  label: { fr: string; en: string };
  note?: { fr: string; en: string };
};

/** Canonical public sources cited across the site. */
export const sources = {
  csfFinancialReports: {
    id: 'csf-financial-reports',
    href: 'https://www.csf.bc.ca/en/the-conseil-scolaire/financial-reports/',
    label: {
      fr: 'CSF — Rapports financiers (états vérifiés, FSDA, SOFI)',
      en: 'CSF — Financial reports (audited statements, FSDA, SOFI)',
    },
    note: {
      fr: 'SOFI publics à partir de 2019–20; paiements fournisseurs > 25 000 $.',
      en: 'Public SOFIs from 2019–20 onward; suppliers paid over $25,000.',
    },
  },
  cbc2016: {
    id: 'cbc-2016',
    href: 'https://www.cbc.ca/news/canada/british-columbia/french-education-bc-verdict-1.3778541',
    label: {
      fr: 'CBC News — verdict 2016 (~17 M$ déjà dépensés)',
      en: 'CBC News — 2016 verdict (nearly $17M already spent)',
    },
  },
  radioCanadaWaveBCosts: {
    id: 'rc-wave-b-costs',
    href: 'https://ici.radio-canada.ca/nouvelle/2200286/proces-ecoles-francos-cour-supreme',
    label: {
      fr: 'Radio-Canada — coûts vague B (17,98 M$ CSF; procès prolongé)',
      en: 'Radio-Canada — Wave B costs ($17.98M CSF; trial prolonged)',
    },
  },
  radioCanadaDeficit: {
    id: 'rc-deficit',
    href: 'https://ici.radio-canada.ca/nouvelle/2159843/frais-juridiques-ecoles-eleves-francais',
    label: {
      fr: 'Radio-Canada — frais juridiques / déficit / ~20 M$ à Juristes Power',
      en: 'Radio-Canada — legal fees / deficit / ~$20M to Juristes Power',
    },
  },
  radioCanadaCherPaye: {
    id: 'rc-cher-paye',
    href: 'https://ici.radio-canada.ca/nouvelle/2168266/decision-cour-supreme-csf-ecoles-francophones',
    label: {
      fr: 'Radio-Canada — « Ce jugement est cher payé » (SEPFCB)',
      en: 'Radio-Canada — judgment “paid dearly” / « cher payé » (SEPFCB)',
    },
  },
  radioCanadaAppeal: {
    id: 'rc-appeal',
    href: 'https://ici.radio-canada.ca/nouvelle/2175636/appel-deficit-remboursement-eleves-proces',
    label: {
      fr: 'Radio-Canada — appel CSF / partenaires / déficit',
      en: 'Radio-Canada — CSF appeal / partners / deficit',
    },
  },
  radioCanadaSofi: {
    id: 'rc-sofi',
    href: 'https://ici.radio-canada.ca/nouvelle/2201817/csf-lettre-sepfcb-depenses-ecoles',
    label: {
      fr: 'Radio-Canada — SOFI / demande de démission SEPFCB',
      en: 'Radio-Canada — SOFI figures / SEPFCB resignation demand',
    },
  },
  radioCanadaRussellCosts: {
    id: 'rc-russell-2017',
    href: 'https://ici.radio-canada.ca/nouvelle/1081128/cour-proces-megaproces-csf-fpfcb-financement-gain-cause-russel',
    label: {
      fr: 'Radio-Canada (2017) — mégaprocès Russell / ~17 M$ côté CSF',
      en: 'Radio-Canada (2017) — Russell mega-trial / ~$17M CSF side',
    },
  },
  francopresseResign: {
    id: 'francopresse',
    href: 'https://francopresse.ca/education/2025/10/13/colombie-britannique-les-enseignantes-francophones-demandent-la-demission-de-cinq-conseillers-scolaires/',
    label: {
      fr: 'Francopresse — démissions / 5 partenaires sur 6 contre l’appel',
      en: 'Francopresse — resignations / 5 of 6 partners opposed the appeal',
    },
  },
  scc2020: {
    id: 'scc-2020',
    href: 'https://decisions.scc-csc.ca/scc-csc/scc-csc/en/item/18390/index.do',
    label: {
      fr: 'Cour suprême du Canada — 2020 CSC 13',
      en: 'Supreme Court of Canada — 2020 SCC 13',
    },
  },
  bcsc2016: {
    id: 'bcsc-2016',
    href: 'https://www.canlii.org/en/bc/bcsc/doc/2016/2016bcsc1764/2016bcsc1764.html',
    label: {
      fr: 'BCSC — 2016 BCSC 1764 (Russell J.)',
      en: 'BCSC — 2016 BCSC 1764 (Russell J.)',
    },
  },
  bcsc2025: {
    id: 'bcsc-2025',
    href: 'https://www.canlii.org/en/bc/bcsc/doc/2025/2025bcsc962/2025bcsc962.html',
    label: {
      fr: 'BCSC — 2025 BCSC 962 (Gomery J., exécution)',
      en: 'BCSC — 2025 BCSC 962 (Gomery J., enforcement)',
    },
  },
  cozenLetters: {
    id: 'cozen-letters',
    href: 'https://www.cozen.com/news-resources/publications/2025/court-comments-on-letter-writing-wars',
    label: {
      fr: 'Cozen — commentaires sur les « lettres de positionnement »',
      en: 'Cozen — commentary on “positioning letters”',
    },
  },
  enrolmentOpenData: {
    id: 'enrolment-open-data',
    href: 'https://catalogue.data.gov.bc.ca/dataset/2c53729a-2453-4633-92f3-6876a45f8bc4',
    label: {
      fr: 'Données ouvertes C.-B. — inscriptions / FTE par école',
      en: 'B.C. open data — student enrolment / FTE by school',
    },
  },
  surplusPolicy: {
    id: 'surplus-policy',
    href: 'https://www2.gov.bc.ca/assets/gov/education/administration/resource-management/policy/surplus_policy_companion_guide.pdf',
    label: {
      fr: 'Politique sur le surplus d’exploitation accumulé (guide)',
      en: 'K-12 Accumulated Operating Surplus Policy (companion guide)',
    },
  },
  sepfMedias: {
    id: 'sepf-medias',
    href: 'https://www.sepfcb.com/medias',
    label: {
      fr: 'SEPFCB — Médias (lettres et dossier)',
      en: 'SEPFCB — Media (letters and dossier)',
    },
  },
  sepfToMinistry: {
    id: 'sepf-oct-2025',
    href: '/docs/SEPF-to-Ministry-2025-10-08.pdf',
    label: {
      fr: 'SEPF → Ministère (8 oct. 2025) — PDF',
      en: 'SEPF → Ministry (8 Oct 2025) — PDF',
    },
  },
  sepfToBeare: {
    id: 'sepf-feb-2026',
    href: '/docs/SEPF-to-Beare-followup-2026-02-04.pdf',
    label: {
      fr: 'SEPF → Beare (4 fév. 2026) — PDF',
      en: 'SEPF → Beare (4 Feb 2026) — PDF',
    },
  },
  beareToSepf: {
    id: 'beare-mar-2026',
    href: '/docs/Beare-SEPF-letter-2026-03-13.pdf',
    label: {
      fr: 'Ministère / Beare → SEPF (13 mars 2026) — PDF',
      en: 'Ministry / Beare → SEPF (13 Mar 2026) — PDF',
    },
  },
  scfp4227: {
    id: 'scfp-4227',
    href: 'https://4227.wplocals.cupe.ca/',
    label: {
      fr: 'SCFP 4227 — site du local',
      en: 'CUPE 4227 — local site',
    },
  },
  cbcWaveB2025: {
    id: 'cbc-wave-b-2025',
    href: 'https://www.cbc.ca/news/canada/british-columbia/francophone-school-board-b-c-supreme-court-1.7546476',
    label: {
      fr: 'CBC — jugement 2025 / pouvoir d’expropriation',
      en: 'CBC — 2025 ruling / expropriation powers',
    },
  },
  radioCanadaGomery: {
    id: 'rc-gomery-2025',
    href: 'https://ici.radio-canada.ca/nouvelle/2166973/csf-cour-supreme-ecoles-gomery',
    label: {
      fr: 'Radio-Canada — gains partiels Gomery (2025)',
      en: 'Radio-Canada — Gomery partial gains (2025)',
    },
  },
  vsbAppeal: {
    id: 'vsb-appeal',
    href: 'https://vsb.bc.ca/vancouver-school-board-responds-to-csf-appeal.81700',
    label: {
      fr: 'VSB — réponse à l’appel du CSF',
      en: 'VSB — response to CSF appeal',
    },
  },
  bcCapitalBudget2024: {
    id: 'bc-capital-2024',
    href: 'https://blog.gov.bc.ca/app/uploads/sites/808/2024/02/ECC-Stakeholder-Package_Ministry.pdf',
    label: {
      fr: 'Budget 2024 C.-B. — capital K-12 (~1,046 G$ / 2024–25)',
      en: 'B.C. Budget 2024 — K-12 capital (~$1.046B in 2024/25)',
    },
  },
  theTyee: {
    id: 'the-tyee',
    href: 'https://thetyee.ca/News/2024/12/02/BC-French-School-District-Suing-Province/',
    label: {
      fr: 'The Tyee — le CSF poursuit à nouveau la Province',
      en: 'The Tyee — CSF suing the Province again',
    },
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof sources;

export function pickSources(ids: SourceId[]): Source[] {
  return ids.map((id) => sources[id]);
}

export function sourceLabel(s: Source, lang: Lang): string {
  return s.label[lang];
}

/** Page-level source sets (ordered). */
export const pageSourceIds = {
  home: [
    'csfFinancialReports',
    'enrolmentOpenData',
    'beareToSepf',
    'sepfToMinistry',
    'cbc2016',
    'radioCanadaWaveBCosts',
  ] as const satisfies readonly SourceId[],
  legal: [
    'csfFinancialReports',
    'cbc2016',
    'cbcWaveB2025',
    'radioCanadaWaveBCosts',
    'radioCanadaGomery',
    'radioCanadaDeficit',
    'radioCanadaRussellCosts',
    'radioCanadaAppeal',
    'scc2020',
    'bcsc2016',
    'bcsc2025',
    'cozenLetters',
    'vsbAppeal',
    'bcCapitalBudget2024',
    'beareToSepf',
    'surplusPolicy',
  ] as const satisfies readonly SourceId[],
  enrolment: ['enrolmentOpenData'] as const satisfies readonly SourceId[],
  pushback: [
    'sepfToMinistry',
    'sepfToBeare',
    'beareToSepf',
    'sepfMedias',
    'radioCanadaCherPaye',
    'radioCanadaAppeal',
    'francopresseResign',
    'scfp4227',
  ] as const satisfies readonly SourceId[],
};

export const estimateNotes = {
  fr: {
    lifetime:
      'Estimation (pas une ligne SOFI unique) : ~17 M$ déjà dépensés au verdict 2016 (CBC) + paiements SOFI récents à Juristes Power et chiffre CSF vague B (17,98 M$). Le total « > 35 M$ » combine ces repères publics; il peut y avoir un léger chevauchement entre sources.',
    allParties:
      'Estimation toutes parties : honoraires/défense CSF + ~9,35 M$ côté VSB (Radio-Canada) + coûts de la Province — ordre de grandeur > 40–45 M$, pas un audit consolidé.',
  },
  en: {
    lifetime:
      'Estimate (not a single SOFI line): nearly $17M already spent by the 2016 verdict (CBC) + recent SOFI payments to Juristes Power and CSF’s Wave B figure ($17.98M). The “>$35M” lifetime figure combines those public benchmarks; sources may slightly overlap.',
    allParties:
      'All-parties estimate: CSF counsel/defence costs + ~$9.35M on the VSB side (Radio-Canada) + Province defence — order of magnitude >$40–45M, not a consolidated audit.',
  },
} as const;
