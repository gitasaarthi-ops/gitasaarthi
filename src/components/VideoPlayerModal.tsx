'use client';

import React from 'react';
import { X } from 'lucide-react';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string;
  title?: string;
}

export default function VideoPlayerModal({
  isOpen,
  onClose,
  youtubeId = 'zSo4UKr3TJE',
  title = 'Bhagavad Gita Video Commentary'
}: VideoPlayerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#1E1B18] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
