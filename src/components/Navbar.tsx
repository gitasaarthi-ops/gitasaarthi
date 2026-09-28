'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Sparkles, Compass, PlayCircle, Menu, X, ShoppingBag, Smartphone, Video } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
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
              World&apos;s First Video Gita
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#50453D]">
          <Link href="/" className="hover:text-[#D97706] transition-colors">
            Home
          </Link>
          <Link href="/explorer" className="hover:text-[#D97706] transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#D97706]" />
            <span>18 Chapters & Shlokas</span>
          </Link>
          <Link href="/#situations" className="hover:text-[#D97706] transition-colors flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#D97706]" />
            <span>Gita for Life</span>
          </Link>
          <Link href="/#videos" className="hover:text-[#D97706] transition-colors flex items-center gap-1.5">
            <PlayCircle className="w-4 h-4 text-[#D97706]" />
            <span>Video Explanations</span>
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Link
            href="/app"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#1E1B18] text-white hover:bg-[#332E29] transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Smartphone className="w-3.5 h-3.5 text-amber-400" />
            <span>Launch App</span>
          </Link>
          <Link
            href="/explorer"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#FEF3C7] text-[#853F00] border border-[#FDE68A] hover:bg-[#FDE68A] transition-colors"
          >
            Explore Verses
          </Link>
          <a
            href="https://shop.bhagavadgitaforall.com/products/bhagavad-gita-for-all-book"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#D97706] hover:bg-[#B45309] text-white shadow-sm transition-all flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>The Book</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#1E1B18] hover:bg-[#F1ECE5]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E7E3DD] bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#1E1B18]"
          >
            Home
          </Link>
          <Link
            href="/explorer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-semibold text-[#1E1B18]"
          >
            <BookOpen className="w-4 h-4 text-[#D97706]" />
            <span>18 Chapters &amp; Shlokas</span>
          </Link>
          <Link
            href="/#situations"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-semibold text-[#1E1B18]"
          >
            <Compass className="w-4 h-4 text-[#D97706]" />
            <span>Gita for Modern Life</span>
          </Link>
          <Link
            href="/#videos"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-semibold text-[#1E1B18]"
          >
            <Video className="w-4 h-4 text-[#D97706]" />
            <span>Video Explanations</span>
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/explorer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-[#FEF3C7] text-[#853F00]"
            >
              Start Reading
            </Link>
            <a
              href="https://shop.bhagavadgitaforall.com/products/bhagavad-gita-for-all-book"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl text-xs font-bold bg-[#D97706] text-white"
            >
              Get the Physical Book + App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
