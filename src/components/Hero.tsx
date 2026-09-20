'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, Sparkles, BookOpen, CheckCircle, ArrowRight, Video } from 'lucide-react';
import VideoPlayerModal from './VideoPlayerModal';

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F1ECE5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#853F00] text-xs font-bold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>World&apos;s First Video-Based Bhagavad Gita • 700+ Video Explanations</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E1B18] tracking-tight leading-[1.15]">
            Transform Your Life with{' '}
            <span className="bg-gradient-to-r from-[#D97706] to-[#B45309] bg-clip-text text-transparent">
              Bhagavad Gita For All
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#50453D] max-w-2xl mx-auto leading-relaxed">
            Over 5,000 years ago, Lord Krishna guided Arjuna out of despair on Kurukshetra. 
            Now reimagined as interactive video commentaries, Sanskrit chanting, and 6 layers of actionable 
            wisdom for modern stress, career, and relationships.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/explorer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm shadow-lg shadow-amber-900/15 transition-all flex items-center justify-center gap-2 group"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore 18 Chapters & Shlokas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white border border-[#E7E3DD] hover:bg-[#FAF8F5] text-[#1E1B18] font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-full bg-[#FEF3C7] text-[#853F00] flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>See How It Works (Video)</span>
            </button>
          </div>

          {/* Key Value Points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#50453D]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#0F5132]" /> 6-Layer Life Lessons
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#0F5132]" /> Word-by-Word Sanskrit Breakdown
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#0F5132]" /> English &amp; Telugu Translations
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#0F5132]" /> Interactive Book + App Experience
            </span>
          </div>
        </div>

        {/* Video Showcase Frame */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-3 bg-gradient-to-b from-[#FAF8F5] to-[#E7E3DD] border border-[#E7E3DD] shadow-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#1E1B18] flex items-center justify-center group cursor-pointer"
                 onClick={() => setVideoModalOpen(true)}>
              {/* Background Video Thumbnail */}
              <img
                src="https://img.youtube.com/vi/zSo4UKr3TJE/maxresdefault.jpg"
                alt="Bhagavad Gita For All Trailer"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Pulsing Play Button */}
              <div className="absolute w-20 h-20 rounded-full bg-[#D97706]/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-amber-300">
                    Official Experience Trailer
                  </span>
                  <h3 className="text-lg font-bold sm:text-xl">
                    Discover How Krishna Speaks to Your Modern Challenges
                  </h3>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-xs font-semibold">
                  <Video className="w-3.5 h-3.5 text-amber-400" /> Watch Trailer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        youtubeId="zSo4UKr3TJE"
        title="Transform Your Life with Bhagavad Gita For All"
      />
    </section>
  );
}
