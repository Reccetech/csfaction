export type Candidate = {
  id: string;
  name: string;
  regionId: string;
  email: string;
  phone?: string;
  socials?: { label: string; href: string }[];
  withdrawn?: boolean;
};

export type Region = {
  id: string;
  fr: string;
  en: string;
};

export const electionRegions: Region[] = [
  { id: 'grand-vancouver', fr: 'Région du Grand Vancouver', en: 'Greater Vancouver Region' },
  { id: 'cote-sud', fr: 'Région de la Côte-Sud', en: 'South Coast Region' },
  { id: 'vallee-fraser', fr: 'Région de la Vallée du Fraser', en: 'Fraser Valley Region' },
  { id: 'sud-est', fr: 'Région du Sud-Est', en: 'Southeast Region' },
  { id: 'nord-ile', fr: 'Région du Nord de l’île de Vancouver', en: 'North Vancouver Island Region' },
  { id: 'sud-ile', fr: 'Région du Sud de l’île de Vancouver', en: 'South Vancouver Island Region' },
  { id: 'nord', fr: 'Région du Nord', en: 'North Region' },
];

/** Public contacts from CSF candidate biographies (Sept 2026). Not an endorsement. */
export const candidates: Candidate[] = [
  {
    id: 'dominique-dionne-simard',
    name: 'Dominique Dionne-Simard',
    regionId: 'grand-vancouver',
    email: 'dominique.simard.1@gmail.com',
    socials: [{ label: 'Facebook', href: 'https://www.facebook.com/votez.dominique' }],
  },
  {
    id: 'patrick-gatien',
    name: 'Patrick Gatien',
    regionId: 'grand-vancouver',
    email: 'patrick@gatiensc.com',
    phone: '778-239-4287',
  },
  {
    id: 'paul-mulangu',
    name: 'Paul Mulangu',
    regionId: 'grand-vancouver',
    email: 'tshimu@yahoo.com',
    phone: '604-347-8677',
  },
  {
    id: 'gregoire-frealle',
    name: 'Grégoire Fréalle',
    regionId: 'cote-sud',
    email: 'freallegregoire@gmail.com',
    phone: '604-785-7692',
  },
  {
    id: 'jacques-dufresne',
    name: 'Jacques Dufresne',
    regionId: 'cote-sud',
    email: 'jacques.dufresne2022@gmail.com',
    phone: '604-340-4664',
  },
  {
    id: 'robert-joncas',
    name: 'Robert Joncas',
    regionId: 'cote-sud',
    email: 'bob.joncas@me.com',
    phone: '778-868-4792',
  },
  {
    id: 'billy-quesnel',
    name: 'Billy Quesnel',
    regionId: 'cote-sud',
    email: 'billyquesnel@gmail.com',
    phone: '604-763-5329',
  },
  {
    id: 'chantal-fadous',
    name: 'Chantal Fadous',
    regionId: 'vallee-fraser',
    email: 'etudechf@hotmail.com',
    phone: '778-928-1610',
  },
  {
    id: 'gaetan-desrochers',
    name: 'Gaëtan Desrochers',
    regionId: 'nord-ile',
    email: 'desrochersgaetan42@gmail.com',
  },
  {
    id: 'bertrand-dupain',
    name: 'Bertrand Dupain',
    regionId: 'sud-ile',
    email: 'dupain2026@gmail.com',
  },
  {
    id: 'julie-beaucage',
    name: 'Julie Beaucage',
    regionId: 'sud-ile',
    email: 'dt16juju@gmail.com',
    phone: '778-676-4686',
  },
  {
    id: 'marie-pierre-lavoie',
    name: 'Marie-Pierre Lavoie',
    regionId: 'sud-ile',
    email: 'mariepierrelavoie@mapi.ca',
    phone: '778-977-6274',
  },
  {
    id: 'sylvie-st-pierre',
    name: 'Sylvie St-Pierre',
    regionId: 'nord',
    email: 'olvteam2015@gmail.com',
  },
];

export const electionMeta = {
  candidatesUrl: 'https://www.csf.bc.ca/conseil-dadministration/elections-scolaires/candidats/',
  electionsEmail: 'elections@csf.bc.ca',
  ballotInstructionsDateFr: '16 septembre 2026',
  ballotInstructionsDateEn: 'September 16, 2026',
  voteDeadlineFr: '17 octobre 2026 à 20 h (heure du Pacifique)',
  voteDeadlineEn: 'October 17, 2026 at 8:00 p.m. Pacific Time',
} as const;
