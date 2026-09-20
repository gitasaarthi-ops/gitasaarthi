'use client';

import React, { useState } from 'react';
import { Shloka, LanguageCode } from '../types/gita';
import { Play, Volume2, Sparkles, BookOpen, ChevronDown, ChevronUp, Video, Layers, Brain, Briefcase, Heart, Flame } from 'lucide-react';
import VideoPlayerModal from './VideoPlayerModal';

interface ShlokaCardProps {
  shloka: Shloka;
  initiallyExpanded?: boolean;
}

export default function ShlokaCard({ shloka, initiallyExpanded = false }: ShlokaCardProps) {
  const [script, setScript] = useState<'sa' | 'te' | 'en'>('sa');
  const [transLang, setTransLang] = useState<'en' | 'te' | 'hi'>('en');
  const [activeLayer, setActiveLayer] = useState<'spiritual' | 'mind' | 'work' | 'family' | 'action'>('mind');
  const [showWords, setShowWords] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Web Speech API for recitation
  const handlePlayAudio = () => {
    if (typeof window === 'undefined') return;
    window.speechSynthesis.cancel();

    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      return;
    }

    const textToRead = script === 'te' 
      ? shloka.shlokaTelugu 
      : script === 'en' 
      ? shloka.transliteration 
      : shloka.shlokaSanskrit;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.lang = script === 'te' ? 'te-IN' : 'hi-IN';

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    setIsPlayingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E7E3DD] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow space-y-6">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E7E3DD]">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#853F00] text-xs font-bold border border-[#FDE68A]">
            Chapter {shloka.chapterNumber} • Verse {shloka.verseNumber}
          </span>
          <span className="text-xs font-semibold text-[#50453D]">
            {shloka.chapterNameEn} ({shloka.chapterNameTe})
          </span>
        </div>

        <div className="flex items-center gap-2">
          {shloka.youtubeId && (
            <button
              onClick={() => setVideoModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-[#D97706]/10 hover:bg-[#D97706]/20 text-[#D97706] text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Video Lesson</span>
            </button>
          )}

          <button
            onClick={handlePlayAudio}
            className={`p-2 rounded-xl transition-colors ${
              isPlayingAudio ? 'bg-[#D97706] text-white' : 'bg-[#FAF8F5] hover:bg-[#F1ECE5] text-[#50453D]'
            }`}
            title="Listen to Sanskrit Chanting"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Shloka Sacred Script Display */}
      <div className="space-y-3">
        {/* Script Selection Toggle */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-[#82756B] font-medium mr-1">Script:</span>
          <button
            onClick={() => setScript('sa')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              script === 'sa' ? 'bg-[#1E1B18] text-white' : 'bg-[#FAF8F5] text-[#50453D] hover:bg-[#E7E3DD]'
            }`}
          >
            संस्कृतम्
          </button>
          <button
            onClick={() => setScript('te')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              script === 'te' ? 'bg-[#1E1B18] text-white' : 'bg-[#FAF8F5] text-[#50453D] hover:bg-[#E7E3DD]'
            }`}
          >
            తెలుగు
          </button>
          <button
            onClick={() => setScript('en')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              script === 'en' ? 'bg-[#1E1B18] text-white' : 'bg-[#FAF8F5] text-[#50453D] hover:bg-[#E7E3DD]'
            }`}
          >
            English Transliteration
          </button>
        </div>

        {/* Shloka Sacred Verse Box */}
        <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#E7E3DD] text-center">
          <p className="text-lg sm:text-xl font-bold text-[#1E1B18] leading-relaxed whitespace-pre-line tracking-wide">
            {script === 'sa' && shloka.shlokaSanskrit}
            {script === 'te' && shloka.shlokaTelugu}
            {script === 'en' && shloka.transliteration}
          </p>

          {script !== 'en' && (
            <p className="mt-3 text-xs text-[#82756B] font-serif italic">
              {shloka.transliteration}
            </p>
          )}
        </div>
      </div>

      {/* Word-by-Word Anvaya Drawer */}
      <div className="border border-[#E7E3DD] rounded-2xl overflow-hidden">
        <button
          onClick={() => setShowWords(!showWords)}
          className="w-full px-4 py-3 bg-white hover:bg-[#FAF8F5] text-xs font-bold text-[#50453D] flex items-center justify-between transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#D97706]" />
            Word-by-Word Meaning ({shloka.wordMeanings.length} Words)
          </span>
          {showWords ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showWords && (
          <div className="p-4 bg-[#FAF8F5] border-t border-[#E7E3DD] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
            {shloka.wordMeanings.map((w, idx) => (
              <div key={idx} className="bg-white p-2.5 rounded-xl border border-[#E7E3DD]">
                <div className="font-bold text-[#1E1B18]">{w.sanskrit} ({w.transliteration})</div>
                <div className="text-[#853F00] mt-0.5">
                  {w.meaningTe ? `${w.meaningTe} • ${w.meaningEn || w.meaning || ''}` : (w.meaningEn || w.meaning)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Multi-lingual Translation */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#82756B] uppercase tracking-wider">
            Translation
          </span>
          <div className="flex items-center gap-1 text-xs">
            <button
              onClick={() => setTransLang('en')}
              className={`px-2 py-0.5 rounded-md font-bold ${
                transLang === 'en' ? 'bg-[#D97706] text-white' : 'text-[#50453D] hover:bg-[#F1ECE5]'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setTransLang('te')}
              className={`px-2 py-0.5 rounded-md font-bold ${
                transLang === 'te' ? 'bg-[#D97706] text-white' : 'text-[#50453D] hover:bg-[#F1ECE5]'
              }`}
            >
              తెలుగు
            </button>
            <button
              onClick={() => setTransLang('hi')}
              className={`px-2 py-0.5 rounded-md font-bold ${
                transLang === 'hi' ? 'bg-[#D97706] text-white' : 'text-[#50453D] hover:bg-[#F1ECE5]'
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#1E1B18] font-medium leading-relaxed bg-[#FEF3C7]/40 p-4 rounded-2xl border border-[#FDE68A]/60">
          {transLang === 'en' && shloka.translationEn}
          {transLang === 'te' && shloka.translationTe}
          {transLang === 'hi' && shloka.translationHi}
        </p>
      </div>

      {/* 5-Layer Life Application (BGFA Secret Sauce) */}
      <div className="pt-2 space-y-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#D97706]" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
            Practical Life Application (6 Layers)
          </h4>
        </div>

        {/* Layer Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveLayer('mind')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeLayer === 'mind'
                ? 'bg-[#1E1B18] text-white shadow-sm'
                : 'bg-[#FAF8F5] text-[#50453D] border border-[#E7E3DD] hover:bg-[#F1ECE5]'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Mind &amp; Stress</span>
          </button>

          <button
            onClick={() => setActiveLayer('work')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeLayer === 'work'
                ? 'bg-[#1E1B18] text-white shadow-sm'
                : 'bg-[#FAF8F5] text-[#50453D] border border-[#E7E3DD] hover:bg-[#F1ECE5]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work &amp; Duty</span>
          </button>

          <button
            onClick={() => setActiveLayer('family')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeLayer === 'family'
                ? 'bg-[#1E1B18] text-white shadow-sm'
                : 'bg-[#FAF8F5] text-[#50453D] border border-[#E7E3DD] hover:bg-[#F1ECE5]'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Family &amp; Relationships</span>
          </button>

          <button
            onClick={() => setActiveLayer('spiritual')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeLayer === 'spiritual'
                ? 'bg-[#1E1B18] text-white shadow-sm'
                : 'bg-[#FAF8F5] text-[#50453D] border border-[#E7E3DD] hover:bg-[#F1ECE5]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Spiritual Essence</span>
          </button>

          <button
            onClick={() => setActiveLayer('action')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeLayer === 'action'
                ? 'bg-[#D97706] text-white shadow-sm'
                : 'bg-[#FEF3C7] text-[#853F00] border border-[#FDE68A] hover:bg-[#FDE68A]'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Today&apos;s Action</span>
          </button>
        </div>

        {/* Layer Content Card */}
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E3DD] text-xs text-[#50453D] leading-relaxed">
          {activeLayer === 'mind' && (
            <div>
              <strong className="text-[#1E1B18] flex items-center gap-1.5 mb-1">
                <Brain className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Mind &amp; Inner Peace Lesson:</span>
              </strong>
              <p>{shloka.lifeLayers.mindAndPeace}</p>
            </div>
          )}
          {activeLayer === 'work' && (
            <div>
              <strong className="text-[#1E1B18] flex items-center gap-1.5 mb-1">
                <Briefcase className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Work, Career &amp; Action Lesson:</span>
              </strong>
              <p>{shloka.lifeLayers.workAndDuty}</p>
            </div>
          )}
          {activeLayer === 'family' && (
            <div>
              <strong className="text-[#1E1B18] flex items-center gap-1.5 mb-1">
                <Heart className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Family &amp; Relationships Lesson:</span>
              </strong>
              <p>{shloka.lifeLayers.familyAndRelations}</p>
            </div>
          )}
          {activeLayer === 'spiritual' && (
            <div>
              <strong className="text-[#1E1B18] flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Spiritual Core Essence:</span>
              </strong>
              <p>{shloka.lifeLayers.spiritualEssence}</p>
            </div>
          )}
          {activeLayer === 'action' && (
            <div className="text-[#853F00] font-medium">
              <strong className="text-[#1E1B18] flex items-center gap-1.5 mb-1">
                <Flame className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Today&apos;s Micro-Action to Practice:</span>
              </strong>
              <p>{shloka.lifeLayers.practicalAction}</p>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {shloka.youtubeId && (
        <VideoPlayerModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
          youtubeId={shloka.youtubeId}
          title={`Chapter ${shloka.chapterNumber}, Verse ${shloka.verseNumber} • Video Commentary`}
        />
      )}
    </div>
  );
}
