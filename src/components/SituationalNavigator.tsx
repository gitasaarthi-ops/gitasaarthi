'use client';

import React, { useState } from 'react';
import { LIFE_SITUATIONS } from '../data/situations';
import { FEATURED_SHLOKAS } from '../data/shlokas';
import ShlokaCard from './ShlokaCard';
import { Compass, Sparkles, Brain, Briefcase, Flame, TrendingUp, HeartHandshake, Shield } from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit: Brain,
  Briefcase: Briefcase,
  Flame: Flame,
  TrendingUp: TrendingUp,
  HeartHandshake: HeartHandshake,
  Shield: Shield
};

export default function SituationalNavigator() {
  const [selectedSituationId, setSelectedSituationId] = useState<string>('anxiety');

  const selectedSituation = LIFE_SITUATIONS.find((s) => s.id === selectedSituationId) || LIFE_SITUATIONS[0];
  const matchedShlokas = FEATURED_SHLOKAS.filter((s) => selectedSituation.shlokaIds.includes(s.id));

  return (
    <section id="situations" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#853F00] text-xs font-bold border border-[#FDE68A]">
            <Compass className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Gita for Modern Life</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight">
            What is Troubling Your Heart Today?
          </h2>
          <p className="text-sm sm:text-base text-[#50453D]">
            Lord Krishna did not speak to a monk in the forest; He spoke to an exhausted warrior facing moral crisis. 
            Choose your current situation to receive timeless counsel.
          </p>
        </div>

        {/* Situation Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {LIFE_SITUATIONS.map((sit) => {
            const isSelected = selectedSituationId === sit.id;
            const Icon = ICON_MAP[sit.icon] || Sparkles;

            return (
              <button
                key={sit.id}
                onClick={() => setSelectedSituationId(sit.id)}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FEF3C7] border-[#D97706] text-[#853F00] shadow-md ring-1 ring-[#D97706]'
                    : 'bg-white border-[#E7E3DD] hover:bg-[#FAF8F5] text-[#50453D]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-[#D97706] text-white' : 'bg-[#FAF8F5] text-[#853F00]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1E1B18] line-clamp-1">{sit.titleEn}</div>
                  <div className="text-[10px] text-[#78350F] mt-0.5">{sit.titleTe}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Context Callout */}
        <div className="bg-white rounded-3xl p-6 border border-[#E7E3DD] shadow-sm max-w-4xl mx-auto flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#853F00] flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-[#D97706]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#1E1B18]">
              Krishna&apos;s Wisdom for {selectedSituation.titleEn}
            </h3>
            <p className="text-xs sm:text-sm text-[#50453D] mt-1 leading-relaxed">
              {selectedSituation.descriptionEn}
            </p>
          </div>
        </div>

        {/* Matched Shlokas Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {matchedShlokas.map((shloka) => (
            <ShlokaCard key={shloka.id} shloka={shloka} />
          ))}
        </div>
      </div>
    </section>
  );
}
