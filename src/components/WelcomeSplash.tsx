'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowRight, Volume2, VolumeX } from 'lucide-react';

interface WelcomeSplashProps {
  durationSeconds?: number;
  onComplete?: () => void;
}

export default function WelcomeSplash({
  durationSeconds = 10,
  onComplete,
}: WelcomeSplashProps) {
  const [secondsLeft, setSecondsLeft] = useState(durationSeconds);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [needsGesture, setNeedsGesture] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Lock body scroll while splash screen is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Initialize and handle welcome audio playback using project's 'welcomepage audio.mpeg'
  useEffect(() => {
    const audio = new Audio('/welcome.mp3');
    audio.preload = 'auto';
    audio.volume = 0.95;
    audio.autoplay = true;
    audioRef.current = audio;

    // Fallback to .mpeg or .wav if needed
    audio.onerror = () => {
      if (!audio.src.includes('welcome.mpeg')) {
        audio.src = '/welcome.mpeg';
        audio.load();
        audio.play().then(() => setIsPlayingAudio(true)).catch(() => {});
      } else if (!audio.src.includes('welcome.wav')) {
        audio.src = '/welcome.wav';
        audio.load();
        audio.play().then(() => setIsPlayingAudio(true)).catch(() => {});
      }
    };

    // Attempt autoplay immediately with sound ON by default
    const startAudio = () => {
      audio
        .play()
        .then(() => {
          setIsPlayingAudio(true);
          setNeedsGesture(false);
        })
        .catch(() => {
          // If browser policy defers autoplay until user interaction, mark needsGesture
          setIsPlayingAudio(false);
          setNeedsGesture(true);
        });
    };

    startAudio();

    // Trigger audio on ANY first gesture anywhere on screen
    const handleFirstGesture = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlayingAudio(true);
            setNeedsGesture(false);
          })
          .catch(() => {});
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    window.addEventListener('pointerdown', handleFirstGesture, { once: true });
    window.addEventListener('click', handleFirstGesture, { once: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });

    return () => {
      cleanupListeners();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // 10-second countdown timer
  useEffect(() => {
    if (secondsLeft <= 0) {
      handleClose();
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlayingAudio(true);
        })
        .catch(() => {});
    }
  };

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);

    // Fade out audio gently over 500ms
    if (audioRef.current) {
      const currentVol = audioRef.current.volume;
      const steps = 10;
      let count = 0;
      const fadeInterval = setInterval(() => {
        count++;
        if (audioRef.current && count < steps) {
          audioRef.current.volume = Math.max(0, currentVol * (1 - count / steps));
        } else {
          clearInterval(fadeInterval);
          if (audioRef.current) {
            audioRef.current.pause();
          }
        }
      }, 50);
    }

    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  return (
    <div
      id="gita-welcome-splash"
      className={`fixed inset-0 w-screen h-screen flex flex-col items-center justify-between text-white p-6 sm:p-10 select-none overflow-hidden transition-all duration-700 ${
        isClosing
          ? 'opacity-0 scale-105 pointer-events-none blur-md'
          : 'opacity-100 scale-100'
      }`}
      style={{
        zIndex: 9999999,
        backgroundColor: '#080604',
        backgroundImage: `
          radial-gradient(circle at 50% 36%, #331A05 0%, #1A0D03 45%, #080604 90%)
        `,
      }}
    >
      {/* Radiant Glowing Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Pulsing Core Sun Glow */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.75, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full bg-gradient-to-tr from-[#D97706]/40 via-[#F59E0B]/30 to-[#B45309]/15 blur-3xl"
        />

        {/* Outer Rotating Sacred Geometry Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full border border-amber-500/25 border-dashed"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute w-[440px] h-[440px] sm:w-[600px] sm:h-[600px] rounded-full border border-amber-400/15"
        />
      </div>

      {/* Top Header Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between z-20 pt-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-2 text-amber-200/90 text-xs font-serif"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span className="tracking-[0.25em] uppercase text-[11px] font-semibold text-amber-300">
            ॐ श्री परमात्मने नमः
          </span>
        </motion.div>

        <div className="flex items-center gap-3">
          {/* Sound Toggle with Equalizer Animation */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={toggleSound}
            className={`px-3 py-1.5 rounded-full border text-xs flex items-center gap-2 cursor-pointer transition-all ${
              isPlayingAudio
                ? 'bg-amber-500/20 border-amber-400/50 text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                : 'bg-white/5 border-white/15 text-zinc-400 hover:text-amber-200'
            }`}
            title={isPlayingAudio ? 'Mute Sacred Audio' : 'Play Sacred Audio'}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                {/* Visualizer Equalizer Waves */}
                <div className="flex items-end gap-0.5 h-3.5">
                  <motion.span
                    animate={{ height: ['40%', '100%', '60%'] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut' }}
                    className="w-0.5 bg-amber-400 rounded-full"
                  />
                  <motion.span
                    animate={{ height: ['80%', '30%', '90%'] }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
                    className="w-0.5 bg-amber-300 rounded-full"
                  />
                  <motion.span
                    animate={{ height: ['50%', '90%', '40%'] }}
                    transition={{ repeat: Infinity, duration: 0.5, ease: 'easeInOut' }}
                    className="w-0.5 bg-amber-400 rounded-full"
                  />
                </div>
                <span className="text-[11px] font-medium text-amber-200">Audio On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-[11px] font-medium text-zinc-400">Play Audio</span>
              </>
            )}
          </motion.button>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={handleClose}
            className="px-3.5 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/40 text-amber-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Skip</span>
            <ArrowRight className="w-3 h-3" />
          </motion.button>
        </div>
      </div>

      {/* Center Stage: The Golden Lotus Om Logo + Flashing Shimmer Beam */}
      <div className="my-auto flex flex-col items-center text-center z-20 max-w-lg px-4">
        {/* Logo Container with Click to Enter */}
        <div
          className="relative mb-6 group cursor-pointer"
          onClick={handleClose}
          title="Click to enter GitaSaarthi"
        >
          {/* Pulsing Radiant Halo */}
          <motion.div
            animate={{
              scale: [1, 1.22, 1],
              opacity: [0.6, 0.95, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -inset-8 bg-gradient-to-tr from-amber-600 via-[#F59E0B] to-amber-700 rounded-full blur-3xl opacity-70"
          />

          {/* Golden Lotus Card */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              type: 'spring',
              damping: 14,
            }}
            className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden p-3 bg-gradient-to-b from-[#2B1B0E] via-[#1B1107] to-[#100A04] border-2 border-amber-400/60 shadow-[0_16px_48px_rgba(217,119,6,0.5)] flex items-center justify-center group-hover:scale-105 transition-transform"
          >
            {/* Dynamic Flashing / Shimmer Light Beam Sweep */}
            <motion.div
              animate={{
                x: ['-160%', '200%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
                repeatDelay: 0.6,
              }}
              className="absolute inset-0 w-3/5 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-25 pointer-events-none z-30"
            />

            {/* Pulsing Border Glow */}
            <motion.div
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 border-2 border-amber-300 rounded-3xl pointer-events-none z-20"
            />

            {/* Golden Lotus Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-amber-950/30">
              <Image
                src="/icon-512.png"
                alt="GitaSaarthi Golden Lotus Logo"
                width={160}
                height={160}
                priority
                className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(245,158,11,0.6)]"
              />
            </div>
          </motion.div>

          {/* Orbiting Sparkle Star */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 pointer-events-none"
          >
            <Sparkles className="w-5 h-5 text-amber-300 absolute top-0 left-1/2 -translate-x-1/2 drop-shadow-[0_0_12px_#F59E0B]" />
          </motion.div>
        </div>

        {/* Brand Title & Sacred Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-2.5"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>గీత సారథి • Divine Life Navigator</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            <span>Gita</span>
            <span className="text-[#F59E0B] drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]">
              Saarthi
            </span>
          </h1>

          <p className="text-amber-100/90 text-sm sm:text-base font-medium max-w-sm mx-auto leading-relaxed pt-0.5">
            When life feels overwhelming, know what to do next.
          </p>
        </motion.div>

        {/* Sacred Anchor Shloka */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 pt-5 border-t border-amber-500/30 max-w-md w-full"
        >
          <p className="text-sm sm:text-base font-serif italic text-amber-200 font-bold leading-relaxed drop-shadow-md">
            &ldquo;కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన&rdquo;
          </p>
          <p className="text-xs text-amber-300/80 font-sans tracking-wide mt-1.5 font-medium">
            Gita 2.47 • Act with total devotion, surrender the results
          </p>
        </motion.div>
      </div>

      {/* Bottom Progress Bar & Enter Action */}
      <div className="w-full max-w-md z-20 flex flex-col items-center gap-3 pb-3">
        {/* Countdown Header */}
        <div className="w-full flex items-center justify-between text-xs text-amber-200/80 font-mono mb-0.5">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-semibold">Entering Sanctuary</span>
          </span>
          <span className="text-amber-300 font-bold bg-amber-500/20 px-2.5 py-0.5 rounded-md border border-amber-500/30">
            {secondsLeft}s
          </span>
        </div>

        {/* 10-Second Animated Progress Bar */}
        <div className="w-full h-2.5 bg-black/50 rounded-full overflow-hidden relative border border-amber-500/30 shadow-inner">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: durationSeconds,
              ease: 'linear',
            }}
            className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 rounded-full shadow-[0_0_16px_#F59E0B]"
          />
        </div>

        {/* Tap to enable audio notice if browser blocked initial autoplay */}
        {needsGesture && !isPlayingAudio && (
          <button
            onClick={() => {
              if (audioRef.current) {
                audioRef.current
                  .play()
                  .then(() => {
                    setIsPlayingAudio(true);
                    setNeedsGesture(false);
                  })
                  .catch(() => {});
              }
            }}
            className="text-[11px] text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3 py-1 rounded-full animate-pulse flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Tap anywhere to enable sacred audio</span>
          </button>
        )}

        {/* Enter GitaSaarthi Button */}
        <button
          onClick={handleClose}
          className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#B45309] via-[#D97706] to-[#F59E0B] text-white font-bold text-sm shadow-[0_8px_28px_rgba(217,119,6,0.5)] hover:shadow-[0_12px_36px_rgba(217,119,6,0.7)] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Enter GitaSaarthi</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
