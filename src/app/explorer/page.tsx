'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ShlokaCard from '../../components/ShlokaCard';
import { GITA_CHAPTERS } from '../../data/chapters';
import { FEATURED_SHLOKAS } from '../../data/shlokas';
import { BookOpen, Search, ArrowLeft, Filter, Sparkles } from 'lucide-react';

function ExplorerContent() {
  const searchParams = useSearchParams();
  const initialChapter = Number(searchParams?.get('chapter')) || 2;

  const [selectedChapter, setSelectedChapter] = useState<number>(initialChapter);
  const [searchQuery, setSearchQuery] = useState('');

  const currentChapter = GITA_CHAPTERS.find((c) => c.number === selectedChapter) || GITA_CHAPTERS[1];

  const filteredShlokas = useMemo(() => {
    return FEATURED_SHLOKAS.filter((s) => {
      const matchChapter = s.chapterNumber === selectedChapter;
      const matchQuery =
        !searchQuery ||
        s.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.translationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.translationTe.includes(searchQuery) ||
        s.shlokaSanskrit.includes(searchQuery);

      return matchChapter && matchQuery;
    });
  }, [selectedChapter, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 w-full">
        {/* Top Breadcrumb & Title */}
        <div className="space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#853F00] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight">
                Shloka Explorer &amp; Video Commentaries
              </h1>
              <p className="text-xs sm:text-sm text-[#50453D] mt-1">
                Explore Sanskrit shlokas, Telugu verses, word-by-word anvaya, and practical life applications.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#82756B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search verse or keyword..."
                className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-[#E7E3DD] bg-white text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              />
            </div>
          </div>
        </div>

        {/* 18 Chapters Horizontal Scrollable Picker */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#853F00] block">
            Select Chapter (1 to 18)
          </span>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {GITA_CHAPTERS.map((ch) => {
              const isSelected = selectedChapter === ch.number;
              return (
                <button
                  key={ch.number}
                  onClick={() => setSelectedChapter(ch.number)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
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
        </div>

        {/* Active Chapter Summary Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E3DD] shadow-sm space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#853F00] text-xs font-bold">
                Chapter {currentChapter.number} of 18
              </span>
              <span className="text-xs font-bold text-[#82756B]">{currentChapter.verseCount} Total Verses</span>
            </div>
            <span className="text-sm font-serif font-bold text-[#D97706]">{currentChapter.nameSanskrit}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B18]">
            {currentChapter.nameEnglish} ({currentChapter.nameTelugu})
          </h2>

          <p className="text-xs sm:text-sm text-[#50453D] leading-relaxed max-w-3xl">
            {currentChapter.summaryEn}
          </p>

          <div className="pt-2 text-xs text-[#853F00] font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Theme: {currentChapter.yogaTheme}</span>
          </div>
        </div>

        {/* Shlokas List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#1E1B18]">
              Verses with Video &amp; 6-Layer Life Wisdom
            </h3>
            <span className="text-xs text-[#82756B] font-medium">
              Showing {filteredShlokas.length} Verse{filteredShlokas.length === 1 ? '' : 's'}
            </span>
          </div>

          {filteredShlokas.length > 0 ? (
            filteredShlokas.map((shloka) => <ShlokaCard key={shloka.id} shloka={shloka} />)
          ) : (
            <div className="bg-white rounded-3xl p-10 text-center border border-[#E7E3DD] space-y-3">
              <BookOpen className="w-12 h-12 text-[#D97706] mx-auto opacity-70" />
              <h4 className="text-base font-bold text-[#1E1B18]">More Verses Syncing</h4>
              <p className="text-xs text-[#50453D] max-w-md mx-auto">
                Chapter {currentChapter.number} is actively being expanded with video commentaries. Try Chapter 2, 6, 9, 12, or 18 for featured interactive verses.
              </p>
              <button
                onClick={() => setSelectedChapter(2)}
                className="px-4 py-2 rounded-xl bg-[#D97706] text-white text-xs font-bold hover:bg-[#B45309]"
              >
                Go to Chapter 2 (Sāṅkhya Yoga)
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ExplorerPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm">Loading Gita Explorer...</div>}>
      <ExplorerContent />
    </Suspense>
  );
}
