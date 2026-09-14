import type { Lang } from './ui';

export const home = {
  fr: {
    title: 'CSF Élèves d’abord',
    description:
      'Parents du CSF : oui à l’éducation en français, non au financement des procès par l’argent des élèves.',
    heroEyebrow: 'Créé par des parents d’élèves du CSF',
    heroLine1: 'Des dizaines de millions dépensés en cour.',
    heroLine2: 'Moins d’argent pour les élèves.',
    heroSupport:
      'Nous soutenons l’expansion de l’éducation en français en C.-B. — mais la poursuite d’un litige majeur ne doit pas se faire au détriment des élèves d’aujourd’hui.',
    barsCaption: 'Paiements à Juristes Power Law — cinq derniers exercices¹',
    barsTotalLabel: 'Total sur cinq ans',
    stats: [
      {
        icon: 'up' as const,
        kind: 'calculation' as const,
        value: '8,9 M$',
        label:
          'versés à Juristes Power Law en 2024–25 (SOFI). ~7,7 % des dépenses d’exploitation.',
      },
      {
        icon: 'down' as const,
        kind: 'fact' as const,
        value: '−8,1 %',
        label: 'd’effectif au CSF de 2021–22 à 2025–26 (6 400 → 5 879)',
      },
      {
        icon: 'debt' as const,
        kind: 'fact' as const,
        value: '3,4 M$',
        label:
          'le déficit d’exploitation que le ministère exige d’éliminer d’ici le 30 juin 2028',
      },
    ],
    arcEnrol: {
      title: 'L’effectif baisse dans les écoles existantes, pendant qu’on dépense des sommes énormes pour de nouvelles écoles.',
      body: 'Le réseau perd des élèves chaque année. Il est difficile de justifier des millions en cour pour de nouvelles installations pendant que des écoles actuelles — comme Victor-Brodeur (−32 %) — prennent du retard.',
      quote:
        'Mauvaise gestion des ressources financières, notamment le maintien de procédures judiciaires coûteuses au détriment des services aux élèves et du soutien au personnel.',
      quoteAttr: 'SEPF — lettre au ministère de l’Éducation, 8 octobre 2025',
      cta: 'Voir les tendances d’effectif',
    },
    arcDeficit: {
      title: 'Un déficit de 3,4 M$ à rembourser d’ici juin 2028, en plus de factures juridiques croissantes, signifie moins pour les élèves d’aujourd’hui.',
      body: 'En vertu de la School Act, un conseil scolaire ne peut en principe pas accumuler un déficit d’exploitation sans approbation ministérielle. Le 13 mars 2026, le ministère a approuvé le déficit d’environ 3,4 M$ du CSF, à éliminer au plus tard le 30 juin 2028, avec un suivi trimestriel. Comment y arriver si les dépenses juridiques restent ouvertes ?',
    },
    who: {
      title: 'Qui sommes-nous',
      body: 'Ce site a été créé par des parents d’élèves du CSF préoccupés par la situation. Nous ne sommes ni le conseil scolaire ni le ministère. Nous voulons des salles de classe fortes et un réseau francophone qui grandit — pas un budget d’exploitation vidé par un litige majeur qui se poursuit.',
    },
    ask: {
      title: 'Ce que nous demandons',
      items: [
        'Prioriser la médiation et une négociation de bonne foi avec la Province et le VSB pour résoudre les appels en cours plutôt qu’une nouvelle ronde coûteuse en cour payée par le fonds d’exploitation. Si le CSF choisit quand même de litiger, qu’il le finance hors du budget d’exploitation.',
        'Remettre ces dollars aux élèves d’aujourd’hui : instruction, services aux élèves et écoles existantes.',
        'Tenir une séance d’information publique en ligne — avec la participation de Juristes Power Law — sur l’historique du dossier, où est allé l’argent, pourquoi le combat continue, et à quoi ressemble le succès maintenant.',
        'Publier un plan clair pour rembourser le déficit de 3,4 M$ approuvé par le ministère d’ici 2028 — un déficit que les conseils ne peuvent normalement pas porter.',
      ],
    },
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Êtes-vous contre les écoles françaises ou l’article 23 ?',
        a: 'Non, au contraire : nous soutenons l’élargissement de l’accès à l’éducation en français en C.-B. Ce que nous mettons en question, c’est le financement de litiges ouverts à même l’argent d’exploitation des élèves.',
      },
      {
        q: 'Que demandez-vous exactement ?',
        a: 'Prioriser la médiation et la négociation avec la Province et le VSB; remettre l’argent en classe; une séance publique en ligne avec Juristes Power; et un plan clair pour rembourser le déficit d’ici 2028. Si le CSF continue en cour, qu’il trouve un financement hors exploitation.',
      },
      {
        q: 'L’appel n’est-il pas nécessaire ?',
        a: 'Des droits importants ont déjà été reconnus. Les retours diminuent pendant que les factures montent — et le ministère exige un remboursement du déficit d’ici 2028. La médiation et la négociation restent des voies ouvertes.',
      },
      {
        q: 'Qui gère ce site ?',
        a: 'Des parents d’élèves du CSF préoccupés par la situation — pas le conseil, pas le ministère.',
      },
    ],
    photoCaption: 'Les élèves et les écoles d’aujourd’hui d’abord…',
    photoHighlight:
      'En 2024–25, les paiements juridiques (~8,9 M$) représentaient près de 28 % de la masse salariale enseignante — environ 1 $ en honoraires pour 4 $ versés aux enseignants.',
    photoCta: 'Voir le dossier juridique et les coûts',
    sourcesNote:
      'Chiffres clés ci-dessous et sur les pages liées. SOFI = paiements à « JURISTES POWER LAW ».',
  },
  en: {
    title: 'CSF Students First',
    description:
      'CSF parents: yes to French education, no to funding court fights with student operating dollars.',
    heroEyebrow: 'Created by parents of CSF students',
    heroLine1: 'Tens of millions spent in court.',
    heroLine2: 'Less money for students.',
    heroSupport:
      'We support expanding French-language education in B.C. — but continued major litigation must not come at the expense of today’s students.',
    barsCaption: 'Payments to Juristes Power Law — last five fiscal years¹',
    barsTotalLabel: 'Five-year total',
    stats: [
      {
        icon: 'up' as const,
        kind: 'calculation' as const,
        value: '$8.9M',
        label:
          'paid to Juristes Power Law in 2024–25 (SOFI). ~7.7% of operating expenses.',
      },
      {
        icon: 'down' as const,
        kind: 'fact' as const,
        value: '−8.1%',
        label: 'CSF enrolment from 2021–22 to 2025–26 (6,400 → 5,879)',
      },
      {
        icon: 'debt' as const,
        kind: 'fact' as const,
        value: '$3.4M',
        label:
          'the operating deficit that the ministry requires to be cleared by June 30, 2028',
      },
    ],
    arcEnrol: {
      title: 'Enrolment is falling at existing schools, while we spend huge amounts to fight for new schools.',
      body: 'The district is losing students every year. It is hard to justify millions in court for new facilities while current schools — like Victor-Brodeur (−32%) — fall behind.',
      quote:
        'Mismanagement of financial resources, notably the continued funding of costly legal proceedings at the expense of essential student services and staff support.',
      quoteAttr: 'SEPF — letter to the Minister of Education, 8 October 2025',
      cta: 'See enrolment trends',
    },
    arcDeficit: {
      title:
        'A $3.4M deficit due by June 2028 on top of growing legal bills means less for today’s students.',
      body: 'Under the School Act, school boards generally may not run an accumulated operating deficit without ministerial approval. On 13 March 2026 the Ministry approved CSF’s ~$3.4M deficit on condition it is eliminated by 30 June 2028, with quarterly monitoring. How does CSF clear that hole if legal spending stays open-ended?',
    },
    who: {
      title: 'Who we are',
      body: 'This site was created by concerned parents of CSF students. We are not the school board and not the Ministry. We want strong classrooms and a growing francophone network — not an operating budget drained by continued major litigation.',
    },
    ask: {
      title: 'What we are asking for',
      items: [
        'Prioritize mediation and good-faith negotiation with the Province and VSB to resolve the live appeals instead of another costly courtroom round paid from the operating budget. If CSF still chooses to litigate, fund it from outside operating dollars.',
        'Put those dollars back into today’s students: instruction, student services, and existing schools.',
        'Hold a public online briefing — with Juristes Power Law participating — on the case history, where the money went, why the fight continues, and what success looks like now.',
        'Publish a clear plan to retire the ministry-approved $3.4M deficit by 2028 — a deficit boards are not normally allowed to carry.',
      ],
    },
    faqTitle: 'FAQ',
    faq: [
      {
        q: 'Are you against French schools or section 23?',
        a: 'No — to the contrary, we support expanding access to French education in B.C. What we question is funding open-ended litigation from student operating funds.',
      },
      {
        q: 'What exactly are you asking for?',
        a: 'Prioritize mediation and negotiation with the Province and VSB; put the money back into classrooms; a public online briefing with Juristes Power; and a clear plan to retire the deficit by 2028. If CSF continues in court, fund it outside the operating budget.',
      },
      {
        q: 'Isn’t the appeal necessary?',
        a: 'Major rights have already been recognized. Returns are diminishing while bills rise — and the Ministry requires deficit retirement by 2028. Mediation and negotiation remain open paths.',
      },
      {
        q: 'Who runs this site?',
        a: 'Concerned parents of CSF students — not the Board, not the Ministry.',
      },
    ],
    photoCaption: 'Today’s students and schools should come first…',
    photoHighlight:
      'In 2024–25, legal payments (~$8.9M) were nearly 28% of teacher salaries — roughly $1 in legal fees for every $4 paid to teachers.',
    photoCta: 'See the legal case and the costs',
    sourcesNote:
      'Key figures below and on the linked pages. SOFI = payments to “JURISTES POWER LAW”.',
  },
} as const satisfies Record<Lang, unknown>;
