'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  NotebookPen, 
  Lock, 
  Zap, 
  Moon, 
  Briefcase, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

interface SavedMoment {
  id: number;
  type: 'SOLVE_APPLIED' | 'EVENING_RELEASE';
  situationId?: string;
  situationTitle?: string;
  emotion?: string;
  note?: string;
  timestamp: string;
}

const EMERGENCY_PINNED_SHLOKAS = [
  { id: '2-47', ref: 'BG 2.47', title: 'Outcome Detachment', titleTe: 'నిష్కామ కర్మ' },
  { id: '2-63', ref: 'BG 2.63', title: 'Rage Antidote', titleTe: 'క్రోధ నాశనం' },
  { id: '6-26', ref: 'BG 6.26', title: 'Breath Return', titleTe: 'మనస్సు నియంత్రణ' },
  { id: '3-35', ref: 'BG 3.35', title: 'Authentic Path', titleTe: 'స్వధర్మం' }
];

export default function JourneyTab() {
  const [reflection, setReflection] = useState('');
  const [savedMoments, setSavedMoments] = useState<SavedMoment[]>([]);
  const [returnsCount, setReturnsCount] = useState<number>(7);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('saarthi_moments');
      if (stored) setSavedMoments(JSON.parse(stored).reverse());
      const returns = localStorage.getItem('saarthi_consciousness_returns');
      if (returns) setReturnsCount(parseInt(returns, 10));
    } catch {}
  }, []);

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reflection.trim()) return;

    const newMoment: SavedMoment = {
      id: Date.now(),
      type: 'EVENING_RELEASE',
      note: reflection.trim(),
      timestamp: new Date().toISOString()
    };

    const updated = [newMoment, ...savedMoments];
    setSavedMoments(updated);
    try {
      localStorage.setItem('saarthi_moments', JSON.stringify(updated));
    } catch {}
    setReflection('');
  };

  return (
    <div className="space-y-5 pb-28 pt-1 max-w-md mx-auto">
      {/* Top Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#853F00] text-[11px] font-bold border border-amber-200">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Zero Guilt • Consciousness Metric</span>
        </div>
        <h1 className="text-2xl font-black text-[#1E1B18] mt-2 tracking-tight">
          My Inner Kurukshetra
        </h1>
        <p className="text-xs text-[#78350F] font-medium mt-0.5">
          Track your continuous moments of returning to yourself.
        </p>
      </div>

      {/* 3 Visual Stat Cards (Directly Inspired by Reference Design) */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-white p-3.5 rounded-2xl border border-amber-300 ring-1 ring-amber-400/40 shadow-xs flex flex-col items-center justify-between min-h-[95px]">
          <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-[#853F00] mb-1">
            <Sparkles className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <span className="text-lg font-mono font-extrabold text-[#1E1B18] block leading-none">
              {returnsCount}
            </span>
            <span className="text-[10px] font-bold text-[#853F00] block mt-1">
              Mindful Returns
            </span>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-[#E7E3DD] shadow-xs flex flex-col items-center justify-between min-h-[95px]">
          <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-[#853F00] mb-1">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#1E1B18] block leading-tight">
              Work &amp; Results
            </span>
            <span className="text-[9px] text-[#78350F] font-medium block mt-1">
              Top Theme (70%)
            </span>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-[#E7E3DD] shadow-xs flex flex-col items-center justify-between min-h-[95px]">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800 mb-1">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#1E1B18] block leading-tight">
              100% Private
            </span>
            <span className="text-[9px] text-emerald-800 font-medium block mt-1">
              On-Device Only
            </span>
          </div>
        </div>
      </div>

      {/* Visual Emergency Pocket Kit (Tactile Cards) */}
      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#78350F] px-1 block">
          Emergency Pocket Kit • రక్షణ శ్లోకాలు
        </span>

        <div className="grid grid-cols-2 gap-2">
          {EMERGENCY_PINNED_SHLOKAS.map((ps) => (
            <div key={ps.id} className="p-3 rounded-2xl bg-white border border-[#E7E3DD] shadow-2xs flex items-center gap-2.5">
              <span className="px-2 py-1 rounded-lg bg-[#FEF3C7] text-[#853F00] text-[10px] font-mono font-bold shrink-0">
                {ps.ref}
              </span>
              <div className="text-left overflow-hidden">
                <h4 className="text-xs font-bold text-[#1E1B18] truncate">
                  {ps.title}
                </h4>
                <p className="text-[10px] text-[#853F00] truncate">
                  {ps.titleTe}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Reflection Log */}
      <div className="bg-white rounded-3xl p-5 border border-[#E7E3DD] shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1E1B18]">
          <NotebookPen className="w-4 h-4 text-[#D97706]" />
          <span>Private Reflections</span>
        </div>

        <form onSubmit={handleSaveNote} className="flex gap-2">
          <input
            type="text"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="1 sentence insight to remember..."
            className="flex-1 p-2.5 rounded-xl border border-[#E7E3DD] bg-[#FAF8F5] text-xs text-[#1E1B18] focus:outline-none focus:ring-1 focus:ring-[#853F00]"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-3 py-2 rounded-xl bg-[#853F00] hover:bg-[#6b3200] text-white text-xs font-bold shrink-0 cursor-pointer shadow-2xs"
          >
            Save
          </motion.button>
        </form>

        {savedMoments.length > 0 && (
          <div className="space-y-1.5 pt-1 max-h-52 overflow-y-auto pr-1">
            {savedMoments.slice(0, 5).map((m) => (
              <div key={m.id} className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E3DD] text-[11px] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  {m.type === 'SOLVE_APPLIED' ? (
                    <Zap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  ) : (
                    <Moon className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  )}
                  <span className="text-[#1E1B18] font-medium truncate">
                    {m.situationTitle || m.note || 'Evening Release'}
                  </span>
                </div>
                <span className="text-[9px] text-[#82756B] shrink-0 font-mono">
                  {new Date(m.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
