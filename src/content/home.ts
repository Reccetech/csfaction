import type { Lang } from './ui';

export const home = {
  fr: {
    title: 'CSF Élèves d’abord',
    description:
      'Parents du CSF : oui à l’éducation en français, non au financement des procès par l’argent des élèves.',
    heroEyebrow: 'Créé par des parents d’élèves du CSF',
    heroLine1: 'Des millions dépensés en cour.',
    heroLine2: 'Des élèves qui souffrent.',
    heroSupport:
      'Nous soutenons l’expansion de l’éducation en français en C.-B. — mais des batailles juridiques sans fin ne doivent pas se faire au détriment des élèves d’aujourd’hui.',
    barsCaption: 'Paiements à Juristes Power Law — cinq derniers exercices¹',
    barsTotalLabel: 'Total sur cinq ans',
    stats: [
      {
        icon: 'up' as const,
        value: '8,9 M$',
        label: 'dépensés chez Juristes Power en 2024–25 seulement (~7,7 % du budget d’exploitation)',
      },
      {
        icon: 'down' as const,
        value: '−8,1 %',
        label: 'd’effectif au CSF de 2021–22 à 2025–26 (6 400 → 5 879)',
      },
      {
        icon: 'debt' as const,
        value: '3,4 M$ · 2028',
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
      body: 'Ce site a été créé par des parents d’élèves du CSF préoccupés par la situation. Nous ne sommes ni le conseil scolaire ni le ministère. Nous voulons des salles de classe fortes et un réseau francophone qui grandit — pas un budget d’exploitation vidé par des batailles juridiques sans fin.',
    },
    ask: {
      title: 'Ce que nous demandons',
      items: [
        'Arrêter de payer les frais juridiques à même le fonds d’exploitation. Si le CSF veut poursuivre le combat en cour, qu’il trouve un financement extérieur.',
        'Remettre ces dollars aux élèves d’aujourd’hui : instruction, services, écoles existantes.',
        'Fournir une présentation publique en ligne — avec la participation de Juristes Power Law — sur l’historique du dossier, où est allé l’argent, pourquoi le combat continue, et quels en sont les objectifs.',
        'Publier un plan clair pour rembourser le déficit de 3,4 M$ approuvé par le ministère d’ici 2028 — un déficit que les conseils ne peuvent normalement pas porter.',
      ],
    },
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Êtes-vous contre les écoles françaises ou l’article 23 ?',
        a: 'Non. Nous soutenons l’élargissement de l’accès à l’éducation en français en C.-B. Nous nous opposons à financer des procès ouverts avec l’argent d’exploitation des élèves.',
      },
      {
        q: 'Que demandez-vous exactement ?',
        a: 'Arrêter de financer les litiges ouverts avec le fonds d’exploitation; remettre l’argent en classe; une présentation publique en ligne avec Juristes Power; et un plan clair pour rembourser le déficit d’ici 2028. Si le CSF veut continuer en cour, qu’il trouve un financement extérieur.',
      },
      {
        q: 'L’appel n’est-il pas nécessaire ?',
        a: 'Des droits importants ont déjà été reconnus. Les retours diminuent pendant que les factures montent — et le ministère exige un remboursement du déficit d’ici 2028.',
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
    heroLine1: 'Millions spent in court.',
    heroLine2: 'Students suffering.',
    heroSupport:
      'We support expanding French-language education in B.C. — but never-ending legal fights must not come at the expense of today’s students.',
    barsCaption: 'Payments to Juristes Power Law — last five fiscal years¹',
    barsTotalLabel: 'Five-year total',
    stats: [
      {
        icon: 'up' as const,
        value: '$8.9M',
        label: 'spent on Juristes Power in 2024–25 alone (~7.7% of operating expenses)',
      },
      {
        icon: 'down' as const,
        value: '−8.1%',
        label: 'CSF enrolment from 2021–22 to 2025–26 (6,400 → 5,879)',
      },
      {
        icon: 'debt' as const,
        value: '$3.4M · 2028',
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
      body: 'This site was created by concerned parents of CSF students. We are not the school board and not the Ministry. We want strong classrooms and a growing francophone network — not an operating budget drained by never-ending legal battles.',
    },
    ask: {
      title: 'What we are asking for',
      items: [
        'Stop paying legal fees from the operating budget. If CSF wants to continue the legal fight, find outside funding.',
        'Put those dollars back into today’s students: instruction, services, existing schools.',
        'Provide a public online presentation — with Juristes Power Law participating — on the history of the case, where the money has gone, why the fight continues, and what the goals are.',
        'Publish a clear plan to retire the ministry-approved $3.4M deficit by 2028 — a deficit boards are not normally allowed to carry.',
      ],
    },
    faqTitle: 'FAQ',
    faq: [
      {
        q: 'Are you against French schools or section 23?',
        a: 'No. We support expanding access to French education in B.C. We oppose funding open-ended litigation from student operating funds.',
      },
      {
        q: 'What exactly are you asking for?',
        a: 'Stop funding open-ended litigation from the operating budget; put the money back into classrooms; a public online presentation with Juristes Power; and a clear plan to retire the deficit by 2028. If CSF continues in court, find outside funding.',
      },
      {
        q: 'Isn’t the appeal necessary?',
        a: 'Major rights have already been recognized. Returns are diminishing while bills rise — and the Ministry requires deficit retirement by 2028.',
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
