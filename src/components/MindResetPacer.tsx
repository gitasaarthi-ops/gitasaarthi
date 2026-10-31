'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MindResetPacer() {
  const { t, language } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [cycleSeconds, setCycleSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            return 60;
          }
          return prev - 1;
        });

        setCycleSeconds((prev) => {
          const next = (prev + 1) % 12; // 4s inhale, 4s hold, 4s exhale
          if (next < 4) {
            setPhase('Inhale');
          } else if (next < 8) {
            setPhase('Hold');
          } else {
            setPhase('Exhale');
          }
          return next;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleToggle = () => {
    if (!isActive) {
      setSecondsLeft(60);
      setCycleSeconds(0);
      setPhase('Inhale');
    }
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setSecondsLeft(60);
    setCycleSeconds(0);
    setPhase('Inhale');
  };

  const phaseInstruction = phase === 'Inhale' 
    ? t.pacerInhale 
    : phase === 'Hold' 
    ? t.pacerHold 
    : t.pacerExhale;

  return (
    <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E7E3DD] max-w-xl mx-auto text-center space-y-6 relative overflow-hidden">
      {/* Subtle Background Glow Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <motion.div
          animate={{
            scale: isActive ? (phase === 'Inhale' ? [1, 1.4] : phase === 'Hold' ? 1.4 : [1.4, 1]) : 1,
            opacity: isActive ? [0.2, 0.4, 0.2] : 0.2
          }}
          transition={{ duration: 4, ease: 'easeInOut', repeat: isActive ? Infinity : 0 }}
          className="w-64 h-64 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 blur-2xl"
        />
      </div>

      <div className="relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#853F00] block mb-1">
          Gita 6.26 • Instant Grounding • {language === 'te' ? 'ప్రాణాయామం' : 'Prāṇāyāma'}
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1B18]">
          {t.pacerTitle}
        </h3>
        <p className="text-xs text-[#50453D] mt-1 max-w-sm mx-auto">
          {t.pacerSubtitle}
        </p>
      </div>

      {/* Animated Concentric Breath Circles */}
      <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
        {/* Outer Ripple Aura */}
        <motion.div
          animate={{
            scale: !isActive ? 1 : phase === 'Inhale' ? 1.35 : phase === 'Hold' ? 1.35 : 0.9,
            opacity: !isActive ? 0.3 : phase === 'Hold' ? 0.7 : 0.5
          }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full border-2 border-amber-300/60 bg-amber-100/30"
        />

        {/* Secondary Harmonic Ring */}
        <motion.div
          animate={{
            scale: !isActive ? 1 : phase === 'Inhale' ? 1.2 : phase === 'Hold' ? 1.2 : 0.95,
            borderColor: !isActive ? '#E7E3DD' : phase === 'Inhale' ? '#D97706' : phase === 'Hold' ? '#C89B3C' : '#0F5132'
          }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="absolute inset-3 rounded-full border-2 border-dashed border-[#D97706]/40"
        />

        {/* Inner Core Disc */}
        <motion.div
          animate={{
            scale: !isActive ? 1 : phase === 'Inhale' ? 1.12 : phase === 'Hold' ? 1.12 : 0.92,
            boxShadow: isActive ? '0 10px 30px -5px rgba(217, 119, 6, 0.25)' : 'none'
          }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="relative z-10 w-36 h-36 rounded-full bg-white border border-[#E7E3DD] flex flex-col items-center justify-center p-3 text-center shadow-md"
        >
          <motion.span 
            key={phase}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-extrabold uppercase tracking-wider text-[#853F00] block"
          >
            {isActive ? phase : 'Ready'}
          </motion.span>
          <span className="text-2xl font-mono font-extrabold text-[#1E1B18] block leading-tight">
            {isActive ? `${secondsLeft}s` : '60s'}
          </span>
          <span className="text-[10px] text-[#82756B] block leading-tight font-medium mt-0.5 px-1 truncate max-w-full">
            {isActive ? phaseInstruction : 'Tap Start'}
          </span>
        </motion.div>
      </div>

      {/* Control Actions */}
      <div className="flex items-center justify-center gap-3 relative z-10">
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={handleToggle}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
        >
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          <span>{isActive ? 'Pause' : t.pacerStart}</span>
        </motion.button>

        {isActive && (
          <motion.button
            whileTap={{ scale: 0.94 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-white border border-[#E7E3DD] text-[#50453D] hover:bg-[#FAF8F5] cursor-pointer shadow-xs"
            title="Reset"
          >
            <RefreshCw className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      {/* Anchor Shloka Quotation */}
      <div className="pt-2 text-[11px] text-[#78350F] italic font-serif max-w-md mx-auto relative z-10 border-t border-[#E7E3DD]/60">
        {language === 'te' ? (
          <>&ldquo;యతో యతో నిశ్చరతి మనశ్చఞ్చలమస్థిరమ్... చంచలమైన మనస్సు ఎక్కడెక్కడికి పరుగెత్తునో అక్కడినుండి దానిని మరలించి ఆత్మయందే నిలుపవలెను.&rdquo; — గీత 6.26</>
        ) : (
          <>&ldquo;yato yato niścarati manaś cañcalam asthiram... Whenever the restless mind wanders, gently guide it back to rest in the Self.&rdquo; — Gita 6.26</>
        )}
      </div>
    </div>
  );
}
