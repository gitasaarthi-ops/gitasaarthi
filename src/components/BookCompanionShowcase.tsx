'use client';

import React from 'react';
import { QrCode, Smartphone, BookOpen, Layers, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function BookCompanionShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F1ECE5]/40 to-[#FAF8F5] border-y border-[#E7E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Visual Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl bg-gradient-to-tr from-[#B45309]/10 via-[#F59E0B]/20 to-white p-6 sm:p-10 border border-[#E7E3DD] shadow-xl">
              {/* Illustrated Book Representation */}
              <div className="relative bg-[#1E1B18] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-amber-500/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold">
                    Chapter 2 • Verse 47
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[10px] text-amber-300">
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Scan for Video</span>
                  </div>
                </div>

                <div className="my-6 space-y-2 text-center">
                  <p className="text-sm sm:text-base font-serif font-bold text-amber-100 leading-relaxed">
                    कर्मण्येवाधिकारस्ते मा फలేषु कदाचन।<br />
                    మా కర్మఫలహేతుర్భూర్మా తే సఙ్గోఽస్త్వకర్మణి॥
                  </p>
                  <p className="text-xs text-white/70 italic">
                    &ldquo;Perform your duty with devotion; never obsess over the fruits.&rdquo;
                  </p>
                </div>

                {/* Smartphone Overlay simulating QR Scan */}
                <div className="bg-[#FAF8F5] text-[#1E1B18] rounded-xl p-4 shadow-lg border border-amber-300/40 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#853F00]">
                    <span className="flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-[#D97706]" />
                      <span>Instant App Sync</span>
                    </span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      <span>Video Ready</span>
                    </span>
                  </div>
                  <p className="text-xs text-[#50453D] leading-snug">
                    Scanning the page immediately opens Shri Krishna&apos;s video commentary, audio chanting, and career decision lessons.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badges */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="bg-white p-3 rounded-xl border border-[#E7E3DD] shadow-sm">
                  <span className="text-xl font-extrabold text-[#D97706] font-mono block">700+</span>
                  <span className="text-[11px] text-[#50453D] font-medium">Video Commentaries</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#E7E3DD] shadow-sm">
                  <span className="text-xl font-extrabold text-[#0F5132] font-mono block">6 Layers</span>
                  <span className="text-[11px] text-[#50453D] font-medium">Of Modern Life Lessons</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] text-[#853F00] text-xs font-bold border border-[#FDE68A]">
              <Layers className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Interactive Book + App Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight leading-tight">
              A Living Guru in Your Hands, Powered by Technology
            </h2>

            <p className="text-sm sm:text-base text-[#50453D] leading-relaxed">
              Traditional books can feel distant or difficult to decipher. Bhagavad Gita For All merges the 
              tactile holiness of a luxury illustrated hardcover with the interactive power of a modern mobile app.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#DCFCE7] text-[#0F5132] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E1B18]">QR Code for Every Single Verse</h4>
                  <p className="text-xs text-[#50453D] mt-0.5 leading-relaxed">
                    Point your phone camera at any shloka in the book to instantly launch high-definition video lessons and chanting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#DCFCE7] text-[#0F5132] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E1B18]">6 Layers of Practical Lessons</h4>
                  <p className="text-xs text-[#50453D] mt-0.5 leading-relaxed">
                    Clear guidance on parenting, handling office politics, overcoming laziness, and finding peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#DCFCE7] text-[#0F5132] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E1B18]">A Timeless Gift for Generations</h4>
                  <p className="text-xs text-[#50453D] mt-0.5 leading-relaxed">
                    Loved by children for animated explanations, gifted by working professionals to elderly parents, and trusted by wisdom seekers worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://shop.bhagavadgitaforall.com/products/bhagavad-gita-for-all-book"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Get the Book &amp; App Package</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-[#50453D] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0F5132]" /> 10,000+ copies delivered globally
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
