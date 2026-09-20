export type LanguageCode = 'en' | 'te' | 'hi' | 'sa';

export interface LifeLayer {
  spiritualEssence: string;
  mindAndPeace: string;
  workAndDuty: string;
  familyAndRelations: string;
  practicalAction: string;
}

export interface WordMeaning {
  sanskrit: string;
  transliteration: string;
  meaningEn?: string;
  meaningTe?: string;
  meaning?: string;
  grammarRole?: string;
  root?: string;
}

export interface Shloka {
  id: string; // e.g. "2-47"
  chapterNumber: number;
  verseNumber: number;
  chapterNameEn: string;
  chapterNameTe: string;
  shlokaSanskrit: string;
  shlokaTelugu: string;
  transliteration: string;
  wordMeanings: WordMeaning[];
  translationEn: string;
  simpleExplanationEn?: string;
  translationTe: string; // Classical formal translation
  simpleExplanationTe?: string; // Conversational Telugu for modern life
  translationHi: string;
  lifeLayers: LifeLayer;
  youtubeId?: string;
  audioChantingUrl?: string;
  situations: string[];
}

export interface Chapter {
  number: number;
  nameSanskrit: string;
  nameTransliteration: string;
  nameEnglish: string;
  nameTelugu: string;
  verseCount: number;
  summaryEn: string;
  summaryTe: string;
  yogaTheme: string;
}

export interface LifeSituation {
  id: string;
  titleEn: string;
  titleTe: string;
  icon: string;
  descriptionEn: string;
  shlokaIds: string[];
}

export interface PracticeStep {
  step: number;
  titleEn: string;
  titleTe: string;
  instructionEn: string;
  instructionTe: string;
}

export interface MicroPractice {
  id: string;
  titleEn: string;
  titleTe: string;
  durationSeconds: number;
  category: 'BREATH' | 'COGNITIVE_REFRAME' | 'MICRO_JOURNAL' | 'SURRENDER';
  difficulty: 'BEGINNER' | 'INTERMEDIATE';
  whyRecommendedEn: string;
  whyRecommendedTe: string;
  steps: PracticeStep[];
}

export interface CanonicalSituation {
  id: string;
  category: 'work' | 'anxiety' | 'relationships' | 'habits' | 'crisis';
  titleEn: string;
  titleTe: string;
  tagline: string;
  symptomModernEn: string;
  symptomModernTe: string;
  krishnaDiagnosisEn: string;
  krishnaDiagnosisTe: string;
  anchorShlokaId: string;
  shlokaChapterVerse: string;
  shlokaSanskrit: string;
  shlokaTelugu: string;
  transliteration: string;
  translationEn: string;
  simpleExplanationEn: string;
  translationTe: string; // Classical
  simpleExplanationTe: string; // Accessible modern Telugu
  // Mandatory Explainability: Why this shloka resolves this specific life problem
  whyThisShlokaEn: string;
  whyThisShlokaTe: string;
  corePrinciple: string;
  words: WordMeaning[];
  practice: MicroPractice;
}
