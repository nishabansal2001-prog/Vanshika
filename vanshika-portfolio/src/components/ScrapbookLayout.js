"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  User, 
  Palette, 
  Heart, 
  Cake, 
  Image, 
  BookOpen,
  Volume2,
  VolumeX
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrapbookLayout({ children }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  // We can include a soft happy background track or sound effects.
  // For now, let's toggle a state, but we will focus on beautiful visual effects.

  const navItems = [
    { id: "hero", label: "Welcome", icon: Sparkles, color: "bg-brand-pink text-white" },
    { id: "about", label: "About Me", icon: User, color: "bg-brand-blue text-white" },
    { id: "creations", label: "My Creations", icon: Palette, color: "bg-brand-yellow text-slate-800" },
    { id: "talents", label: "Talents & School", icon: BookOpen, color: "bg-brand-green text-white" },
    { id: "family", label: "Family Love", icon: Heart, color: "bg-red-400 text-white" },
    { id: "birthday", label: "Birthday Party", icon: Cake, color: "bg-brand-lavender text-white" },
    { id: "gallery", label: "Photo Album", icon: Image, color: "bg-pink-400 text-white" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#f4ebd0] scrapbook-paper pb-16 pt-6 overflow-hidden">
      
      {/* Background Decorative Doodles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Floating Butterfly 1 */}
        <motion.div 
          className="absolute text-brand-pink opacity-20 w-16 h-16"
          style={{ top: "15%", left: "5%" }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,50 C40,30 20,30 20,45 C20,60 40,60 50,52 C60,60 80,60 80,45 C80,30 60,30 50,50 Z" />
            <path d="M50,50 C45,35 30,35 35,48 C40,55 48,52 50,51 C52,52 60,55 65,48 C70,35 55,35 50,50 Z" fill="#ffd3e8" />
          </svg>
        </motion.div>

        {/* Floating Butterfly 2 */}
        <motion.div 
          className="absolute text-brand-blue opacity-25 w-12 h-12"
          style={{ top: "60%", right: "8%" }}
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
            rotate: [10, -5, 15, 10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,50 C40,30 20,30 20,45 C20,60 40,60 50,52 C60,60 80,60 80,45 C80,30 60,30 50,50 Z" />
          </svg>
        </motion.div>

        {/* Floating Star 1 */}
        <motion.div 
          className="absolute text-brand-yellow opacity-40 w-8 h-8"
          style={{ top: "35%", right: "12%" }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2L14.8,8.2L21.6,9L16.5,13.6L18,20.3L12,16.8L6,20.3L7.5,13.6L2.4,9L9.2,8.2L12,2Z" />
          </svg>
        </motion.div>

        {/* Floating Star 2 */}
        <motion.div 
          className="absolute text-brand-lavender opacity-30 w-10 h-10"
          style={{ top: "80%", left: "10%" }}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2L14.8,8.2L21.6,9L16.5,13.6L18,20.3L12,16.8L6,20.3L7.5,13.6L2.4,9L9.2,8.2L12,2Z" />
          </svg>
        </motion.div>

        {/* Cute Paint Splash */}
        <div className="absolute text-pink-100 opacity-20 w-48 h-48 -rotate-12" style={{ top: "5%", right: "2%" }}>
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M30,50 C20,40 10,60 15,70 C20,80 40,90 60,85 C80,80 95,60 90,40 C85,20 60,10 45,25 C30,40 40,60 30,50 Z" />
          </svg>
        </div>

        {/* Cute Crayon/Doodle Splash */}
        <div className="absolute text-blue-100 opacity-25 w-64 h-64 rotate-45" style={{ bottom: "2%", left: "-5%" }}>
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M20,60 C40,40 60,20 80,40 C100,60 80,80 60,80 C40,80 0,80 20,60 Z" />
          </svg>
        </div>
      </div>

      {/* Main Binder Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row gap-6">
        
        {/* Left Spiral Binding Rings (Visible on Desktop only) */}
        <div className="hidden lg:flex flex-col justify-around absolute left-0 top-16 bottom-16 w-8 z-20 pointer-events-none">
          {Array.from({ length: 15 }).map((_, idx) => (
            <div key={idx} className="w-10 h-6 bg-slate-300 rounded-full border-r-4 border-slate-400 opacity-90 shadow-md transform -translate-x-3 flex items-center justify-end pr-1">
              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Main Scrapbook Page */}
        <div className="w-full lg:w-[94%] bg-[#fffcf5] border border-stone-200 rounded-2xl shadow-xl overflow-hidden relative">
          
          {/* Header Banner - Playful Washi Tape */}
          <div className="h-6 w-full bg-gradient-to-r from-brand-pink via-brand-yellow to-brand-blue relative z-10 flex items-center justify-between px-6">
            <div className="text-[10px] font-bold text-white tracking-widest uppercase">★ vanshika's digital memories ★</div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block"></span>
            </div>
          </div>

          {/* Children Sections */}
          <div className="relative">
            {children}
          </div>
        </div>

        {/* Right Sticky Note Navigation Tabs (Desktop Floating Sidebar, Mobile Bottom Bar) */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 border-t border-slate-100 py-2 px-4 flex justify-around items-center z-50 md:sticky md:top-6 md:bottom-auto md:bg-transparent md:border-0 md:p-0 md:flex-col md:gap-3 md:w-32 md:h-fit shrink-0">
          
          <div className="hidden md:block text-center mb-1 bg-[#fff8db] border border-amber-200 p-2 rounded-lg rotate-3 shadow-sm">
            <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Quick Jump</p>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  flex flex-col items-center justify-center py-2 px-1 w-12 md:w-28 md:py-3.5 
                  rounded-xl md:rounded-r-2xl md:rounded-l-lg border border-slate-200/80 md:border-l-4 
                  shadow-sm transition-all duration-300 transform 
                  ${isActive 
                    ? `${item.color} scale-110 -translate-y-1 md:translate-y-0 md:translate-x-2 font-bold shadow-md` 
                    : "bg-white hover:bg-slate-50 text-slate-600 scale-100 hover:-translate-y-0.5"
                  }
                `}
                style={{
                  borderLeftColor: isActive ? "transparent" : "inherit"
                }}
              >
                <Icon className={`w-5 h-5 ${isActive ? "animate-pulse" : "text-slate-500"}`} />
                <span className="text-[9px] md:text-xs mt-1 text-center font-display leading-tight">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Floating Sparkles & Heart particles overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {/* Simple twinkling sparkle elements */}
        {Array.from({ length: 4 }).map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute text-brand-yellow w-4 h-4"
            style={{
              top: `${20 + idx * 20}%`,
              left: `${10 + (idx % 2) * 70}%`
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2 + idx,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </div>
  );
}
