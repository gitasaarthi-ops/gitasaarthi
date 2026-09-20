'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Play, 
  Wind, 
  ArrowRight, 
  Sun, 
  Moon, 
  CheckCircle2, 
  Compass, 
  Flame, 
  Heart,
  Feather
} from 'lucide-react';
import MindResetPacer from '../MindResetPacer';
import { FEATURED_SHLOKAS } from '../../data/shlokas';
import ShlokaCard from '../ShlokaCard';

const EVENING_EMOTIONS = [
  { id: 'peace', label: 'Peaceful', labelTe: 'ప్రశాంతం', icon: Feather },
  { id: 'overthinking', label: 'Overthinking', labelTe: 'అశాంతి', icon: Compass },
  { id: 'frustrated', label: 'Frustrated', labelTe: 'విసుగు', icon: Flame },
  { id: 'heavy', label: 'Heavy Heart', labelTe: 'బరువు', icon: Heart },
  { id: 'grateful', label: 'Grateful', labelTe: 'కృతజ్ఞత', icon: Sparkles }
];

export default function TodayTab({ onSwitchTab }: { onSwitchTab: (tab: 'solve' | 'gita' | 'journey') => void }) {
  const [showPacer, setShowPacer] = useState(false);
  const [morningSet, setMorningSet] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<string>('peace');
  const [eveningNote, setEveningNote] = useState<string>('');
  const [surrendered, setSurrendered] = useState<boolean>(false);
  const [returnsCount, setReturnsCount] = useState<number>(7);

  const dailyShloka = FEATURED_SHLOKAS[0];
  const currentHour = new Date().getHours();
  const timeOfDay = currentHour < 12 ? 'Morning' : currentHour < 18 ? 'Afternoon' : 'Evening';

  useEffect(() => {
    try {
      const returns = localStorage.getItem('saarthi_consciousness_returns');
      if (returns) setReturnsCount(parseInt(returns, 10));
      const today = new Date().toDateString();
      if (localStorage.getItem(`saarthi_morning_set_${today}`)) setMorningSet(true);
      if (localStorage.getItem(`saarthi_evening_surrender_${today}`)) setSurrendered(true);
    } catch {}
  }, []);

  const handleSetMorningIntention = () => {
    setMorningSet(true);
    const today = new Date().toDateString();
    try {
      localStorage.setItem(`saarthi_morning_set_${today}`, 'true');
      const newCount = returnsCount + 1;
      setReturnsCount(newCount);
      localStorage.setItem('saarthi_consciousness_returns', newCount.toString());
    } catch {}
  };

  const handleEveningSurrender = () => {
    setSurrendered(true);
    const today = new Date().toDateString();
    try {
      localStorage.setItem(`saarthi_evening_surrender_${today}`, 'true');
      const existing = JSON.parse(localStorage.getItem('saarthi_moments') || '[]');
      existing.push({
        id: Date.now(),
        type: 'EVENING_RELEASE',
        emotion: selectedEmotion,
        note: eveningNote,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('saarthi_moments', JSON.stringify(existing));
    } catch {}
  };

  return (
    <div className="space-y-5 pb-28 pt-1 max-w-md mx-auto">
      {/* Top Header Milestone Badge */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-amber-100 flex items-center justify-center text-[#853F00]">
            {timeOfDay === 'Morning' ? <Sun className="w-4 h-4 text-amber-600" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#853F00] block leading-none">
              {timeOfDay} Sanctuary
            </span>
            <h1 className="text-base font-extrabold text-[#1E1B18] mt-0.5">
              Namaste, Seeker
            </h1>
          </div>
        </div>

        <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#853F00] text-xs font-bold flex items-center gap-1.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{returnsCount} Returns</span>
        </div>
      </div>

      {/* 1. Visual Morning Intention Card */}
      <div className="bg-gradient-to-tr from-amber-500/10 via-amber-100/30 to-white rounded-3xl p-5 border border-amber-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#853F00] flex items-center gap-1">
            <Sun className="w-3.5 h-3.5" />
            <span>Today&apos;s Direction • సంకల్పం</span>
          </span>
          <span className="text-[10px] font-mono font-bold text-[#853F00] bg-white px-2 py-0.5 rounded-full border border-amber-200">
            60s Focus
          </span>
        </div>

        <div className="text-center py-2 space-y-1">
          <p className="text-base font-extrabold text-[#1E1B18] leading-snug">
            &ldquo;Do the work fully. Release the validation.&rdquo;
          </p>
          <p className="text-xs font-bold text-[#853F00]">
            &ldquo;చేసే పనిపై శ్రద్ధ • ఫలితంపై కాదు.&rdquo;
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleSetMorningIntention}
          disabled={morningSet}
          className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            morningSet
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
              : 'bg-[#853F00] text-white hover:bg-[#6b3200] shadow-sm'
          }`}
        >
          {morningSet ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-600 animate-bounce" />
              <span>Direction Anchored for Today</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>Set as Today&apos;s Direction</span>
            </>
          )}
        </motion.button>
      </div>

      {/* 2. Visual Daytime Crisis Quick Action */}
      <div className="p-4 rounded-3xl bg-white border border-[#E7E3DD] shadow-xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#853F00] shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-[#1E1B18]">
              Facing Conflict or Panic?
            </h3>
            <span className="text-[10px] text-[#78350F] font-medium">
              3-minute Kurukshetra Antidote
            </span>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={() => onSwitchTab('solve')}
          className="px-3.5 py-2 rounded-xl bg-[#1E1B18] text-white text-xs font-bold shrink-0 hover:bg-black transition-all flex items-center gap-1 cursor-pointer"
        >
          <span>Solve</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
        </motion.button>
      </div>

      {/* 3. 60-Second Quick Grounding Pacer */}
      <div className="bg-white rounded-3xl p-5 border border-[#E7E3DD] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#853F00] flex items-center gap-1">
            <Wind className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Gita 6.26 • Mind Pacer</span>
          </span>
          <span className="text-[10px] text-[#82756B]">Breathe &amp; Reset</span>
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => setShowPacer(!showPacer)}
          className="w-full py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E3DD] text-[#853F00] text-xs font-bold hover:bg-[#F1ECE5] transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-current text-[#D97706]" />
          <span>{showPacer ? 'Hide Breath Pacer' : 'Start 60s Breath Reset'}</span>
        </motion.button>

        <AnimatePresence>
          {showPacer && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pt-2 overflow-hidden"
            >
              <MindResetPacer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. Scriptural Anchor Shloka */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#78350F] px-1 block">
          Today&apos;s Shloka • కర్మ యోగం
        </span>
        <ShlokaCard shloka={dailyShloka} />
      </div>

      {/* 5. Visual Evening Surrender (Cards Inspired by Reference UI) */}
      <div className="bg-white rounded-3xl p-5 border border-[#E7E3DD] shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-indigo-900 font-bold text-xs">
            <Moon className="w-4 h-4 text-indigo-600" />
            <span>Evening Release • రాత్రి నిశ్శబ్దం</span>
          </div>
          <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">
            Gita 2.70
          </span>
        </div>

        <p className="text-xs text-[#50453D] text-center">
          What can you surrender into silence tonight?
        </p>

        {/* Visual Emotion Selector Cards */}
        <div className="grid grid-cols-5 gap-1.5">
          {EVENING_EMOTIONS.map((em) => {
            const isSelected = selectedEmotion === em.id;
            const Icon = em.icon;

            return (
              <motion.button
                key={em.id}
                whileTap={{ scale: 0.93 }}
                onClick={() => setSelectedEmotion(em.id)}
                className={`p-2 rounded-2xl text-center flex flex-col items-center justify-center transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-400/50 shadow-2xs'
                    : 'bg-[#FAF8F5] border-[#E7E3DD] text-[#50453D] hover:bg-white'
                }`}
              >
                <Icon className={`w-4 h-4 mb-1 ${isSelected ? 'text-indigo-600' : 'text-[#82756B]'}`} />
                <span className="text-[9px] font-bold block leading-none">{em.label}</span>
                <span className="text-[8px] opacity-75 mt-0.5 block leading-none">{em.labelTe}</span>
              </motion.button>
            );
          })}
        </div>

        {/* 1-Line Input */}
        <input
          type="text"
          value={eveningNote}
          onChange={(e) => setEveningNote(e.target.value)}
          placeholder="1 thought to surrender into silence..."
          className="w-full p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E3DD] text-xs text-[#1E1B18] placeholder:text-[#9C9289] focus:outline-none focus:ring-1 focus:ring-indigo-400"
        />

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleEveningSurrender}
          disabled={surrendered}
          className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            surrendered
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
              : 'bg-indigo-950 text-white hover:bg-indigo-900 shadow-xs'
          }`}
        >
          {surrendered ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Surrendered Into Silence • Rest Well</span>
            </>
          ) : (
            <span>Surrender Day &amp; Rest</span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
