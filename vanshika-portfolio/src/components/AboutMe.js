"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Sparkles, 
  Smile, 
  MessageCircle, 
  Compass, 
  GraduationCap, 
  Award,
  Flame,
  Utensils,
  Shirt
} from "lucide-react";

export default function AboutMe() {
  const details = [
    { label: "My Name", value: "Vanshika Bansal" },
    { label: "Birth Year", value: "2016" },
    { label: "My Birthday", value: "2 July" },
    { label: "My Age", value: "9 Years" },
    { label: "My School", value: "St. John's Senior Secondary School, Firozabad" },
    { label: "Class", value: "5th Standard (Class 5)" }
  ];

  const qualities = [
    { name: "Creative", desc: "I love drawing, painting, and creating 3D models!", icon: Sparkles, color: "bg-pink-100 text-pink-600 border-pink-200" },
    { name: "Friendly", desc: "I make friends quickly and love sharing stories!", icon: Smile, color: "bg-blue-100 text-blue-600 border-blue-200" },
    { name: "Talkative", desc: "Talking brings energy to my day and happiness to others!", icon: MessageCircle, color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
    { name: "Curious Learner", desc: "I am always asking questions and discovering new things!", icon: Compass, color: "bg-green-100 text-green-600 border-green-200" },
    { name: "Family Favorite", desc: "I am the heart of my family, spreading love always!", icon: Heart, color: "bg-red-100 text-red-600 border-red-200" },
    { name: "Confident", desc: "I enjoy public speaking and expressing my ideas!", icon: Award, color: "bg-purple-100 text-purple-600 border-purple-200" },
    { name: "Fun Loving", desc: "I love skating, playing, and laughing all the time!", icon: Flame, color: "bg-orange-100 text-orange-600 border-orange-200" }
  ];

  const foods = [
    { 
      name: "Rajma Chawal", 
      desc: "Delicious red kidney beans with hot steamed rice - my absolute favorite!", 
      emoji: "🍲",
      color: "from-red-100 to-orange-100 border-orange-200"
    },
    { 
      name: "Idli", 
      desc: "Soft, fluffy steamed rice cakes served with warm sambar & coconut chutney.", 
      emoji: "🍥",
      color: "from-amber-50 to-amber-100 border-amber-200"
    },
    { 
      name: "Dosa", 
      desc: "Crispy, golden rice crêpes filled with delicious potato masala.", 
      emoji: "🥞",
      color: "from-yellow-100 to-amber-100 border-yellow-200"
    }
  ];

  const styles = [
    { name: "Shirts", desc: "Cute and bright collared shirts of all colors!", emoji: "👚", color: "bg-purple-50 border-purple-200" },
    { name: "Jeans", desc: "Stretchy, comfortable jeans that are perfect for playing!", emoji: "👖", color: "bg-blue-50 border-blue-200" }
  ];

  return (
    <section 
      id="about" 
      className="py-16 px-6 border-t border-stone-200/80 bg-gradient-to-b from-bg-blue via-white to-bg-yellow"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12 relative">
          <span className="washi-tape-yellow absolute -top-8 left-1/2 transform -translate-x-1/2 w-40 h-8 -rotate-1 z-10 text-xs font-bold text-amber-800 pt-1 tracking-widest">
            ALL ABOUT ME
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-800 mt-2">Get to Know Vanshika!</h2>
          <p className="text-slate-500 text-sm mt-2">A tiny bundle of big dreams, laughter, and endless creativity.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal details notebook */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Notebook Details */}
            <div className="scrapbook-notebook-lines border border-stone-200 rounded-2xl p-6 shadow-md relative overflow-hidden">
              {/* Binder Holes on side */}
              <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between py-6 w-4 pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="w-3.5 h-3.5 bg-slate-300 rounded-full border border-slate-400/50 shadow-inner"></div>
                ))}
              </div>

              <div className="pl-6">
                <h3 className="font-display text-xl text-brand-pink mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" /> My School & Profile
                </h3>

                <ul className="space-y-4">
                  {details.map((detail, idx) => (
                    <li key={idx} className="flex border-b border-dashed border-stone-300 pb-1 text-sm md:text-base">
                      <span className="font-bold text-slate-500 w-28 md:w-32 shrink-0">{detail.label}:</span>
                      <span className="text-slate-700 font-medium">{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Personality Doodles */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-md">
              <h3 className="font-display text-xl text-brand-blue mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> My Cheerfulness Qualities
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {qualities.map((q, idx) => {
                  const Icon = q.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className={`p-3.5 rounded-xl border flex items-start gap-2.5 ${q.color}`}
                    >
                      <Icon className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display text-sm font-semibold">{q.name}</h4>
                        <p className="text-[11px] leading-tight text-slate-600 mt-0.5">{q.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Favorite Things (Food cards & dress style) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Favorite Foods Card container */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-md relative">
              <div className="absolute -top-3 right-4 bg-brand-pink text-white text-[9px] font-bold px-2 py-0.5 rounded rotate-2 shadow uppercase">
                Yum Yum!
              </div>

              <h3 className="font-display text-xl text-brand-yellow flex items-center gap-2 mb-4">
                <Utensils className="w-5 h-5 text-brand-yellow" /> Favorite Foods I Love
              </h3>

              <div className="space-y-4">
                {foods.map((food, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-4 p-3 rounded-xl border bg-gradient-to-r ${food.color} shadow-sm`}
                  >
                    <div className="text-3xl bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-inner shrink-0">
                      {food.emoji}
                    </div>
                    <div>
                      <h4 className="font-display text-base text-slate-800">{food.name}</h4>
                      <p className="text-xs text-slate-600 leading-tight mt-0.5">{food.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Favorite Dress style polaroids */}
            <div className="bg-[#fffdf0] border border-stone-200 rounded-2xl p-6 shadow-md">
              <h3 className="font-display text-xl text-brand-green flex items-center gap-2 mb-4">
                <Shirt className="w-5 h-5 text-brand-green" /> My Dress Style
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {styles.map((style, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, rotate: idx === 0 ? -1 : 1 }}
                    className={`p-4 rounded-xl border ${style.color} shadow-sm text-center relative group overflow-hidden`}
                  >
                    <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">
                      {style.emoji}
                    </div>
                    <h4 className="font-display text-base text-slate-800">{style.name}</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-tight">{style.desc}</p>
                    
                    {/* Tiny tape graphic */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-slate-300/30 -rotate-3"></div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
