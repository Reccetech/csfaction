import type { Lang } from './ui';
import { estimateNotes, sources } from './sources';

export const enrolment = {
  fr: {
    title: 'Effectif — Élèves d’abord',
    description: 'Le CSF perd des élèves chaque année depuis 2021–22.',
    h1: 'Effectif en baisse',
    lead: 'Nous comprenons que l’effectif dépend de nombreux facteurs et nous ne suggérons aucun lien direct avec les dépenses juridiques. Nous soulignons seulement, à un niveau plus général, que le CSF a perdu des élèves chaque année de 2021–22 à 2025–26. Se battre pour de nouvelles écoles pendant que les écoles existantes souffrent et déclinent paraît contre-intuitif.',
    chartTitle: 'Effectif district (tête)',
    schoolsTitle: 'Grandes baisses dans les écoles',
    schoolsIntro:
      'Parmi les grandes écoles, Victor-Brodeur a perdu le plus d’élèves en absolu (−217, −32 %).',
    closeTitle: 'Ce que cela signifie',
    closeBody:
      'Les parents veulent des écoles dynamiques de haute qualité qui encouragent l’apprentissage. Le CSF a aussi des défis particuliers, comme des coûts de transport plus élevés pour répondre aux besoins des élèves. Tout cela exige que chaque dollar du financement des élèves aille aux élèves. Il faut cesser de vider le fonds d’exploitation pour des procès pendant que l’effectif chute.',
    sourcesIntro:
      'Données tirées du jeu ouvert du ministère (inscription / FTE). Les baisses d’écoles ci-dessus sont calculées à partir de ces fichiers.',
    schools: [
      { name: 'Victor-Brodeur', from: 687, to: 470, delta: '−217 (−32 %)' },
      { name: 'André-Piolat', from: 463, to: 386, delta: '−77 (−17 %)' },
      { name: 'de l’Anse-au-sable', from: 287, to: 222, delta: '−65 (−23 %)' },
      { name: 'Au cœur de l’île', from: 295, to: 253, delta: '−42 (−14 %)' },
    ],
  },
  en: {
    title: 'Enrolment — CSF Students First',
    description: 'CSF has lost students every year since 2021–22.',
    h1: 'Falling enrolment',
    lead: 'We understand that student enrolment is shaped by many different factors, and we are not suggesting any direct correlation to legal spending. We are only making the higher-level point that CSF lost students every year from 2021–22 to 2025–26. Fighting for new schools while the existing schools suffer and decline seems counterintuitive.',
    chartTitle: 'District enrolment (headcount)',
    schoolsTitle: 'Largest school declines',
    schoolsIntro:
      'Among larger schools, Victor-Brodeur saw the biggest absolute drop (−217, −32%).',
    closeTitle: 'What this means',
    closeBody:
      'Parents want high-quality, vibrant schools that encourage learning. CSF also has unique challenges, such as higher transportation costs to meet student needs. That all requires every dollar of student funding to go to students. We need to stop draining the operating fund for litigation while enrolment falls.',
    sourcesIntro:
      'Figures from the Ministry open dataset (enrolment / FTE). School declines above are calculated from those files.',
    schools: [
      { name: 'Victor-Brodeur', from: 687, to: 470, delta: '−217 (−32%)' },
      { name: 'André-Piolat', from: 463, to: 386, delta: '−77 (−17%)' },
      { name: 'de l’Anse-au-sable', from: 287, to: 222, delta: '−65 (−23%)' },
      { name: 'Au cœur de l’île', from: 295, to: 253, delta: '−42 (−14%)' },
    ],
  },
} as const satisfies Record<Lang, unknown>;

export const legal = {
  fr: {
    title: 'Dossier juridique — Élèves d’abord',
    description:
      'Depuis 2010 : droits linguistiques, gains majeurs, puis une vague d’exécution coûteuse — plus de 35 M$ en honoraires côté CSF.',
    h1: 'État du dossier et frais juridiques',
    lead: 'Les droits linguistiques comptent. Voici ce que le CSF a obtenu — et pourquoi la poursuite coûteuse en cours pourrait ne pas apporter grand-chose.',

    fightTitle: 'Ce pour quoi le CSF se battait',
    fightBody:
      'Depuis juin 2010, le CSF (avec la Fédération des parents francophones et des ayants droit) poursuit la Province en vertu de l’article 23 de la Charte : financement insuffisant et installations inadéquates pour l’éducation en français en C.-B. La vague A visait des réformes systémiques, des installations dans environ 17 communautés, des dommages — et un programme de capital de l’ordre de ~300 M$ ordonné par la cour.',
    winsTitle: 'Faits saillants et résultats majeurs',
    wins: [
      '2016 (BCSC 1764) : succès partiel après un procès de 238 jours — pas le méga-programme de construction demandé.',
      '2020 (CSC 13) : gain majeur — déclarations élargies sur les installations, 6 M$ en dommages de transport restaurés, 1,1 M$ (facteur rural AFG). Ce n’était pas une ordonnance de construire pour 300 M$.',
      'Les tribunaux ont aussi critiqué les « lettres de positionnement » adversariales du CSF, qui nuisaient à la collaboration nécessaire pour construire des écoles (Russell J. 2016; Gomery J. 2025).',
    ],

    nowTitle: 'Ce que le CSF poursuit maintenant — et pourquoi c’est une impasse coûteuse',
    nowBody:
      'La vague B (depuis ~2020) vise l’exécution : sites, outils fonciers, coopération avec la Province et le Vancouver School Board. Le procès d’exécution (~117 jours) a donné des résultats mitigés; le CSF a porté appel. Les grands principes de l’article 23 ont déjà été clarifiés en 2020. Continuer une escalade maximaliste en cour — financée par le fonds d’exploitation — rapporte de moins en moins pour les élèves déjà inscrits, alors que les écoles actuelles perdent du monde et qu’un déficit de 3,4 M$ doit être remboursé d’ici 2028.',
    feesTitle: 'Paiements SOFI à Juristes Power Law (année par année)',
    feesIntro:
      'Montants exacts tirés des SOFI publics du CSF. Le site du CSF publie des SOFI à partir de 2019–20 seulement. Les états financiers vérifiés de 2010 à 2019 sont en ligne, mais ils ne ventilent pas les paiements au cabinet. CBC rapportait déjà près de 17 M$ dépensés sur le dossier au verdict de 2016.',
    feesChartNote:
      'Montants : SOFI CSF (fournisseurs > 25 000 $), page des rapports financiers. Pas de ligne annuelle Juristes Power publiée pour 2010–11 à 2018–19 sur cette page.',
    overallTitle: 'Coût global (repères publics)',
    overall: [
      {
        label: 'Vague A — près de 17 M$ déjà dépensés au verdict de 2016',
        value: '~17 M$',
        href: sources.cbc2016.href,
        sourceLabel: 'CBC News',
      },
      {
        label: 'Vague B — chiffre CSF (mars 2021–juin 2025)',
        value: '17,98 M$',
        href: sources.radioCanadaWaveBCosts.href,
        sourceLabel: 'Radio-Canada',
      },
      {
        label: 'Juristes Power — SOFI 2019–20 à 2024–25',
        value: '~21,6 M$',
        href: sources.csfFinancialReports.href,
        sourceLabel: 'SOFI CSF',
      },
      {
        label: 'Estimation durée de vie — honoraires CSF',
        value: '> 35 M$',
        href: sources.cbc2016.href,
        sourceLabel: 'CBC + SOFI (estim.)',
      },
      {
        label: 'Toutes parties (CSF + défense Province/VSB)',
        value: '> 40–45 M$',
        href: sources.radioCanadaWaveBCosts.href,
        sourceLabel: 'Radio-Canada (estim.)',
      },
    ],
    estimateNote: `${estimateNotes.fr.lifetime} ${estimateNotes.fr.allParties}`,
    opportunityTitle: 'Coût d’opportunité',
    opportunityBody:
      'En 2024–25, les paiements à Juristes Power (~8,9 M$) représentaient près de 28 % de la masse salariale enseignante (SOFI vs salaires enseignants, AFS 2024–25, annexe 2B) — environ 1 $ en honoraires pour 4 $ versés aux enseignants.',
    deficitTitle: 'Le carcan du déficit',
    deficitBody:
      'Les conseils ne peuvent normalement pas porter un déficit d’exploitation accumulé. Le ministère a approuvé ~3,4 M$ le 13 mars 2026, à éliminer au plus tard le 30 juin 2028. Des frais juridiques ouverts entrent en collision avec cette obligation.',
    closeTitle: 'Notre ligne',
    closeBody:
      'Les droits, oui. L’expansion du français, oui. Financer la suite avec le fonds d’exploitation des élèves, non. Si le conseil veut continuer, qu’il trouve un financement extérieur.',
    sourcesIntro:
      'Chaque chiffre important renvoie à un document public, un jugement ou un reportage. Les totaux « durée de vie » et « toutes parties » sont des estimations construites à partir de ces sources — pas une seule facture.',
  },
  en: {
    title: 'Legal case — CSF Students First',
    description:
      'Since 2010: language rights, major wins, then a costly enforcement wave — CSF counsel spend well over $35M.',
    h1: 'State of the case and legal fees',
    lead: 'Language rights matter. Here is what CSF fought for and won — and why the ongoing expensive court path might not deliver much.',

    fightTitle: 'What CSF has been fighting for',
    fightBody:
      'Since June 2010, CSF (with the Fédération des parents francophones and rights-holder parents) has litigated against the Province under Charter section 23: underfunding and inadequate French-language facilities in B.C. Wave A sought systemic funding reforms, facilities in about 17 communities, damages — and a court-ordered capital program on the order of ~$300M+.',
    winsTitle: 'Major results and highlights',
    wins: [
      '2016 (BCSC 1764): partial success after a 238-day trial — not the mega capital-build order sought.',
      '2020 (SCC 13): major win — broader facilities declarations, $6M transport damages restored, $1.1M AFG Rural Factor. It was not a $300M court-ordered build program.',
      'Courts also criticized CSF’s adversarial “positioning letters,” which impeded the collaboration needed to actually deliver schools (Russell J. 2016; Gomery J. 2025).',
    ],

    nowTitle: 'What CSF is fighting for now — and why it is a costly dead end',
    nowBody:
      'Wave B (from ~2020) is enforcement: sites, land tools, and cooperation with the Province and Vancouver School Board. The enforcement trial (~117 days) produced mixed results; CSF appealed. The big section 23 principles were largely clarified in 2020. Continuing maximalist courtroom escalation — paid from the operating fund — delivers diminishing returns for students already enrolled, while existing schools lose enrolment and a $3.4M deficit must be cleared by 2028.',
    feesTitle: 'SOFI payments to Juristes Power Law (year by year)',
    feesIntro:
      'Exact amounts from CSF’s public SOFIs. CSF’s financial-reports page only publishes SOFIs from 2019–20 onward. Audited financial statements for 2010–2019 are online, but they do not break out payments to the law firm. CBC reported nearly $17M already spent on the case by the 2016 trial verdict.',
    feesChartNote:
      'Amounts: CSF SOFI (suppliers paid over $25,000), financial-reports page. No annual Juristes Power SOFI lines published there for 2010–11 through 2018–19.',
    overallTitle: 'Overall cost (public benchmarks)',
    overall: [
      {
        label: 'Wave A — nearly $17M already spent by the 2016 trial',
        value: '~$17M',
        href: sources.cbc2016.href,
        sourceLabel: 'CBC News',
      },
      {
        label: 'Wave B — CSF figure (Mar 2021–Jun 2025)',
        value: '$17.98M',
        href: sources.radioCanadaWaveBCosts.href,
        sourceLabel: 'Radio-Canada',
      },
      {
        label: 'Juristes Power — SOFI 2019–20 through 2024–25',
        value: '~$21.6M',
        href: sources.csfFinancialReports.href,
        sourceLabel: 'CSF SOFI',
      },
      {
        label: 'Lifetime estimate — CSF counsel',
        value: '>$35M',
        href: sources.cbc2016.href,
        sourceLabel: 'CBC + SOFI (est.)',
      },
      {
        label: 'All parties (CSF + Province/VSB defence)',
        value: '>$40–45M',
        href: sources.radioCanadaWaveBCosts.href,
        sourceLabel: 'Radio-Canada (est.)',
      },
    ],
    estimateNote: `${estimateNotes.en.lifetime} ${estimateNotes.en.allParties}`,
    opportunityTitle: 'Opportunity cost',
    opportunityBody:
      'In 2024–25, Juristes Power payments (~$8.9M) were nearly 28% of teacher salaries (SOFI vs teacher salaries, AFS 2024–25 Schedule 2B) — roughly $1 in legal fees for every $4 paid to teachers.',
    deficitTitle: 'The deficit leash',
    deficitBody:
      'Boards are not normally allowed to carry an accumulated operating deficit. The Ministry approved ~$3.4M on 13 March 2026, to be eliminated by 30 June 2028. Open-ended legal fees collide with that duty.',
    closeTitle: 'Our line',
    closeBody:
      'Rights, yes. Expanding French access, yes. Funding the next round from student operating funds, no. If the board wants to continue, it must find outside funding.',
    sourcesIntro:
      'Every major figure links to a public document, judgment, or news report. The “lifetime” and “all parties” totals are estimates built from those sources — not a single invoice.',
  },
} as const satisfies Record<Lang, unknown>;

export const pushback = {
  fr: {
    title: 'Réactions — Élèves d’abord',
    description: 'Lettres du SEPF, réponse du ministère, médias et réseaux sociaux.',
    h1: 'Réactions',
    lead:
      'Syndicats, partenaires, médias et parents ont signalé que le coût du litige pèse sur les services. Voici les documents, reportages et canaux sociaux à consulter.',
    listTitle: 'Lire et suivre',
    items: [
      {
        title: 'SEPF → Ministère',
        blurb:
          '8 octobre 2025 — demande d’examen de gouvernance / financier : mauvaises priorités budgétaires et procès coûteux au détriment des services aux élèves.',
        href: '/docs/SEPF-to-Ministry-2025-10-08.pdf',
      },
      {
        title: 'SEPF → Beare (suivi)',
        blurb:
          '4 février 2026 — lettre de suivi à la ministre / sous-ministre sur la gouvernance et les finances du CSF.',
        href: '/docs/SEPF-to-Beare-followup-2026-02-04.pdf',
      },
      {
        title: 'Ministère / Beare → SEPF',
        blurb:
          '13 mars 2026 — réponse : déficit d’environ 3,4 M$ approuvé, à éliminer au plus tard le 30 juin 2028, avec suivi trimestriel. Aucune enquête judiciaire approfondie publique annoncée.',
        href: '/docs/Beare-SEPF-letter-2026-03-13.pdf',
      },
      {
        title: 'SEPFCB — Médias',
        blurb:
          'Dossier syndical : cause juridique, démissions demandées, lettres au ministère — point d’entrée stable en français.',
        href: 'https://www.sepfcb.com/medias',
      },
      {
        title: 'SEPFCB — Facebook',
        blurb:
          'Canal social principal du syndicat enseignant : mobilisation, soirées-débats et élections scolaires 2026.',
        href: 'https://www.facebook.com/SEPFCB',
      },
      {
        title: 'SEPFCB — Instagram',
        blurb:
          '@sepf.cb — même campagne en format visuel / mobile pour les membres et parents.',
        href: 'https://www.instagram.com/sepf.cb',
      },
      {
        title: 'Radio-Canada — « cher payé »',
        blurb:
          'Couverture du jugement et de la réaction SEPFCB : le coût du procès au détriment des salles de classe.',
        href: 'https://ici.radio-canada.ca/nouvelle/2168266/decision-cour-supreme-csf-ecoles-francophones',
      },
      {
        title: 'Radio-Canada — appel CSF',
        blurb:
          'Le CSF porte appel; partenaires divisés; contexte déficit et frais juridiques.',
        href: 'https://ici.radio-canada.ca/nouvelle/2175636/appel-deficit-remboursement-eleves-proces',
      },
      {
        title: 'Francopresse',
        blurb:
          'Demande de démission de conseillers. Selon Véronique Fleury (SCFP 4227), cinq des six partenaires consultés (SEPF, SCFP, directions d’écoles, FPFCB, Conseil jeunesse, FFCB) auraient dit non à l’appel — le CSF a quand même porté appel.',
        href: 'https://francopresse.ca/education/2025/10/13/colombie-britannique-les-enseignantes-francophones-demandent-la-demission-de-cinq-conseillers-scolaires/',
      },
      {
        title: 'SCFP 4227',
        blurb:
          'Syndicat du personnel de soutien : services aux élèves réduits au « strict minimum »; questions de transparence sur les avocats et les consultations.',
        href: 'https://4227.wplocals.cupe.ca/',
      },
      {
        title: 'La Source',
        blurb:
          'Couverture locale francophone de la demande de démission et du débat interne à la francophonie.',
        href: 'https://thelasource.com/fr/societe/education/2025/10/07/le-syndicat-enseignant-francophone-de-la-colombie-britannique-demande-la-demission-de-cinq-membres-du-conseil-scolaire/',
      },
    ],
    electionNote:
      'Les élections scolaires de l’automne 2026 sont une fenêtre de responsabilité. Ce site documente les faits pour les parents et la presse.',
  },
  en: {
    title: 'Pushback — CSF Students First',
    description: 'SEPF letters, Ministry reply, news, and social channels.',
    h1: 'Pushback',
    lead:
      'Unions, partners, media, and parents have flagged that litigation cost is hitting services. Here are the documents, reports, and social channels to follow.',
    listTitle: 'Read and follow',
    items: [
      {
        title: 'SEPF → Ministry',
        blurb:
          '8 October 2025 — asks for a governance / financial review: budget priorities and costly litigation at the expense of student services.',
        href: '/docs/SEPF-to-Ministry-2025-10-08.pdf',
      },
      {
        title: 'SEPF → Beare (follow-up)',
        blurb:
          '4 February 2026 — follow-up letter to the Minister / deputy on CSF governance and finances.',
        href: '/docs/SEPF-to-Beare-followup-2026-02-04.pdf',
      },
      {
        title: 'Ministry / Beare → SEPF',
        blurb:
          '13 March 2026 — reply: ~$3.4M deficit approved, to be eliminated by 30 June 2028, with quarterly monitoring. No public forensic investigation announced.',
        href: '/docs/Beare-SEPF-letter-2026-03-13.pdf',
      },
      {
        title: 'SEPFCB — Media',
        blurb:
          'Union dossier: legal case, resignation demands, letters to the Ministry — a stable French-language entry point.',
        href: 'https://www.sepfcb.com/medias',
      },
      {
        title: 'SEPFCB — Facebook',
        blurb:
          'Teachers’ union main social hub: organizing, debate nights, and 2026 school-board elections.',
        href: 'https://www.facebook.com/SEPFCB',
      },
      {
        title: 'SEPFCB — Instagram',
        blurb:
          '@sepf.cb — same campaign in visual / mobile form for members and parents.',
        href: 'https://www.instagram.com/sepf.cb',
      },
      {
        title: 'Radio-Canada — « cher payé »',
        blurb:
          'Coverage of the judgment and SEPFCB’s reaction: trial cost at the expense of classrooms.',
        href: 'https://ici.radio-canada.ca/nouvelle/2168266/decision-cour-supreme-csf-ecoles-francophones',
      },
      {
        title: 'Radio-Canada — CSF appeal',
        blurb:
          'CSF appeals; partners split; deficit and legal-fee context.',
        href: 'https://ici.radio-canada.ca/nouvelle/2175636/appel-deficit-remboursement-eleves-proces',
      },
      {
        title: 'Francopresse',
        blurb:
          'Resignation demand. Per Véronique Fleury (CUPE 4227), five of six consulted partners (SEPF, CUPE, school principals’ group, FPFCB, youth council, FFCB) said no to an appeal — CSF appealed anyway.',
        href: 'https://francopresse.ca/education/2025/10/13/colombie-britannique-les-enseignantes-francophones-demandent-la-demission-de-cinq-conseillers-scolaires/',
      },
      {
        title: 'CUPE 4227',
        blurb:
          'Support-staff union: student services cut to the “strict minimum”; transparency questions on counsel and consultations.',
        href: 'https://4227.wplocals.cupe.ca/',
      },
      {
        title: 'La Source',
        blurb:
          'Local francophone coverage of the resignation demand and the debate inside the francophone community.',
        href: 'https://thelasource.com/fr/societe/education/2025/10/07/le-syndicat-enseignant-francophone-de-la-colombie-britannique-demande-la-demission-de-cinq-membres-du-conseil-scolaire/',
      },
    ],
    electionNote:
      'Fall 2026 school-board elections are an accountability window. This site documents the facts for parents and the press.',
  },
} as const satisfies Record<Lang, unknown>;
