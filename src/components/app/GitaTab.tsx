'use client';

import React, { useState } from 'react';
import { GITA_CHAPTERS } from '../../data/chapters';
import { FEATURED_SHLOKAS } from '../../data/shlokas';
import ShlokaCard from '../ShlokaCard';
import { BookOpen, Search, Sparkles } from 'lucide-react';

export default function GitaTab() {
  const [selectedChapter, setSelectedChapter] = useState<number>(2);
  const [searchQuery, setSearchQuery] = useState('');

  const currentChapter = GITA_CHAPTERS.find((c) => c.number === selectedChapter) || GITA_CHAPTERS[1];
  const chapterShlokas = FEATURED_SHLOKAS.filter((s) => s.chapterNumber === selectedChapter);

  return (
    <div className="space-y-6 pb-28 pt-2">
      <div>
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#853F00] block mb-0.5">
          Sacred Wisdom Vault
        </span>
        <h1 className="text-xl font-extrabold text-[#1E1B18]">
          18 Yogas &amp; Shlokas
        </h1>
        <p className="text-xs text-[#50453D] mt-1">
          Explore verses with video commentary, audio chanting, and word-by-word Sanskrit meaning.
        </p>
      </div>

      {/* Chapter Selector */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {GITA_CHAPTERS.map((ch) => {
          const isSelected = selectedChapter === ch.number;
          return (
            <button
              key={ch.number}
              onClick={() => setSelectedChapter(ch.number)}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                isSelected
                  ? 'bg-[#1E1B18] text-white shadow-md'
                  : 'bg-white border border-[#E7E3DD] text-[#50453D] hover:bg-[#FAF8F5]'
              }`}
            >
              <span className="opacity-70 font-mono">Ch.{ch.number}</span>
              <span>{ch.nameEnglish.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Chapter Summary Banner */}
      <div className="bg-white rounded-3xl p-5 border border-[#E7E3DD] shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#853F00] text-[10px] font-bold">
            Chapter {currentChapter.number} • {currentChapter.verseCount} Verses
          </span>
          <span className="text-xs font-serif font-bold text-[#D97706]">{currentChapter.nameSanskrit}</span>
        </div>

        <h2 className="text-base font-bold text-[#1E1B18]">
          {currentChapter.nameEnglish} ({currentChapter.nameTelugu})
        </h2>

        <p className="text-xs text-[#50453D] leading-relaxed">
          {currentChapter.summaryEn}
        </p>

        <div className="text-[11px] text-[#853F00] font-medium pt-1 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
          <span>Theme: {currentChapter.yogaTheme}</span>
        </div>
      </div>

      {/* Shlokas */}
      <div className="space-y-4">
        {chapterShlokas.length > 0 ? (
          chapterShlokas.map((shloka) => <ShlokaCard key={shloka.id} shloka={shloka} />)
        ) : (
          <div className="bg-white rounded-3xl p-8 text-center border border-[#E7E3DD] space-y-2">
            <BookOpen className="w-8 h-8 text-[#D97706] mx-auto opacity-70" />
            <h3 className="text-sm font-bold text-[#1E1B18]">More Verses Syncing</h3>
            <p className="text-xs text-[#50453D]">
              Try Chapter 2, 6, 9, 12, or 18 for full interactive video shlokas.
            </p>
            <button
              onClick={() => setSelectedChapter(2)}
              className="px-4 py-1.5 rounded-xl bg-[#D97706] text-white text-xs font-bold"
            >
              Go to Chapter 2
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
