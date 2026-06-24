"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Sparkles, 
  Smile, 
  Palette, 
  Zap, 
  Activity, 
  UtensilsCrossed 
} from "lucide-react";

export default function FunFacts() {
  const facts = [
    { text: "I love Rajma Chawal.", icon: UtensilsCrossed, color: "bg-red-50 text-red-600 border-red-100" },
    { text: "I enjoy Idli and Dosa.", icon: UtensilsCrossed, color: "bg-yellow-50 text-yellow-600 border-yellow-100" },
    { text: "I can create amazing things using a 3D pen.", icon: Zap, color: "bg-blue-50 text-blue-600 border-blue-100" },
    { text: "I love skating.", icon: Activity, color: "bg-green-50 text-green-600 border-green-100" },
    { text: "I enjoy talking and making new friends.", icon: Smile, color: "bg-purple-50 text-purple-600 border-purple-100" },
    { text: "I love spending time with my family.", icon: Heart, color: "bg-pink-50 text-brand-pink border-pink-100" },
    { text: "I enjoy arts and crafts.", icon: Palette, color: "bg-orange-50 text-orange-600 border-orange-100" }
  ];

  return (
    <section 
      id="funfacts" 
      className="py-16 px-6 border-t border-stone-200/80 bg-gradient-to-b from-bg-yellow via-white to-[#fffcf5]"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10 relative">
          <span className="washi-tape-yellow absolute -top-8 left-1/2 transform -translate-x-1/2 w-44 h-8 rotate-1 z-10 text-xs font-bold text-amber-800 pt-1 tracking-widest uppercase">
            FUN FACTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-800 mt-2">Fun Facts About Me!</h2>
          <p className="text-slate-500 text-sm mt-2">A few tiny tidbits that make me who I am!</p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14">
          {facts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.03, 
                  rotate: idx % 2 === 0 ? 1 : -1,
                  y: -2
                }}
                className={`p-5 rounded-2xl border shadow-sm flex items-start gap-4 transition-all duration-300 ${fact.color}`}
              >
                <div className="p-2 bg-white rounded-xl shadow-inner shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="font-display text-sm leading-normal font-medium">{fact.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 bg-white border border-stone-200 rounded-3xl shadow-lg max-w-2xl mx-auto text-center overflow-hidden"
        >
          {/* Quote bubble decorative styles */}
          <div className="absolute top-4 left-4 text-brand-pink/20 font-display text-7xl select-none leading-none">“</div>
          <div className="absolute bottom-4 right-4 text-brand-pink/20 font-display text-7xl select-none leading-none">”</div>

          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl text-slate-700 leading-snug italic font-medium px-4">
              "Every child is an artist. Creativity is my superpower."
            </h3>
            
            <div className="w-24 h-1 bg-gradient-to-r from-brand-pink via-brand-yellow to-brand-blue mx-auto mt-6 rounded-full"></div>
            
            <p className="text-slate-400 font-sans text-xs mt-3 uppercase tracking-widest font-bold flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" /> Vanshika's Motto
            </p>
          </div>

          {/* Tiny paper clip decoration */}
          <div className="absolute top-0 right-10 w-6 h-10 bg-slate-300/40 rounded-full border border-slate-400/30 transform rotate-12 -translate-y-2"></div>
        </motion.div>

      </div>
    </section>
  );
}
