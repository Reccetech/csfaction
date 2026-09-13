export const siteConfig = {
  brandFr: 'CSF Élèves d’abord',
  brandEn: 'CSF Students First',
  about: {
    fr: {
      title: 'À propos de ce projet',
      body: 'CSF Élèves d’abord est un site indépendant créé par des parents d’élèves du CSF. Il n’est affilié ni au CSF, ni au ministère, ni au SEPF, ni au SCFP, etc.',
    },
    en: {
      title: 'About this project',
      body: 'CSF Students First is an independent site created by parents of CSF students. It is not affiliated with CSF, the Ministry, SEPF, CUPE, etc.',
    },
  },
};

export const legalSpendSeries = [
  { year: '2020–21', yearShort: '20–21', amount: 1_552_291 },
  { year: '2021–22', yearShort: '21–22', amount: 459_004 },
  { year: '2022–23', yearShort: '22–23', amount: 2_053_005 },
  { year: '2023–24', yearShort: '23–24', amount: 6_267_509 },
  { year: '2024–25', yearShort: '24–25', amount: 8_896_363 },
] as const;

export const legalSpendTotal = 19_228_172;

/** Juristes Power SOFI payments — earliest public SOFI on csf.bc.ca is 2019–20. */
export const juristesSoFiSeries = [
  { year: '2019–20', yearShort: '19–20', amount: 2_343_357 },
  ...legalSpendSeries,
] as const;

export const juristesSoFiTotal = juristesSoFiSeries.reduce((s, d) => s + d.amount, 0);

export const caseCostHighlights = {
  waveABy2016: 17_000_000,
  sofiFrom2019: juristesSoFiTotal,
  waveBCsf: 17_980_000,
  lifetimeCsfCounsel: 35_000_000,
  allParties: 42_500_000,
} as const;

export const enrolmentSeries = [
  { year: '2021/22', count: 6400 },
  { year: '2022/23', count: 6234 },
  { year: '2023/24', count: 6163 },
  { year: '2024/25', count: 6012 },
  { year: '2025/26', count: 5879 },
] as const;

export function formatCadCompact(n: number, lang: 'fr' | 'en'): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    const rounded = Math.round(m * 10) / 10;
    const num =
      lang === 'fr'
        ? rounded.toFixed(1).replace('.', ',')
        : rounded.toFixed(1);
    return lang === 'fr' ? `${num} M$` : `$${num}M`;
  }
  if (lang === 'fr') {
    return `${Math.round(n / 1000)} k$`;
  }
  return `$${Math.round(n / 1000)}k`;
}

export function formatCadFull(n: number, lang: 'fr' | 'en'): string {
  const formatted = n.toLocaleString(lang === 'fr' ? 'fr-CA' : 'en-CA');
  return lang === 'fr' ? `${formatted} $` : `$${formatted}`;
}
