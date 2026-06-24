"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Volume2, 
  Palette, 
  Wind, 
  School, 
  Users, 
  Trophy, 
  Sparkles,
  BookOpen
} from "lucide-react";
import Lightbox from "./Lightbox";

export default function TalentCorner() {
  const [activeTab, setActiveTab] = useState("talents");
  const [lightboxImage, setLightboxImage] = useState(null);

  const skatingAchievements = [
    { title: "Speed Booster", desc: "Zipping down paths in the park! I love the wind in my hair.", icon: Wind, color: "bg-blue-50 text-blue-600" },
    { title: "Tricks & Turns", desc: "Mastering smooth curves, spinning, and braking perfectly.", icon: Sparkles, color: "bg-yellow-50 text-yellow-600" },
    { title: "Brave Skater", desc: "If I fall down, I stand right back up and keep on rolling!", icon: Award, color: "bg-pink-50 text-brand-pink" }
  ];

  const schoolHighlights = [
    { 
      title: "Classroom Activities", 
      desc: "Math puzzles, science questions, and reading stories in Class 5. Learning is a big adventure!", 
      icon: BookOpen, 
      color: "border-l-brand-blue" 
    },
    { 
      title: "Drawing Competitions", 
      desc: "Participating in school art contests. I love colors and sketches!", 
      icon: Trophy, 
      color: "border-l-brand-yellow" 
    },
    { 
      title: "Best Friends forever", 
      desc: "Sharing lunch, playing tag, making secret handshakes, and laughing during recess.", 
      icon: Users, 
      color: "border-l-brand-green" 
    }
  ];

  return (
    <section 
      id="talents" 
      className="py-16 px-6 border-t border-stone-200/80 bg-gradient-to-b from-bg-green via-white to-bg-lavender"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Sticky note heading */}
        <div className="text-center mb-12 relative">
          <span className="washi-tape-blue absolute -top-8 left-1/2 transform -translate-x-1/2 w-48 h-8 -rotate-1 z-10 text-xs font-bold text-blue-800 pt-1 tracking-widest uppercase">
            Talents & Hobbies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-800 mt-2">My Talent & School Corner</h2>
          <p className="text-slate-500 text-sm mt-2">Here is what makes my days super exciting, active, and fun!</p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("talents")}
            className={`px-6 py-2.5 rounded-full font-display text-sm border shadow-sm transition-all duration-300 ${
              activeTab === "talents" 
                ? "bg-brand-blue text-white border-brand-blue scale-105" 
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            ⛸️ Hobbies & Skating
          </button>
          <button
            onClick={() => setActiveTab("school")}
            className={`px-6 py-2.5 rounded-full font-display text-sm border shadow-sm transition-all duration-300 ${
              activeTab === "school" 
                ? "bg-brand-green text-white border-brand-green scale-105" 
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            🏫 School Memories
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === "talents" ? (
          /* HOBBIES & SKATING TAB */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Creativity & Public Speaking info */}
            <div className="md:col-span-6 flex flex-col gap-6">
              
              {/* Art Box */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-3 h-24 bg-brand-pink/20 -skew-x-12"></div>
                <h3 className="font-display text-lg text-brand-pink mb-2 flex items-center gap-2">
                  <Palette className="w-5 h-5" /> Expressive Art & Creativity
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Expressing myself through crayons, paper crafts, and watercolors is like a superpower! I love translating my wild imagination into real drawings and models.
                </p>
              </motion.div>

              {/* Public Speaking Box */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-3 h-24 bg-brand-yellow/20 -skew-x-12"></div>
                <h3 className="font-display text-lg text-brand-yellow mb-2 flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-yellow-600" /> Storytelling & Communication
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  "Vanshika loves talking, sharing stories, making friends, and bringing energy to every conversation." I love meeting new people and speaking up with confidence!
                </p>
              </motion.div>

              {/* Hobbies Quick list */}
              <div className="bg-[#fffdf0] border border-amber-200 rounded-xl p-4 text-center">
                <span className="font-display text-xs text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Vanshika's Motto</span>
                <p className="font-display text-sm text-amber-700 italic mt-2">"Never lose your spark of curiosity!"</p>
              </div>

            </div>

            {/* Right: Skating Section (Rolling Towards New Adventures) */}
            <div className="md:col-span-6 flex flex-col gap-6 bg-white border border-stone-200 rounded-2xl p-6 shadow-md relative">
              <span className="washi-tape-pink absolute -top-4 right-6 w-24 h-6 rotate-2 z-10 text-[9px] font-bold text-pink-700 pt-1 text-center">
                GO FAST!
              </span>

              <div className="text-center md:text-left">
                <h3 className="font-display text-xl text-brand-blue flex items-center justify-center md:justify-start gap-2 mb-1">
                  Rolling Towards New Adventures ⚡
                </h3>
                <p className="text-xs text-slate-500 mb-4">I love putting on my roller skates and speeding down paths!</p>
              </div>

              {/* Action photo/illustration */}
              <div 
                onClick={() => setLightboxImage({
                  src: "/images/skating_adventure.png",
                  title: "Rolling Towards New Adventures!",
                  category: "Skating",
                  description: "Roller skating is my favorite active hobby. I practice in the park, learning to balance, steer, and speed safely with my helmet and guards!"
                })}
                className="relative cursor-pointer overflow-hidden rounded-xl border border-stone-200 shadow-inner group aspect-video bg-blue-50"
              >
                <img 
                  src="/images/skating_adventure.png" 
                  alt="Vanshika Skating" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 px-3 py-1.5 rounded-full text-xs font-bold text-brand-blue shadow-md flex items-center gap-1">
                    🔍 Zoom Illustration
                  </span>
                </div>
              </div>

              {/* Achievements cards list */}
              <div className="space-y-3 mt-2">
                {skatingAchievements.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3 items-start p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-all bg-slate-50/50">
                      <div className={`p-2 rounded-lg shrink-0 ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-display text-xs font-bold text-slate-800">{item.title}</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        ) : (
          /* SCHOOL LIFE TAB */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: School identity card */}
            <div className="md:col-span-5 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
              {/* Cute stickers in card background */}
              <div className="absolute -bottom-6 -right-6 text-green-200/50 pointer-events-none">
                <School className="w-32 h-32" />
              </div>

              <div>
                <div className="bg-brand-green/20 text-brand-green text-[10px] font-bold px-3 py-1 rounded-full w-fit uppercase mb-4">
                  My School
                </div>

                <h3 className="font-display text-2xl text-emerald-800 leading-tight mb-2">
                  St. John's Senior Secondary School
                </h3>
                <p className="font-display text-lg text-emerald-600 font-semibold mb-6 flex items-center gap-1.5">
                  Firozabad 📍
                </p>

                <div className="space-y-3.5 relative z-10">
                  <div className="bg-white/80 p-3 rounded-xl border border-green-100 shadow-sm">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Standard</span>
                    <span className="font-display text-sm font-bold text-slate-700">Class 5th (5th Standard)</span>
                  </div>
                  <div className="bg-white/80 p-3 rounded-xl border border-green-100 shadow-sm">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Favorite Subject</span>
                    <span className="font-display text-sm font-bold text-slate-700">Drawing & Art Class 🎨</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-xs text-slate-500 italic bg-white/50 p-2.5 rounded border border-green-100 text-center">
                📚 Studying hard and having fun with friends every day!
              </div>

            </div>

            {/* Right: School highlights memo board */}
            <div className="md:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl text-slate-800 flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-brand-green" /> School Life Highlights
                </h3>

                <div className="space-y-4">
                  {schoolHighlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className={`p-4 rounded-xl border-l-4 border bg-stone-50/50 flex gap-4 ${item.color}`}>
                        <div className="p-2.5 bg-white rounded-lg border border-slate-100 shadow-sm shrink-0">
                          <Icon className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <h4 className="font-display text-sm font-bold text-slate-800">{item.title}</h4>
                          <p className="text-xs text-slate-600 leading-normal mt-1">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-center text-[10px] text-slate-400 mt-6 border-t border-slate-100 pt-4">
                ★ Dedicated to learning, friendship, and happy school memories.
              </div>

            </div>

          </div>
        )}

      </div>

      <Lightbox
        isOpen={lightboxImage !== null}
        onClose={() => setLightboxImage(null)}
        image={lightboxImage}
      />
    </section>
  );
}
