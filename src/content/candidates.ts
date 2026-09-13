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

/** Public contacts from CSF candidate biographies. Not an endorsement. */
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
    regionId: 'vallee-fraser',
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
    id: 'abdel-tahir',
    name: 'Abdel Tahir',
    regionId: 'vallee-fraser',
    email: '',
    withdrawn: true,
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

export const activeCandidates = candidates.filter((c) => !c.withdrawn && c.email);

export const electionMeta = {
  candidatesUrl: 'https://www.csf.bc.ca/conseil-dadministration/elections-scolaires/candidats/',
  electionsUrl: 'https://www.csf.bc.ca/conseil-dadministration/elections-scolaires/',
  electionsUrlEn: 'https://www.csf.bc.ca/en/board-of-directors/school-trustee-elections-2026/',
  electionsEmail: 'elections@csf.bc.ca',
  /** ISO timestamps in America/Vancouver — voting noon Sep 16 to 8pm Oct 17, 2026. */
  votingOpensAt: '2026-09-16T12:00:00-07:00',
  votingClosesAt: '2026-10-17T20:00:00-07:00',
  ballotInstructionsDateFr: '16 septembre 2026',
  ballotInstructionsDateEn: 'September 16, 2026',
  voteDeadlineFr: '17 octobre 2026 à 20 h (heure du Pacifique)',
  voteDeadlineEn: 'October 17, 2026 at 8:00 p.m. Pacific Time',
  lastVerified: '2026-09-13',
  lastVerifiedFr: '13 septembre 2026',
  lastVerifiedEn: 'September 13, 2026',
} as const;

export type ElectionPhase = 'before' | 'open' | 'closed';

export function getElectionPhase(now = new Date()): ElectionPhase {
  const opens = new Date(electionMeta.votingOpensAt).getTime();
  const closes = new Date(electionMeta.votingClosesAt).getTime();
  const t = now.getTime();
  if (t < opens) return 'before';
  if (t > closes) return 'closed';
  return 'open';
}

export function electionStatusCopy(lang: 'fr' | 'en', now = new Date()) {
  const phase = getElectionPhase(now);
  if (lang === 'fr') {
    if (phase === 'before') {
      return {
        phase,
        short: 'Le vote ouvre le 16 septembre 2026.',
        hubLead:
          'Le vote aux élections scolaires du CSF ouvre le 16 septembre 2026. Deux gestes concrets : écrire aux candidat·e·s de votre région pour leur faire part de vos préoccupations, puis voter pour celles et ceux qui partagent vos priorités.',
      };
    }
    if (phase === 'closed') {
      return {
        phase,
        short: 'Le vote est terminé.',
        hubLead:
          'Le vote aux élections scolaires CSF 2026 est terminé. Vous pouvez encore consulter les biographies et écrire aux élu·e·s selon les canaux publics disponibles.',
      };
    }
    return {
      phase,
      short: 'Le vote est ouvert.',
      hubLead:
        'Les élections scolaires du CSF sont en cours. Deux gestes concrets : écrire aux candidat·e·s de votre région pour leur faire part de vos préoccupations, puis voter pour celles et ceux qui partagent vos priorités.',
    };
  }
  if (phase === 'before') {
    return {
      phase,
      short: 'Voting opens September 16, 2026.',
      hubLead:
        'CSF school board voting opens September 16, 2026. Two concrete steps: email the candidates in your region with your concerns, then vote for those who share your priorities.',
    };
  }
  if (phase === 'closed') {
    return {
      phase,
      short: 'Voting has closed.',
      hubLead:
        'CSF school board voting for 2026 has closed. You can still review candidate biographies and use public channels to contact trustees.',
    };
  }
  return {
    phase,
    short: 'Voting is open.',
    hubLead:
      'CSF school board elections are underway. Two concrete steps: email the candidates in your region with your concerns, then vote for those who share your priorities.',
  };
}
