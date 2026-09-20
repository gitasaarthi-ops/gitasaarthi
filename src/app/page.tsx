'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ModernLifeNavigator from '../components/ModernLifeNavigator';
import MindResetPacer from '../components/MindResetPacer';
import BookCompanionShowcase from '../components/BookCompanionShowcase';
import ReaderReviews from '../components/ReaderReviews';
import Footer from '../components/Footer';
import { GITA_CHAPTERS } from '../data/chapters';
import { BookOpen, Sparkles, ArrowRight, Heart, Brain, Briefcase, Smile } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Showcase */}
        <Hero />

        {/* 2. Modern Life Operating System (Our Primary Mission) */}
        <ModernLifeNavigator />

        {/* 3. Interactive 60-Second Mind Reset & Nervous System Calmer */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-[#E7E3DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Instant Mental First-Aid
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B18] mt-1">
                Feeling Overwhelmed Right Now?
              </h2>
            </div>

            <MindResetPacer />
          </div>
        </section>

        {/* 4. The 4 Daily Life Management Pillars */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#853F00]">
                Daily Routine Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E1B18]">
                How Gita Helps You Manage Every 24 Hours
              </h2>
              <p className="text-sm text-[#50453D]">
                Spiritual wisdom is not a weekend event. It is a system for how you wake up, work, and sleep.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-6 rounded-3xl border border-[#E7E3DD] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FEF3C7] text-[#853F00] flex items-center justify-center font-bold text-sm">
                  07:00
                </div>
                <h3 className="text-base font-bold text-[#1E1B18]">Morning Intention</h3>
                <p className="text-xs text-[#50453D] leading-relaxed">
                  Start the day with Chapter 6 clarity before opening social media. Anchor in inner silence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#E7E3DD] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#DCFCE7] text-[#0F5132] flex items-center justify-center font-bold text-sm">
                  11:00
                </div>
                <h3 className="text-base font-bold text-[#1E1B18]">Karma Yoga at Work</h3>
                <p className="text-xs text-[#50453D] leading-relaxed">
                  Gita 2.47 flow state: Give 100% effort to your code, presentation, or surgery without panic over praise or blame.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#E7E3DD] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FEF3C7] text-[#853F00] flex items-center justify-center font-bold text-sm">
                  19:00
                </div>
                <h3 className="text-base font-bold text-[#1E1B18]">Evening Boundary</h3>
                <p className="text-xs text-[#50453D] leading-relaxed">
                  Gita 12.15 composure: Do not bring office fury or corporate politics to the dinner table with your family.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#E7E3DD] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#DCFCE7] text-[#0F5132] flex items-center justify-center font-bold text-sm">
                  23:00
                </div>
                <h3 className="text-base font-bold text-[#1E1B18]">Night Ocean Surrender</h3>
                <p className="text-xs text-[#50453D] leading-relaxed">
                  Gita 2.70 unshakeable ocean: All thoughts and unfinished tasks merge into quiet sleep. You are held in divine care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Physical Book + App QR Showcase */}
        <BookCompanionShowcase />

        {/* 6. Complete 18 Chapters Directory Preview */}
        <section id="chapters" className="py-16 sm:py-24 bg-white border-t border-[#E7E3DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 max-w-4xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#853F00] block mb-1">
                  Complete Wisdom Vault
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight">
                  The Complete 18 Chapters Directory
                </h2>
                <p className="text-sm text-[#50453D] mt-1">
                  700 sacred verses organized into 18 transformative disciplines for the modern mind.
                </p>
              </div>

              <Link
                href="/explorer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E3DD] text-[#853F00] hover:bg-[#FEF3C7] text-xs font-bold transition-colors shrink-0"
              >
                <span>Browse All Shlokas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Chapters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GITA_CHAPTERS.map((ch) => (
                <Link
                  key={ch.number}
                  href={`/explorer?chapter=${ch.number}`}
                  className="p-5 rounded-2xl border border-[#E7E3DD] bg-[#FAF8F5] hover:bg-white hover:border-[#D97706] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#FEF3C7] text-[#853F00] text-[10px] font-bold font-mono">
                        Chapter {ch.number} • {ch.verseCount} Verses
                      </span>
                      <span className="text-xs font-serif font-bold text-[#82756B] group-hover:text-[#D97706] transition-colors">
                        {ch.nameSanskrit}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#1E1B18] group-hover:text-[#D97706] transition-colors">
                      {ch.nameEnglish}
                    </h3>
                    <div className="text-xs text-[#78350F] font-medium">{ch.nameTelugu}</div>

                    <p className="text-xs text-[#50453D] line-clamp-2 leading-relaxed">
                      {ch.summaryEn}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#E7E3DD] flex items-center justify-between text-xs text-[#853F00] font-bold">
                    <span>Explore Verses</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Reader Reviews & Social Proof */}
        <ReaderReviews />
      </main>

      <Footer />
    </div>
  );
}
