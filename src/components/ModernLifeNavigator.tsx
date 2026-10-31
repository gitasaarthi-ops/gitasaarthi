'use client';

import React, { useState } from 'react';
import { MODERN_LIFE_CHALLENGES, LifeChallenge } from '../data/lifeChallenges';
import { Brain, Briefcase, Smartphone, HeartHandshake, Compass, CheckCircle2, ArrowRight, Sparkles, Shield, Flame } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const CATEGORY_ICONS = {
  anxiety: Brain,
  career: Briefcase,
  habits: Smartphone,
  relationships: HeartHandshake,
  purpose: Compass
};

export default function ModernLifeNavigator() {
  const [activeChallengeId, setActiveChallengeId] = useState<string>(MODERN_LIFE_CHALLENGES[0].id);
  const { language, t } = useLanguage();

  const activeChallenge = MODERN_LIFE_CHALLENGES.find((c) => c.id === activeChallengeId) || MODERN_LIFE_CHALLENGES[0];
  const Icon = CATEGORY_ICONS[activeChallenge.category] || Sparkles;

  const challengeTitle = language === 'te' ? activeChallenge.titleTe : activeChallenge.title;

  return (
    <section id="situations" className="py-16 sm:py-24 bg-white border-y border-[#E7E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] text-[#853F00] text-xs font-bold border border-[#FDE68A]">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>{t.navigatorBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1B18] tracking-tight leading-tight">
            {t.navigatorTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#50453D] leading-relaxed">
            {t.navigatorSubtitle}
          </p>
        </div>

        {/* Challenge Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {MODERN_LIFE_CHALLENGES.map((challenge) => {
            const isSelected = activeChallengeId === challenge.id;
            const TabIcon = CATEGORY_ICONS[challenge.category] || Sparkles;
            const tabTitle = language === 'te' ? challenge.titleTe : challenge.title;

            return (
              <button
                key={challenge.id}
                onClick={() => setActiveChallengeId(challenge.id)}
                className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1E1B18] text-white shadow-lg ring-2 ring-[#D97706]'
                    : 'bg-[#FAF8F5] text-[#50453D] border border-[#E7E3DD] hover:bg-[#F1ECE5]'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-[#78350F]'}`} />
                <span>{tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Challenge Breakdown Card */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#E7E3DD] shadow-sm max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E3DD]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#853F00] block mb-1">
                {language === 'te' ? activeChallenge.title : activeChallenge.titleTe}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B18]">
                {challengeTitle}
              </h3>
              <p className="text-sm text-[#78350F] font-medium mt-1">
                {activeChallenge.tagline}
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#FEF3C7] text-[#853F00] border border-[#FDE68A] text-xs font-bold font-mono self-start sm:self-center">
              {activeChallenge.shlokaChapterVerse}
            </div>
          </div>

          {/* 3-Column Diagnostic Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: The Modern Symptom */}
            <div className="bg-white p-5 rounded-2xl border border-[#E7E3DD] space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block">
                {t.modernSymptom}
              </span>
              <p className="text-xs text-[#50453D] leading-relaxed">
                {activeChallenge.modernSymptom}
              </p>
            </div>

            {/* Column 2: Why Modern Society Triggers This */}
            <div className="bg-white p-5 rounded-2xl border border-[#E7E3DD] space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                {t.whyThisShloka}
              </span>
              <p className="text-xs text-[#50453D] leading-relaxed">
                {activeChallenge.whyModernLifeCausesThis}
              </p>
            </div>

            {/* Column 3: Krishna's Psychological Diagnosis */}
            <div className="bg-[#FEF3C7]/50 p-5 rounded-2xl border border-[#FDE68A] space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#853F00] block">
                {t.krishnaDiagnosis}
              </span>
              <p className="text-xs text-[#1E1B18] font-medium leading-relaxed">
                {activeChallenge.krishnasDiagnosis}
              </p>
            </div>
          </div>

          {/* Shloka Prescription Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D97706]/40 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#853F00] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                {t.corePrinciple}
              </span>
              <span className="text-xs text-[#82756B]">
                {language === 'te' ? 'సంస్కృత & తెలుగు ప్రమాణము' : 'Sanskrit & Classical Scripture'}
              </span>
            </div>

            <p className="text-base sm:text-lg font-bold text-[#1E1B18] leading-relaxed whitespace-pre-line text-center bg-[#FAF8F5] p-4 rounded-xl border border-[#E7E3DD]">
              {language === 'te' ? activeChallenge.shlokaTelugu : activeChallenge.shlokaSanskrit}
            </p>

            <div className="p-4 rounded-xl bg-[#FEF3C7]/60 border border-[#FDE68A] text-center">
              <span className="text-xs text-[#853F00] font-bold block mb-1">{t.corePrinciple}:</span>
              <p className="text-sm font-bold text-[#1E1B18]">
                &ldquo;{activeChallenge.corePrinciple}&rdquo;
              </p>
            </div>
          </div>

          {/* 3-Step Action Plan */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1B18] flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#D97706]" />
              {t.actionPlan}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeChallenge.threeStepActionPlan.map((step, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-[#E7E3DD] flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0F5132] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-[#50453D] leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Link to Full Shloka Breakdown */}
          <div className="pt-2 flex justify-end">
            <Link
              href={`/explorer?chapter=${activeChallenge.shlokaChapterVerse.split(' ')[1]}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#D97706] hover:text-[#B45309] transition-colors"
            >
              <span>{t.explorerTitle} &rarr;</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
