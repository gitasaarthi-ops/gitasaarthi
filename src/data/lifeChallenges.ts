import { CanonicalSituation } from '../types/gita';

export interface LifeChallenge {
  id: string;
  category: 'anxiety' | 'career' | 'relationships' | 'habits' | 'purpose';
  title: string;
  titleTe: string;
  tagline: string;
  modernSymptom: string;
  whyModernLifeCausesThis: string;
  krishnasDiagnosis: string;
  recommendedShlokaId: string;
  shlokaChapterVerse: string;
  shlokaSanskrit: string;
  shlokaTelugu: string;
  corePrinciple: string;
  threeStepActionPlan: [string, string, string];
}

export const CANONICAL_SITUATIONS: CanonicalSituation[] = [
  {
    id: "career-pressure",
    category: "work",
    titleEn: "Career Burnout & Outcome Anxiety",
    titleTe: "ఉద్యోగ ఒత్తిడి & ఫలితం గురించిన ఆందోళన",
    tagline: "Obsessing over promotions, reviews, or project results.",
    symptomModernEn: "Constantly checking Slack/email, fear of unfavorable performance ratings, mental fatigue, tying your entire self-worth to quarterly outcomes.",
    symptomModernTe: "ఈమెయిల్స్ పదే పదే చూస్తూ, రేటింగ్స్ లేదా ప్రమోషన్ ఏమవుతుందోనన్న భయంతో పనిపై ఏకాగ్రత కోల్పోవడం.",
    krishnaDiagnosisEn: "Arjuna Syndrome: Mentally projecting into future events you cannot control drains cognitive stamina away from the duty in front of you.",
    krishnaDiagnosisTe: "మన చేతిలో లేని భవిష్యత్తు ఫలితాల గురించి అతిగా ఆలోచించి భయపడటం వల్ల ప్రస్తుత కర్తవ్యాన్ని సరిగ్గా చేయలేకపోవడం.",
    anchorShlokaId: "2-47",
    shlokaChapterVerse: "Chapter 2 • Verse 47",
    shlokaSanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    shlokaTelugu: "కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన ।\nమా కర్మఫలహేతుర్భూర్మా తే సఙ్గోఽస్త్వకర్మణి ॥",
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi ||",
    translationEn: "You have an absolute right to your action, but never to the fruits of action. Let not the fruits of action be your motive, nor let yourself be attached to inaction.",
    simpleExplanationEn: "Your power is strictly 100% inside your current effort. The outcome depends on a thousand external variables outside your control. Obsessing over results only burns mental energy.",
    translationTe: "కర్మలయందే నీకు అధికారము కలదు, కాని వాటి ఫలితాల యందు ఎన్నడూ లేదు. కర్మఫలమునకు నీవు కారణము కాకూడదు; అలాగని కర్మలను విడిచిపెట్టుట యందును నీకు ఆసక్తి ఉండరాదు.",
    simpleExplanationTe: "నీ చేతిలో ఉన్నది నీ సంపూర్ణ ప్రయత్నం మాత్రమే. ఫలితం పూర్తిగా నీ ఒక్కడి నియంత్రణలో ఉండదు. రేపటి రిజల్ట్ గురించి భయపడటం ఆపి, ఈ క్షణంలో నీ ముందున్న పనిని మనస్ఫూర్తిగా పూర్తి చేయి.",
    whyThisShlokaEn: "This verse directly targets the root cause of workplace anxiety: psychological attachment to reviews and promotions rather than task execution.",
    whyThisShlokaTe: "ఈ శ్లోకం ఉద్యోగ ఒత్తిడి అసలు కారణమైన బాహ్య గుర్తింపుపై వ్యామోహాన్ని తొలగించి, పనిపై పూర్తి దృష్టి నిలిపేలా చేస్తుంది.",
    corePrinciple: "Focus 100% on the immediate action. Surrender the outcome to the cosmic order.",
    words: [
      { sanskrit: "कर्मणि", transliteration: "karmaṇi", meaningEn: "in prescribed action", meaningTe: "చేసే కర్మ యందే" },
      { sanskrit: "एव", transliteration: "eva", meaningEn: "certainly / only", meaningTe: "మాత్రమే" },
      { sanskrit: "अधिकारः", transliteration: "adhikāraḥ", meaningEn: "right / jurisdiction", meaningTe: "అధికారము" },
      { sanskrit: "ते", transliteration: "te", meaningEn: "your", meaningTe: "నీకు" },
      { sanskrit: "मा", transliteration: "mā", meaningEn: "never", meaningTe: "ఎన్నడూ వద్దు" },
      { sanskrit: "फलेषु", transliteration: "phaleṣu", meaningEn: "in fruits / results", meaningTe: "ఫలితముల యందు" },
      { sanskrit: "कदाचन", transliteration: "kadācana", meaningEn: "at any time", meaningTe: "ఎప్పుడూ కూడా" }
    ],
    practice: {
      id: "practice_nishkama_reset",
      titleEn: "Control the Controllable (Nishkama Reset)",
      titleTe: "నీ చేతిలో ఉన్నది మాత్రమే చెయ్యి (3 నిమిషాల రీసెట్)",
      durationSeconds: 180,
      category: "COGNITIVE_REFRAME",
      difficulty: "BEGINNER",
      whyRecommendedEn: "Relieves acute performance dread by isolating the controllable micro-step from phantom future scenarios.",
      whyRecommendedTe: "భవిష్యత్తు ఫలితాల భయం నుండి మనస్సును విముక్తం చేసి, తక్షణమే ఒక చిన్న పనిని ప్రారంభించేలా చేస్తుంది.",
      steps: [
        {
          step: 1,
          titleEn: "Name the Phantom Fear",
          titleTe: "భయాన్ని స్పష్టంగా గుర్తించు",
          instructionEn: "Take one slow breath. Write down the 1 future outcome terrifying you right now (e.g. 'Getting a bad rating').",
          instructionTe: "ఒక్కసారి దీర్ఘంగా శ్వాస తీసుకో. నిన్ను భయపెడుతున్న భవిష్యత్తు ఫలితాన్ని మనసులో స్పష్టంగా గుర్తించు."
        },
        {
          step: 2,
          titleEn: "Draw the Kurukshetra Circle",
          titleTe: "పరిధిని గీయి",
          instructionEn: "Ask: Is that outcome 100% in your hands right now? No. What IS in your hands? (e.g. 'Refining this slide').",
          instructionTe: "ప్రశ్నించుకో: ఆ ఫలితం పూర్తిగా నీ చేతుల్లో ఉందా? లేదు. ఈ నిమిషంలో నీ చేతుల్లో ఉన్న పని ఏది?"
        },
        {
          step: 3,
          titleEn: "Execute 1 Single Action",
          titleTe: "ఒక్క చిన్న అడుగు వేయి",
          instructionEn: "Commit to that single task for the next 10 minutes with zero care for applause or validation.",
          instructionTe: "ఫలితం ఎలా ఉంటుందనే ఆలోచన పక్కనపెట్టి, ఆ ఒక్క పనిని శ్రద్ధగా పూర్తి చెయ్యి."
        }
      ]
    }
  },
  {
    id: "anger-heated-conflict",
    category: "relationships",
    titleEn: "Rage & Heated Conflict",
    titleTe: "తీవ్రమైన కోపం & వివాదాలు",
    tagline: "When an argument makes your blood boil and judgment disappears.",
    symptomModernEn: "Heart pounding after an insult, typing aggressive messages, urge to hurt back, complete loss of rational perspective.",
    symptomModernTe: "ఎవరైనా అవమానించినప్పుడు లేదా అన్యాయం చేసినప్పుడు విపరీతమైన ఆవేశం రావడం, దూషణలతో కూడిన మెసేజ్‌లు పంపాలనిపించడం.",
    krishnaDiagnosisEn: "Krodhād bhavati sammohaḥ (2.63) — Anger destroys intellect and memory. Reacting in rage makes you the primary casualty.",
    krishnaDiagnosisTe: "కోపం వల్ల వివేకం నశిస్తుంది, జ్ఞాపకశక్తి చెదిరిపోతుంది. ఆవేశంలో తీసుకునే నిర్ణయాలు ముందుగా మనల్నే నాశనం చేస్తాయి.",
    anchorShlokaId: "2-63",
    shlokaChapterVerse: "Chapter 2 • Verse 63",
    shlokaSanskrit: "क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
    shlokaTelugu: "క్రోధాద్భవతి సంమోహః సంమోహాత్స్మృతివిభ్రమః ।\nస్మృతిభ్రంశాద్ బుద్ధినాశో బుద్ధినాశాత్ప్రణశ్యతి ॥",
    transliteration: "krodhād bhavati saṁmohaḥ saṁmohāt smṛti-vibhramaḥ |\nsmṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati ||",
    translationEn: "From anger arises complete delusion; from delusion comes bewilderment of memory; from ruin of memory comes the loss of intellect; and from loss of intellect, a person is completely ruined.",
    simpleExplanationEn: "Anger is an emotional blackout. The moment anger takes the steering wheel, your intelligence is knocked out, leading to words you will regret for years.",
    translationTe: "కోపము వలన అవివేకము కలుగును, అవివేకము వలన స్మృతి భ్రంశము, దాని వలన బుద్ధి నాశనము మరియు బుద్ధి నశించుట వలన మానవుడు సర్వనాశనమగును.",
    simpleExplanationTe: "కోపం రాగానే మొదట నశించేది నీ వివేకమే. ఆవేశంలో పలికే ఒక్క మాట జీవితాంతం పశ్చాత్తాపానికి గురిచేస్తుంది. అందుకే కోపంలో ఎప్పుడూ నిర్ణయాలు తీసుకోకు.",
    whyThisShlokaEn: "Explains the exact neurological domino effect of rage, showing that retaliation is self-destruction.",
    whyThisShlokaTe: "కోపం ఎలా మనిషి వివేకాన్ని హరించి సర్వనాశనం చేస్తుందో స్పష్టంగా వివరించి, తక్షణ సంయమనాన్ని ఇస్తుంది.",
    corePrinciple: "Never speak or text when your heart rate is elevated. Silence is supreme power.",
    words: [
      { sanskrit: "क्रोधात्", transliteration: "krodhāt", meaningEn: "from anger", meaningTe: "కోపము వలన" },
      { sanskrit: "भवति", transliteration: "bhavati", meaningEn: "arises", meaningTe: "కలుగును" },
      { sanskrit: "संमोहः", transliteration: "saṁmohaḥ", meaningEn: "delusion / confusion", meaningTe: "అవివేకము / భ్రమ" },
      { sanskrit: "बुद्धिनाशः", transliteration: "buddhi-nāśaḥ", meaningEn: "destruction of intellect", meaningTe: "వివేక నాశనము" }
    ],
    practice: {
      id: "practice_silence_shield",
      titleEn: "The 10-Minute Silence Shield",
      titleTe: "10 నిమిషాల మౌన రక్షణ కవచం",
      durationSeconds: 180,
      category: "BREATH",
      difficulty: "BEGINNER",
      whyRecommendedEn: "Protects your dignity by forcing a physiological cooldown before communication.",
      whyRecommendedTe: "ఆవేశంలో మాట్లాడి సంబంధాలను పాడుచేసుకోకుండా మనస్సును చల్లబరుస్తుంది.",
      steps: [
        {
          step: 1,
          titleEn: "Drop the Phone",
          titleTe: "ఫోన్ పక్కన పెట్టు",
          instructionEn: "Put your phone facedown. Do not reply to any call or text for the next 10 minutes.",
          instructionTe: "ఫోన్ స్క్రీన్ ఆపి పక్కన పెట్టు. వచ్చే 10 నిమిషాలు ఎటువంటి మెసేజ్ లేదా సమాధానం ఇవ్వవద్దు."
        },
        {
          step: 2,
          titleEn: "Physical Disengagement",
          titleTe: "ఆ ప్రదేశం నుండి బయటకు రా",
          instructionEn: "Drink a glass of cold water. Walk 20 steps away from the confrontation zone.",
          instructionTe: "ఒక గ్లాసు చల్లని నీరు తాగు. ఆ ప్రదేశం నుండి కాసేపు పక్కకు వెళ్ళు."
        },
        {
          step: 3,
          titleEn: "Ask Krishna's Question",
          titleTe: "నిన్ను నీవు ప్రశ్నించుకో",
          instructionEn: "Ask: 'If I react now, am I serving my dharma or feeding my offended ego?'",
          instructionTe: "'నేను ఇప్పుడు కోపంతో స్పందిస్తే నా అహంకారాన్ని సంతృప్తి పరుస్తున్నానా, లేక సరైన ధర్మాన్ని నిలబెడుతున్నానా?' అని ఆలోచించు."
        }
      ]
    }
  },
  {
    id: "social-media-comparison",
    category: "habits",
    titleEn: "Social Media Comparison & Inadequacy",
    titleTe: "పోలికల బాధ & సోషల్ మీడియా అసూయ",
    tagline: "Feeling left behind after seeing other people's highlight reels.",
    symptomModernEn: "Doomscrolling Instagram/LinkedIn, sudden heaviness feeling inferior to peers, dissatisfaction with your ordinary life.",
    symptomModernTe: "ఇన్‌స్టాగ్రామ్, లింక్డ్‌ఇన్‌లో ఇతరుల విజయాలు చూసి మన జీవితం ఏమీ బాగోలేదని కుంగిపోవడం.",
    krishnaDiagnosisEn: "Swadharma (3.35) — It is far better to live your own imperfect path than to flawlessly imitate another's life.",
    krishnaDiagnosisTe: "ఇతరుల జీవితాన్ని చూసి అనుకరించడం కన్నా, మన సహజ స్వధర్మాన్ని నిష్ఠతో ఆచరించడమే శ్రేయస్కరం.",
    anchorShlokaId: "3-35",
    shlokaChapterVerse: "Chapter 3 • Verse 35",
    shlokaSanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
    shlokaTelugu: "శ్రేయాన్స్వధర్మో విగుణః పరధర్మాత్స్వనుష్ఠితాత్ ।\nస్వధర్మే నిధనం శ్రేయః పరధర్మో భయావహః ॥",
    transliteration: "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt |\nsva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ ||",
    translationEn: "One's own duty, though devoid of merit, is better than the duty of another well discharged. Better is death in one's own duty; the duty of another is fraught with danger.",
    simpleExplanationEn: "Your journey has its own soil, seeds, and seasons. Trying to live someone else's highlight reel creates deep existential misery. Respect your own timeline.",
    translationTe: "సరిగ్గా ఆచరింపబడిన ఇతరుల ధర్మము కంటె గుణహీనమైనదైనను స్వధర్మమే శ్రేష్ఠమైనది. స్వధర్మము నందు మరణమైనను మేలే, పరధర్మము భయమును కలిగించును.",
    simpleExplanationTe: "పక్కవాడి సక్సెస్ చూసి నీ విలువను తగ్గించుకోకు. నీ జీవితం, నీ బాధ్యతలు, నీ ప్రయాణం నీకే సొంతం. నీ మార్గాన్ని గౌరవించు.",
    whyThisShlokaEn: "Destroys the cognitive trap of social comparison by re-anchoring identity in one's own authentic nature.",
    whyThisShlokaTe: "ఇతరులతో పోల్చుకునే అనారోగ్యకరమైన అలవాటును తుంచివేసి, మన స్వంత ప్రయాణంపై గౌరవాన్ని కలిగిస్తుంది.",
    corePrinciple: "Respect your own timeline. Comparing your behind-the-scenes with someone's staged highlight is self-inflicted poison.",
    words: [
      { sanskrit: "श्रेयान्", transliteration: "śreyān", meaningEn: "far superior", meaningTe: "ఎంతో శ్రేష్ఠమైనది" },
      { sanskrit: "स्वधर्मः", transliteration: "sva-dharmaḥ", meaningEn: "one's own duty", meaningTe: "స్వధర్మము" },
      { sanskrit: "परधर्मात्", transliteration: "para-dharmāt", meaningEn: "than another's duty", meaningTe: "ఇతరుల ధర్మము కంటె" },
      { sanskrit: "भयावहः", transliteration: "bhayāvahaḥ", meaningEn: "full of fear / danger", meaningTe: "భయంకరమైనది" }
    ],
    practice: {
      id: "practice_swadharma_anchor",
      titleEn: "Swadharma Digital Fast",
      titleTe: "స్వధర్మ డిజిటల్ ఉపవాసం (3 నిమిషాలు)",
      durationSeconds: 180,
      category: "COGNITIVE_REFRAME",
      difficulty: "BEGINNER",
      whyRecommendedEn: "Disconnects the visual stimuli driving envy and returns focus to personal craft.",
      whyRecommendedTe: "అసూయను తగ్గించి మన స్వంత లక్ష్యాలపై ఏకాగ్రతను పునరుద్ధరిస్తుంది.",
      steps: [
        {
          step: 1,
          titleEn: "App Close & Breath",
          titleTe: "యాప్ మూసివేయి",
          instructionEn: "Close the social feed right now. Place your hand on your heart and feel your own pulse.",
          instructionTe: "సోషల్ మీడియాను తక్షణమే ఆపి, గుండెపై చేయి వేసి నీ శ్వాసను గమనించు."
        },
        {
          step: 2,
          titleEn: "Write 3 Hidden Blessings",
          titleTe: "3 కృతజ్ఞతలు రాసుకో",
          instructionEn: "Write down 3 things you have right now that you once prayed for.",
          instructionTe: "ఒకప్పుడు నీవు కోరుకుని, ప్రస్తుతం నీకు లభించిన 3 మంచి విషయాలను గుర్తుచేసుకో."
        },
        {
          step: 3,
          titleEn: "Commit to Your Native Craft",
          titleTe: "నీ పనికి తిరిగిరా",
          instructionEn: "Return to your own immediate craft with undivided love.",
          instructionTe: "నీ స్వంత పనిని చిత్తశుద్ధితో తిరిగి ప్రారంభించు."
        }
      ]
    }
  },
  {
    id: "racing-thoughts-overthinking",
    category: "anxiety",
    titleEn: "Restless Mind & 3 AM Overthinking",
    titleTe: "చంచలమైన మనస్సు & అశాంతి",
    tagline: "When your mind jumps between 50 different worries and won't calm down.",
    symptomModernEn: "Lying awake replaying worst-case scenarios, difficulty focusing on one paragraph, constant sensation of urgency.",
    symptomModernTe: "రాత్రి నిద్రపట్టకుండా లేనిపోని ఆలోచనలతో సతమతమవడం, ఒకే పనిపై మనస్సు నిలపలేకపోవడం.",
    krishnaDiagnosisEn: "Abhyāsa and Vairāgya (6.35) — The mind is indeed fickle and hard to curb, but through gentle practice and detachment, it yields.",
    krishnaDiagnosisTe: "మనస్సు గాలివలె చంచలమైనదే అయినప్పటికీ, నిరంతర అభ్యాసం మరియు వైరాగ్యములతో దానిని నియంత్రించవచ్చు.",
    anchorShlokaId: "6-26",
    shlokaChapterVerse: "Chapter 6 • Verse 26",
    shlokaSanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    shlokaTelugu: "యతో యతో నిశ్చరతి మనశ్చఞ్చలమస్థిరమ్ ।\nతతస్తతో నియమ్యైతదాత్మన్యేవ వశం నయేత్ ॥",
    transliteration: "yato yato niścarati manaś cañcalam asthiram |\ntatas tato niyamyaitad ātmany eva vaśaṁ nayet ||",
    translationEn: "From wherever the restless and unsteady mind wanders away, one should rein it in and bring it back under the control of the Self alone.",
    simpleExplanationEn: "Do not fight your thoughts. Whenever your mind drifts to anxiety, do not punish yourself; gently guide it back to this present breath.",
    translationTe: "చంచలము, అస్థిరము అయిన మనస్సు ఎక్కడెక్కడికి పరుగెత్తునో, అక్కడక్కడి నుండి దానిని మరలించి ఆత్మయందే నిలపవలెను.",
    simpleExplanationTe: "మనస్సు ఆలోచనల వైపు పరుగెత్తినప్పుడు ఆందోళన చెందకు. మళ్ళీ ప్రేమగా, ఓర్పుతో నీ దృష్టిని ప్రస్తుత శ్వాసపైకి తీసుకురా.",
    whyThisShlokaEn: "Provides the foundational cognitive reframing technique for mindfulness: non-judgmental return to the present.",
    whyThisShlokaTe: "మనస్సు చెదిరిపోయిన ప్రతిసారీ కోపగించుకోకుండా శాంతంగా తిరిగి కేంద్రంలోకి తెచ్చే పద్ధతిని నేర్పుతుంది.",
    corePrinciple: "Wandering is the nature of the mind. Returning is the victory of the soul.",
    words: [
      { sanskrit: "यतः यतः", transliteration: "yataḥ yataḥ", meaningEn: "wherever", meaningTe: "ఎక్కడెక్కడికి" },
      { sanskrit: "निश्चरति", transliteration: "niścarati", meaningEn: "wanders away", meaningTe: "పరుగెత్తునో" },
      { sanskrit: "चञ्चलम्", transliteration: "cañcalam", meaningEn: "fickle / restless", meaningTe: "చంచలమైన" },
      { sanskrit: "नियम्य", transliteration: "niyamya", meaningEn: "reining in", meaningTe: "నియంత్రించి" }
    ],
    practice: {
      id: "practice_breath_anchor_60s",
      titleEn: "The 60-Second Return Anchor",
      titleTe: "60 సెకండ్ల శ్వాస రీసెట్",
      durationSeconds: 60,
      category: "BREATH",
      difficulty: "BEGINNER",
      whyRecommendedEn: "Physiologically calms the sympathetic nervous system through intentional rhythm.",
      whyRecommendedTe: "వేగంగా కొట్టుకునే గుండెను మరియు అలజడితో ఉన్న మనస్సును ఒకే నిమిషంలో కుదుటపరుస్తుంది.",
      steps: [
        {
          step: 1,
          titleEn: "Sit Upright",
          titleTe: "నిటారుగా కూర్చోండి",
          instructionEn: "Unclench your jaw. Drop your shoulders away from your ears.",
          instructionTe: "దవడను బిగించకుండా వదులుగా ఉంచు. భుజాలను క్రిందకు దించు."
        },
        {
          step: 2,
          titleEn: "Follow the 4-4 Rhythm",
          titleTe: "4-4 శ్వాస క్రమం",
          instructionEn: "Inhale gently for 4 seconds, exhale slowly for 4 seconds.",
          instructionTe: "4 సెకన్లు నెమ్మదిగా శ్వాస తీసుకో, 4 సెకన్లు శ్వాసను విడిచిపెట్టు."
        },
        {
          step: 3,
          titleEn: "Gentle Return",
          titleTe: "శాంతంగా తిరిగిరా",
          instructionEn: "As thoughts arise, repeat mentally: 'I am the observer, not the thought.'",
          instructionTe: "ఆలోచనలు వచ్చినప్పుడు 'నేను ఆలోచనను కాను, గమనించే చైతన్యాన్ని' అని భావించు."
        }
      ]
    }
  },
  {
    id: "grief-loss-heartbreak",
    category: "crisis",
    titleEn: "Grief, Loss & Deep Hurt",
    titleTe: "వియోగం, దుఃఖం & గాయపడిన హృదయం",
    tagline: "When someone you trusted left, or you are grieving an irreplaceable loss.",
    symptomModernEn: "Hollow feeling in the chest, crying unexpectedly, feeling that life has lost meaning, inability to let go of memories.",
    symptomModernTe: "ప్రియమైన వారిని కోల్పోయినప్పుడు లేదా నమ్మకద్రోహం జరిగినప్పుడు గుండె బరువెక్కడం, ఒంటరితనం వేధించడం.",
    krishnaDiagnosisEn: "Nityatvam (2.20) — The true conscious self is never born and never dies. Forms change, but eternal presence endures.",
    krishnaDiagnosisTe: "ఆత్మ శాశ్వతమైనది, నాశనము లేనిది. శరీరాలు, పరిస్థితులు మారినప్పటికీ శాశ్వతమైన చైతన్యం ఎల్లప్పుడూ ఉంటుంది.",
    anchorShlokaId: "2-20",
    shlokaChapterVerse: "Chapter 2 • Verse 20",
    shlokaSanskrit: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
    shlokaTelugu: "న జాయతే మ్రియతే వా కదాచిన్\nనాయం భూత్వా భవితా వా న భూయః ।\nఅజో నిత్యః శాశ్వతోఽయం పురాణో\nన హన్యతే హన్యమానే శరీరే ॥",
    transliteration: "na jāyate mriyate vā kadācin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ |\najo nityaḥ śāśvato 'yaṁ purāṇo\nna hanyate hanyamāne śarīre ||",
    translationEn: "The soul is never born, nor does it die at any time; having once existed, it never ceases to be. It is unborn, eternal, permanent, and primeval. It is not slain when the body is slain.",
    simpleExplanationEn: "Allow the grief to be felt, but do not mistake the end of an external form or relationship for the destruction of love itself. The light remains unbroken.",
    translationTe: "ఈ ఆత్మ ఎన్నడూ పుట్టదు, చావదు; ఒకప్పుడు ఉండి మరొకప్పుడు ఉండకపోవుట జరుగదు. ఇది జన్మలేనిది, నిత్యమైనది, శాశ్వతమైనది, పురాతనమైనది; శరీరము నశించిననూ ఇది నశింపదు.",
    simpleExplanationTe: "బాధను అణచివేయకు, కానీ ఏ బంధం ముగిసినా నీ అంతరాత్మ పరిశుద్ధమైనది, శాశ్వతమైనది అని గుర్తుంచుకో. కాలం నీ గాయాన్ని మాన్పుతుంది.",
    whyThisShlokaEn: "Anchors the grieving mind in eternal transcendence beyond physical decay or betrayal.",
    whyThisShlokaTe: "తీవ్రమైన దుఃఖంలో ఉన్న వ్యక్తికి ఆత్మ యొక్క శాశ్వతత్వాన్ని గుర్తుచేసి లోతైన అంతర్గత బలాన్ని ఇస్తుంది.",
    corePrinciple: "Honour the tears, but anchor your heart in the eternal. Love never truly dies.",
    words: [
      { sanskrit: "न जायते", transliteration: "na jāyate", meaningEn: "neither born", meaningTe: "పుట్టదు" },
      { sanskrit: "न म्रियते", transliteration: "na mriyate", meaningEn: "nor dies", meaningTe: "చావదు" },
      { sanskrit: "नित्यः", transliteration: "nityaḥ", meaningEn: "eternal", meaningTe: "నిత్యమైనది" },
      { sanskrit: "शाश्वतः", transliteration: "śāśvataḥ", meaningEn: "everlasting", meaningTe: "శాశ్వతమైనది" }
    ],
    practice: {
      id: "practice_ocean_surrender",
      titleEn: "The Ocean of Surrender",
      titleTe: "సముద్ర సమర్పణ (రాత్రి ధ్యానం)",
      durationSeconds: 180,
      category: "SURRENDER",
      difficulty: "BEGINNER",
      whyRecommendedEn: "Provides a safe psychological container to release sorrow without spiraling.",
      whyRecommendedTe: "గుండెలోని భారాన్ని విడుదల చేసి మనస్సుకు ఉపశమనం కలిగిస్తుంది.",
      steps: [
        {
          step: 1,
          titleEn: "Acknowledge the Ache",
          titleTe: "బాధను స్వీకరించు",
          instructionEn: "Close your eyes. Give yourself permission to feel the sadness without judgment.",
          instructionTe: "కళ్ళు మూసుకుని, నీ బాధను ఎటువంటి బెరుకు లేకుండా అంగీకరించు."
        },
        {
          step: 2,
          titleEn: "Visualize the Infinite Ocean",
          titleTe: "అనంత సముద్రాన్ని ఊహించు",
          instructionEn: "Picture an undisturbed midnight ocean. Mentally pour today's heavy heartache into the waters.",
          instructionTe: "రాత్రివేళ నిశ్చలంగా ఉన్న సముద్రాన్ని ఊహించుకుని, నీ గుండె భారాన్ని ఆ జలాల్లోకి సమర్పించు."
        },
        {
          step: 3,
          titleEn: "Rest in the Light",
          titleTe: "శాంతిని అనుభవించు",
          instructionEn: "Whisper: 'I release what I cannot change. I rest in divine grace tonight.'",
          instructionTe: "'నేను మార్చలేని దానిని వదిలివేస్తున్నాను. ప్రశాంతంగా విశ్రమిస్తున్నాను' అని మనసులో అనుకో."
        }
      ]
    }
  }
];

// Compatibility bridge for web marketing sections
export const MODERN_LIFE_CHALLENGES: LifeChallenge[] = CANONICAL_SITUATIONS.map((s) => ({
  id: s.id,
  category: s.category === 'work' ? 'career' : s.category === 'crisis' ? 'purpose' : s.category,
  title: s.titleEn,
  titleTe: s.titleTe,
  tagline: s.tagline,
  modernSymptom: s.symptomModernEn,
  whyModernLifeCausesThis: s.whyThisShlokaEn,
  krishnasDiagnosis: s.krishnaDiagnosisEn,
  recommendedShlokaId: s.anchorShlokaId,
  shlokaChapterVerse: s.shlokaChapterVerse,
  shlokaSanskrit: s.shlokaSanskrit,
  shlokaTelugu: s.shlokaTelugu,
  corePrinciple: s.corePrinciple,
  threeStepActionPlan: [
    s.practice.steps[0]?.instructionEn || "Take a deep breath and pause.",
    s.practice.steps[1]?.instructionEn || "Differentiate the controllable from the uncontrollable.",
    s.practice.steps[2]?.instructionEn || "Execute the immediate right action."
  ]
}));
