'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Sparkles, Compass, PlayCircle, Menu, X, ShoppingBag, Smartphone, Globe, BellRing } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SpiritualAlarmModal from './SpiritualAlarmModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [alarmModalOpen, setAlarmModalOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-2xl overflow-hidden bg-amber-500/10 border border-amber-500/20 p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <img
              src="/icon-192.png"
              alt="GitaSaarthi Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-[#1E1B18] block leading-none">
              Gita<span className="text-[#D97706]">Saarthi</span>
            </span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#853F00] mt-0.5 block">
              {t.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#50453D]">
          <Link href="/" className="hover:text-[#D97706] transition-colors">
            {t.navHome}
          </Link>
          <Link href="/explorer" className="hover:text-[#D97706] transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#D97706]" />
            <span>{t.navChapters}</span>
          </Link>
          <Link href="/#situations" className="hover:text-[#D97706] transition-colors flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#D97706]" />
            <span>{t.navLife}</span>
          </Link>
          <Link href="/#videos" className="hover:text-[#D97706] transition-colors flex items-center gap-1.5">
            <PlayCircle className="w-4 h-4 text-[#D97706]" />
            <span>{t.navVideos}</span>
          </Link>
        </nav>

        {/* Action CTAs + Alarm & Multi-Language */}
        <div className="flex items-center gap-2">
          {/* Spiritual Alarm Setting Button */}
          <button
            onClick={() => setAlarmModalOpen(true)}
            className="p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-[#853F00] transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
            title="Spiritual Alarm & Reminders"
          >
            <BellRing className="w-4 h-4 text-[#D97706]" />
            <span className="hidden sm:inline text-xs font-bold">
              {language === 'te' ? 'అలారాలు' : 'Alarms'}
            </span>
          </button>

          {/* Multi-Language Dropdown Toggle */}
          <div className="flex items-center bg-white border border-[#E7E3DD] rounded-xl p-1 shadow-xs">
            <Globe className="w-3.5 h-3.5 text-[#D97706] ml-1.5 mr-1 hidden sm:block" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#1E1B18] text-white shadow-xs'
                  : 'text-[#50453D] hover:text-[#1E1B18]'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('te')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                language === 'te'
                  ? 'bg-[#D97706] text-white shadow-xs'
                  : 'text-[#50453D] hover:text-[#1E1B18]'
              }`}
              title="తెలుగు"
            >
              తెలుగు
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                language === 'hi'
                  ? 'bg-[#853F00] text-white shadow-xs'
                  : 'text-[#50453D] hover:text-[#1E1B18]'
              }`}
              title="हिन्दी"
            >
              हिन्दी
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/app"
              className="px-3 py-2 rounded-xl text-xs font-bold bg-[#1E1B18] text-white hover:bg-[#332E29] transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.navLaunchApp}</span>
            </Link>
            <Link
              href="/explorer"
              className="px-3 py-2 rounded-xl text-xs font-bold bg-[#FEF3C7] text-[#853F00] border border-[#FDE68A] hover:bg-[#FDE68A] transition-colors"
            >
              {t.navExplore}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#1E1B18] hover:bg-[#F1ECE5]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E7E3DD] bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#1E1B18]"
          >
            {t.navHome}
          </Link>
          <Link
            href="/explorer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-semibold text-[#1E1B18]"
          >
            <BookOpen className="w-4 h-4 text-[#D97706]" />
            <span>{t.navChapters}</span>
          </Link>
          <Link
            href="/#situations"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-semibold text-[#1E1B18]"
          >
            <Compass className="w-4 h-4 text-[#D97706]" />
            <span>{t.navLife}</span>
          </Link>
          <Link
            href="/#videos"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-semibold text-[#1E1B18]"
          >
            <PlayCircle className="w-4 h-4 text-[#D97706]" />
            <span>{t.navVideos}</span>
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setAlarmModalOpen(true);
              }}
              className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-amber-100 text-[#853F00] flex items-center justify-center gap-2"
            >
              <BellRing className="w-4 h-4 text-[#D97706]" />
              <span>{language === 'te' ? 'ఆధ్యాత్మిక అలారాలు' : 'Spiritual Alarms'}</span>
            </button>
            <Link
              href="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-[#1E1B18] text-white"
            >
              {t.navLaunchApp}
            </Link>
          </div>
        </div>
      )}

      {/* Spiritual Alarm Settings Modal */}
      <SpiritualAlarmModal
        isOpen={alarmModalOpen}
        onClose={() => setAlarmModalOpen(false)}
      />
    </header>
  );
}
