'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, Sparkles, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import VideoPlayerModal from './VideoPlayerModal';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onReplayWelcome?: () => void;
}

export default function Hero({ onReplayWelcome }: HeroProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F1ECE5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#853F00] text-xs font-bold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E1B18] tracking-tight leading-[1.15]">
            {t.heroTitlePrefix}{' '}
            <span className="bg-gradient-to-r from-[#D97706] to-[#B45309] bg-clip-text text-transparent">
              {t.heroTitleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#50453D] max-w-2xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/explorer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm shadow-lg shadow-amber-900/15 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t.heroExploreBtn}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white border border-[#E7E3DD] hover:bg-[#FAF8F5] text-[#1E1B18] font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-[#FEF3C7] text-[#853F00] flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>{t.heroVideoBtn}</span>
            </button>

            {onReplayWelcome && (
              <button
                onClick={onReplayWelcome}
                className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] hover:bg-[#FDE68A] text-[#853F00] font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                title="Watch the Welcome Screen again"
              >
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                <span>{t.heroReplaySplash}</span>
              </button>
            )}
          </div>

          {/* Key Value Points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#50453D]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#0F5132]" /> {t.heroFeature1}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#0F5132]" /> {t.heroFeature2}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#0F5132]" /> {t.heroFeature3}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#0F5132]" /> {t.heroFeature4}
            </span>
          </div>
        </div>

        {/* Video Showcase Frame */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-3 bg-gradient-to-b from-[#FAF8F5] to-[#E7E3DD] border border-[#E7E3DD] shadow-2xl">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden bg-[#1E1B18] flex items-center justify-center group cursor-pointer"
              onClick={() => setVideoModalOpen(true)}
            >
              <img
                src="https://img.youtube.com/vi/zSo4UKr3TJE/maxresdefault.jpg"
                alt="GitaSaarthi Trailer"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#D97706] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#B45309] transition-all">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        youtubeId="zSo4UKr3TJE"
        title="GitaSaarthi • Video Overview"
      />
    </section>
  );
}
