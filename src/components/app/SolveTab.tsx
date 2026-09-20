'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CANONICAL_SITUATIONS } from '../../data/lifeChallenges';
import { 
  Briefcase, 
  Flame, 
  Compass, 
  Smartphone, 
  Heart, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  BookOpen
} from 'lucide-react';

const BATTLEFIELD_ICONS: Record<string, React.ElementType> = {
  'career-pressure': Briefcase,
  'anger-heated-conflict': Flame,
  'social-media-comparison': Smartphone,
  'racing-thoughts-overthinking': Compass,
  'grief-loss-heartbreak': Heart
};

export default function SolveTab() {
  const [selectedId, setSelectedId] = useState<string>(CANONICAL_SITUATIONS[0].id);
  const [isGrounded, setIsGrounded] = useState<boolean>(false);
  const [showDeepDive, setShowDeepDive] = useState<boolean>(false);

  const activeSituation = 
    CANONICAL_SITUATIONS.find((s) => s.id === selectedId) || 
    CANONICAL_SITUATIONS[0];

  const handleApply = () => {
    setIsGrounded(true);
    try {
      const existing = JSON.parse(localStorage.getItem('saarthi_moments') || '[]');
      existing.push({
        id: Date.now(),
        type: 'SOLVE_APPLIED',
        situationId: activeSituation.id,
        situationTitle: activeSituation.titleEn,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('saarthi_moments', JSON.stringify(existing));
      
      const returns = parseInt(localStorage.getItem('saarthi_consciousness_returns') || '0', 10);
      localStorage.setItem('saarthi_consciousness_returns', (returns + 1).toString());
    } catch {}

    setTimeout(() => {
      setIsGrounded(false);
    }, 2500);
  };

  return (
    <div className="space-y-6 pb-28 pt-1 max-w-md mx-auto">
      {/* Top Scannable Status Pill */}
      <div className="text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FEF3C7] text-[#853F00] text-[11px] font-bold border border-[#FDE68A] shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
          <span>Kurukshetra Engine • 3-Min Antidote</span>
        </div>
        <h1 className="text-2xl font-black text-[#1E1B18] mt-2 tracking-tight">
          What Is Troubling You?
        </h1>
        <p className="text-xs text-[#78350F] font-medium mt-0.5">
          Select your struggle to receive Sri Krishna&apos;s instant clarity.
        </p>
      </div>

      {/* Visual Battlefield Selector Grid (Inspired by Reference Cards) */}
      <div className="grid grid-cols-2 gap-2.5">
        {CANONICAL_SITUATIONS.map((sit) => {
          const isSelected = selectedId === sit.id;
          const Icon = BATTLEFIELD_ICONS[sit.id] || Sparkles;

          return (
            <motion.button
              key={sit.id}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                setSelectedId(sit.id);
                setIsGrounded(false);
                setShowDeepDive(false);
              }}
              className={`p-3.5 rounded-2xl text-center transition-all cursor-pointer border flex flex-col items-center justify-between min-h-[105px] ${
                isSelected
                  ? 'bg-amber-50/90 border-amber-500 ring-2 ring-amber-400/50 shadow-xs'
                  : 'bg-white border-[#E7E3DD] hover:bg-[#FAF8F5] text-[#50453D]'
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1.5 ${
                isSelected ? 'bg-[#853F00] text-white shadow-xs' : 'bg-[#FAF8F5] text-[#853F00]'
              }`}>
                <Icon className="w-4 h-4" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#1E1B18] leading-tight">
                  {sit.titleEn.split('&')[0]}
                </h3>
                <span className="text-[10px] text-[#853F00] font-medium block mt-0.5">
                  {sit.titleTe.split('&')[0]}
                </span>
              </div>

              <span className="text-[9px] font-mono font-bold text-[#78350F] mt-1 opacity-80">
                {sit.shlokaChapterVerse}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* High-Impact Visual Remedy Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSituation.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E7E3DD] shadow-sm space-y-4"
        >
          {/* Card Header Badge */}
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#853F00] text-[10px] font-mono font-bold">
              {activeSituation.shlokaChapterVerse}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-bold text-[#853F00]">
              <Clock className="w-3 h-3" />
              <span>{activeSituation.practice.durationSeconds}s Reset</span>
            </div>
          </div>

          {/* 1-Sentence Bite-Sized Antidote */}
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E3DD] text-center space-y-2">
            <h2 className="text-base font-extrabold text-[#1E1B18] leading-snug">
              &ldquo;{activeSituation.simpleExplanationEn}&rdquo;
            </h2>
            <p className="text-xs font-bold text-[#853F00] leading-relaxed">
              &ldquo;{activeSituation.simpleExplanationTe}&rdquo;
            </p>
          </div>

          {/* Clean Sacred Scripture */}
          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-center space-y-1">
            <p className="text-sm sm:text-base font-serif font-bold text-[#1E1B18] leading-relaxed whitespace-pre-line">
              {activeSituation.shlokaSanskrit}
            </p>
            <p className="text-[11px] text-[#853F00] font-semibold">
              {activeSituation.shlokaTelugu}
            </p>
          </div>

          {/* 3 Visual Micro-Action Cards (Clean & Scannable) */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#853F00] block">
              3-Step Action Protocol
            </span>

            <div className="grid grid-cols-3 gap-2 text-center">
              {activeSituation.practice.steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E3DD] flex flex-col items-center justify-between min-h-[90px]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#853F00] text-white text-[10px] font-bold flex items-center justify-center mb-1">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-bold text-[#1E1B18] leading-tight">
                    {step.titleEn}
                  </span>
                  <span className="text-[9px] text-[#78350F] font-medium leading-tight mt-0.5">
                    {step.titleTe}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progressive Disclosure: Deep Dive Drawer Toggle */}
          <button
            onClick={() => setShowDeepDive(!showDeepDive)}
            className="w-full py-2 text-[11px] font-bold text-[#853F00] flex items-center justify-center gap-1 border-t border-[#E7E3DD] pt-3 hover:underline cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{showDeepDive ? 'Hide Word Meaning & Context' : 'Deep Dive: Word Meanings & Diagnosis'}</span>
            {showDeepDive ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {/* Drawer Content */}
          <AnimatePresence>
            {showDeepDive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3 pt-2 text-xs overflow-hidden border-t border-[#E7E3DD]"
              >
                {/* Krishna's Diagnosis */}
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-left">
                  <strong className="text-[#853F00] block mb-0.5 text-[11px] uppercase">
                    Krishna&apos;s Core Diagnosis:
                  </strong>
                  <p className="text-[#1E1B18] leading-relaxed">
                    {activeSituation.krishnaDiagnosisEn}
                  </p>
                  <p className="text-[11px] text-[#78350F] mt-1 font-medium">
                    {activeSituation.krishnaDiagnosisTe}
                  </p>
                </div>

                {/* Word by Word */}
                <div className="grid grid-cols-2 gap-1.5 text-left">
                  {activeSituation.words.map((w, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E7E3DD] text-[10px]">
                      <span className="font-bold text-[#1E1B18] block font-serif">{w.sanskrit}</span>
                      <span className="text-[#853F00] block">{w.meaningTe} • {w.meaningEn}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Complete Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleApply}
            className={`w-full py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isGrounded
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-[#1E1B18] hover:bg-black text-white shadow-md'
            }`}
          >
            {isGrounded ? (
              <>
                <CheckCircle className="w-4 h-4 text-white animate-bounce" />
                <span>Protocol Applied • Mind Still (+1 Return)</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>✓ I Have Applied This Protocol</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
