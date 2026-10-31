'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type AppLanguage = 'en' | 'te' | 'hi';

export interface UIContent {
  // Navbar
  navHome: string;
  navChapters: string;
  navLife: string;
  navVideos: string;
  navLaunchApp: string;
  navExplore: string;
  navTheBook: string;
  tagline: string;

  // Hero
  heroBadge: string;
  heroTitlePrefix: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroExploreBtn: string;
  heroVideoBtn: string;
  heroReplaySplash: string;
  heroFeature1: string;
  heroFeature2: string;
  heroFeature3: string;
  heroFeature4: string;

  // Modern Life Navigator
  navigatorBadge: string;
  navigatorTitle: string;
  navigatorSubtitle: string;
  krishnaDiagnosis: string;
  modernSymptom: string;
  whyThisShloka: string;
  corePrinciple: string;
  actionPlan: string;
  listenChanting: string;
  videoExplanation: string;

  // Mind Reset Pacer
  pacerBadge: string;
  pacerTitle: string;
  pacerSubtitle: string;
  pacerStart: string;
  pacerReset: string;
  pacerInhale: string;
  pacerHold: string;
  pacerExhale: string;

  // Daily Pillars
  pillarsBadge: string;
  pillarsTitle: string;
  pillarsSubtitle: string;
  morningTitle: string;
  morningDesc: string;
  workTitle: string;
  workDesc: string;
  eveningTitle: string;
  eveningDesc: string;
  nightTitle: string;
  nightDesc: string;

  // Shloka Explorer
  explorerTitle: string;
  explorerSubtitle: string;
  searchPlaceholder: string;
  selectChapter: string;
  showingVerses: string;
  scriptLabel: string;
  translationLabel: string;
  wordMeanings: string;
  hideWordMeanings: string;
  practicalLayers: string;
  layerSpiritual: string;
  layerMind: string;
  layerWork: string;
  layerFamily: string;
  layerAction: string;

  // Footer
  footerDesc: string;
  footerRights: string;
}

const UI_DICTIONARY: Record<AppLanguage, UIContent> = {
  en: {
    navHome: "Home",
    navChapters: "18 Chapters & Shlokas",
    navLife: "Gita for Life",
    navVideos: "Video Explanations",
    navLaunchApp: "Launch App",
    navExplore: "Explore Verses",
    navTheBook: "The Book",
    tagline: "World's First Video Gita",

    heroBadge: "World's First Video-Based Bhagavad Gita • 700+ Video Explanations",
    heroTitlePrefix: "Transform Your Life with ",
    heroTitleHighlight: "GitaSaarthi",
    heroSubtitle: "Over 5,000 years ago, Lord Krishna guided Arjuna out of despair on Kurukshetra. Now reimagined as interactive video commentaries, Sanskrit chanting, and practical wisdom for modern stress, career, and relationships.",
    heroExploreBtn: "Explore 18 Chapters & Shlokas",
    heroVideoBtn: "See How It Works (Video)",
    heroReplaySplash: "Replay Welcome Screen",
    heroFeature1: "5-Layer Life Lessons",
    heroFeature2: "Word-by-Word Sanskrit Breakdown",
    heroFeature3: "English, Telugu & Hindi Translations",
    heroFeature4: "Interactive Book + App Experience",

    navigatorBadge: "Direct Solutions for Modern Life",
    navigatorTitle: "What Are You Dealing with Today?",
    navigatorSubtitle: "Pick your situation. Lord Krishna's timeless psychological diagnosis and actionable protocols provide immediate relief.",
    krishnaDiagnosis: "Lord Krishna's Ancient Diagnosis",
    modernSymptom: "Modern Symptom",
    whyThisShloka: "Why this Shloka Resolves this Challenge",
    corePrinciple: "Core Principle",
    actionPlan: "3-Step Immediate Action Protocol",
    listenChanting: "Listen to Chanting",
    videoExplanation: "Watch Video Commentary",

    pacerBadge: "Instant Mental First-Aid",
    pacerTitle: "Feeling Overwhelmed Right Now?",
    pacerSubtitle: "Take 60 seconds. Sync your breathing with Gita 6.26 to calm racing thoughts and autonomic tension.",
    pacerStart: "Begin 60-Second Reset",
    pacerReset: "Reset",
    pacerInhale: "Inhale gently (Fill the lungs)",
    pacerHold: "Hold with awareness (Stillness)",
    pacerExhale: "Exhale slowly (Release tension)",

    pillarsBadge: "Daily Routine Architecture",
    pillarsTitle: "How Gita Helps You Manage Every 24 Hours",
    pillarsSubtitle: "Spiritual wisdom is not a weekend event. It is a system for how you wake up, work, relate, and sleep.",
    morningTitle: "Morning Intention",
    morningDesc: "Start the day with Chapter 6 clarity before opening social media. Anchor in inner silence.",
    workTitle: "Karma Yoga at Work",
    workDesc: "Gita 2.47 flow state: Give 100% effort to your craft without panic over promotions or praise.",
    eveningTitle: "Evening Boundary",
    eveningDesc: "Gita 12.15 composure: Do not bring office politics or corporate fury to the dinner table.",
    nightTitle: "Night Ocean Surrender",
    nightDesc: "Gita 2.70 unshakeable ocean: All thoughts and unfinished tasks merge into quiet sleep under divine care.",

    explorerTitle: "Shloka Explorer & Commentaries",
    explorerSubtitle: "Explore Sanskrit verses, Telugu and Hindi commentaries, word-by-word anvaya, and life applications.",
    searchPlaceholder: "Search verse, keyword, or number (e.g. 2-47)...",
    selectChapter: "Select Chapter (1 to 18)",
    showingVerses: "Showing Verses with Classical Commentaries",
    scriptLabel: "Script:",
    translationLabel: "Translation:",
    wordMeanings: "View Word-by-Word Meanings (Anvaya)",
    hideWordMeanings: "Hide Word-by-Word Breakdown",
    practicalLayers: "5-Layer Life Architecture",
    layerSpiritual: "Spiritual Essence",
    layerMind: "Mind & Peace",
    layerWork: "Work & Duty",
    layerFamily: "Family & Relations",
    layerAction: "Practical Action",

    footerDesc: "GitaSaarthi bridges classical Vedantic scriptures (Gita Press Gorakhpur, Shankara Bhashya, TTD) with daily cognitive resilience.",
    footerRights: "All rights reserved. Dedicated to the lotus feet of Sri Krishna."
  },

  te: {
    navHome: "హోమ్",
    navChapters: "18 అధ్యాయాలు & శ్లోకాలు",
    navLife: "జీవన గీత",
    navVideos: "వీడియో వ్యాఖ్యానాలు",
    navLaunchApp: "యాప్ ఓపెన్",
    navExplore: "శ్లోక అన్వేషణ",
    navTheBook: "పుస్తకం",
    tagline: "ప్రపంచపు మొట్టమొదటి వీడియో గీత",

    heroBadge: "ప్రపంచంలోనే మొట్టమొదటి వీడియో భగవద్గీత • 700+ వీడియో వివరణలు",
    heroTitlePrefix: "మీ జీవితాన్ని మార్చుకోండి ",
    heroTitleHighlight: "గీత సారథితో",
    heroSubtitle: "5,000 సంవత్సరాల క్రితం కురుక్షేత్రంలో అర్జునుడికి శ్రీకృష్ణుడు ప్రసాదించిన దివ్య మార్గదర్శకత్వం. నేటి ఆధునిక ఒత్తిడి, కెరీర్ సవాళ్లు మరియు బంధాల పరిష్కారానికి ప్రాచీన విజ్ఞానం.",
    heroExploreBtn: "18 అధ్యాయాలు & శ్లోకాలను అన్వేషించండి",
    heroVideoBtn: "ఇది ఎలా పనిచేస్తుందో చూడండి (వీడియో)",
    heroReplaySplash: "స్వాగత తెరను మళ్ళీ చూడండి",
    heroFeature1: "5-అంచెల జీవన జ్ఞానము",
    heroFeature2: "సంస్కృత పదచ్ఛేదం & అన్వయార్థం",
    heroFeature3: "తెలుగు, హిందీ, ఇంగ్లీష్ అనువాదాలు",
    heroFeature4: "పుస్తకం + యాప్ అనుసంధానం",

    navigatorBadge: "నేటి సమస్యలకు గీతా పరిష్కారాలు",
    navigatorTitle: "నేడు మీరు ఎదుర్కొంటున్న సమస్య ఏమిటి?",
    navigatorSubtitle: "మీ పరిస్థితిని ఎంచుకోండి. శ్రీకృష్ణుని ప్రాచీన విశ్లేషణ మరియు తక్షణ ఆచరణాత్మక పద్ధతులు మీకు ఉపశమనం కలిగిస్తాయి.",
    krishnaDiagnosis: "శ్రీకృష్ణుని దివ్య విశ్లేషణ",
    modernSymptom: "నేటి ఆధునిక లక్షణం",
    whyThisShloka: "ఈ శ్లోకం ఈ సమస్యను ఎలా పరిష్కరిస్తుంది?",
    corePrinciple: "మూల సిద్ధాంతం",
    actionPlan: "3-అంచెల తక్షణ ఆచరణాత్మక విధానం",
    listenChanting: "శ్లోక పఠనం వినండి",
    videoExplanation: "వీడియో వ్యాఖ్యానం చూడండి",

    pacerBadge: "తక్షణ మానసిక ప్రథమ చికిత్స",
    pacerTitle: "తీవ్రమైన ఒత్తిడి లేదా ఆందోళనగా ఉందా?",
    pacerSubtitle: "కేవలం 60 సెకన్లు కేటాయించండి. గీత 6.26 ప్రకారం శ్వాసను క్రమబద్ధీకరించి మనస్సును కుదుటపరచుకోండి.",
    pacerStart: "60 సెకన్ల రీసెట్ ప్రారంభించండి",
    pacerReset: "మొదటినుండి",
    pacerInhale: "నెమ్మదిగా శ్వాస పీల్చుకోండి",
    pacerHold: "శ్వాసను నిలిపి గమనించండి (నిశ్చలత)",
    pacerExhale: "నెమ్మదిగా శ్వాస విడవండి (ఒత్తిడి విడుదల)",

    pillarsBadge: "దినచర్య క్రమశిక్షణ",
    pillarsTitle: "గీత ప్రతి 24 గంటల జీవితాన్ని ఎలా తీర్చిదిద్దుతుంది",
    pillarsSubtitle: "ఆధ్యాత్మిక విజ్ఞానం వారాంతపు పూజలకు మాత్రమే కాదు. అది మీరు నిద్రలేచే తీరును, పనిచేసే విధానాన్ని, శాంతితో నిద్రించే కలను నడిపిస్తుంది.",
    morningTitle: "ఉదయపు సంకల్పం (07:00)",
    morningDesc: "సోషల్ మీడియా తెరవక ముందే 6వ అధ్యాయపు ప్రశాంతతతో అంతశ్చేతనను అనుసంధానించండి.",
    workTitle: "కార్యాలయ కర్మయోగం (11:00)",
    workDesc: "గీత 2.47: ప్రమోషన్లు లేదా ఇతరుల గుర్తింపుపై ఆందోళన పడకుండా మీ పనిలో 100% నైపుణ్యాన్ని అర్పించండి.",
    eveningTitle: "సాయంత్రపు హద్దులు (19:00)",
    eveningDesc: "గీత 12.15: ఆఫీస్ రాజకీయాలు లేదా కోపాన్ని కుటుంబ భోజన బల్ల వద్దకు తీసుకురాకండి.",
    nightTitle: "రాత్రివేళ సముద్ర సమర్పణ (23:00)",
    nightDesc: "గీత 2.70: ఆలోచనలు, పూర్తికాని పనులను పరమాత్మ దయకు సమర్పించి గాఢ నిద్రలోకి జారుకోండి.",

    explorerTitle: "శ్లోక అన్వేషణ & వ్యాఖ్యానాలు",
    explorerSubtitle: "సంస్కృత శ్లోకాలు, ప్రామాణిక తెలుగు-హిందీ తాత్పర్యాలు, పదచ్ఛేదం మరియు నిత్యజీవిత అనువర్తనాలు.",
    searchPlaceholder: "శ్లోకం, కీవర్డ్ లేదా నంబర్ శోధించండి (ఉదా: 2-47)...",
    selectChapter: "అధ్యాయాన్ని ఎంచుకోండి (1 నుండి 18)",
    showingVerses: "ప్రాచీన భాష్యాలతో కూడిన శ్లోకాలు",
    scriptLabel: "లిపి:",
    translationLabel: "తాత్పర్యం:",
    wordMeanings: "ప్రతిపదార్థం & అన్వయం చూడండి",
    hideWordMeanings: "ప్రతిపదార్థాన్ని దాచండి",
    practicalLayers: "5-అంచెల జీవన తత్త్వము",
    layerSpiritual: "ఆధ్యాత్మిక తత్త్వము",
    layerMind: "మానసిక ప్రశాంతత",
    layerWork: "వృత్తి & కర్తవ్యము",
    layerFamily: "కుటుంబ సంబంధాలు",
    layerAction: "ఆచరణాత్మక సాధన",

    footerDesc: "గీతా ప్రెస్ గోరఖ్‌పూర్, శ్రీ శాంకర భాష్యము, తితిదే ప్రామాణిక ప్రచురణల ఆధారంగా రూపొందించబడిన దివ్య వేదిక.",
    footerRights: "సర్వ హక్కులు సురక్షితము. శ్రీకృష్ణ పరమాత్మ పాదారవిందములకు సమర్పితము."
  },

  hi: {
    navHome: "होम",
    navChapters: "18 अध्याय और श्लोक",
    navLife: "जीवन के लिए गीता",
    navVideos: "वीडियो व्याख्याएँ",
    navLaunchApp: "ऐप खोलें",
    navExplore: "श्लोक अन्वेषण",
    navTheBook: "पुस्तक",
    tagline: "विश्व की प्रथम वीडियो गीता",

    heroBadge: "विश्व की प्रथम वीडियो-आधारित भगवद्गीता • 700+ वीडियो व्याख्याएँ",
    heroTitlePrefix: "अपने जीवन को रूपांतरित करें ",
    heroTitleHighlight: "गीता सारथी के साथ",
    heroSubtitle: "5,000 वर्ष पूर्व भगवान श्रीकृष्ण ने कुरुक्षेत्र में अर्जुन को विषाद से उबारा था। आज आधुनिक तनाव, करियर और संबंधों के समाधान हेतु कालातीत सनातन ज्ञान।",
    heroExploreBtn: "18 अध्याय और श्लोक देखें",
    heroVideoBtn: "यह कैसे कार्य करता है (वीडियो)",
    heroReplaySplash: "स्वागत स्क्रीन पुनः देखें",
    heroFeature1: "5-स्तरीय जीवन ज्ञान",
    heroFeature2: "पदच्छेद एवं अन्वयार्थ",
    heroFeature3: "हिंदी, तेलुगु और अंग्रेजी अनुवाद",
    heroFeature4: "पुस्तक + ऐप समन्वय",

    navigatorBadge: "आधुनिक समस्याओं का गीता समाधान",
    navigatorTitle: "आज आप किस समस्या का सामना कर रहे हैं?",
    navigatorSubtitle: "अपनी परिस्थिति चुनें। भगवान श्रीकृष्ण का प्राचीन निदान और तात्कालिक क्रियात्मक उपाय आपको शांति प्रदान करेंगे।",
    krishnaDiagnosis: "भगवान श्रीकृष्ण का दिव्य निदान",
    modernSymptom: "आधुनिक लक्षण",
    whyThisShloka: "यह श्लोक इस समस्या का समाधान कैसे करता है?",
    corePrinciple: "मूल सिद्धांत",
    actionPlan: "3-चरणीय तात्कालिक कार्य योजना",
    listenChanting: "श्लोक पाठ सुनें",
    videoExplanation: "वीडियो व्याख्या देखें",

    pacerBadge: "मानसिक प्राथमिक उपचार",
    pacerTitle: "क्या आप अत्यधिक तनाव महसूस कर रहे हैं?",
    pacerSubtitle: "मात्र 60 सेकंड निकालें। गीता 6.26 के अनुसार अपनी श्वास को नियंत्रित कर चंचल मन को शांत करें।",
    pacerStart: "60-सेकंड रीसेट प्रारंभ करें",
    pacerReset: "पुनः प्रारंभ",
    pacerInhale: "धीरे-धीरे श्वास अंदर लें",
    pacerHold: "चेतना के साथ श्वास रोकें (स्थिरता)",
    pacerExhale: "धीरे-धीरे श्वास छोड़ें (तनाव मुक्ति)",

    pillarsBadge: "दैनिक दिनचर्या वास्तुकला",
    pillarsTitle: "गीता आपके 24 घंटों को कैसे व्यवस्थित करती है",
    pillarsSubtitle: "आध्यात्मिक ज्ञान केवल सप्ताहांत के लिए नहीं है। यह आपके जागने, कार्य करने, संबंधों को निभाने और सोने का विधान है।",
    morningTitle: "प्रातःकालीन संकल्प (07:00)",
    morningDesc: "मोबाइल या सोशल मीडिया देखने से पहले अध्याय 6 की शांति से आंतरिक चेतना को स्थिर करें।",
    workTitle: "कार्यस्थल पर कर्मयोग (11:00)",
    workDesc: "गीता 2.47: पदोन्नति या प्रशंसा की चिंता किए बिना अपने कर्तव्य में 100% कुशलता लगाएं।",
    eveningTitle: "संध्याकालीन मर्यादा (19:00)",
    eveningDesc: "गीता 12.15: कार्यस्थल की राजनीति या क्रोध को परिवार की मेज पर मत लाएं।",
    nightTitle: "रात्रि महासागर समर्पण (23:00)",
    nightDesc: "गीता 2.70: सभी विचारों और अधूरे कार्यों को ईश्वर की कृपा में समर्पित कर शांत निद्रा लें।",

    explorerTitle: "श्लोक अन्वेषण एवं व्याख्याएँ",
    explorerSubtitle: "संस्कृत श्लोक, प्रामाणिक हिंदी व तेलुगु टीका, पदच्छेद और दैनिक जीवन में उनका प्रयोग।",
    searchPlaceholder: "श्लोक, शब्द या संख्या खोजें (उदा: 2-47)...",
    selectChapter: "अध्याय चुनें (1 से 18)",
    showingVerses: "प्रामाणिक भाष्यों से युक्त श्लोक",
    scriptLabel: "लिपि:",
    translationLabel: "अनुवाद:",
    wordMeanings: "पदच्छेद एवं अन्वयार्थ देखें",
    hideWordMeanings: "पदच्छेद छिपाएँ",
    practicalLayers: "5-स्तरीय व्यावहारिक तत्व",
    layerSpiritual: "आध्यात्मिक तत्व",
    layerMind: "मन और शांति",
    layerWork: "कार्य और कर्तव्य",
    layerFamily: "परिवार और संबंध",
    layerAction: "व्यावहारिक साधना",

    footerDesc: "गीता प्रेस गोरखपुर, श्री शांकर भाष्य, टीटीडी आदि प्रामाणिक प्राचीन ग्रंथों पर आधारित दिव्य मंच।",
    footerRights: "सर्वाधिकार सुरक्षित। भगवान श्रीकृष्ण के चरण कमलों में समर्पित।"
  }
};

interface LanguageContextType {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  t: UIContent;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: UI_DICTIONARY.en
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<AppLanguage>('en');

  // Load saved preference from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gitasaarthi_lang') as AppLanguage;
      if (saved && (saved === 'en' || saved === 'te' || saved === 'hi')) {
        setLanguageState(saved);
      }
    }
  }, []);

  const setLanguage = (lang: AppLanguage) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('gitasaarthi_lang', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: UI_DICTIONARY[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
