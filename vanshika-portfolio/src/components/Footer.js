"use client";

import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#fbf8f0] border-t border-stone-200/80 py-8 px-6 text-center mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
        <p className="font-display text-sm text-slate-500 max-w-md leading-relaxed">
          A digital memory scrapbook celebrating her creativity, kindness, imagination, and joyful spirit.
        </p>
        
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase tracking-wider mt-4">
          <span>Made with Love for Vanshika Bansal</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          <span>© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}
