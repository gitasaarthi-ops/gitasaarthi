'use client';

import React, { useState } from 'react';
import { Star, Play, Quote } from 'lucide-react';
import VideoPlayerModal from './VideoPlayerModal';

const REVIEWS = [
  {
    quote: "As a mother, I've always wanted my children to understand the importance of our ancient texts, but it was hard to get them interested. The BGFA book with its interactive video app is such a clever solution! My kids love scanning the QR codes.",
    author: "Priya Sharma",
    role: "Mother & Educator, Bengaluru",
    rating: 5,
    youtubeId: "OczZTV2cdYM"
  },
  {
    quote: "I gifted this book to my parents, and it's the best decision I ever made. They adore the rich illustrations and have been exploring the app's video commentaries daily. It's more than a coffee table book — it's an entry point to deep wisdom.",
    author: "Rajeshwar Rao",
    role: "Tech Lead, Hyderabad",
    rating: 5,
    youtubeId: "A0pe_PlrvK8"
  },
  {
    quote: "The BGFA Book & App have redefined my relationship with the Gita. I can now connect the teachings directly to everyday work situations — managing stress under tight deadlines, or finding balance in family life.",
    author: "Ananya Deshmukh",
    role: "Product Manager, Mumbai",
    rating: 5,
    youtubeId: "HPXltOa3s_4"
  }
];

export default function ReaderReviews() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight">
            Loved by 10,000+ Seekers &amp; Families
          </h2>
          <p className="text-sm sm:text-base text-[#50453D]">
            Hear how modern families, leaders, and youth are finding clarity, peace, and purpose in the divine words of Sri Krishna.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E3DD] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <Quote className="w-8 h-8 text-[#FEF3C7] mb-3" />
                <p className="text-xs sm:text-sm text-[#50453D] leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E7E3DD] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1E1B18]">{rev.author}</h4>
                  <span className="text-[11px] text-[#82756B]">{rev.role}</span>
                </div>

                <button
                  onClick={() => setSelectedVideo(rev.youtubeId)}
                  className="w-9 h-9 rounded-full bg-[#FEF3C7] text-[#853F00] flex items-center justify-center hover:bg-[#FDE68A] transition-colors"
                  title="Watch Video Review"
                >
                  <Play className="w-4 h-4 fill-current translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoPlayerModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          youtubeId={selectedVideo}
          title="Reader Video Experience"
        />
      )}
    </section>
  );
}
