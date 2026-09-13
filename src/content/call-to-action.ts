import type { Lang } from './ui';
import { electionMeta } from './candidates';

export const callToActionPaths = {
  fr: {
    hub: '/appel-a-laction',
    email: '/appel-a-laction/ecrire',
    vote: '/appel-a-laction/voter',
  },
  en: {
    hub: '/en/call-to-action',
    email: '/en/call-to-action/email',
    vote: '/en/call-to-action/vote',
  },
} as const;

export const callToAction = {
  fr: {
    nav: 'Appel à l’action',
    sticky: 'Passez à l’action',
    bannerEyebrow: 'Élections scolaires CSF 2026',
    bannerTitle: 'Faites entendre votre voix.',
    bannerBody:
      'Écrivez aux candidat·e·s pour leur faire part de vos préoccupations et votez pour celles et ceux qui partagent vos priorités pour les élèves.',
    bannerCta: 'Voir l’appel à l’action',
    hubTitle: 'Appel à l’action — CSF Élèves d’abord',
    hubDescription: 'Élections scolaires CSF 2026 : écrivez aux candidat·e·s et votez.',
    hubH1: 'Appel à l’action',
    hubLead:
      'Les élections scolaires du CSF sont en cours. Deux gestes concrets : écrire aux candidat·e·s de votre région pour leur faire part de vos préoccupations, puis voter pour celles et ceux qui partagent vos priorités.',
    actionEmailTitle: '1. Écrire aux candidat·e·s',
    actionEmailBody:
      'Demandez clairement leur position sur le financement des procès à même le fonds d’exploitation, le déficit de 3,4 M$, et les services aux élèves d’aujourd’hui.',
    actionEmailCta: 'Voir les contacts et le modèle de courriel',
    actionVoteTitle: '2. Voter',
    actionVoteBody: `Les instructions de vote seront envoyées par courriel le ${electionMeta.ballotInstructionsDateFr}. Vous avez jusqu’au ${electionMeta.voteDeadlineFr} pour voter.`,
    actionVoteCta: 'Comment voter',
    emailPageTitle: 'Écrire aux candidat·e·s — Appel à l’action',
    emailPageDescription: 'Coordonnées des candidat·e·s CSF et modèle de courriel à copier.',
    emailH1: 'Écrire aux candidat·e·s',
    emailLead:
      'Utilisez le modèle ci-dessous, puis écrivez aux candidat·e·s de votre région. Les coordonnées viennent des biographies publiques du CSF. Ce n’est pas une liste d’endorsements.',
    draftTitle: 'Modèle de courriel (à copier)',
    draftSubject: 'Élections CSF 2026 — coûts juridiques et déficit',
    draftBody: `Bonjour,

Je suis parent·e d’élève(s) au CSF et je vous écris dans le cadre des élections scolaires 2026.

Je m’inquiète des coûts juridiques croissants payés à même le budget d’exploitation. Chaque dollar dépensé en honoraires d’avocats est un dollar dont mon enfant ne peut pas bénéficier en classe.

Pouvez-vous clarifier publiquement votre position sur les coûts continus de la bataille juridique, et sur les plans pour rembourser le déficit d’ici 2028.

C’est un facteur déterminant pour mon appui.

Cordialement,
[Votre nom]
[École de l’enfant / région]`,
    copySubject: 'Copier l’objet',
    copyBody: 'Copier le message',
    copied: 'Copié',
    contactsTitle: 'Candidat·e·s et coordonnées',
    contactsNote: `Source : ${electionMeta.candidatesUrl} — vérifiez les détails avant d’écrire. Aucune candidature n’est endossée ici.`,
    noCandidates: 'Aucune candidature reçue pour cette région.',
    emailLabel: 'Courriel',
    phoneLabel: 'Téléphone',
    socialsLabel: 'Réseaux',
    mailCandidate: 'Ouvrir un courriel',
    backHub: '← Retour à l’appel à l’action',
    votePageTitle: 'Voter — Appel à l’action',
    votePageDescription: 'Comment voter aux élections scolaires CSF 2026.',
    voteH1: 'Voter selon vos priorités',
    voteLead:
      'Lisez les biographies, comparez les engagements aux besoins des élèves, puis votez pour les candidat·e·s qui partagent vos vues — y compris une gouvernance qui protège le financement des salles de classe.',
    voteStepsTitle: 'Calendrier et démarches',
    voteSteps: [
      'Consultez les biographies des candidat·e·s par région :',
      `Les instructions pour remplir et soumettre votre bulletin seront envoyées par courriel le ${electionMeta.ballotInstructionsDateFr}.`,
      `Vous avez jusqu’au ${electionMeta.voteDeadlineFr} pour voter.`,
      `Questions : ${electionMeta.electionsEmail}`,
    ],
    voteTipTitle: 'Avant de voter',
    voteTipBody:
      'Demandez-vous qui s’engage à remettre l’argent d’exploitation aux élèves, à gérer le déficit de façon responsable, et à ne pas faire payer aux classes d’aujourd’hui des procès sans fin.',
    candidatesLink: 'Biographies officielles des candidat·e·s',
    emailElections: 'Contacter elections@csf.bc.ca',
  },
  en: {
    nav: 'Call to Action',
    sticky: 'Take action',
    bannerEyebrow: 'CSF school board elections 2026',
    bannerTitle: 'Make your voice heard.',
    bannerBody:
      'Email the candidates with your concerns and vote for those who share your priorities for students.',
    bannerCta: 'See the call to action',
    hubTitle: 'Call to Action — CSF Students First',
    hubDescription: 'CSF school board elections 2026: email candidates and vote.',
    hubH1: 'Call to Action',
    hubLead:
      'CSF school board elections are underway. Two concrete steps: email the candidates in your region with your concerns, then vote for those who share your priorities.',
    actionEmailTitle: '1. Email the candidates',
    actionEmailBody:
      'Ask clearly where they stand on funding court fights from the operating budget, the $3.4M deficit, and services for today’s students.',
    actionEmailCta: 'See contacts and a draft email',
    actionVoteTitle: '2. Vote',
    actionVoteBody: `Ballot instructions will be emailed on ${electionMeta.ballotInstructionsDateEn}. You have until ${electionMeta.voteDeadlineEn} to vote.`,
    actionVoteCta: 'How to vote',
    emailPageTitle: 'Email the candidates — Call to Action',
    emailPageDescription: 'CSF candidate contacts and a draft email you can copy.',
    emailH1: 'Email the candidates',
    emailLead:
      'Copy the draft below, then write the candidates in your region. Contact details come from CSF’s public candidate biographies. This is not an endorsement list.',
    draftTitle: 'Draft email (copy and paste)',
    draftSubject: 'CSF 2026 elections — legal costs and the deficit',
    draftBody: `Hello,

I am a CSF parent writing ahead of the 2026 school board elections.

I am concerned about the escalating legal costs being paid out of the operating budget. Every dollar spent on lawyers is a dollar my child cannot benefit from in the classroom.

Can you please publicly clarify your position on the ongoing costs of the legal battle, and plans to pay off the deficit by 2028.

This is a key factor for my support.

Sincerely,
[Your name]
[Child’s school / region]`,
    copySubject: 'Copy subject',
    copyBody: 'Copy message',
    copied: 'Copied',
    contactsTitle: 'Candidates and contacts',
    contactsNote: `Source: ${electionMeta.candidatesUrl} — verify details before writing. No candidate is endorsed here.`,
    noCandidates: 'No nominations received for this region.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    socialsLabel: 'Social',
    mailCandidate: 'Open email',
    backHub: '← Back to call to action',
    votePageTitle: 'Vote — Call to Action',
    votePageDescription: 'How to vote in the CSF school board elections 2026.',
    voteH1: 'Vote for candidates who share your views',
    voteLead:
      'Read the biographies, compare commitments to student needs, then vote for candidates who share your priorities — including governance that protects classroom funding.',
    voteStepsTitle: 'Timeline and steps',
    voteSteps: [
      'Review candidate biographies by region:',
      `Instructions for completing and submitting your ballot will be emailed on ${electionMeta.ballotInstructionsDateEn}.`,
      `You have until ${electionMeta.voteDeadlineEn} to vote.`,
      `Questions: ${electionMeta.electionsEmail}`,
    ],
    voteTipTitle: 'Before you vote',
    voteTipBody:
      'Ask who will put operating dollars back into students, handle the deficit responsibly, and stop making today’s classrooms pay for never-ending court fights.',
    candidatesLink: 'Official candidate biographies',
    emailElections: 'Contact elections@csf.bc.ca',
  },
} as const satisfies Record<Lang, unknown>;
