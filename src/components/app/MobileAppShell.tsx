'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TodayTab from './TodayTab';
import SolveTab from './SolveTab';
import GitaTab from './GitaTab';
import JourneyTab from './JourneyTab';
import { Sun, Compass, BookOpen, User, Sparkles, Shield, HeartHandshake, PhoneCall, X } from 'lucide-react';

const TABS = [
  { id: 'today', label: 'Today', labelTe: 'ఈ రోజు', icon: Sun },
  { id: 'solve', label: 'Solve', labelTe: 'పరిష్కారం', icon: Compass },
  { id: 'gita', label: '18 Yogas', labelTe: '18 యోగాలు', icon: BookOpen },
  { id: 'journey', label: 'Journey', labelTe: 'ప్రయాణం', icon: User }
] as const;

type TabId = typeof TABS[number]['id'];

export default function MobileAppShell() {
  const [activeTab, setActiveTab] = useState<TabId>('today');
  const [showHelpline, setShowHelpline] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1B18] flex flex-col justify-between max-w-md mx-auto relative shadow-2xl border-x border-[#E7E3DD]">
      {/* Mobile App Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E3DD] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#B45309] to-[#F59E0B] flex items-center justify-center text-white shadow-xs"
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <div>
            <span className="font-extrabold text-sm tracking-tight text-[#1E1B18] block leading-none">
              గీత సారథి • Gita Companion
            </span>
            <span className="text-[9px] font-bold tracking-wider uppercase text-[#853F00] mt-0.5 block">
              Kurukshetra Decision Engine
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowHelpline(true)}
            className="p-1.5 rounded-xl bg-amber-100/60 hover:bg-amber-100 text-[#853F00] transition-colors cursor-pointer"
            title="Emergency Support & Helplines"
          >
            <Shield className="w-4 h-4" />
          </motion.button>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#0F5132]">
            Offline Ready
          </span>
        </div>
      </header>

      {/* Emergency Crisis Helpline Modal with AnimatePresence */}
      <AnimatePresence>
        {showHelpline && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 border border-[#E7E3DD] shadow-xl relative"
            >
              <button
                onClick={() => setShowHelpline(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2.5 text-[#853F00]">
                <HeartHandshake className="w-6 h-6" />
                <h3 className="text-base font-bold text-[#1E1B18]">
                  Compassionate Support
                </h3>
              </div>

              <p className="text-xs text-[#50453D] leading-relaxed">
                Gita Companion is a daily philosophical &amp; reflection guide. If you or someone you know is in acute distress or self-harm crisis, please reach out to trusted national support:
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                  <span className="font-bold text-[#853F00] block">Tele-MANAS (Govt of India Helpline):</span>
                  <span className="text-sm font-extrabold text-[#1E1B18] font-mono">14416 / 1800-891-4416</span>
                  <span className="text-[10px] text-[#50453D] block mt-0.5">Toll-free, 24x7, multilingual</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-800 block">KIRAN Mental Health Line:</span>
                  <span className="text-sm font-extrabold text-[#1E1B18] font-mono">1800-599-0019</span>
                </div>
              </div>

              <button
                onClick={() => setShowHelpline(false)}
                className="w-full py-2.5 rounded-xl bg-[#1E1B18] text-white text-xs font-bold hover:bg-black transition-colors cursor-pointer"
              >
                I Understand • Return to Companion
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Tab Content with Screen-Transition Animations */}
      <main className="flex-1 px-4 pt-3 overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'today' && (
            <motion.div
              key="today"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <TodayTab onSwitchTab={(tab) => setActiveTab(tab)} />
            </motion.div>
          )}
          {activeTab === 'solve' && (
            <motion.div
              key="solve"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <SolveTab />
            </motion.div>
          )}
          {activeTab === 'gita' && (
            <motion.div
              key="gita"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <GitaTab />
            </motion.div>
          )}
          {activeTab === 'journey' && (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <JourneyTab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Persistent Mobile Bottom Navigation with Sliding Indicator */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-[#E7E3DD] max-w-md mx-auto px-3 py-2 flex items-center justify-around shadow-lg">
        {TABS.map((tab) => {
          const isSelected = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center gap-0.5 py-1 px-3 rounded-2xl transition-colors cursor-pointer ${
                isSelected ? 'text-[#853F00] font-bold' : 'text-[#82756B] hover:text-[#1E1B18]'
              }`}
            >
              <div className="relative p-1 z-10">
                <Icon className={`w-5 h-5 transition-transform duration-200 ${isSelected ? 'scale-110 text-[#853F00]' : ''}`} />
                {isSelected && (
                  <motion.div
                    layoutId="active-nav-glow"
                    className="absolute inset-0 bg-[#FEF3C7] rounded-xl -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
              </div>
              <span className="text-[10px] z-10">{tab.label}</span>
              <span className="text-[9px] opacity-75 z-10">{tab.labelTe}</span>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}
