import type { Lang } from './ui';

export type TimelineItem = {
  label: string;
  date: string;
};

export type CaseAppeal = {
  title: string;
  timeline: TimelineItem[];
  partnersTitle: string;
  partners: string[];
  summaryTitle: string;
  summary: string[];
  goalsTitle: string;
  goals: string[];
  chancesTitle: string;
  chances: string[];
};

export type CaseWave = {
  id: 'wave-a' | 'wave-b';
  title: string;
  subtitle: string;
  timeline: TimelineItem[];
  summaryTitle: string;
  summary: string[];
  achievedTitle: string;
  achieved: string[];
  notAchievedTitle: string;
  notAchieved: string[];
  appeal?: CaseAppeal;
  refs: { label: string; href: string }[];
};

export type BiggerPicture = {
  title: string;
  paragraphs: string[];
  refs: { label: string; href: string }[];
};

export const legalCaseDeep = {
  fr: {
    winsTitle: 'Faits saillants et résultats majeurs',
    winsLead:
      'Les droits linguistiques du CSF sont réels — et ont été reconnus. « Succès partiel » et « gain majeur » ne veulent pas dire que la cour a ordonné de construire toutes les écoles demandées, ni d’ouvrir le budget de capital provincial sans limite.',
    waves: [
      {
        id: 'wave-a',
        title: 'Vague A — droits et financement',
        subtitle:
          'Le premier mégaprocès : faire reconnaître les manquements à l’article 23 et obtenir des remèdes — y compris un vaste programme de capital.',
        timeline: [
          { label: 'Dépôt de la demande', date: '3 juin 2010' },
          { label: 'Procès (BCSC)', date: '~238 jours d’audience → jugement le 26 sept. 2016' },
          { label: 'Cour d’appel (BCCA)', date: '25 juillet 2018' },
          { label: 'Cour suprême du Canada', date: '12 juin 2020 (2020 CSC 13)' },
        ],
        summaryTitle: 'Résumé des procédures',
        summary: [
          'Depuis le 3 juin 2010, le CSF (avec la Fédération des parents francophones et des ayants droit) a poursuivi la Province pour sous-financement et installations inadéquates sous l’article 23. Le procès Russell a duré environ 238 jours d’audience; le jugement 2016 BCSC 1764 est daté du 26 septembre 2016.',
          'En appel (25 juillet 2018), la Cour d’appel a rejeté l’axe principal des demandeurs sur un mégaprogramme de construction en capital. Le 12 juin 2020, la Cour suprême du Canada (2020 CSC 13) a élargi des déclarations et restauré certains dommages — une victoire juridique réelle, mais technique.',
          'Le CSF cherchait surtout un programme de construction d’environ 300 M$ ordonné par la cour — un ordre de grandeur comparable au budget annuel de capital scolaire de toute la province. Cette théorie a échoué. Gagner sur le droit n’équivaut pas à recevoir le chéquier de capital : les écoles passent encore par le processus budgétaire provincial.',
        ],
        achievedTitle: 'Obtenu',
        achieved: [
          'Reconnaissance de manquements à l’article 23 dans plusieurs communautés (jugement Russell, 2016).',
          'Déclarations et dommages importants confirmés ou restaurés en CSC (2020), dont environ 6 M$ en dommages de transport et environ 1,1 M$ (facteur rural AFG).',
          'Jalon doctrinal pour l’éducation en français en C.-B. : les droits existent et la Province a des obligations concrètes.',
        ],
        notAchievedTitle: 'Non obtenu',
        notAchieved: [
          'Pas de programme de construction en capital d’environ 300 M$ ordonné par la cour — l’objectif maximaliste principal.',
          'Pas d’ordonnance du type « construisez toutes ces écoles maintenant, à ce prix ».',
          'Pas de chéquier de capital illimité : le financement des bâtiments reste soumis aux plans de capital, priorités et enveloppes provinciales.',
        ],
        refs: [
          {
            label: '2016 BCSC 1764 (CanLII)',
            href: 'https://www.canlii.org/en/bc/bcsc/doc/2016/2016bcsc1764/2016bcsc1764.html',
          },
          {
            label: '2020 CSC 13',
            href: 'https://decisions.scc-csc.ca/scc-csc/scc-csc/en/item/18390/index.do',
          },
          {
            label: 'CBC — ~17 M$ déjà dépensés au verdict 2016',
            href: 'https://www.cbc.ca/news/canada/british-columbia/french-education-bc-verdict-1.3778541',
          },
        ],
      },
      {
        id: 'wave-b',
        title: 'Vague B — exécution',
        subtitle:
          'Forcer la mise en œuvre après 2020 : sites, outils fonciers, coopération Province / VSB — puis appel.',
        timeline: [
          { label: 'Dépôt de l’action d’exécution', date: 'décembre 2020' },
          { label: 'Procès (BCSC, juge Gomery)', date: 'août 2024 → avril 2025 (~117 jours)' },
          { label: 'Jugement', date: '23 mai 2025 (2025 BCSC 962; publié ~27 mai)' },
        ],
        summaryTitle: 'Résumé des procédures',
        summary: [
          'En décembre 2020, le CSF a poursuivi la Province et le Vancouver School Board (VSB) parce que plusieurs écoles promises n’étaient toujours pas livrées : sites, outils fonciers, coopération, divulgation budgétaire.',
          'Le procès devant le juge Gomery a commencé en août 2024 et s’est étendu jusqu’en avril 2025 — environ 117 jours d’audience (prévu ~60). Le jugement 2025 BCSC 962 est daté du 23 mai 2025. Le CSF a déclaré environ 17,98 M$ de coûts pour la vague B (mars 2021–juin 2025); le VSB environ 9,35 M$ en défense. La décision sur les dépens a aussi conclu que le CSF avait prolongé le procès et a amputé une partie des dépens récupérables.',
        ],
        achievedTitle: 'Obtenu',
        achieved: [
          'Ordonnance à la Province de légiférer (délai de six mois au jugement) pour donner au CSF un pouvoir d’expropriation — le seul conseil scolaire provincial qui n’en avait pas.',
          'Démarches concrètes ordonnées sur certains sites à Vancouver (négociation et/ou transfert selon le site).',
          'Constat de retards et de non-divulgation budgétaire côté Province.',
          'Devoir du VSB de pondérer l’article 23 lorsqu’il traite de sites scolaires excédentaires.',
        ],
        notAchievedTitle: 'Non obtenu',
        notAchieved: [
          'Pas de supervision judiciaire continue : la cour a refusé de rester saisie du dossier au long cours.',
          'Pas de pleine propriété (freehold) imposée partout comme demandé — ex. bail de 99 ans jugé suffisant pour Queen Elizabeth Annex.',
          'Pas d’ordonnance immédiate de transfert pour A.R. Lord (trop tôt).',
          'Pas de responsabilité des retards mise uniquement sur la Province — partagée entre Province, CSF et VSB.',
        ],
        appeal: {
          title: 'L’appel et la situation actuelle',
          timeline: [
            { label: 'Dépôt de l’appel CSF', date: 'juin 2025 (signalé publiquement le 26 juin 2025)' },
            { label: 'Appel incident VSB', date: '8 juillet 2025 (notamment Laurier)' },
            { label: 'Appel Province', date: 'été 2025 (dont pouvoir d’expropriation)' },
            { label: 'Décision sur les dépens', date: 'octobre 2025 (65 % VSB; procès prolongé)' },
            { label: 'Audience en Cour d’appel', date: 'dates non fixées (reportages publics disponibles)' },
          ],
          partnersTitle: 'Consultation des partenaires (5 sur 6)',
          partners: [
            'Avant d’appeler, le CSF a consulté six partenaires institutionnels : le SEPF, le SCFP 4227, le Regroupement des directions d’écoles francophones, la FPFCB, le Conseil jeunesse francophone de la C.-B., et la FFCB.',
            'Selon Véronique Fleury (SCFP 4227, Francopresse), cinq des six ont dit non à l’appel; le CSF a quand même confirmé l’appel fin juin 2025.',
            'Par la suite, des porte-paroles de la FPFCB et de la FFCB ont affirmé publiquement (Radio-Canada) que l’appel était nécessaire; le SEPF et le SCFP 4227 sont restés opposés.',
          ],
          summaryTitle: 'Résumé de l’appel',
          summary: [
            'Après le jugement Gomery, le CSF a porté appel; le VSB a formé un appel incident; la Province a aussi contesté certains aspects. Les dates d’audience en Cour d’appel n’étaient pas encore fixées dans les reportages publics disponibles.',
            'En octobre 2025, le juge Gomery a tranché les dépens : le VSB doit rembourser 65 % des dépens du CSF pour la portion VSB, mais le CSF a été privé d’une partie des dépens parce que le procès avait été prolongé. Le montant peut encore changer selon l’appel.',
          ],
          goalsTitle: 'Objectifs de l’appel',
          goals: [
            'Élargir les remèdes d’exécution au-delà du jugement de première instance — pas refaire le débat de 2020 sur l’existence des droits sous l’article 23.',
            'Obtenir des constatations d’urgence et des ordres plus fermes sur les transferts de propriété (Vancouver et Whistler, selon les sites en litige).',
            'Contester les limites du jugement de mai 2025 — notamment le refus de supervision judiciaire continue, le bail de 99 ans jugé suffisant pour Queen Elizabeth Annex, et l’absence d’ordonnance immédiate pour A.R. Lord.',
            'Préserver et renforcer les gains déjà obtenus (expropriation, obligations de négociation / sites, devoir de pondération du VSB) face aux appels de la Province et du VSB.',
          ],
          chancesTitle:
            'Nous ne sommes pas avocats, mais voici ce que nous pensons des chances de succès de l’appel…',
          chances: [
            'Le jugement de mai 2025 était déjà un succès partiel : élargir fortement les remèdes en appel est une pente raide.',
            'La Cour d’appel intervient peu sur les remèdes discrétionnaires et les conclusions de fait — surtout la responsabilité partagée des retards et le refus de supervision continue.',
            'La Province et le VSB appellent aussi : le CSF peut perdre du terrain sur des gains déjà obtenus, pas seulement en gagner.',
            'Des gains étroits restent possibles; un renversement maximal (pleine propriété partout, supervision continue, transferts immédiats) semble peu probable.',
          ],
        },
        refs: [
          {
            label: '2025 BCSC 962 (CanLII)',
            href: 'https://www.canlii.org/en/bc/bcsc/doc/2025/2025bcsc962/2025bcsc962.html',
          },
          {
            label: 'Francopresse — consultation / 5 partenaires sur 6',
            href: 'https://francopresse.ca/education/2025/10/13/colombie-britannique-les-enseignantes-francophones-demandent-la-demission-de-cinq-conseillers-scolaires/',
          },
          {
            label: 'Radio-Canada — appel CSF / partenaires',
            href: 'https://ici.radio-canada.ca/nouvelle/2175636/appel-deficit-remboursement-eleves-proces',
          },
          {
            label: 'Radio-Canada — dépens / 65 % VSB / procès prolongé',
            href: 'https://ici.radio-canada.ca/nouvelle/2200286/proces-ecoles-francos-cour-supreme',
          },
          {
            label: 'VSB — appel incident (8 juil. 2025)',
            href: 'https://vsb.bc.ca/vancouver-school-board-responds-to-csf-appeal.81700',
          },
          {
            label: 'Francopresse — réponse CSF / offre d’honoraires d’appel',
            href: 'https://francopresse.ca/francophonie/2025/10/23/colombie-britannique-le-syndicat-critique-la-reponse-du-conseil-scolaire-francophone/',
          },
        ],
      },
    ] satisfies CaseWave[],
    biggerPicture: {
      title: 'Le portrait d’ensemble — cour et budget de capital',
      paragraphs: [
        'Zoom arrière : même quand un conseil gagne en cour, cela clarifie surtout des obligations juridiques. Le financement des nouvelles écoles reste un processus provincial concurrentiel. Budget 2024 : environ 1,046 G$ de capital K-12 pour 2024–25, et environ 3,752 G$ sur trois ans (expansion/remplacement, mitigation sismique, réhabilitation). Ces enveloppes servent toute la province — districts en forte croissance, écoles à risque sismique, bâtiments vieillissants.',
        'Un programme de construction d’environ 300 M$ ordonné par la cour aurait représenté une part considérable de ce cadre annuel. Même avec des déclarations favorables et un pouvoir d’expropriation, le CSF doit encore faire prioriser ses projets dans le plan de capital provincial — à côté de dizaines d’autres demandes scolaires.',
        'En somme : la salle d’audience et le Trésor ne sont pas la même chose. Un jugement peut ouvrir des portes; les dollars de construction passent encore par les priorités budgétaires de Victoria.',
      ],
      refs: [
        {
          label: 'Budget 2024 C.-B. — capital K-12',
          href: 'https://blog.gov.bc.ca/app/uploads/sites/808/2024/02/ECC-Stakeholder-Package_Ministry.pdf',
        },
        {
          label: 'Programmes de capital K-12 (province)',
          href: 'https://www2.gov.bc.ca/gov/content/education-training/k-12/administration/capital/programs',
        },
      ],
    },
  },
  en: {
    winsTitle: 'Major results and highlights',
    winsLead:
      'CSF’s language rights are real — and courts have recognized them. “Partial success” and “major win” do not mean the court ordered every school CSF asked for, or opened the provincial capital budget without limit.',
    waves: [
      {
        id: 'wave-a',
        title: 'Wave A — rights and funding',
        subtitle:
          'The first mega-case: get section 23 breaches recognized and win remedies — including a large capital program.',
        timeline: [
          { label: 'Claim filed', date: '3 June 2010' },
          { label: 'Trial (BCSC)', date: '~238 sitting days → judgment 26 Sep 2016' },
          { label: 'Court of Appeal (BCCA)', date: '25 July 2018' },
          { label: 'Supreme Court of Canada', date: '12 June 2020 (2020 SCC 13)' },
        ],
        summaryTitle: 'Summary of proceedings',
        summary: [
          'From 3 June 2010, CSF (with the Fédération des parents francophones and rights-holder parents) sued the Province over underfunding and inadequate facilities under section 23. The Russell trial ran about 238 sitting days; judgment 2016 BCSC 1764 is dated 26 September 2016.',
          'On appeal (25 July 2018), the Court of Appeal rejected the plaintiffs’ main capital mega-build theory. On 12 June 2020, the Supreme Court of Canada (2020 SCC 13) broadened declarations and restored certain damages — a real legal win, but a technical one.',
          'CSF had mainly been fighting for a court-ordered capital build package on the order of ~$300M — a scale compared to the Province’s entire annual education capital budget. That theory failed. Winning on the law is not the same as getting the capital chequebook: schools still go through the provincial budget process.',
        ],
        achievedTitle: 'Achieved',
        achieved: [
          'Section 23 breaches recognized in several communities (Russell judgment, 2016).',
          'Important declarations and damages confirmed or restored at the SCC (2020), including about $6M in transport damages and about $1.1M (AFG Rural Factor).',
          'Doctrinal landmark for French-language education in B.C.: the rights exist and the Province has concrete obligations.',
        ],
        notAchievedTitle: 'Not achieved',
        notAchieved: [
          'No court-ordered ~$300M capital build program — the main maximalist ask.',
          'No order of the form “build all of these schools now, at that price.”',
          'No unlimited capital chequebook: school buildings still depend on provincial capital plans, priorities, and envelopes.',
        ],
        refs: [
          {
            label: '2016 BCSC 1764 (CanLII)',
            href: 'https://www.canlii.org/en/bc/bcsc/doc/2016/2016bcsc1764/2016bcsc1764.html',
          },
          {
            label: '2020 SCC 13',
            href: 'https://decisions.scc-csc.ca/scc-csc/scc-csc/en/item/18390/index.do',
          },
          {
            label: 'CBC — nearly $17M already spent by 2016 verdict',
            href: 'https://www.cbc.ca/news/canada/british-columbia/french-education-bc-verdict-1.3778541',
          },
        ],
      },
      {
        id: 'wave-b',
        title: 'Wave B — enforcement',
        subtitle:
          'Force implementation after 2020: sites, land tools, Province / VSB cooperation — then appeal.',
        timeline: [
          { label: 'Enforcement action filed', date: 'December 2020' },
          { label: 'Trial (BCSC, Justice Gomery)', date: 'August 2024 → April 2025 (~117 days)' },
          { label: 'Judgment', date: '23 May 2025 (2025 BCSC 962; published ~27 May)' },
        ],
        summaryTitle: 'Summary of proceedings',
        summary: [
          'In December 2020, CSF sued the Province and the Vancouver School Board (VSB) because several promised schools were still not delivered: sites, land tools, cooperation, budget disclosure.',
          'Trial before Justice Gomery started in August 2024 and ran into April 2025 — about 117 sitting days (planned ~60). Judgment 2025 BCSC 962 is dated 23 May 2025. CSF reported about $17.98M in Wave B costs (Mar 2021–Jun 2025); VSB about $9.35M defending. The costs ruling also found CSF prolonged the trial and cut part of the recoverable costs.',
        ],
        achievedTitle: 'Achieved',
        achieved: [
          'Order requiring the Province to legislate (six-month timeline in the judgment) to give CSF expropriation powers — the only provincial board that lacked them.',
          'Concrete next steps ordered on certain Vancouver sites (negotiation and/or transfer, depending on the site).',
          'Findings of provincial delay and budget non-disclosure.',
          'VSB duty to balance section 23 when dealing with surplus school sites.',
        ],
        notAchievedTitle: 'Not achieved',
        notAchieved: [
          'No ongoing court supervision — the court refused to stay seized of the file.',
          'No freehold ordered everywhere as asked — e.g. a 99-year lease was held sufficient for Queen Elizabeth Annex.',
          'No immediate transfer order for A.R. Lord (too early).',
          'Delay not pinned on the Province alone — shared among Province, CSF, and VSB.',
        ],
        appeal: {
          title: 'The appeal and current status',
          timeline: [
            { label: 'CSF appeal filed', date: 'June 2025 (publicly reported 26 June 2025)' },
            { label: 'VSB cross-appeal', date: '8 July 2025 (including Laurier)' },
            { label: 'Province appeal', date: 'Summer 2025 (including expropriation powers)' },
            { label: 'Costs ruling', date: 'October 2025 (65% VSB; trial prolonged)' },
            { label: 'Court of Appeal hearing', date: 'Dates not yet set (available public reporting)' },
          ],
          partnersTitle: 'Partner consultation (5 of 6)',
          partners: [
            'Before appealing, CSF consulted six institutional partners: SEPF, CUPE 4227, the Regroupement des directions d’écoles francophones, FPFCB, the Conseil jeunesse francophone de la C.-B., and FFCB.',
            'According to Véronique Fleury (CUPE 4227, Francopresse), five of the six said no to an appeal; CSF confirmed the appeal anyway in late June 2025.',
            'Afterwards, FPFCB and FFCB spokespersons said publicly (Radio-Canada) that an appeal was necessary; SEPF and CUPE 4227 remained opposed.',
          ],
          summaryTitle: 'Appeal Summary',
          summary: [
            'After Justice Gomery’s judgment, CSF appealed; VSB filed a cross-appeal; the Province also challenged aspects of the ruling. Court of Appeal hearing dates had not yet been set in available public reporting.',
            'In October 2025, Justice Gomery ruled on costs: VSB must pay 65% of CSF’s costs for the VSB portion, but CSF was deprived of part of its recoverable costs because the trial was prolonged. That amount may still change depending on the appeal.',
          ],
          goalsTitle: 'Goals of the appeal',
          goals: [
            'Expand enforcement remedies beyond the trial judgment — not re-litigate whether section 23 rights exist after 2020.',
            'Seek urgency findings and stronger orders on property transfers (Vancouver and Whistler, depending on the sites in dispute).',
            'Challenge limits in the May 2025 judgment — including the refusal of ongoing court supervision, the finding that a 99-year lease was enough for Queen Elizabeth Annex, and the lack of an immediate A.R. Lord transfer order.',
            'Preserve and strengthen remedies already won (expropriation, negotiation / site obligations, VSB balancing duty) against the Province’s and VSB’s appeals.',
          ],
          chancesTitle:
            'We are not lawyers, but here is what we think about the chances of the appeal’s success…',
          chances: [
            'The May 2025 judgment was already a partial win: sharply expanding remedies on appeal is an uphill climb.',
            'Appeal courts rarely rebuild discretionary remedies or fact findings — especially shared blame for delay and the refusal of ongoing court supervision.',
            'The Province and VSB also appealed: CSF can lose ground on remedies already won, not only gain more.',
            'Narrow wins remain possible; a maximal rematch (freehold everywhere, ongoing supervision, immediate transfers) seems unlikely.',
          ],
        },
        refs: [
          {
            label: '2025 BCSC 962 (CanLII)',
            href: 'https://www.canlii.org/en/bc/bcsc/doc/2025/2025bcsc962/2025bcsc962.html',
          },
          {
            label: 'Francopresse — consultation / 5 of 6 partners',
            href: 'https://francopresse.ca/education/2025/10/13/colombie-britannique-les-enseignantes-francophones-demandent-la-demission-de-cinq-conseillers-scolaires/',
          },
          {
            label: 'Radio-Canada — CSF appeal / partners',
            href: 'https://ici.radio-canada.ca/nouvelle/2175636/appel-deficit-remboursement-eleves-proces',
          },
          {
            label: 'Radio-Canada — costs / 65% VSB / trial prolonged',
            href: 'https://ici.radio-canada.ca/nouvelle/2200286/proces-ecoles-francos-cour-supreme',
          },
          {
            label: 'VSB — cross-appeal (8 Jul 2025)',
            href: 'https://vsb.bc.ca/vancouver-school-board-responds-to-csf-appeal.81700',
          },
          {
            label: 'Francopresse — CSF reply / appeal fee offer',
            href: 'https://francopresse.ca/francophonie/2025/10/23/colombie-britannique-le-syndicat-critique-la-reponse-du-conseil-scolaire-francophone/',
          },
        ],
      },
    ] satisfies CaseWave[],
    biggerPicture: {
      title: 'The bigger picture — court wins vs capital budgets',
      paragraphs: [
        'Zoom out: even when a board wins in court, that mainly clarifies legal obligations. Funding new schools remains a competitive provincial process. Budget 2024: about $1.046B in K-12 capital for 2024/25, and about $3.752B over three years (expansion/replacement, seismic mitigation, rehabilitation). Those envelopes serve the whole province — high-growth districts, seismic-risk schools, aging buildings.',
        'A court-ordered ~$300M build package would have been a large claim against that annual framework. Even with favourable declarations and expropriation powers, CSF still needs its projects prioritized in the provincial capital plan — alongside dozens of other school requests.',
        'In short: the courtroom and the Treasury are not the same thing. A judgment can open doors; construction dollars still go through Victoria’s budget priorities.',
      ],
      refs: [
        {
          label: 'B.C. Budget 2024 — K-12 capital',
          href: 'https://blog.gov.bc.ca/app/uploads/sites/808/2024/02/ECC-Stakeholder-Package_Ministry.pdf',
        },
        {
          label: 'K-12 capital programs (Province)',
          href: 'https://www2.gov.bc.ca/gov/content/education-training/k-12/administration/capital/programs',
        },
      ],
    },
  },
} as const satisfies Record<Lang, unknown>;
