'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E1B18] text-white pt-16 pb-12 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#B45309] to-[#F59E0B] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Bhagavad Gita <span className="text-[#F59E0B]">For All</span>
              </span>
            </div>
            <p className="text-xs text-white/60 max-w-md leading-relaxed">
              World&apos;s first video-based Bhagavad Gita platform, enhancing timeless Kurukshetra wisdom with 
              700+ video explanations, multi-layered life lessons, and Sanskrit chanting.
            </p>
            <div className="text-xs text-amber-400 font-semibold">
              హరే కృష్ణ హరే కృష్ణ కృష్ణ కృష్ణ హరే హరే • హరే రామ హరే రామ రామ రామ హరే హరే
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Explore Wisdom
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link href="/explorer" className="hover:text-white transition-colors">
                  18 Chapters Directory
                </Link>
              </li>
              <li>
                <Link href="/#situations" className="hover:text-white transition-colors">
                  Gita for Anxiety &amp; Stress
                </Link>
              </li>
              <li>
                <Link href="/#situations" className="hover:text-white transition-colors">
                  Karma Yoga in Career
                </Link>
              </li>
              <li>
                <Link href="/explorer" className="hover:text-white transition-colors">
                  Sanskrit Chanting Audio
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              The Book &amp; App
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a
                  href="https://shop.bhagavadgitaforall.com/products/bhagavad-gita-for-all-book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Order Physical Book
                </a>
              </li>
              <li>
                <a href="https://www.bhagavadgitaforall.com/about-us" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  About Our Mission
                </a>
              </li>
              <li>
                <a href="https://www.bhagavadgitaforall.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="https://www.bhagavadgitaforall.com/faq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Bhagavad Gita For All. Dedicated to the eternal guidance of Sri Krishna.</p>
          <p className="flex items-center gap-1">
            Built with reverence <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> for wisdom seekers
          </p>
        </div>
      </div>
    </footer>
  );
}
