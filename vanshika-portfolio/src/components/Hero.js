"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Star } from "lucide-react";

export default function Hero() {
  const triggerConfetti = () => {
    // School-friendly, bright, happy colors
    const colors = ["#ff85a2", "#4cc9f0", "#ffcf56", "#4ad66d", "#b79ced"];
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors
    });

    // Side bursts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
    }, 200);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    }, 200);
  };

  useEffect(() => {
    // Trigger on load after a brief delay for transition
    const timer = setTimeout(() => {
      triggerConfetti();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 px-6 overflow-hidden bg-gradient-to-b from-bg-pink via-white to-bg-blue"
    >
      {/* Background doodles specific to Hero */}
      <div className="absolute top-10 left-10 text-brand-pink/30 animate-wiggle">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-12 right-12 text-brand-blue/30 animate-float-medium">
        <Star className="w-10 h-10 fill-brand-blue/20" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Profile Photo as a Polaroid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative shrink-0"
        >
          {/* Washi Tape on Top */}
          <div 
            className="washi-tape absolute -top-5 left-1/2 transform -translate-x-1/2 w-32 h-8 z-20 text-center text-[10px] font-bold text-pink-700 pt-1 tracking-widest"
            style={{ "--rotation": "-4deg" }}
          >
            SMILE ALWAYS
          </div>

          {/* Polaroid Card */}
          <div 
            onClick={triggerConfetti}
            className="polaroid cursor-pointer relative group"
            style={{ "--rotation": "-3deg" }}
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded bg-slate-100">
              <img 
                src="/images/vanshika_wig.jpg" 
                alt="Vanshika Bansal"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {/* Confetti hover overlay hint */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/95 px-3 py-1.5 rounded-full text-xs font-bold text-brand-pink flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" /> Click Me!
                </span>
              </div>
            </div>
            {/* Polaroid caption */}
            <div className="text-center font-display text-lg text-slate-700 mt-4 leading-none select-none">
              Vanshika Bansal 🎈
            </div>
            <div className="text-center font-sans text-[10px] text-slate-400 mt-1 select-none">
              Class 5 • Age 9
            </div>
          </div>
        </motion.div>

        {/* Hero Bio Details */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
          
          {/* Playful Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-brand-pink/15 text-brand-pink text-xs font-bold px-3 py-1 rounded-full border border-brand-pink/25 flex items-center gap-1.5 mb-4"
          >
            <Star className="w-3.5 h-3.5 fill-brand-pink" /> 9 Years of Spreading Joy
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-slate-800 leading-tight mb-2"
          >
            Vanshika Bansal
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-lg sm:text-xl text-brand-blue tracking-wide mb-6 bg-brand-blue/10 px-4 py-1.5 rounded-lg border-l-4 border-brand-blue"
          >
            "Dream Big • Create More • Smile Always"
          </motion.p>

          {/* Intro Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 relative p-5 bg-white/70 border border-stone-200/60 rounded-2xl shadow-sm backdrop-blur-sm"
          >
            <div className="absolute -top-3 left-4 bg-brand-yellow px-2 py-0.5 text-[10px] font-bold text-yellow-800 rounded uppercase transform -rotate-1 select-none">
              My Story
            </div>
            Hello! I am Vanshika Bansal. I am 9 years old and studying in Class 5 at St. John's Senior Secondary School, Firozabad. I love creating art, making amazing 3D pen models, talking with everyone around me, and spreading happiness wherever I go.
          </motion.div>

          {/* Interactive CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <button 
              onClick={triggerConfetti}
              className="bg-brand-pink hover:bg-brand-pink/90 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Celebrate with Me!
            </button>
            <a 
              href="#about"
              className="bg-white hover:bg-slate-50 text-slate-700 font-bold px-6 py-3 rounded-full border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Flip Page to Read More 📖
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
