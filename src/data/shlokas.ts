import { Shloka } from '../types/gita';

/**
 * ప్రామాణిక శ్రీమద్భగవద్గీతా శ్లోకములు (Canonical Srimad Bhagavad Gita)
 * ఆధార గ్రంథములు (Traditional Scriptural Sources):
 * 1. గీతా ప్రెస్ గోరఖ్‌పూర్ (Gita Press Gorakhpur - సాధక సంజీవని / జయదయాల్ గోయందకా)
 * 2. శ్రీ ఆది శంకరాచార్య భగవత్పాద ప్రణీత శ్రీమద్భగవద్గీతా శాంకర భాష్యము (Shankara Bhashya)
 * 3. తిరుమల తిరుపతి దేవస్థానముల ప్రామాణిక ప్రచురణలు (TTD Classical Publications)
 * 4. శ్రీధర స్వామి వారి సుబోధినీ వ్యాఖ్య (Sridhara Swami Subodhini)
 */
export const FEATURED_SHLOKAS: Shloka[] = [
  // =========================================================================
  // ప్రథమోఽధ్యాయః: అర్జున విషాద యోగః (CHAPTER 1: ARJUNA VIṢĀDA YOGA)
  // =========================================================================
  {
    id: "1-47",
    chapterNumber: 1,
    verseNumber: 47,
    chapterNameEn: "Arjuna Viṣāda Yoga",
    chapterNameTe: "అర్జున విషాద యోగము",
    shlokaSanskrit: "सञ्जय उवाच\nएवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत्।\nविसृज्य सशरं चापं शोकसंविग्नमानसः॥",
    shlokaTelugu: "సఞ్జయ ఉవాచ\nఏవముక్త్వార్జునః సఙ్ఖ్యే రథోపస్థ ఉపావిశత్ ।\nవిసృజ్య సశరం చాపం శోకసంవిగ్నమానసః ॥",
    transliteration: "sañjaya uvāca\nevam uktvārjunaḥ saṅkhye rathopastha upāviśat |\nvisṛjya sa-śaraṁ cāpaṁ śoka-saṁvigna-mānasaḥ ||",
    wordMeanings: [
      { sanskrit: "सञ्जयः उवाच", transliteration: "sañjaya uvāca", meaning: "సంజయుడు పలికెను (Sanjaya said)" },
      { sanskrit: "एवम्", transliteration: "evam", meaning: "ఈ విధముగా (thus)" },
      { sanskrit: "उक्त्वा", transliteration: "uktvā", meaning: "పలికి (having spoken)" },
      { sanskrit: "अर्जुनः", transliteration: "arjunaḥ", meaning: "అర్జునుడు (Arjuna)" },
      { sanskrit: "सङ्ख्ये", transliteration: "saṅkhye", meaning: "రణరంగమునందు (on the battlefield)" },
      { sanskrit: "रथोपस्थे", transliteration: "rathopasthe", meaning: "రథము యొక్క వెనుక భాగమునందు (upon the chariot seat)" },
      { sanskrit: "उपाविशत्", transliteration: "upāviśat", meaning: "కూర్చుండెను / కూలబడెను (sat down)" },
      { sanskrit: "विसृజ్య", transliteration: "visṛjya", meaning: "విడిచిపెట్టి (casting aside)" },
      { sanskrit: "सशरम् चापम्", transliteration: "sa-śaraṁ cāpam", meaning: "బాణములతో కూడిన ధనుస్సును (bow together with arrows)" },
      { sanskrit: "शोक-संविग्न-मानसः", transliteration: "śoka-saṁvigna-mānasaḥ", meaning: "శోకముతో కలవరపడిన హృదయము గలవాడై (mind overwhelmed with grief)" }
    ],
    translationEn: "Sanjaya said: Having spoken thus on the battlefield, Arjuna cast aside his bow together with arrows and sank down upon the seat of the chariot, his mind overwhelmed with sorrow.",
    translationTe: "సంజయుడు పలికెను: రణరంగమునందు ఈ విధముగా పలికి, శోకముచేత వ్యాకులమైన మనస్సు కలవాడై అర్జునుడు బాణములతో కూడిన తన గాండీవ ధనుస్సును విడిచిపెట్టి, రథమునందు చతికిలబడెను.",
    translationHi: "संजय बोले: युद्धभूमि में शोक से उद्विग्न मन वाले अर्जुन इस प्रकार कहकर, बाणसहित धनुष को त्यागकर रथ के पिछले भाग में बैठ गए। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "శాస్త్ర ప్రమాణము: సంసార విషాదమే పరమాత్మ శరణాగతికి ప్రథమ సోపానము. దేహాభిమానము, మమకారము నశించినప్పుడే జిజ్ఞాస ఉదయించును (శాంకర భాష్యము).",
      mindAndPeace: "అంతఃకరణములో దాగియున్న శోక-మోహములను కపటము లేకుండా అంగీకరించినప్పుడే జ్ఞానోదయము సాధ్యమగును.",
      workAndDuty: "కర్తవ్యోన్ముఖుడైన మానవుడు అధర్మమోహమునకు లోనుగాక, శాస్త్రోక్త కర్తవ్యమును స్వీకరించవలెను.",
      familyAndRelations: "లౌకిక రాగద్వేషముల కంటె ధర్మనిష్ఠయే పరమ శ్రేయస్కరమని గుర్తించుట.",
      practicalAction: "శోకము కలిగినప్పుడు ఆవేశముతో నిర్ణయములు తీసికొనక, గురువును, పరమాత్మను శరణువేడి ప్రార్థించుట."
    },
    youtubeId: "zSo4UKr3TJE",
    situations: ["grief", "anxiety", "self-doubt", "burnout", "crisis"]
  },

  // =========================================================================
  // ద్వితీయోఽధ్యాయః: సాంఖ్య యోగః (CHAPTER 2: SĀṄKHYA YOGA)
  // =========================================================================
  {
    id: "2-20",
    chapterNumber: 2,
    verseNumber: 20,
    chapterNameEn: "Sāṅkhya Yoga",
    chapterNameTe: "సాంఖ్య యోగము",
    shlokaSanskrit: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
    shlokaTelugu: "న జాయతే మ్రియతే వా కదాచిన్\nనాయం భూత్వా భవితా వా న భూయః ।\nఅజో నిత్యః శాశ్వతోఽయం పురాణో\nన హన్యతే హన్యమానే శరీరే ॥",
    transliteration: "na jāyate mriyate vā kadācin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ |\najo nityaḥ śāśvato 'yaṁ purāṇo\nna hanyate hanyamāne śarīre ||",
    wordMeanings: [
      { sanskrit: "न जायते", transliteration: "na jāyate", meaning: "పుట్టుక లేదు (is never born)" },
      { sanskrit: "म्रियते वा", transliteration: "mriyate vā", meaning: "మరణము లేదు (nor ever dies)" },
      { sanskrit: "कदाचित्", transliteration: "kadācit", meaning: "ఎన్నడునూ (at any time)" },
      { sanskrit: "अजः", transliteration: "ajaḥ", meaning: "జన్మరహితుడు (unborn)" },
      { sanskrit: "नित्यः", transliteration: "nityaḥ", meaning: "నిత్యమైనవాడు (eternal)" },
      { sanskrit: "शाश्वतः", transliteration: "śāśvataḥ", meaning: "క్షయము లేనివాడు (everlasting)" },
      { sanskrit: "पुराणः", transliteration: "purāṇaḥ", meaning: "పురాతనుడు / అనాది (primeval / ancient)" },
      { sanskrit: "न हन्यते", transliteration: "na hanyate", meaning: "చంపబడడు (is not slain)" },
      { sanskrit: "हन्यमाने शरीरे", transliteration: "hanyamāne śarīre", meaning: "శరీరము నశించిననూ (when the body is slain)" }
    ],
    translationEn: "The soul is never born, nor does it ever die at any time. It has not come into being, does not come into being, and will not cease to be. It is unborn, eternal, changeless, and primeval. It is not slain when the body is slain.",
    translationTe: "ఈ ఆత్మ ఏ కాలమునందునూ పుట్టునది కాదు, చచ్చునదియు కాదు; ఒకప్పుడు ఉండి మరొకప్పుడు లేకపోవునది కాదు. ఇది అజన్ముడు, నిత్యుడు, శాశ్వతుడు, పురాతనుడు. శరీరము నశించిననూ ఆత్మ నశింపదు. (గీతా ప్రెస్ / శాంకర భాష్యము)",
    translationHi: "यह आत्मा किसी काल में भी न तो जन्म लेता है और न मरता ही है तथा न यह उत्पन्न होकर फिर होने वाला ही है; क्योंकि यह अजन्मा, नित्य, सनातन और पुरातन है, शरीर के मारे जाने पर भी यह नहीं मारा जाता। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "శాంకర భాష్యము: షడ్భావవికార రహితః ఆత్మా (జన్మ, అస్తిత్వ, వృద్ధి, పరిణామ, అపక్షయ, వినాశ అను ఆరు వికారములు లేని శుద్ధ చైతన్యమే ఆత్మ).",
      mindAndPeace: "భయములలోకెల్ల తీవ్రమైన మృత్యుభయమును, శోకమును సమూలముగా తొలగించు పరమ వేదాంత సత్యము.",
      workAndDuty: "క్షరమైన శరీరము, ఉద్యోగము, పదవులు మారుచుండును; అంతశ్చేతన సదా అచలముగా ఉండునను బోధ.",
      familyAndRelations: "దేహసంబంధముల వియోగానంతరము గూడా జీవాత్మ యొక్క శాశ్వత ప్రయాణమును గ్రహించి స్థైర్యము వహించుట.",
      practicalAction: "దేహము కంటె భిన్నమైన సాక్షి చైతన్యమును అనుసంధానము చేసికొని నిత్యము నిర్భయుడై వర్తించుట."
    },
    youtubeId: "A0pe_PlrvK8",
    situations: ["grief", "fear", "peace", "faith"]
  },
  {
    id: "2-47",
    chapterNumber: 2,
    verseNumber: 47,
    chapterNameEn: "Sāṅkhya Yoga",
    chapterNameTe: "సాంఖ్య యోగము",
    shlokaSanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    shlokaTelugu: "కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన ।\nమా కర్మఫలహేతుర్భూర్మా తే సఙ్గోఽస్త్వకర్మణి ॥",
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi ||",
    wordMeanings: [
      { sanskrit: "कर्मणि", transliteration: "karmaṇi", meaning: "శాస్త్రవిహిత కర్మలయందే (in prescribed duty)" },
      { sanskrit: "एव", transliteration: "eva", meaning: "మాత్రమే (alone / certainly)" },
      { sanskrit: "अधिकारः", transliteration: "adhikāraḥ", meaning: "అధికారము / ప్రవృత్తి (right / eligibility)" },
      { sanskrit: "ते", transliteration: "te", meaning: "నీకు (unto you)" },
      { sanskrit: "मा", transliteration: "mā", meaning: "ఎన్నడునూ వద్దు (never / let not)" },
      { sanskrit: "फलेषु", transliteration: "phaleṣu", meaning: "ఫలితములయందు (in the fruits)" },
      { sanskrit: "कदाचन", transliteration: "kadācana", meaning: "ఏ కాలమునందునూ (at any time)" },
      { sanskrit: "कर्म-फल-हेतुः", transliteration: "karma-phala-hetuḥ", meaning: "ఫలవాంఛయే ప్రేరకముగా గలవాడవు (motive for fruit)" },
      { sanskrit: "भूः", transliteration: "bhūḥ", meaning: "కాకుము (do not become)" },
      { sanskrit: "सङ्गः", transliteration: "saṅgaḥ", meaning: "ఆసక్తి / అనురక్తి (attachment)" },
      { sanskrit: "अकर्मणि", transliteration: "akarmaṇi", meaning: "కర్మత్యాగము / సోమరితనమునందు (in inaction)" }
    ],
    translationEn: "You have a right to perform your prescribed duty, but never to its fruits. Let not the fruit of action be your motive, nor let your attachment be to inaction.",
    translationTe: "కర్మలను ఆచరించుట యందే నీకు అధికారము కలదు, కాని వాటి ఫలితములపై ఎన్నడూ లేదు. కర్మఫలమునకు నీవు కారణము కాకుము, అలాగని కర్మలను చేయకుండుట యందునూ నీకు ఆసక్తి ఉండరాదు. (గీతా ప్రెస్ సాధక సంజీవని)",
    translationHi: "तुम्हारा कर्म करने में ही अधिकार है, उनके फलों में कभी नहीं। इसलिए तुम कर्मों के फल के हेतु मत बनो और तुम्हारी अकर्मण्यता में भी आसक्ति न हो। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "నిష్కామ కర్మయోగ రహస్యము: ఈశ్వరార్పణ బుద్ధ్యా అనుష్ఠీయమానాని కర్మాణి సత్త్వశుద్ధయే భవంతి (శాంకర భాష్యము - ఫలాపేక్ష లేక చేయు కర్మయే అంతఃకరణ శుద్ధినిచ్చి మోక్షహేతువగును).",
      mindAndPeace: "ఫలితము ఈశ్వరాధీనము; ప్రయత్నము మనుష్యాధీనము. ఈ వివేకము వలన భవిష్యత్తును గూర్చిన సమస్త చింతలు, ఆందోళనలు ఉపశమించును.",
      workAndDuty: "స్వధర్మాచరణమే పరమ తపస్సు. ప్రతిఫలాపేక్ష లేక శ్రద్ధతో కర్తవ్యనిర్వహణ చేయుటయే కర్మనైపుణ్యము.",
      familyAndRelations: "ప్రేమ మరియు బాధ్యతలను నిస్వార్థముగా అర్పించుట; ప్రతిఫలమును ఆశించి సంబంధములలో క్లేశము పెంచుకొనకుండుట.",
      practicalAction: "నేడు నీవు చేయు ప్రతి కర్మను 'ఇది భగవదారాధన' అను భావనతో ఈశ్వరార్పణముగా నిర్వర్తించుము."
    },
    youtubeId: "zSo4UKr3TJE",
    situations: ["anxiety", "work-stress", "duty", "burnout", "fear-of-failure"]
  },
  {
    id: "2-63",
    chapterNumber: 2,
    verseNumber: 63,
    chapterNameEn: "Sāṅkhya Yoga",
    chapterNameTe: "సాంఖ్య యోగము",
    shlokaSanskrit: "क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
    shlokaTelugu: "క్రోధాద్భవతి సంమోహః సంమోహాత్స్మృతివిభ్రమః ।\nస్మృతిభ్రంశాద్ బుద్ధినాశో బుద్ధినాశాత్ప్రణశ్యతి ॥",
    transliteration: "krodhād bhavati saṁmohaḥ saṁmohāt smṛti-vibhramaḥ |\nsmṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati ||",
    wordMeanings: [
      { sanskrit: "क्रोधात्", transliteration: "krodhāt", meaning: "కోపము వలన (from anger)" },
      { sanskrit: "भवति", transliteration: "bhavati", meaning: "కలుగును (arises)" },
      { sanskrit: "संमोहः", transliteration: "saṁmohaḥ", meaning: "వివేకశూన్యత / అవివేకము (delusion / infatuation)" },
      { sanskrit: "संमोहात्", transliteration: "saṁmohāt", meaning: "ఆ అవివేకము వలన (from delusion)" },
      { sanskrit: "स्मृति-विभ्रमः", transliteration: "smṛti-vibhramaḥ", meaning: "స్మృతి భ్రంశము / శాస్త్రోపదేశ విస్మృతి (bewilderment of memory)" },
      { sanskrit: "स्मृति-भ्रंशात्", transliteration: "smṛti-bhraṁśāt", meaning: "స్మృతి నశించుట వలన (from loss of memory)" },
      { sanskrit: "बुद्धि-नाशः", transliteration: "buddhi-nāśaḥ", meaning: "బుద్ధినాశనము / సదసద్వివేక నాశనము (ruin of intellect)" },
      { sanskrit: "प्रणश्यति", transliteration: "praṇaśyati", meaning: "పురుషార్థ భ్రష్టుడై సర్వనాశనమగును (perishes completely)" }
    ],
    translationEn: "From anger arises delusion; from delusion comes confusion of memory; from confusion of memory comes the destruction of intellect; and from destruction of intellect, man perishes completely.",
    translationTe: "క్రోధము వలన అవివేకము కలుగును, అవివేకము వలన శాస్త్రార్థ స్మృతి చెడును, స్మృతి చెడుటచే బుద్ధి (వివేకము) నశించును, బుద్ధి నశించుట వలన మనుష్యుడు సర్వనాశనమగును. (శాంకర భాష్యము)",
    translationHi: "क्रोध से मूढ़भाव (सम्मोहन) उत्पन्न होता है, मूढ़भाव से स्मृति भ्रमित होती है, स्मृतिभ्रम से बुद्धि का नाश होता है और बुद्धि का नाश होने से मनुष्य का सर्वनाश हो जाता है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "శాంకర భాష్యము: బుద్ధినాశాత్ ప్రణశ్యతి - పురుషార్థ యోగ్యతారహితో భవతీత్యర్థః (వివేకము నశించినచో జీవుడు పురుషార్థ సాధనకు అయోగ్యుడై అధోగతి పాలగును).",
      mindAndPeace: "కామమునకు ప్రతిబంధకము కలిగినప్పుడు క్రోధము జనించును. కోపము వచ్చిన వెంటనే మౌనము, ప్రాణాయామము ద్వారా దానిని నిరోధించవలెను.",
      workAndDuty: "ఆవేశములో తీసికొను నిర్ణయములు, పలికెడి పలుకులు వ్యవస్థలను, వృత్తిగత ప్రతిష్ఠను క్షణములో బూడిద చేయును.",
      familyAndRelations: "క్రోధము వలన కలుగు ఒక్క పరుష వాక్యము తరతరాల బంధములను విచ్ఛిన్నము చేయును; శాంతమే రక్షక కవచము.",
      practicalAction: "కోపము రాగానే తక్షణమే సంభాషణను ఆపి, 10 నిమిషములు నారాయణ నామస్మరణ చేయుట."
    },
    youtubeId: "A0pe_PlrvK8",
    situations: ["anger", "conflict", "emotional-balance", "relationships"]
  },
  {
    id: "2-70",
    chapterNumber: 2,
    verseNumber: 70,
    chapterNameEn: "Sāṅkhya Yoga",
    chapterNameTe: "సాంఖ్య యోగము",
    shlokaSanskrit: "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्।\nतद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमप्नोति न कामकामी॥",
    shlokaTelugu: "ఆపూర్యమాణమచలప్రతిష్ఠం సముద్రమాపః ప్రవిశన్తి యద్వత్ ।\nతద్వత్కామా యం ప్రవిశన్తి సర్వే స శాన్తిమాప్నోతి న కామకామీ ॥",
    transliteration: "āpūryamāṇam acala-pratiṣṭhaṁ samudram āpaḥ praviśanti yadvat |\ntadvat kāmā yaṁ praviśanti sarve sa śāntim āpnoti na kāma-kāmī ||",
    wordMeanings: [
      { sanskrit: "आपूर्यमाणम्", transliteration: "āpūryamāṇam", meaning: "సదా నిండుగా ఉన్నట్టియు (ever filled from all sides)" },
      { sanskrit: "अचल-प्रतिष्ठम्", transliteration: "acala-pratiṣṭham", meaning: "మర్యాదను అతిక్రమించక స్థిరముగా నున్నట్టి (steadfast and unmoved)" },
      { sanskrit: "समुद्रम्", transliteration: "samudram", meaning: "సముద్రమునందు (into the ocean)" },
      { sanskrit: "आपः", transliteration: "āpaḥ", meaning: "నదీ జలములు (waters)" },
      { sanskrit: "प्रविशन्ति", transliteration: "praviśanti", meaning: "ప్రవేశించునో (enter)" },
      { sanskrit: "तद्वत्", transliteration: "tadvat", meaning: "ఆ విధముగానే (likewise)" },
      { sanskrit: "कामाः", transliteration: "kāmāḥ", meaning: "సమస్త భోగములు / విషయములు (all sensory desires)" },
      { sanskrit: "शान्तिम् आप्नोति", transliteration: "śāntim āpnoti", meaning: "శాంతిని పొందును (attains Supreme Peace)" },
      { sanskrit: "न काम-कामी", transliteration: "na kāma-kāmī", meaning: "కోరికల వెంట పరుగెత్తువాడు కాదు (not the luster after desires)" }
    ],
    translationEn: "Just as the ocean remains deep, steadfast, and undisturbed though filled continuously from all sides by rushing waters, so does the sage into whom all desires merge attain Supreme Peace, not the person who yearns after desires.",
    translationTe: "నాలుగువైపుల నుండి నిరంతరము నదుల జలములు వచ్చి చేరుచున్ననూ సముద్రము తన హద్దులను దాటక గంభీరముగా నిశ్చలముగా ఉండునో, అట్లే సమస్త భోగ విషయములు వికారమును కలిగించక ఎవరియందు లీనమగునో, ఆ స్థితప్రజ్ఞుడే పరమ శాంతిని పొందును; భోగములను కాంక్షించువాడు పొందలేడు. (శాంకర భాష్యము)",
    translationHi: "जैसे सब ओर से परिपूर्ण, अचल प्रतिष्ठा वाले समुद्र में नाना नदियाँ बिना किसी क्षोभ के समा जाती हैं, वैसे ही सब भोग जिस स्थितप्रज्ञ में विकार उत्पन्न किए बिना समा जाते हैं, वही परम शांति को पाता है, भोगों की कामना करने वाला नहीं। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "స్థితప్రజ్ఞ లక్షణము: ఆత్మానంద తృప్తుడైన జ్ఞానికి బాహ్య విషయములు సముద్రములో నదులవలె లీనమగును గాని చిత్తచాంచల్యమును కలిగింపజాలవు.",
      mindAndPeace: "ప్రశంసలు, నిందలు, సుఖదుఃఖములు ఎన్ని వచ్చినా సముద్రము వలె గంభీర శాంతిని నిలుపుకొను దివ్య సాధన.",
      workAndDuty: "కష్టనష్టములు సంభవించినప్పుడు కలవరపడక, వివేకముతో స్వధర్మమును ఆచరించు సామర్థ్యము.",
      familyAndRelations: "ఇతరుల ఆవేశములను, లోపములను ఓర్పుతో భరించి శాంతిమయ వాతావరణమును నిలుపుట.",
      practicalAction: "విషయముల వెంట పరుగెత్తు అలవాటును మాని, ప్రతిరోజూ కాసేపు సముద్రము వలె అంతర్ముఖుడై ధ్యానించుట."
    },
    youtubeId: "A0pe_PlrvK8",
    situations: ["anxiety", "anger", "peace", "overthinking", "resilience"]
  },

  // =========================================================================
  // తృతీయోఽధ్యాయః: కర్మ యోగః (CHAPTER 3: KARMA YOGA)
  // =========================================================================
  {
    id: "3-21",
    chapterNumber: 3,
    verseNumber: 21,
    chapterNameEn: "Karma Yoga",
    chapterNameTe: "కర్మ యోగము",
    shlokaSanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
    shlokaTelugu: "యద్యదాచరతి శ్రేష్ఠస్తత్తదేవేతరో జనః ।\nస యత్ప్రమాణం కురుతే లోకస్తదనువర్తతే ॥",
    transliteration: "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ |\nsa yat pramāṇaṁ kurute lokas tad anuvartate ||",
    wordMeanings: [
      { sanskrit: "यत् यत्", transliteration: "yad yad", meaning: "దేని దేనిని (whatever)" },
      { sanskrit: "आचरति", transliteration: "ācarati", meaning: "ఆచరించునో (acts / practices)" },
      { sanskrit: "श्रेष्ठः", transliteration: "śreṣṭhaḥ", meaning: "ఉత్తమ పురుషుడు (noble / leading person)" },
      { sanskrit: "तत् तत् एव", transliteration: "tat tad eva", meaning: "దానిని మాత్రమే (that very thing alone)" },
      { sanskrit: "इतरः जनः", transliteration: "itaraḥ janaḥ", meaning: "ఇతర లోకము (common people)" },
      { sanskrit: "प्रमाणम्", transliteration: "pramāṇam", meaning: "ప్రమాణముగా / ఆదర్శముగా (standard / authority)" },
      { sanskrit: "कुरुते", transliteration: "kurute", meaning: "చేయునో (sets up)" },
      { sanskrit: "अनुवर्तते", transliteration: "anuvartate", meaning: "అనుసరించును (follows)" }
    ],
    translationEn: "Whatever action a noble person performs, common men follow. Whatever standard he sets by exemplary behavior, the world pursues.",
    translationTe: "శ్రేష్ఠుడైనవాడు దేనిని ఆచరించునో, ఇతర జనులు దానినే ఆచరింతురు. అతడు దేనిని ప్రమాణముగా స్వీకరించునో, లోకమంతయు దానినే అనుసరించును. కావున లోకసంగ్రహార్థమై కర్మలను ఆచరించవలెను. (గీతా ప్రెస్)",
    translationHi: "श्रेष्ठ पुरुष जो-जो आचरण करता है, अन्य पुरुष भी वैसा-वैसा ही आचरण करते हैं। वह जो कुछ प्रमाण कर देता है, समस्त मनुष्य-समुदाय उसी के अनुसार बरतने लग जाता है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "లోకసంగ్రహార్థ కర్మ: జ్ఞానులు సైతం సమాజ రక్షణ కొరకు శాస్త్రోక్త ధర్మములను స్వయముగా ఆచరించి చూపవలెను (శాంకర భాష్యము).",
      mindAndPeace: "బోధనల కంటె ఆచరణయే సత్యమైన ధర్మబోధ. ఆచరణాత్మక జీవితమే శాంతికి నిలయము.",
      workAndDuty: "నాయకుడు, అధికారి, ఉపాధ్యాయుడు ఎల్లప్పుడూ సదాచార సంపన్నుడై తోటివారికి మార్గదర్శిగా నిలవవలెను.",
      familyAndRelations: "తల్లిదండ్రులు ధర్మాన్ని ఆచరిస్తే పిల్లలు సహజముగా ధర్మవంతులగుదురు.",
      practicalAction: "ఇతరులు మారాలని ఆశించే గుణములను నీవు స్వయముగా మొదట ఆచరించి చూపుము."
    },
    youtubeId: "zSo4UKr3TJE",
    situations: ["duty", "work-stress", "discipline", "motivation"]
  },
  {
    id: "3-35",
    chapterNumber: 3,
    verseNumber: 35,
    chapterNameEn: "Karma Yoga",
    chapterNameTe: "కర్మ యోగము",
    shlokaSanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
    shlokaTelugu: "శ్రేయాన్స్వధర్మో విగుణః పరధర్మాత్స్వనుష్ఠితాత్ ।\nస్వధర్మే నిధనం శ్రేయః పరధర్మో భయావహః ॥",
    transliteration: "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt |\nsva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ ||",
    wordMeanings: [
      { sanskrit: "श्रेयान्", transliteration: "śreyān", meaning: "ఎంతో శ్రేష్ఠమైనది (far superior)" },
      { sanskrit: "स्व-धर्मः", transliteration: "sva-dharmaḥ", meaning: "తన సహజ ధర్మము (one's own natural duty)" },
      { sanskrit: "विगुणः", transliteration: "viguṇaḥ", meaning: "గుణహీనముగా తోచిననూ (even if imperfectly performed)" },
      { sanskrit: "पर-धर्मात्", transliteration: "para-dharmāt", meaning: "ఇతరుల ధర్మము కంటె (than another's duty)" },
      { sanskrit: "स्वनुष्ठितात्", transliteration: "sv-anuṣṭhitāt", meaning: "బాగుగా ఆచరింపబడినదైననూ (well-performed)" },
      { sanskrit: "स्वधर्मे निधनम्", transliteration: "sva-dharme nidhanam", meaning: "స్వధర్మమునందు మరణమైననూ (death in one's own duty)" },
      { sanskrit: "श्रेयः", transliteration: "śreyaḥ", meaning: "కల్యాణకారకము (auspicious / meritorious)" },
      { sanskrit: "परधर्मः भयावहः", transliteration: "para-dharmo bhayāvahaḥ", meaning: "ఇతరుల ధర్మము నరకప్రదమై భయమును గొలుపును (fraught with danger)" }
    ],
    translationEn: "Better is one's own natural duty, though devoid of merit, than the duty of another well performed. Death in the performance of one's own duty brings liberation; the duty of another is fraught with peril.",
    translationTe: "చక్కగా ఆచరింపబడిన ఇతరుల ధర్మము కంటె గుణములు లోపించినట్టిదైననూ స్వధర్మమే శ్రేష్ఠమైనది. స్వధర్మము నందు మరణించిననూ శ్రేయస్కరమే; ఇతరుల ధర్మము భయానకమైనది మరియు పతన హేతువు. (శాంకర భాష్యము / గీతా ప్రెస్)",
    translationHi: "अच्छी प्रकार आचरण में लाए हुए दूसरे के धर्म से गुणरहित भी अपना धर्म श्रेष्ठ है। अपने धर्म में तो मरना भी कल्याणकारक है और दूसरे का धर्म भय को देने वाला है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "స్వభావనియత కర్మయే స్వధర్మము. పరధర్మ ప్రలోభము నరకహేతువని శాంకర భాష్య ప్రబోధము.",
      mindAndPeace: "ఇతరులతో పోల్చుకొని అశాంతి చెందక, తన కర్తవ్యమును నిష్ఠతో చేయుటయే మానసిక శాంతికి మూలము.",
      workAndDuty: "బాహ్య ప్రశంసల కొరకు కాక, తన అంతఃకరణ స్వభావమునకు సరిపడు సత్కర్మలను అంకితభావముతో చేయుట.",
      familyAndRelations: "పిల్లలపై ఇతరుల జీవితాలను రుద్దక, వారి వారి సహజ ప్రతిభను గుర్తించి ప్రోత్సహించుట.",
      practicalAction: "ఇతరుల వైభవాన్ని చూసి ఈర్ష్య పడక, నీ సహజ కర్తవ్యమును చిత్తశుద్ధితో నిర్వర్తించుము."
    },
    youtubeId: "OczZTV2cdYM",
    situations: ["self-doubt", "anxiety", "duty", "career"]
  },

  // =========================================================================
  // చతుర్థోఽధ్యాయః: జ్ఞానకర్మసంన్యాస యోగః (CHAPTER 4: JÑĀNA KARMA SANNYĀSA)
  // =========================================================================
  {
    id: "4-7",
    chapterNumber: 4,
    verseNumber: 7,
    chapterNameEn: "Jñāna Karma Sannyāsa Yoga",
    chapterNameTe: "జ్ఞాన కర్మ సంన్యాస యోగము",
    shlokaSanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    shlokaTelugu: "యదా యదా హి ధర్మస్య గ్లానిర్భవతి భారత ।\nఅభ్యుత్థానమధర్మస్య తదాత్మానం సృజామ్యహమ్ ॥",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata |\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||",
    wordMeanings: [
      { sanskrit: "यदा यदा", transliteration: "yadā yadā", meaning: "ఎప్పుడెప్పుడు (whenever and wherever)" },
      { sanskrit: "धर्मस्य", transliteration: "dharmasya", meaning: "ధర్మమునకు (of righteousness / Dharma)" },
      { sanskrit: "ग्लानिः", transliteration: "glāniḥ", meaning: "హాని / క్షీణత (decline / loss)" },
      { sanskrit: "भवति", transliteration: "bhavati", meaning: "కలుగునో (occurs)" },
      { sanskrit: "अभ्युत्थानम्", transliteration: "abhyutthānam", meaning: "విపరీత వృద్ధి (rampant increase)" },
      { sanskrit: "अधर्मस्य", transliteration: "adharmasya", meaning: "అధర్మము యొక్క (of unrighteousness)" },
      { sanskrit: "तदा", transliteration: "tadā", meaning: "అప్పుడు (then)" },
      { sanskrit: "आत्मानम् सृजामि", transliteration: "ātmānaṁ sṛjāmi", meaning: "నన్ను నేను అవతరింపజేసుకొందును (I manifest Myself)" }
    ],
    translationEn: "Whenever and wherever there is a decline in righteousness, O Bharata, and an ascendance of unrighteousness, at that time I manifest Myself upon earth.",
    translationTe: "ఓ భరతవంశీయుడా! ఎప్పుడెప్పుడు ధర్మమునకు హాని కలుగునో, అధర్మము మితిమీరి పెరుగునో, అప్పుడు నన్ను నేను సాకార రూపమున ప్రకటము చేసికొందును. (గీతా ప్రెస్)",
    translationHi: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब ही मैं अपने रूप को रचता हूँ अर्थात साकार रूप से लोगों के सम्मुख प्रकट होता हूँ। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "ఈశ్వర అవతార రహస్యము: ధర్మరక్షణార్థము భగవంతుడు మాయాశక్తి ద్వారా దేహమును ధరించి లోకమును ఉద్ధరించును (శాంకర భాష్యము).",
      mindAndPeace: "విశ్వము అధర్మమయమైనట్లు తోచినా, సత్యమునకే అంతిమ విజయమని దృఢ విశ్వాసము కలిగియుండుట.",
      workAndDuty: "అధర్మము ప్రబలిన చోట తలవంచక, ధర్మ పక్షమున నిలబడి పోరాడు దివ్య ధైర్యము.",
      familyAndRelations: "తరతరాలకు ధర్మసంస్కారములను అందించి, సదాచారమును రక్షించుట.",
      practicalAction: "నీ పరిధిలో ఎక్కడైనా అధర్మము జరిగితే మౌనము వహించక, శాంతముతో కూడిన న్యాయమును నిలబెట్టుము."
    },
    youtubeId: "HPXltOa3s_4",
    situations: ["faith", "crisis", "fear", "motivation"]
  },
  {
    id: "4-38",
    chapterNumber: 4,
    verseNumber: 38,
    chapterNameEn: "Jñāna Karma Sannyāsa Yoga",
    chapterNameTe: "జ్ఞాన కర్మ సంన్యాస యోగము",
    shlokaSanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥",
    shlokaTelugu: "న హి జ్ఞానేన సదృశం పవిత్రమిహ విద్యతే ।\nతత్స్వయం యోగసంసిద్ధః కాలేనాత్మని విన్దతి ॥",
    transliteration: "na hi jñānena sadṛśaṁ pavitram iha vidyate |\ntat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati ||",
    wordMeanings: [
      { sanskrit: "न हि", transliteration: "na hi", meaning: "నిశ్చయముగా లేదు (certainly not)" },
      { sanskrit: "ज्ञानेन सदृशम्", transliteration: "jñānena sadṛśam", meaning: "ఆత్మజ్ఞానముతో సమానమైన (equal to spiritual wisdom)" },
      { sanskrit: "पवित्रम्", transliteration: "pavitram", meaning: "పవిత్రము చేయునది (purifying)" },
      { sanskrit: "योग-संसिद्धः", transliteration: "yoga-saṁsiddhaḥ", meaning: "నిష్కామ కర్మయోగముచే అంతఃకరణ శుద్ధి పొందినవాడు (perfected in yoga)" },
      { sanskrit: "कालेन", transliteration: "kālena", meaning: "కాలక్రమమున (in due course of time)" },
      { sanskrit: "आत्मनि विन्दति", transliteration: "ātmani vindati", meaning: "తన ఆత్మయందే స్వయముగా అనుభవించును (realizes in one's own Self)" }
    ],
    translationEn: "In this world, there is nothing as purifying as spiritual wisdom. One who has attained perfection in Nishkama Karma Yoga realizes that knowledge within their own heart in due course of time.",
    translationTe: "ఈ లోకమునందు తత్త్వజ్ఞానముతో సమానమైన పవిత్రమైన వస్తువు మరియొకటి ఏదియును లేదు. కర్మయోగము ద్వారా అంతఃకరణ శుద్ధి పొందిన సాధకుడు కాలక్రమమున ఆ జ్ఞానమును తన హృదయమునందే స్వయముగా పొందును. (శాంకర భాష్యము)",
    translationHi: "इस संसार में ज्ञान के समान पवित्र करने वाला निःसंदेह कुछ भी नहीं है। उस ज्ञान को कितने ही काल से कर्मयोग द्वारा शुद्धान्तःकरण हुआ मनुष्य अपने-आप ही आत्मा में पा लेता है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "జ్ఞానాగ్నిః సర్వకర్మాణి భస్మసాత్కురుతే: సమస్త కర్మబంధములను భస్మము చేసి ముక్తినిచ్చునది కేవలము ఆత్మజ్ఞానమే.",
      mindAndPeace: "అజ్ఞానము వలన కలుగు భ్రమలు, సంశయములు నశించి నిత్య తృప్తి చేకూరును.",
      workAndDuty: "నిష్కామ కర్మయే జ్ఞానమునకు సోపానము; కర్మయోగ సాధన తప్పనిసరి.",
      familyAndRelations: "జ్ఞానయుక్తమైన వివేకముతో వ్యవహరించినప్పుడే బంధములు మోక్షదాయకములగును.",
      practicalAction: "రోజూ సద్గ్రంథ పఠనము, ఉపనిషద్-గీతా విచారమునకు కనీసము 20 నిమిషములు కేటాయించుము."
    },
    youtubeId: "HPXltOa3s_4",
    situations: ["peace", "discipline", "self-doubt"]
  },

  // =========================================================================
  // పంచమోఽధ్యాయః: కర్మ సంన్యాస యోగః (CHAPTER 5: KARMA SANNYĀSA YOGA)
  // =========================================================================
  {
    id: "5-10",
    chapterNumber: 5,
    verseNumber: 10,
    chapterNameEn: "Karma Sannyāsa Yoga",
    chapterNameTe: "కర్మ సంన్యాస యోగము",
    shlokaSanskrit: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा॥",
    shlokaTelugu: "బ్రహ్మణ్యాధాయ కర్మాణి సఙ్గం త్యక్త్వా కరోతి యః ।\nలిప్యతే న స పాపేన పద్మపత్రమివామ్భసా ॥",
    transliteration: "brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ |\nlipyate na sa pāpena padma-patram ivāmbhasā ||",
    wordMeanings: [
      { sanskrit: "ब्रह्मणि", transliteration: "brahmaṇi", meaning: "ఈశ్వరుని యందు (in the Supreme Lord)" },
      { sanskrit: "आधाय", transliteration: "ādhāya", meaning: "సమర్పించి (offering / dedicating)" },
      { sanskrit: "कर्माणि", transliteration: "karmāṇi", meaning: "సమస్త కర్మలను (all actions)" },
      { sanskrit: "सङ्गम् त्यक्त्वा", transliteration: "saṅgaṁ tyaktvā", meaning: "ఫలాసక్తిన వీడి (renouncing attachment)" },
      { sanskrit: "करोति यः", transliteration: "karoti yaḥ", meaning: "ఎవడైతే ఆచరించునో (he who acts)" },
      { sanskrit: "लिप्यते न", transliteration: "lipyate na", meaning: "అంటడు (is not tainted)" },
      { sanskrit: "पद्म-पत्रम् ఇవ", transliteration: "padma-patram iva", meaning: "తామరాకు వలె (like a lotus leaf)" },
      { sanskrit: "अम्भसा", transliteration: "ambhasā", meaning: "నీటి చేత (by water)" }
    ],
    translationEn: "One who performs all duties dedicating them to the Supreme Brahman, abandoning personal attachment, remains untouched by sin, just as a lotus leaf remains unmoistened by water.",
    translationTe: "సమస్త కర్మలను భగవంతునికి అర్పించి, ఫలాసక్తిని వీడి కర్మలనాచరించువాడు, తామరాకుపై నీటిబొట్టు అంటనట్లే పాపముచేత లిప్తుడు కాడు. (గీతా ప్రెస్ / శాంకర భాష్యము)",
    translationHi: "जो पुरुष सब कर्मों को परमात्मा में अर्पण करके और आसक्ति को त्यागकर कर्म करता है, वह जल से कमल के पत्ते की भाँति पाप से लिप्त नहीं होता। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "సంసారే ముక్తావస్థ: లోకములో ఉంటూనే నిర్లిప్తముగా జీవించుటే జ్ఞాన నిష్ఠ.",
      mindAndPeace: "ఫలాసక్తిన వదిలిన మనస్సునకు అహంకారము, అశాంతి అంటవు.",
      workAndDuty: "ఉద్యోగ వ్యాపారములను ఈశ్వర సేవగా భావించి చేయునప్పుడు కర్మబంధములు కలుగవు.",
      familyAndRelations: "మమకారమును వదలి, కర్తవ్య భావనతో కుటుంబ బాధ్యతలను నిర్వర్తించుట.",
      practicalAction: "పని చేయునప్పుడు 'నేను కర్తను కాను, భగవంతుని సాధనమును' అను భావనను స్మరించుము."
    },
    youtubeId: "zSo4UKr3TJE",
    situations: ["work-stress", "peace", "emotional-balance", "burnout"]
  },

  // =========================================================================
  // షష్ఠోఽధ్యాయః: ఆత్మసంయమ యోగః (CHAPTER 6: DHYĀNA / ĀTMASAṀYAMA YOGA)
  // =========================================================================
  {
    id: "6-5",
    chapterNumber: 6,
    verseNumber: 5,
    chapterNameEn: "Dhyāna Yoga",
    chapterNameTe: "ఆత్మసంయమ యోగము",
    shlokaSanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    shlokaTelugu: "ఉద్ధరేదాత్మనాత్మానం నాత్మానమవసాదయేత్ ।\nఆత్మైవ హ్యాత్మనో బంధురాత్మైవ రిపురాత్మనః ॥",
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet |\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ ||",
    wordMeanings: [
      { sanskrit: "उद्धरेत्", transliteration: "uddharet", meaning: "ఉద్ధరించుకోవలెను (elevate / deliver)" },
      { sanskrit: "आत्मना", transliteration: "ātmanā", meaning: "తన మనస్సు ద్వారా (by one's own mind)" },
      { sanskrit: "आत्मानम्", transliteration: "ātmānam", meaning: "తనను తాను (the self)" },
      { sanskrit: "न अवसादयेत्", transliteration: "na avasādayet", meaning: "పతనము చేసుకోరాదు (do not degrade)" },
      { sanskrit: "आत्मैव", transliteration: "ātmaiva", meaning: "తన మనస్సే (the mind alone)" },
      { sanskrit: "आत्मनः बन्धुः", transliteration: "ātmano bandhuḥ", meaning: "తనకు పరమ మిత్రుడు (one's own friend)" },
      { sanskrit: "రిపుః", transliteration: "ripuḥ", meaning: "తనకు పరమ శత్రువు (one's own enemy)" }
    ],
    translationEn: "One must elevate oneself by one's own mind, and not degrade oneself. For the mind alone is the true friend of the self, and the mind alone is the enemy of the self.",
    translationTe: "తన మనస్సు ద్వారా తనను తాను సంసార సముద్రము నుండి ఉద్ధరించుకోవలెను గాని అధోగతి పాలు చేసికోరాదు. ఏలయన, నిగ్రహింపబడిన మనస్సే తనకు మిత్రుడు, నిగ్రహము లేని మనస్సే తనకు శత్రువు. (శాంకర భాష్యము)",
    translationHi: "अपने द्वारा अपना संसार-समुद्र से उद्धार करे और अपने को नीचे न गिराए; क्योंकि यह मनुष्य आप ही तो अपना मित्र है और आप ही अपना शत्रु है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "శాంకర భాష్యము: ఆత్మా ఏవ హ్యాత్మనో బంధుః - జితాత్మనో బంధుః, అజితాత్మనస్తు శత్రుః (నిగ్రహించిన మనస్సు మోక్షబంధువు; నిగ్రహించని మనస్సు భవబంధ శత్రువు).",
      mindAndPeace: "స్వీయ జవాబుదారీతనము: నా సుఖదుఃఖములకు నేనే బాధ్యుడను అను సత్యమును గ్రహించి మనస్సును మచ్చిక చేసికొనుట.",
      workAndDuty: "బాహ్య పరిస్థితులను నిందించుట మాని, ఆత్మవిశ్వాసముతో క్రమశిక్షణను సాధించుట.",
      familyAndRelations: "మనస్సు ప్రశాంతముగా ఉంటే కుటుంబములో కలహములు ఉండవు; శాంతమైన మనస్సు గృహాన్ని నందనవనము చేయును.",
      practicalAction: "ప్రతిరోజూ ఉదయము 10 నిమిషములు మనస్సును నిశ్చలముగా ఉంచి ఈశ్వర ధ్యానము చేయుము."
    },
    youtubeId: "OczZTV2cdYM",
    situations: ["depression", "self-doubt", "discipline", "mind-control", "motivation"]
  },
  {
    id: "6-26",
    chapterNumber: 6,
    verseNumber: 26,
    chapterNameEn: "Dhyāna Yoga",
    chapterNameTe: "ఆత్మసంయమ యోగము",
    shlokaSanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    shlokaTelugu: "యతో యతో నిశ్చరతి మనశ్చఞ్చలమస్థిరమ్ ।\nతతస్తతో నియమ్యైతదాత్మన్యేవ వశం నయేత్ ॥",
    transliteration: "yato yato niścarati manaś cañcalam asthiram |\ntatas tato niyamyaitad ātmany eva vaśaṁ nayet ||",
    wordMeanings: [
      { sanskrit: "यतः यतः", transliteration: "yataḥ yataḥ", meaning: "ఎక్కడెక్కడికి (wherever)" },
      { sanskrit: "निश्चरति", transliteration: "niścarati", meaning: "పరుగెత్తునో (wanders away)" },
      { sanskrit: "मनः चञ्चलम्", transliteration: "manaś cañcalam", meaning: "చంచలమైన మనస్సు (fickle mind)" },
      { sanskrit: "अस्थिरम्", transliteration: "asthiram", meaning: "నిలకడలేనిది (unsteady)" },
      { sanskrit: "ततः ततः", transliteration: "tatas tataḥ", meaning: "అక్కడి నుండి (from all those objects)" },
      { sanskrit: "नियम्य", transliteration: "niyamya", meaning: "మరలించి (reining in)" },
      { sanskrit: "आत्मनि एव", transliteration: "ātmani eva", meaning: "ఆత్మయందే (in the Self alone)" },
      { sanskrit: "वशम् नयेत्", transliteration: "vaśaṁ nayet", meaning: "నిలుపవలెను (bring under control)" }
    ],
    translationEn: "From wherever the restless and unsteady mind wanders away, one should rein it in and bring it back under the control of the Self alone.",
    translationTe: "చంచలము, అస్థిరము అయిన మనస్సు ఏ యే శబ్దస్పర్శాది విషయముల వైపునకు పరుగెత్తునో, ఆయా విషయముల నుండి దానిని మరలించి మరలించి ఆత్మయందే నిలుపవలెను. (గీతా ప్రెస్ / శాంకర భాష్యము)",
    translationHi: "यह स्थिर न रहने वाला और चंचल मन जिस-जिस सांसारिक पदार्थ के निमित्त से संसार में विचरता है, उस-उस से रोककर इसे बार-बार परमात्मा में ही निरुद्ध करे। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "అభ్యాస వైరాగ్య సాధన: మనోనిగ్రహము ఒక్క క్షణములో సాధ్యము కాదు; పదే పదే మరలించి ఆత్మయందు నిలుపుటే అభ్యాసము.",
      mindAndPeace: "ఆలోచనలు చెదిరిపోయినప్పుడు చిరాకు పడక, ఓర్పుతో తిరిగి శ్వాసపైకి, పరమాత్మ వైపునకు తీసుకువచ్చుట.",
      workAndDuty: "పరధ్యానమును అధిగమించి, చేసే పనిపై ఏకాగ్రతను పునరుద్ధరించు ఉత్తమ సాధన.",
      familyAndRelations: "చంచలమైన అనుమానములు, భయములు కలిగినప్పుడు మనస్సును వివేకముతో సరిదిద్దుకొనుట.",
      practicalAction: "మనస్సు ఆందోళనల వైపు వెళ్ళినప్పుడల్లా 'ఓం నమో నారాయణాయ' అంటూ మళ్ళీ ప్రస్తుత క్షణమునకు చేరుకొనుము."
    },
    youtubeId: "OczZTV2cdYM",
    situations: ["anxiety", "overthinking", "discipline", "peace"]
  },

  // =========================================================================
  // సప్తమోఽధ్యాయః: జ్ఞానవిజ్ఞాన యోగః (CHAPTER 7: JÑĀNA VIJÑĀNA YOGA)
  // =========================================================================
  {
    id: "7-7",
    chapterNumber: 7,
    verseNumber: 7,
    chapterNameEn: "Jñāna Vijñāna Yoga",
    chapterNameTe: "జ్ఞాన విజ్ఞాన యోగము",
    shlokaSanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥",
    shlokaTelugu: "మత్తః పరతరం నాన్యత్కిఞ్చిదస్తి ధనఞ్జయ ।\nమయి సర్వమిదం ప్రోతం సూత్రే మణిగణా ఇవ ॥",
    transliteration: "mattaḥ parataraṁ nānyat kiñcid asti dhanañjaya |\nmayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva ||",
    wordMeanings: [
      { sanskrit: "मत्तः परतरम्", transliteration: "mattaḥ parataram", meaning: "నా కంటె పరమైనది / శ్రేష్ఠమైనది (higher than Me)" },
      { sanskrit: "न અન્યత్ కిఞ్చిత్", transliteration: "na anyat kiñcit", meaning: "మరేదియును లేదు (there is nothing else)" },
      { sanskrit: "మయి", transliteration: "mayi", meaning: "నాయందే (in Me)" },
      { sanskrit: "సర్వమ్ ఇదమ్", transliteration: "sarvam idam", meaning: "ఈ సమస్త జగత్తు (all this universe)" },
      { sanskrit: "ప్రోతమ్", transliteration: "protam", meaning: "గ్రుచ్చబడియున్నది (strung)" },
      { sanskrit: "సూత్రే", transliteration: "sūtre", meaning: "దారమునందు (on a thread)" },
      { sanskrit: "మణి-గణాః ఇవ", transliteration: "maṇi-gaṇāḥ iva", meaning: "మణుల సముదాయము వలె (like rows of pearls)" }
    ],
    translationEn: "There is nothing whatsoever higher than Me, O Arjuna. All this universe is strung upon Me, like clusters of pearls upon a thread.",
    translationTe: "ఓ ధనంజయా! నా కంటె శ్రేష్ఠమైనది మరియొకటి ఏదియును లేదు. దారమునందు మణులు గ్రుచ్చబడియున్నట్లు, ఈ సమస్త జగత్తు నాయందే ఓతప్రోతమై యున్నది. (గీతా ప్రెస్ / శాంకర భాష్యము)",
    translationHi: "हे धनंजय! मुझसे परे दूसरा कोई भी परम कारण नहीं है। यह सम्पूर्ण जगत् सूत्र में मणियों के सदृश मुझमें ही गूँथा हुआ है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "సర్వకారణ కారణ తత్త్వము: సృష్టిలోని నామరూపములు వేరైనా, ఆధారభూతమైన సూత్రము పరమాత్మయే.",
      mindAndPeace: "భగవంతుడు నన్ను ఎల్లవేళలా ఆవరించి రక్షించుచున్నాడను అభయ భావన.",
      workAndDuty: "సమస్త విశ్వమును పరమాత్మ స్వరూపముగా చూచి లోకహితార్థ కర్మలను నిర్వర్తించుట.",
      familyAndRelations: "అందరిలోనూ కొలువైయున్న దైవీ చైతన్యమును దర్శించి సమదృష్టితో ఆదరించుట.",
      practicalAction: "రోజూ చుట్టూ ఉన్న ప్రకృతిని చూస్తూ అంతటా వ్యాపించియున్న భగవత్ చైతన్యమును స్మరించుట."
    },
    youtubeId: "HPXltOa3s_4",
    situations: ["faith", "peace", "loneliness", "relationships"]
  },

  // =========================================================================
  // అష్టమోఽధ్యాయః: అక్షరపరబ్రహ్మ యోగః (CHAPTER 8: AKṢARA BRAHMA YOGA)
  // =========================================================================
  {
    id: "8-5",
    chapterNumber: 8,
    verseNumber: 5,
    chapterNameEn: "Akṣara Brahma Yoga",
    chapterNameTe: "అక్షర పరబ్రహ్మ యోగము",
    shlokaSanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥",
    shlokaTelugu: "అన్తకాలే చ మామేవ స్మరన్ముక్త్వా కలేవరమ్ ।\nయః ప్రయాతి స మద్భావం యాతి నాస్త్యత్ర సంశయః ॥",
    transliteration: "anta-kāle ca mām eva smaran muktvā kalevaram |\nyaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra saṁśayaḥ ||",
    wordMeanings: [
      { sanskrit: "अन्त-काले", transliteration: "anta-kāle", meaning: "అంత్యకాలమునందు / మరణ సమయమున (at the final time)" },
      { sanskrit: "माम् एव", transliteration: "mām eva", meaning: "నన్నే (Me alone)" },
      { sanskrit: "स्मरन्", transliteration: "smaran", meaning: "స్మరించుచు (remembering)" },
      { sanskrit: "ముక్త్వా కలేవరమ్", transliteration: "muktvā kalevaram", meaning: "శరీరమును విడిచి (leaving the body)" },
      { sanskrit: "యః ప్రయాతి", transliteration: "yaḥ prayāti", meaning: "ఎవడైతే దేహత్యాగము చేయునో (whoever departs)" },
      { sanskrit: "సః మద్భావమ్ యాతి", transliteration: "sa mad-bhāvaṁ yāti", meaning: "అతడు నా దివ్య స్వరూపమును పొందును (attains My nature)" },
      { sanskrit: "న అస్తి అత్ర సంశయః", transliteration: "nāsty atra saṁśayaḥ", meaning: "ఇందు ఎటువంటి సంశయము లేదు (there is no doubt)" }
    ],
    translationEn: "Whoever at the time of death departs from the body remembering Me alone, immediately attains My divine nature. Of this there is no doubt.",
    translationTe: "అంత్యకాలమునందు కూడా నన్నే స్మరించుచు శరీరమును విడిచిపెట్టువాడు నా సాక్షాత్ స్వరూపమును పొందును. ఇందు ఎటువంటి సంశయము లేదు. (గీతా ప్రెస్ / శాంకర భాష్యము)",
    translationHi: "जो पुरुष अन्तकाल में भी मुझको ही स्मरण करता हुआ शरीर को त्याग कर जाता है, वह मेरे साक्षात स्वरूप को प्राप्त होता है—इसमें कुछ भी संशय नहीं है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "సదా తద్భావ భావితః: జీవితాంతము దేనిని అభ్యాసము చేయునో అంత్యకాలమున అదియే స్మరణకు వచ్చును.",
      mindAndPeace: "నిత్య భగవత్స్మరణ అలవరచుకొనినవానికి మృత్యుభయము తొలగి పరమ శాంతి లభించును.",
      workAndDuty: "ఏ పని చేయుచున్ననూ అంతరంగములో భగవన్నామమును నిలుపుకొను దివ్య సాధన.",
      familyAndRelations: "లౌకిక వ్యామోహముల కంటే పరమపురుషార్థమైన మోక్షచింతనను పెద్దలకు, పిల్లలకు అందించుట.",
      practicalAction: "రాత్రి పడుకొనే ముందు సమస్తమును భగవంతునికి అర్పించి, భగవన్నామమును స్మరిస్తూ నిద్రించుట."
    },
    youtubeId: "HPXltOa3s_4",
    situations: ["grief", "peace", "faith", "fear"]
  },

  // =========================================================================
  // నవమోఽధ్యాయః: రాజవిద్యారాజగుహ్య యోగః (CHAPTER 9: RĀJA VIDYĀ RĀJA GUHYA)
  // =========================================================================
  {
    id: "9-22",
    chapterNumber: 9,
    verseNumber: 22,
    chapterNameEn: "Rāja Vidyā Rāja Guhya Yoga",
    chapterNameTe: "రాజవిద్యారాజగుహ్య యోగము",
    shlokaSanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    shlokaTelugu: "అనన్యాశ్చిన్తయన్తో మాం యే జనాః పర్యుపాసతే ।\nతేషాం నిత్యాభియుక్తానాం యోగక్షేమం వహామ్యహమ్ ॥",
    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate |\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham ||",
    wordMeanings: [
      { sanskrit: "अनन्याः", transliteration: "ananyāḥ", meaning: "అనన్య భావముతో (with undivided devotion)" },
      { sanskrit: "चिन्तयन्तः", transliteration: "cintayantaḥ", meaning: "ధ్యానించుచు (contemplating)" },
      { sanskrit: "మాం", transliteration: "mām", meaning: "నన్ను (upon Me)" },
      { sanskrit: "పర్యుపాసతే", transliteration: "paryupāsate", meaning: "నిష్కామముగా ఉపాసించుదురో (worship reverently)" },
      { sanskrit: "నిత్యాభియుక్తానాం", transliteration: "nityābhiyuktānām", meaning: "నిరంతరము భగవచ్చింతనలో నిమగ్నమైనవారి (of those ever-engaged)" },
      { sanskrit: "యోగ-క్షేమం", transliteration: "yoga-kṣemam", meaning: "అలభ్య లాభము (యోగం), లబ్ధ పరిపాలనము (క్షేమం) - (spiritual & physical protection)" },
      { sanskrit: "వహామి అహం", transliteration: "vahāmy aham", meaning: "నేనే స్వయముగా వహింతును (I personally carry)" }
    ],
    translationEn: "To those who always worship Me with exclusive devotion, meditating on My transcendental form—to them who are constantly devoted, I personally carry what they lack and preserve what they possess.",
    translationTe: "అనన్య భావముతో నన్నే చింతించుచు, నిష్కామముగా నన్ను ఉపాసించు నిత్యయుక్తులైన భక్తుల యోగక్షేమములను (లేనిదానిని సమకూర్చుట, ఉన్నదానిని రక్షించుట) నేనే స్వయముగా వహింతును. (శాంకర భాష్యము / గీతా ప్రెస్)",
    translationHi: "जो अनन्यप्रेमी भक्तजन मुझ परमेश्वर को निरंतर चिन्तन करते हुए निष्कामभाव से भजते हैं, उन नित्य-युक्त पुरुषों का योगक्षेम (अप्राप्त की प्राप्ति और प्राप्त की रक्षा) मैं स्वयं वहन करता हूँ। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "శాంకర భాష్యము: యోగః అప్రాప్తస్య ప్రాపణమ్, క్షేమః తద్రక్షణమ్ - తదుభయం వహామి అహం (భక్తుని సమస్త లౌకిక, పారమార్థిక సంరక్షణ భగవద్దత్తము).",
      mindAndPeace: "భవిష్యత్తు మరియు ఆర్థిక భద్రతను గూర్చిన సమస్త భయములను హరించు పరమ అభయవాక్యము.",
      workAndDuty: "ధర్మబద్ధముగా నీ కర్తవ్యమును చేయుము; సంరక్షణ భగవంతుని చేతిలో ఉన్నది.",
      familyAndRelations: "కుటుంబ యోగక్షేమములు పరమాత్మ దయపై ఆధారపడియున్నవని నమ్మి నిశ్చింతగా ఉండుట.",
      practicalAction: "సమస్యల భారముతో కుంగిపోక, 'కృష్ణా, నీవే నా రక్షకుడవు' అని సంపూర్ణ శరణాగతి చేయుము."
    },
    youtubeId: "HPXltOa3s_4",
    situations: ["fear", "security", "faith", "surrender", "loneliness"]
  },
  {
    id: "9-26",
    chapterNumber: 9,
    verseNumber: 26,
    chapterNameEn: "Rāja Vidyā Rāja Guhya Yoga",
    chapterNameTe: "రాజవిద్యారాజగుహ్య యోగము",
    shlokaSanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
    shlokaTelugu: "పత్రం పుష్పం ఫలం తోయం యో మే భక్త్యా ప్రయచ్ఛతి ।\nతదహం భక్త్యుపహృతమశ్నామి ప్రయతాత్మనః ॥",
    transliteration: "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati |\ntad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ ||",
    wordMeanings: [
      { sanskrit: "पत्रम्", transliteration: "patram", meaning: "ఒక ఆకును (a leaf)" },
      { sanskrit: "पुष्पम्", transliteration: "puṣpam", meaning: "ఒక పువ్వును (a flower)" },
      { sanskrit: "फलम्", transliteration: "phalam", meaning: "ఒక పండును (a fruit)" },
      { sanskrit: "तोयम्", transliteration: "toyam", meaning: "కొద్దిపాటి నీటిని (even water)" },
      { sanskrit: "యః భక్త్యా", transliteration: "yo bhaktyā", meaning: "ఎవడైతే ప్రేమపూర్వక భక్తితో (whoever with devotion)" },
      { sanskrit: "ప్రయచ్ఛతి", transliteration: "prayacchati", meaning: "సమర్పించునో (offers)" },
      { sanskrit: "అశ్నామి", transliteration: "aśnāmi", meaning: "నేను ప్రీతితో స్వీకరింతును (I joyfully accept)" }
    ],
    translationEn: "Whoever offers to Me with devotion a leaf, a flower, a fruit, or even water—that offering, brought with love by a pure heart, I accept with joy.",
    translationTe: "భక్తిశ్రద్ధలతో ఎవరైనా నాకు ఒక ఆకును గాని, పువ్వును గాని, పండును గాని, చివరకు జలమును గాని సమర్పించినచో, పరిశుద్ధాంతఃకరణము గల ఆ భక్తుని ప్రేమపూర్వక కానుకను నేను ప్రీతితో స్వీకరింతును. (గీతా ప్రెస్ / శాంకర భాష్యము)",
    translationHi: "जो कोई भक्त मेरे लिए प्रेम से पत्र, पुष्प, फल, जल आदि अर्पण करता है, उस शुद्धबुद्धि निष्काम प्रेमी भक्त का प्रेमपूर्वक अर्पण किया हुआ वह सब मैं सप्रेम स्वीकार करता हूँ। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "భావగ్రాహీ జనార్దనః: భగవంతునికి బాహ్య వైభవముతో పనిలేదు; అంతఃకరణములోని నిష్కల్మష భక్తియే ప్రధానము.",
      mindAndPeace: "ఆడంబరములను వీడి సరళమైన జీవనమును, నిశ్చల భక్తిని అలవరచుకొనుట.",
      workAndDuty: "చిన్న పనైనా చిత్తశుద్ధితో, భగవదర్పణ భావముతో చేయుటయే ఉత్తమ పూజ.",
      familyAndRelations: "సంబంధాలలో విలువైంది ఖరీదైన వస్తువులు కాదు, హృదయపూర్వకమైన ప్రేమ మరియు ఆదరణ.",
      practicalAction: "నేడు నీవు భుజించే ఆహారమును మొదట భగవంతునికి నివేదించి ప్రసాదముగా స్వీకరించుము."
    },
    youtubeId: "HPXltOa3s_4",
    situations: ["faith", "peace", "relationships", "happiness"]
  },

  // =========================================================================
  // దశమోఽధ్యాయః: విభూతి యోగః (CHAPTER 10: VIBHŪTI YOGA)
  // =========================================================================
  {
    id: "10-41",
    chapterNumber: 10,
    verseNumber: 41,
    chapterNameEn: "Vibhūti Yoga",
    chapterNameTe: "విభూతి యోగము",
    shlokaSanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा।\nतत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम्॥",
    shlokaTelugu: "యద్యద్విభూతిమత్సత్త్వం శ్రీమదూర్జితమేవ వా ।\nతత్తదేవావగచ్ఛ త్వం మమ తేజోంఽశసమ్భవమ్ ॥",
    transliteration: "yad yad vibhūtimat sattvaṁ śrīmad ūrjitam eva vā |\ntat tad evāvagaccha tvaṁ mama tejo-'ṁśa-sambhavam ||",
    wordMeanings: [
      { sanskrit: "यत् यत्", transliteration: "yad yad", meaning: "ఏ ఏ వస్తువు / ప్రాణి (whatever)" },
      { sanskrit: "विभूतिमत्", transliteration: "vibhūtimat", meaning: "వైభవ సంపన్నమైనదో (endowed with splendor)" },
      { sanskrit: "श्रीमత్", transliteration: "śrīmat", meaning: "సౌందర్య / కాంతివంతమైనదో (glorious / graceful)" },
      { sanskrit: "ऊర్జితమ్", transliteration: "ūrjitam", meaning: "బల / పరాక్రమ సంపన్నమైనదో (mighty / powerful)" },
      { sanskrit: "అవగచ్ఛ త్వమ్", transliteration: "avagaccha tvam", meaning: "నీవు తెలుసుకొనుము (know you)" },
      { sanskrit: "మమ తేజో-అంశ-సంభవమ్", transliteration: "mama tejo-'ṁśa-sambhavam", meaning: "నా దివ్య తేజస్సులోని ఒక చిన్న అంశచే ఉత్పన్నమైనది (born of a spark of My divine splendor)" }
    ],
    translationEn: "Whatever entity is endowed with majesty, beauty, glory, or power, know that to be born of merely a spark of My divine splendor.",
    translationTe: "ఐశ్వర్యవంతమైనది, కాంతిమంతమైనది, శక్తిసామర్థ్యములు గలది ఏది ఉన్నదో, అదంతయు నా తేజస్సులోని ఒక సూక్ష్మ అంశ నుండియే ఉత్పన్నమైనదని నీవు నిశ్చయముగా తెలుసుకొనుము. (గీతా ప్రెస్ / శాంకర భాష్యము)",
    translationHi: "जो-जो भी विभूति युक्त (ऐश्वर्ययुक्त), कान्तियुक्त और शक्तियुक्त वस्तु या प्राणी है, उस-उस को तुम मेरे ही तेज के अंश से उत्पन्न हुआ जानो। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "సమస్త సౌందర్యము, జ్ఞానము, కళలు పరమాత్మ తేజోంశలే. సృష్టిలోని ఉత్తమత్వాన్ని చూసినప్పుడు ఈశ్వరారాధన కలుగును.",
      mindAndPeace: "ఇతరుల విజయాలను, ప్రతిభను చూసి అసూయ పడక దైవ లీలగా భావించి ఆనందించుట.",
      workAndDuty: "నీలో ఉన్న ప్రతిభ దైవదత్తమని గ్రహించి గర్వమును వీడి వినయముతో వర్తించుట.",
      familyAndRelations: "తోటివారిలోని మంచి గుణములను గుర్తించి అభినందించు విశాల హృదయము.",
      practicalAction: "ఎవరిలోనైనా గొప్ప నైపుణ్యమును చూసినప్పుడు దేవుని మహిమను స్మరించి నమస్కరించుము."
    },
    youtubeId: "A0pe_PlrvK8",
    situations: ["motivation", "peace", "self-doubt", "leadership"]
  },

  // =========================================================================
  // ఏకాదశోఽధ్యాయః: విశ్వరూపదర్శన యోగః (CHAPTER 11: VIŚVARŪPA DARŚANA)
  // =========================================================================
  {
    id: "11-32",
    chapterNumber: 11,
    verseNumber: 32,
    chapterNameEn: "Viśvarūpa Darśana Yoga",
    chapterNameTe: "విశ్వరూప సందర్శన యోగము",
    shlokaSanskrit: "श्रीभगवानुवाच\nकालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान् समाहर्तुमिह प्रवृत्तः।\nऋतेऽपि त्वां न भविष्यन्ति सर्वे\nयेऽवस्थिताः प्रत्यनीकेषु योधाः॥",
    shlokaTelugu: "శ్రీభగవానువాచ\nకాలోఽస్మి లోకక్షయకృత్ప్రవృద్ధో\nలోకాన్ సమాహర్తుమిహ ప్రవృత్తః ।\nఋతేఽపి త్వాం న భవిష్యన్తి సర్వే\nయేఽవస్థితాః ప్రత్యనీకేషు యోధాః ॥",
    transliteration: "śrī-bhagavān uvāca\nkālo 'smi loka-kṣaya-kṛt pravṛddho\nlokān samāhartum iha pravṛttaḥ |\nṛte 'pi tvāṁ na bhaviṣyanti sarve\nye 'vasthitāḥ pratyanīkeṣu yodhāḥ ||",
    wordMeanings: [
      { sanskrit: "श्रीभगवान् उवाच", transliteration: "śrī-bhagavān uvāca", meaning: "శ్రీభగవానుడు పలికెను (The Blessed Lord said)" },
      { sanskrit: "कालः अस्मि", transliteration: "kālo 'smi", meaning: "నేను సమస్త లోకములను సంహరించు మహాకాలుడను (I am mighty Time)" },
      { sanskrit: "लोक-क्षय-कृत्", transliteration: "loka-kṣaya-kṛt", meaning: "లోకములను క్షీణింపజేయువాడను (destroyer of the worlds)" },
      { sanskrit: "समाहर्तुम्", transliteration: "samāhartum", meaning: "సంహరించుటకు (to annihilate)" },
      { sanskrit: "प्रवृत्तः", transliteration: "pravṛttaḥ", meaning: "ప్రవర్తిల్లినవాడను (engaged here)" },
      { sanskrit: "ऋते अपि त्वाम्", transliteration: "ṛte 'pi tvām", meaning: "నీవు లేకపోయిననూ (even without your fighting)" },
      { sanskrit: "न भविष्यन्ति", transliteration: "na bhaviṣyanti", meaning: "బ్రతుకరు (shall not remain alive)" },
      { sanskrit: "योधाः", transliteration: "yodhāḥ", meaning: "యోధులు (the warriors)" }
    ],
    translationEn: "The Blessed Lord said: I am mighty Time, the source of destruction of all worlds, engaged here in annihilating these hosts. Even without your participation, none of the warriors standing in the opposing armies shall escape death.",
    translationTe: "శ్రీభగవానుడు పలికెను: లోకములను నశింపజేయు ప్రవృద్ధుడైన మహాకాలుడను నేనే. సమస్త లోకములను సంహరించుటకు ఇప్పుడు ప్రవృత్తుడనైతిని. నీవు యుద్ధము చేయకపోయిననూ, శత్రు సైన్యమునందున్న యోధులెవ్వరూ బ్రతుకరు. (కావున నీవు కేవలము నిమిత్తమాత్రుడవు కమ్ము - గీతా ప్రెస్)",
    translationHi: "श्रीभगवान ने कहा: मैं लोकों का नाश करने वाला महाकाल हूँ और इस समय इन लोकों का संहार करने के लिए प्रवृत्त हुआ हूँ। तुम्हारे बिना भी इन प्रतिपक्षी सेनाओं में खड़े सभी योद्धा जीवित नहीं बचेंगे। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "నిమిత్తమాత్రం భవ సవ్యసాచిన్: కాలచక్రము భగవదాధీనము; అహంకారమును విడిచి ఈశ్వర కార్యములో సేవకునిగా నిలబడుటయే వివేకము.",
      mindAndPeace: "విశ్వము తన సంకల్పముతో నడుచుచున్నదను భ్రమను వీడి, భారాన్ని ఈశ్వరునికి సమర్పించి కర్తవ్యము చేయుట.",
      workAndDuty: "ఫలితములను కాలము నిర్ణయించును; నీవు చిత్తశుద్ధితో ఒక సాధనముగా బాధ్యతను పూర్తి చేయుము.",
      familyAndRelations: "కాల ప్రభావమున మార్పులు సహజమని గ్రహించి, సంక్షోభ సమయములలో స్థైర్యము వహించుట.",
      practicalAction: "అహంకారమును వీడి 'ఓ ప్రభూ, నన్ను నీ ధర్మకార్యమునకు మంచి సాధనముగా వాడుకొనుము' అని ప్రార్థించుట."
    },
    youtubeId: "zSo4UKr3TJE",
    situations: ["crisis", "fear", "duty", "surrender"]
  },

  // =========================================================================
  // ద్వాదశోఽధ్యాయః: భక్తి యోగః (CHAPTER 12: BHAKTI YOGA)
  // =========================================================================
  {
    id: "12-15",
    chapterNumber: 12,
    verseNumber: 15,
    chapterNameEn: "Bhakti Yoga",
    chapterNameTe: "భక్తి యోగము",
    shlokaSanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    shlokaTelugu: "యస్మాన్నోద్విజతే లోకో లోకాన్నోద్విజతే చ యః ।\nహర్షామర్షభయోద్వేగైర్ముక్తో యః స చ మే ప్రియః ॥",
    transliteration: "yasmān nodvijate loko lokān nodvijate ca yaḥ |\nharṣāmarṣa-bhayodvegair mukto yaḥ sa ca me priyaḥ ||",
    wordMeanings: [
      { sanskrit: "యస్మాత్", transliteration: "yasmāt", meaning: "ఎవరి వలన (by whom)" },
      { sanskrit: "న ఉద్విజతే", transliteration: "na udvijate", meaning: "ఉద్వేగము / కలత చెందదో (is not agitated)" },
      { sanskrit: "లోకః", transliteration: "lokaḥ", meaning: "లోకము / ప్రాణులు (the world / people)" },
      { sanskrit: "హర్ష-అమర్ష-భయ-ఉద్వేగైః", transliteration: "harṣāmarṣa-bhayodvegaiḥ", meaning: "అతిసంతోషము, అసూయ, భయము, ఆందోళనల నుండి (from excessive joy, envy, fear, and agitation)" },
      { sanskrit: "ముక్తః యః", transliteration: "mukto yaḥ", meaning: "విముక్తుడైనవాడో (he who is freed)" },
      { sanskrit: "స చ మే ప్రియః", transliteration: "sa ca me priyaḥ", meaning: "అతడు నాకు అత్యంత ప్రియుడు (he is very dear to Me)" }
    ],
    translationEn: "One by whom no one is agitated, who is not agitated by anyone, and who is freed from the grips of excessive excitement, envy, fear, and anxiety—that person is very dear to Me.",
    translationTe: "ఎవరి వలన లోకము కలత చెందదో, లోకము వలన ఎవరునూ కలత చెందరో, మరియు హర్షము, అసూయ, భయము, ఉద్వేగము అను వికారముల నుండి విముక్తుడైనవాడో—అట్టి భక్తుడు నాకు అత్యంత ప్రియమైనవాడు. (శాంకర భాష్యము / గీతా ప్రెస్)",
    translationHi: "जिससे कोई भी जीव उद्वेग को प्राप्त नहीं होता और जो स्वयं भी किसी जीव से उद्वेग को प्राप्त नहीं होता तथा जो हर्ष, अमर्ष, भय और उद्वेग आदि से मुक्त है, वह भक्त मुझे अत्यन्त प्रिय है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "శాంకర భాష్యము: అహింసా పరమో ధర్మః - ఇతరులను బాధింపకుండుట, ఇతరుల ప్రవర్తనకు తాను క్షోభ చెందకుండుటయే పరమ భక్తి లక్షణము.",
      mindAndPeace: "మానసిక ప్రశాంతత: బాహ్య కల్లోలములను తనలోనికి తీసికొనక, తన అశాంతిని సమాజముపై రుద్దక జీవించుట.",
      workAndDuty: "కార్యాలయములో తోటివారిని భయపెట్టక, తాను ఉద్వేగములకు లోనుగాక సమచిత్తముతో వ్యవహరించుట.",
      familyAndRelations: "ఇంట్లో కోపతాపములు లేకుండా ప్రశాంతమైన, సురక్షితమైన వాతావరణమును నిర్మించుట.",
      practicalAction: "నేడు ఎవరితోనూ కఠినముగా మాట్లాడక, ఎవరైనా నిందించినా సంయమనముతో ప్రశాంతముగా ఉండుము."
    },
    youtubeId: "zSo4UKr3TJE",
    situations: ["anger", "conflict", "relationships", "emotional-balance", "patience"]
  },

  // =========================================================================
  // త్రయోదశోఽధ్యాయః: క్షేత్రక్షేత్రజ్ఞవిభాగ యోగః (CHAPTER 13: KṢETRA KṢETRAJÑA)
  // =========================================================================
  {
    id: "13-28",
    chapterNumber: 13,
    verseNumber: 28,
    chapterNameEn: "Kṣetra Kṣetrajña Vibhāga Yoga",
    chapterNameTe: "క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగము",
    shlokaSanskrit: "समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम्।\nविनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति॥",
    shlokaTelugu: "సమం సర్వేషు భూతేషు తిష్ఠన్తం పరమేశ్వరమ్ ।\nవినశ్యత్స్వవినశ్యన్తం యః పశ్యతి స పశ్యతి ॥",
    transliteration: "samaṁ sarveṣu bhūteṣu tiṣṭhantaṁ parameśvaram |\nvinaśyatsv avinaśyantaṁ yaḥ paśyati sa paśyati ||",
    wordMeanings: [
      { sanskrit: "समम्", transliteration: "samam", meaning: "సమభావముతో (equally)" },
      { sanskrit: "सर्वेषु भूतेषु", transliteration: "sarveṣu bhūteṣu", meaning: "సమస్త ప్రాణులయందు (in all living beings)" },
      { sanskrit: "तिष्ठन्तम्", transliteration: "tiṣṭhantam", meaning: "స్థితుడైయున్న (dwelling)" },
      { sanskrit: "परमेश्वरम्", transliteration: "parameśvaram", meaning: "పరమేశ్వరుని (the Supreme Lord)" },
      { sanskrit: "विनश्यत्सु", transliteration: "vinaśyatsu", meaning: "నశించు ప్రాణులయందు (among the perishable beings)" },
      { sanskrit: "अविनश्यन्तम्", transliteration: "avinaśyantam", meaning: "నాశనము లేనివానిగా (the imperishable)" },
      { sanskrit: "यः పశ్యతి", transliteration: "yaḥ paśyati", meaning: "ఎవడైతే దర్శించునో (whoever sees)" },
      { sanskrit: "సః పశ్యతి", transliteration: "sa paśyati", meaning: "అతడే యథార్థముగా చూచువాడు (he truly sees)" }
    ],
    translationEn: "One who sees the Supreme Lord dwelling equally in all living beings, the imperishable within the perishable, that person truly sees.",
    translationTe: "సమస్త నశ్వర ప్రాణులయందు నాశనము లేనివాడై సమముగా కొలువైయున్న పరమేశ్వరుని ఎవడైతే దర్శించునో, అతడే నిజమైన తత్త్వదర్శనము గలవాడు. (గీతా ప్రెస్ / శాంకర భాష్యము)",
    translationHi: "जो पुरुष नष्ट होते हुए सब चराचर प्राणियों में परमेश्वर को समभाव से स्थित और अविनाशी देखता है, वही वास्तव में सही देखता है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "సమదర్శన తత్త్వము: దేహములు నశించిననూ సమస్త జీవులలోని సాక్షి చైతన్యము ఒక్కటేనని దర్శించుటయే అద్వైత జ్ఞానము.",
      mindAndPeace: "భేదబుద్ధి, ద్వేషము, వర్గవివక్షలు సమసిపోయి సర్వాత్మభావము కలుగును.",
      workAndDuty: "ప్రతి మానవునియందు గౌరవభావమును కలిగి ఉండుట.",
      familyAndRelations: "బాహ్య రూపములను బట్టి కాక, అందరిలోని ఆత్మస్వరూపమును దర్శించి ప్రేమించుట.",
      practicalAction: "తోటి మనుషులను చూచినప్పుడు వారిలోని అంతర్యామియైన శ్రీమన్నారాయణునికి నమస్కరించుట."
    },
    youtubeId: "A0pe_PlrvK8",
    situations: ["relationships", "peace", "emotional-balance"]
  },

  // =========================================================================
  // చతుర్దశోఽధ్యాయః: గుణత్రయవిభాగ యోగః (CHAPTER 14: GUṆATRAYA VIBHĀGA)
  // =========================================================================
  {
    id: "14-20",
    chapterNumber: 14,
    verseNumber: 20,
    chapterNameEn: "Guṇatraya Vibhāga Yoga",
    chapterNameTe: "గుణత్రయ విభాగ యోగము",
    shlokaSanskrit: "गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान्।\nजन्ममृत्युजरादुःखैर्विमुक्तోऽमृतमश्नुते॥",
    shlokaTelugu: "గుణానేతానతీత్య త్రీన్దేహీ దేహసముద్భవాన్ ।\nజన్మమృత్యుజరాదుఃఖైర్విముక్తోఽమృతమశ్నుతే ॥",
    transliteration: "guṇān etān atītya trīn dehī deha-samudbhavān |\njanma-mṛtyu-jarā-duḥkhair vimukto 'mṛtam aśnute ||",
    wordMeanings: [
      { sanskrit: "గుణాన్ ఏతాన్", transliteration: "guṇān etān", meaning: "ఈ మూడు గుణములను (these three gunas: Sattva, Rajas, Tamas)" },
      { sanskrit: "అతీత్య", transliteration: "atītya", meaning: "దాటి / దాటినవాడై (transcending)" },
      { sanskrit: "దేహీ", transliteration: "dehī", meaning: "జీవాత్మ (the embodied soul)" },
      { sanskrit: "జన్మ-మృత్యు-జరా-దుఃఖైః", transliteration: "janma-mṛtyu-jarā-duḥkhaiḥ", meaning: "జన్మ, మరణ, వృద్ధాప్య దుఃఖముల నుండి (from the pains of birth, death, and old age)" },
      { sanskrit: "విముక్తః", transliteration: "vimuktaḥ", meaning: "విముక్తుడై (liberated)" },
      { sanskrit: "అమృతమ్ అశ్నుతే", transliteration: "amṛtam aśnute", meaning: "మోక్షామృతమును అనుభవించును (attains immortality)" }
    ],
    translationEn: "When the embodied soul transcends these three modes of material nature (Sattva, Rajas, and Tamas), one is freed from the sufferings of birth, death, and old age, attaining immortality.",
    translationTe: "శరీరోత్పత్తికి కారణమైన సత్త్వ, రజస్, తమో గుణములను దాటిన మానవుడు జన్మ, మృత్యు, వృద్ధాప్య రూపమైన సమస్త దుఃఖముల నుండి విముక్తుడై పరమానందరూప మోక్షామృతమును పొందును. (గీతా ప్రెస్ / శాంకర భాష్యము)",
    translationHi: "जीवात्मा शरीर की उत्पत्ति के कारणरूप इन तीनों गुणों का अतिक्रमण करके जन्म, मृत्यु, वृद्धावस्था और सब प्रकार के दुःखों से मुक्त होकर परमानन्द (अमृत) को प्राप्त होता है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "గుణాతీత స్థితి: గుణములు ప్రకృతినే ఆశ్రయించి వర్తించును; ఆత్మ గుణాతీతము, నిత్యముక్తము.",
      mindAndPeace: "ఆలస్యము (తమస్సు), ఆవేశము (రజస్సు), ఆనందము (సత్త్వము) - ఈ భావోద్వేగములను సాక్షిగా గమనించుట.",
      workAndDuty: "అలసత్వమును వీడి రజస్సును సత్త్వము ద్వారా శుద్ధి చేసి చివరకు నిర్గుణ పరమాత్మను చేరుట.",
      familyAndRelations: "తోటివారి గుణదోషములకు విచలితుడు కాక గుణాతీత ప్రేమను కనబరచుట.",
      practicalAction: "రోజూ నీ ప్రవర్తనలో ఏ గుణము ఆధిక్యములో ఉన్నదో గమనించి, సత్త్వగుణమును పెంచుకొనుము."
    },
    youtubeId: "OczZTV2cdYM",
    situations: ["overthinking", "burnout", "discipline", "peace"]
  },

  // =========================================================================
  // పంచదశోఽధ్యాయః: పురుషోత్తమ యోగః (CHAPTER 15: PURUṢOTTAMA YOGA)
  // =========================================================================
  {
    id: "15-15",
    chapterNumber: 15,
    verseNumber: 15,
    chapterNameEn: "Puruṣottama Yoga",
    chapterNameTe: "పురుషోత్తమ ప్రాప్తి యోగము",
    shlokaSanskrit: "सर्वस्य चाहं हृदि सन्निविष्टో\nमत्तः स्मृतिर्ज्ञानमपोहनं च।\nवेदैश्च सर्वैरहमेव वेद्यో\nवेदान्तकृद्वेदविदेव चाहम्॥",
    shlokaTelugu: "సర్వస్య చాహం హృది సన్నివిష్టో\nమత్తః స్మృతిర్జ్ఞానమపోహనం చ ।\nవేదైశ్చ సర్వైరహమేవ వేద్యో\nవేదాన్తకృద్వేదవిదేవ చాహమ్ ॥",
    transliteration: "sarvasya cāhaṁ hṛdi sanniviṣṭo\nmattaḥ smṛtir jñānam apohanaṁ ca |\nvedaiś ca sarvair aham eva vedyo\nvedānta-kṛd veda-vid eva cāham ||",
    wordMeanings: [
      { sanskrit: "సర్వస్య హృది", transliteration: "sarvasya hṛdi", meaning: "సమస్త ప్రాణుల హృదయమునందు (in the heart of all beings)" },
      { sanskrit: "సన్నివిష్టః", transliteration: "sanniviṣṭaḥ", meaning: "అంతర్యామిగా కొలువైయున్నాను (seated as inner witness)" },
      { sanskrit: "మత్తః", transliteration: "mattaḥ", meaning: "నా వలననే (from Me alone)" },
      { sanskrit: "స్మృతిః జ్ఞానమ్ అపోహనమ్", transliteration: "smṛtir jñānam apohanam", meaning: "స్మృతి, జ్ఞానము, మరియు వాటి విస్మృతి (memory, knowledge, and forgetfulness)" },
      { sanskrit: "వేదైశ్చ సర్వైః అహమ్ వేద్యః", transliteration: "vedaiś ca sarvair aham eva vedyaḥ", meaning: "సమస్త వేదములచే తెలియదగినవాడను నేనే (by all Vedas I alone am known)" },
      { sanskrit: "వేదాంత-కృత్ వేద-విత్", transliteration: "vedānta-kṛd veda-vid", meaning: "వేదాంత కర్తను, వేదములను తెలిసినవాడను నేనే (author and knower of Vedanta)" }
    ],
    translationEn: "I am seated in the hearts of all living beings. From Me come memory, knowledge, as well as their loss. By all the Vedas I alone am to be known; indeed, I am the author of Vedanta and the knower of the Vedas.",
    translationTe: "సమస్త ప్రాణుల హృదయములయందు నేను అంతర్యామి రూపమున కొలువైయున్నాను. నా వలననే స్మృతి, జ్ఞానము మరియు విస్మృతి కలుగుచున్నవి. సర్వ వేదముల ద్వారా తెలియదగినవాడను నేనే; వేదాంత కర్తను, వేదార్థమును ఎరిగినవాడను నేనే. (శాంకర భాష్యము / గీతా ప్రెస్)",
    translationHi: "मैं ही सब प्राणियों के हृदय में अन्तर्यामी रूप से स्थित हूँ तथा मुझसे ही स्मृति, ज्ञान और अपोहन (विस्मृति) होते हैं। सब वेदों द्वारा मैं ही जानने योग्य हूँ तथा वेदान्त का कर्ता और वेदों को जानने वाला भी मैं ही हूँ। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "అంతర్యామి తత్త్వము: దేహము నందు చైతన్య స్వరూపమై వెలుగుచున్నవాడు పరమాత్మయే.",
      mindAndPeace: "భగవంతుడు దూరముగా లేడు; నా హృదయమునందే సాక్షిగా ఉన్నాడను దివ్య భద్రతా భావన.",
      workAndDuty: "జ్ఞానము, మేధస్సు భగవత్ ప్రసాదమని గ్రహించి నిరహంకారముగా పని చేయుట.",
      familyAndRelations: "ఎదుటివారిలో కొలువైయున్న అంతర్యామిని గౌరవించుట.",
      practicalAction: "రోజూ రాత్రి హృదయకమలమునందు వేంచేసియున్న శ్రీకృష్ణునికి కృతజ్ఞతా ప్రణామములు అర్పించుట."
    },
    youtubeId: "HPXltOa3s_4",
    situations: ["faith", "peace", "intuition", "self-doubt"]
  },

  // =========================================================================
  // షోడశోఽధ్యాయః: దైవాసురసంపద్విభాగ యోగః (CHAPTER 16: DAIVĀSURA SAMPAD)
  // =========================================================================
  {
    id: "16-1",
    chapterNumber: 16,
    verseNumber: 1,
    chapterNameEn: "Daivāsura Sampad Vibhāga Yoga",
    chapterNameTe: "దైవాసుర సంపద్విభాగ యోగము",
    shlokaSanskrit: "श्रीभगवानुवाच\nअभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥",
    shlokaTelugu: "శ్రీభగవానువాచ\nఅభయం సత్త్వసంశుద్ధిర్జ్ఞానయోగవ్యవస్థితిః ।\nదానం దమశ్చ యజ్ఞశ్చ స్వాధ్యాయస్తప ఆర్జవమ్ ॥",
    transliteration: "śrī-bhagavān uvāca\nabhayaṁ sattva-saṁśuddhir jñāna-yoga-vyavasthitiḥ |\ndānaṁ damaś ca yajñaś ca svādhyāyas tapa ārjavam ||",
    wordMeanings: [
      { sanskrit: "अभयम्", transliteration: "abhayam", meaning: "భయము లేకుండుట (fearlessness)" },
      { sanskrit: "सత్త్వ-సంశుద్ధిః", transliteration: "sattva-saṁśuddhiḥ", meaning: "అంతఃకరణ శుద్ధి (purity of heart)" },
      { sanskrit: "జ్ఞాన-యోగ-వ్యవస్థితిః", transliteration: "jñāna-yoga-vyavasthitiḥ", meaning: "జ్ఞానయోగమునందు స్థిరత్వము (steadfastness in wisdom)" },
      { sanskrit: "దానమ్", transliteration: "dānam", meaning: "సత్పాత్ర దానము (charity)" },
      { sanskrit: "దమః", transliteration: "damaḥ", meaning: "బాహ్యేంద్రియ నిగ్రహము (control of the senses)" },
      { sanskrit: "యజ్ఞః", transliteration: "yajñaḥ", meaning: "దేవయజ్ఞాది అనుష్ఠానములు (sacrifice / duty)" },
      { sanskrit: "స్వాధ్యాయః", transliteration: "svādhyāyaḥ", meaning: "వేదశాస్త్ర పఠనము (study of sacred scriptures)" },
      { sanskrit: "తపః", transliteration: "tapaḥ", meaning: "స్వధర్మాచరణ తపస్సు (austerity)" },
      { sanskrit: "ఆర్జవమ్", transliteration: "ārjavam", meaning: "నిష్కపటమైన సరళత (straightforwardness / honesty)" }
    ],
    translationEn: "The Blessed Lord said: Fearlessness, purity of heart, steadfastness in knowledge and yoga, charity, self-control, performance of sacrifice, study of scriptures, austerity, and uprightness—these are the hallmarks of divine nature.",
    translationTe: "శ్రీభగవానుడు పలికెను: భయరాహిత్యము, అంతఃకరణ నైర్మల్యము, తత్త్వజ్ఞానమునందు స్థిరత్వము, సత్పాత్ర దానము, ఇంద్రియ నిగ్రహము, యజ్ఞానుష్ఠానము, వేదశాస్త్ర అధ్యయనము, స్వధర్మ తపస్సు మరియు నిష్కపటమైన సరళత్వము—ఇవి దైవీ సంపద గలవారి సహజ సద్గుణములు. (శాంకర భాష్యము / గీతా ప్రెస్)",
    translationHi: "श्रीभगवान ने कहा: सर्वथा भयरहित होना, अन्तःकरण की शुद्धि, तत्त्वज्ञान के लिए योग में निरंतर दृढ़ स्थिति, सात्त्विक दान, इंद्रियों का दमन, यज्ञ, स्वाध्याय, तप और सरलता—ये सब दैवी सम्पदा के लक्षण हैं। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "దైవీ సంపద మోక్షాయ: భయరాహిత్యము మోక్షసాధనకు ప్రథమ లక్షణము. శాస్త్రవిహిత సద్గుణ సంపదయే జీవుని పరమపదమునకు చేర్చును.",
      mindAndPeace: "అంతఃకరణ పరిశుద్ధి ఉన్నచోట భయము, కపటము ఉండవు; శాంతి సహజముగా వికసించును.",
      workAndDuty: "వృత్తిలో నీతి, నిజాయితీ, సరళత్వములను నిలబెట్టుకొనుట.",
      familyAndRelations: "మోసము లేని నిర్మలమైన ప్రేమతో ఇతరులతో వ్యవహరించుట.",
      practicalAction: "రోజూ పరుల పట్ల దయతో, సత్యముతో, నిష్కపటముగా వర్తించుటకు సంకల్పించుము."
    },
    youtubeId: "OczZTV2cdYM",
    situations: ["fear", "discipline", "leadership", "relationships"]
  },

  // =========================================================================
  // సప్తదశోఽధ్యాయః: శ్రద్ధాత్రయవిభాగ యోగః (CHAPTER 17: ŚRADDHĀTRAYA VIBHĀGA)
  // =========================================================================
  {
    id: "17-3",
    chapterNumber: 17,
    verseNumber: 3,
    chapterNameEn: "Śraddhātraya Vibhāga Yoga",
    chapterNameTe: "శ్రద్ధాత్రయ విభాగ యోగము",
    shlokaSanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत।\nश्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥",
    shlokaTelugu: "సత్వానురూపా సర్వస్య శ్రద్ధా భవతి భారత ।\nశ్రద్ధామయోఽయం పురుషో యో యచ్ఛ్రద్ధః స ఏవ సః ॥",
    transliteration: "sattvānurūpā sarvasya śraddhā bhavati bhārata |\nśraddhā-mayo 'yaṁ puruṣo yo yac-chraddhaḥ sa eva saḥ ||",
    wordMeanings: [
      { sanskrit: "సత్త్వ-అనురూపా", transliteration: "sattvānurūpā", meaning: "అంతఃకరణ స్వభావమునకు తగినట్లుగా (according to one's temperament)" },
      { sanskrit: "సర్వస్య", transliteration: "sarvasya", meaning: "సమస్త మనుష్యుల యొక్క (of all beings)" },
      { sanskrit: "శ్రద్ధా భవతి", transliteration: "śraddhā bhavati", meaning: "శ్రద్ధ ఉండును (faith conforms)" },
      { sanskrit: "శ్రద్ధా-మయః అయమ్ పురుషః", transliteration: "śraddhā-mayo 'yaṁ puruṣaḥ", meaning: "ఈ మనుష్యుడు శ్రద్ధామయుడు (this person is made of faith)" },
      { sanskrit: "యః యత్-శ్రద్ధః", transliteration: "yo yac-chraddhaḥ", meaning: "ఎవడు ఎట్టి శ్రద్ధ గలవాడో (whatever one's faith is)" },
      { sanskrit: "స ఏవ సః", transliteration: "sa eva saḥ", meaning: "అతడు అట్టివాడే అగును (that verily he becomes)" }
    ],
    translationEn: "The faith of each person conforms to their mental constitution, O Bharata. A human being is made of faith; whatever faith one holds, that verily one becomes.",
    translationTe: "ఓ భరతవంశీయుడా! ప్రతి మనుష్యుని శ్రద్ధ అతని అంతఃకరణ సంస్కారమునకు అనుగుణముగా ఉండును. ఈ జీవుడు శ్రద్ధామయుడు; ఒకని శ్రద్ధ ఎట్టిదో అతడు అట్టివాడే అగును. (శాంకర భాష్యము / గీతా ప్రెస్)",
    translationHi: "हे भारत! सभी मनुष्यों की श्रद्धा उनके अन्तःकरण के अनुरूप होती है। यह पुरुष श्रद्धामय है, इसलिए जो जैसी श्रद्धा वाला है, वह स्वयं भी वही है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "శ్రద్ధావాన్ లభతే జ్ఞానమ్: శాస్త్రము, గురువాక్యము నందు గల నిష్కల్మష విశ్వాసమే జ్ఞానప్రాప్తికి పరమ సాధనము.",
      mindAndPeace: "నీ సంకల్పములు, నమ్మకములే నీ జీవితమును తీర్చిదిద్దును; సత్త్వగుణ శ్రద్ధను ఆశ్రయించుము.",
      workAndDuty: "చేయు పనియందు ఉన్నతమైన శ్రద్ధ మరియు ఆదర్శములను కలిగియుండుట.",
      familyAndRelations: "మంచి సంస్కారములను శ్రద్ధతో పాటించు సంప్రదాయమును నిలుపుట.",
      practicalAction: "సదా సత్యము, ధర్మము, భగవంతుని యందే ప్రగాఢ శ్రద్ధను ఉంచి జీవించుము."
    },
    youtubeId: "A0pe_PlrvK8",
    situations: ["faith", "self-doubt", "motivation", "purpose"]
  },

  // =========================================================================
  // అష్టాదశోఽధ్యాయః: మోక్షసంన్యాస యోగః (CHAPTER 18: MOKṢA SANNYĀSA YOGA)
  // =========================================================================
  {
    id: "18-66",
    chapterNumber: 18,
    verseNumber: 66,
    chapterNameEn: "Mokṣa Sannyāsa Yoga",
    chapterNameTe: "మోక్ష సంన్యాస యోగము",
    shlokaSanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    shlokaTelugu: "సర్వధర్మాన్పరిత్యజ్య మామేకం శరణం వ్రజ ।\nఅహం త్వాం సర్వపాపేభ్యో మోక్షయిష్యామి మా శుచః ॥",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja |\nahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ ||",
    wordMeanings: [
      { sanskrit: "సర్వ-ధర్మాన్", transliteration: "sarva-dharmān", meaning: "సమస్త ధర్మాధర్మములను / కర్మలను (all varieties of duties & rituals)" },
      { sanskrit: "పరిత్యజ్య", transliteration: "parityajya", meaning: "భగవదర్పణము చేసి / త్యజించి (abandoning / surrendering)" },
      { sanskrit: "మామ్ ఏకమ్", transliteration: "mām ekam", meaning: "నన్ను ఒక్కడినే (unto Me alone)" },
      { sanskrit: "శరణమ్ వ్రజ", transliteration: "śaraṇaṁ vraja", meaning: "శరణు వేడుము (take refuge)" },
      { sanskrit: "అహమ్ త్వామ్", transliteration: "ahaṁ tvām", meaning: "నేను నిన్ను (I shall deliver you)" },
      { sanskrit: "సర్వ-పాపేభ్యః", transliteration: "sarva-pāpebhyo", meaning: "సమస్త పాపముల నుండి / సంసార బంధముల నుండి (from all sins and bondages)" },
      { sanskrit: "మోక్షయిష్యామి", transliteration: "mokṣayiṣyāmi", meaning: "ముక్తుని చేసెదను (shall liberate you)" },
      { sanskrit: "మా శుచః", transliteration: "mā śucaḥ", meaning: "శోకింపకుము / భయపడకుము (grieve not)" }
    ],
    translationEn: "Abandon all varieties of dharmas and take refuge in Me alone. I shall deliver you from all sins and bondages. Grieve not.",
    translationTe: "సమస్త ధర్మాధర్మములను నాయందు సమర్పించి, సర్వేశ్వరుడనైన నన్ను ఒక్కడినే శరణు వేడుము. నేను నిన్ను సమస్త పాపముల నుండి, సంసార బంధముల నుండి విముక్తుడిని చేసెదను; శోకింపకుము! (చరమ శ్లోకము - శాంకర భాష్యము / గీతా ప్రెస్)",
    translationHi: "सम्पूर्ण धर्मों को अर्थात सम्पूर्ण कर्तव्यकर्मों को मुझमें त्यागकर तू केवल एक मुझ सर्वशक्तिमान, सर्वाधार परमेश्वर की ही शरण में आ जा। मैं तुझे सम्पूर्ण पापों से मुक्त कर दूँगा, तू शोक मत कर। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "గీతా శాస్త్ర సారభూత చరమ శ్లోకము: కర్తృత్వాభిమానమును వీడి, పరమాత్మయందు సమస్తమును న్యాసము చేయుటే పరమ సంన్యాసము. భగవద్ అనుగ్రహమే మోక్ష ప్రదాత (శాంకర భాష్యము).",
      mindAndPeace: "భూతకాల పాపభయములను, అపరాధ భావనను, శోకమును సంపూర్ణముగా తొలగించి దివ్య రక్షణనిచ్చు మహామంత్రము.",
      workAndDuty: "అహంకారమును వీడి, ఫలితములను భగవంతునికి అర్పించి పరమ శాంతితో జీవించుట.",
      familyAndRelations: "సమస్త ప్రాణులను భగవత్స్వరూపముగా భావించి క్షమాగుణముతో ఉండుట.",
      practicalAction: "నీ చేతిలో లేని భారములన్నింటినీ శ్రీకృష్ణుని చరణారవిందములకు సమర్పించి ప్రశాంతముగా నిశ్చింత వహించుము."
    },
    youtubeId: "A0pe_PlrvK8",
    situations: ["grief", "guilt", "liberation", "peace", "surrender"]
  },
  {
    id: "18-78",
    chapterNumber: 18,
    verseNumber: 78,
    chapterNameEn: "Mokṣa Sannyāsa Yoga",
    chapterNameTe: "మోక్ష సంన్యాస యోగము",
    shlokaSanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    shlokaTelugu: "యత్ర యోగేశ్వరః కృష్ణో యత్ర పార్థో ధనుర్ధరః ।\nతత్ర శ్రీర్విజయో భూతిర్ధ్రువా నీతిర్మతిర్మమ ॥",
    transliteration: "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ |\ntatra śrīr vijayo bhūtir dhruvā nītir matir mama ||",
    wordMeanings: [
      { sanskrit: "यत्र", transliteration: "yatra", meaning: "ఎక్కడైతే (wherever)" },
      { sanskrit: "योगेश्वरः कृष्णः", transliteration: "yogeśvaraḥ kṛṣṇaḥ", meaning: "యోగేశ్వరుడైన శ్రీకృష్ణుడు (Lord Krishna, master of all yoga)" },
      { sanskrit: "यत्र पार्थः धनुर्धरः", transliteration: "yatra pārtho dhanur-dharaḥ", meaning: "గాండీవధారియైన అర్జునుడు (Arjuna, the wielder of the bow)" },
      { sanskrit: "तत्र", transliteration: "tatra", meaning: "అక్కడ (there)" },
      { sanskrit: "श्रीः", transliteration: "śrīḥ", meaning: "లక్ష్మి / సంపద (prosperity)" },
      { sanskrit: "विजयः", transliteration: "vijayaḥ", meaning: "విజయము (victory)" },
      { sanskrit: "भूतिः", transliteration: "bhūtiḥ", meaning: "వైభవము / అభ్యుదయము (flourishing glory)" },
      { sanskrit: "ध्रुवा नीतिः", transliteration: "dhruvā nītiḥ", meaning: "స్థిరమైన నీతి / ధర్మము (unshakable moral order)" },
      { sanskrit: "मतिः मम", transliteration: "matir mama", meaning: "ఇది నా దృఢ నిశ్చయము (such is my firm conviction)" }
    ],
    translationEn: "Wherever there is Sri Krishna, the master of all yoga, and wherever there is Arjuna, the wielder of the bow, there will certainly be boundless prosperity, victory, flourishing glory, and unshakable righteousness. Such is my firm conviction.",
    translationTe: "యోగేశ్వరుడైన శ్రీకృష్ణుడు ఎక్కడ ఉండునో, గాండీవధారియైన అర్జునుడు ఎక్కడ ఉండునో—అక్కడ సంపద, విజయము, విభూతి మరియు నిశ్చలమైన నీతి నిస్సందేహముగా ఉండునని నా దృఢ నిశ్చయము. (గీతా మహాత్మ్య ఉపసంహారము - గీతా ప్రెస్ / శాంకర భాష్యము)",
    translationHi: "जहाँ योगेश्वर भगवान श्रीकृष्ण हैं और जहाँ गाण्डीव-धनुषधारी अर्जुन हैं, वहीं श्री, विजय, विभूति और अचल नीति है—ऐसा मेरा दृढ़ मत है। (गीता प्रेस गोरखपुर)",
    lifeLayers: {
      spiritualEssence: "గీతా శాస్త్ర సంపూర్ణ సిద్ధాంతము: దైవానుగ్రహము (శ్రీకృష్ణుడు) + మానవ పురుషార్థము (అర్జునుడు) కలసినచోట సమస్త విజయములు సిద్ధించును (శాంకర భాష్యము).",
      mindAndPeace: "విధివాదపు నిష్క్రియాత్మకతను, అహంకారపు స్వప్రయత్న వాదమును రెండింటినీ వీడి, ఈశ్వర స్మరణతో కర్తవ్యమును ఆచరించుట.",
      workAndDuty: "పరిశ్రమను ఆపకుము; భగవద్ అనుగ్రహమును ప్రార్థింపుము. నీతియుక్తమైన శ్రమకు జయము తథ్యము.",
      familyAndRelations: "ధర్మము మరియు దైవభక్తి కల గృహములో శాంతి, శ్రేయస్సు, విజయము నిత్యము నివాసముండును.",
      practicalAction: "నీ చేతి ధనుస్సును (నీ బాధ్యతలను) ఎత్తిపట్టుము; యోగేశ్వరుడైన శ్రీకృష్ణుని ఆశీస్సులతో విజయపథమున నడువుము."
    },
    youtubeId: "HPXltOa3s_4",
    situations: ["motivation", "leadership", "duty", "faith", "success"]
  }
];
