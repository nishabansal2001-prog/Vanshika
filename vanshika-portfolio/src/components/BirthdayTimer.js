"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Send, Gift, Calendar, Sparkles } from "lucide-react";

export default function BirthdayTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [candlesLit, setCandlesLit] = useState(Array(10).fill(true)); // 10 candles for turning 10!
  const [wishes, setWishes] = useState([
    { text: "Happy Birthday dear Vanshika! Keep smiling, sketching, and making us proud! - Mom & Dad ❤️", color: "bg-pink-100 border-pink-200" },
    { text: "To the coolest, most talkative sister in the world! Let's eat lots of cake and play! - Your Brother 🎮", color: "bg-blue-100 border-blue-200" },
    { text: "Have an amazing birthday Vanshika! Let's race on our skates soon! - Aarav (Friend) ⛸️", color: "bg-yellow-100 border-yellow-200" },
    { text: "Wishing you a happy birthday full of creativity, drawings, and 3D pen models! - Class Teacher 🎒", color: "bg-green-100 border-green-200" }
  ]);
  const [newWish, setNewWish] = useState("");
  const [isBirthday, setIsBirthday] = useState(false);

  // Future-proof birthday countdown
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const currentYear = new Date().getFullYear();
      let target = new Date(`July 2, ${currentYear} 00:00:00`).getTime();
      
      // If today is past July 2, target July 2 of next year
      if (now > target) {
        target = new Date(`July 2, ${currentYear + 1} 00:00:00`).getTime();
      }

      const difference = target - now;
      
      // Check if it is currently her birthday (July 2)
      const today = new Date();
      if (today.getDate() === 2 && today.getMonth() === 6) {
        setIsBirthday(true);
      } else {
        setIsBirthday(false);
      }

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerBirthdayBlast = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff85a2", "#4cc9f0", "#ffcf56"]
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff85a2", "#4cc9f0", "#ffcf56"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleBlowCandle = (index) => {
    const updated = [...candlesLit];
    updated[index] = false;
    setCandlesLit(updated);

    // If all candles blown out
    if (updated.every(c => c === false)) {
      triggerBirthdayBlast();
      // Relight after a delay
      setTimeout(() => {
        setCandlesLit(Array(10).fill(true));
      }, 5000);
    } else {
      // Tiny burst
      confetti({
        particleCount: 15,
        spread: 30,
        origin: { y: 0.8 }
      });
    }
  };

  const handlePostWish = (e) => {
    e.preventDefault();
    if (!newWish.trim()) return;

    const colors = [
      "bg-pink-100 border-pink-200",
      "bg-blue-100 border-blue-200",
      "bg-yellow-100 border-yellow-200",
      "bg-green-100 border-green-200",
      "bg-purple-100 border-purple-200"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setWishes([...wishes, { text: `${newWish} 🎈`, color: randomColor }]);
    setNewWish("");

    // Trigger success confetti
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <section 
      id="birthday" 
      className="py-16 px-6 border-t border-stone-200/80 bg-gradient-to-b from-bg-pink via-white to-bg-yellow relative"
    >
      
      {/* Floating Birthday Balloons */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute opacity-35"
            style={{
              bottom: "-10%",
              left: `${15 + idx * 18}%`,
              width: "40px"
            }}
            animate={{
              y: ["100vh", "-120vh"],
              x: [0, idx % 2 === 0 ? 30 : -30, 0]
            }}
            transition={{
              duration: 15 + idx * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 2
            }}
          >
            <div 
              className={`w-10 h-12 rounded-t-full rounded-b-[40px] relative shadow-inner
                ${idx === 0 ? "bg-red-400" : idx === 1 ? "bg-brand-blue" : idx === 2 ? "bg-brand-yellow" : idx === 3 ? "bg-brand-green" : "bg-purple-400"}
              `}
            >
              {/* Balloon knot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black/15 rotate-45"></div>
              {/* Balloon string */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-slate-400/50"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-10 relative">
          <span className="washi-tape-pink absolute -top-8 left-1/2 transform -translate-x-1/2 w-48 h-8 rotate-1 z-10 text-xs font-bold text-pink-700 pt-1 tracking-widest uppercase">
            BIRTHDAY PARTY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-800 mt-2">Birthday Celebration!</h2>
          <p className="text-slate-500 text-sm mt-2">Counting down to my special day and blowing out virtual candles!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Countdown Timer & Cake Blowing */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            
            {/* Timer card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-md text-center relative overflow-hidden">
              <div className="absolute top-2 right-4 text-brand-pink/30 animate-pulse">
                <Calendar className="w-8 h-8" />
              </div>

              <h3 className="font-display text-lg text-slate-700 mb-4">
                {isBirthday ? "🎉 TODAY IS MY BIRTHDAY! 🎉" : "⏳ Countdown to 2 July (Birthday)"}
              </h3>

              {isBirthday ? (
                <div className="py-6">
                  <motion.h4 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="font-display text-4xl text-brand-pink mb-2"
                  >
                    Happy Birthday Vanshika!
                  </motion.h4>
                  <p className="text-slate-500 text-xs">Today I turn 10 years old! Time to celebrate!</p>
                  <button 
                    onClick={triggerBirthdayBlast}
                    className="bg-brand-pink text-white font-bold px-5 py-2.5 rounded-full mt-4 shadow hover:bg-brand-pink/90 transition"
                  >
                    Trigger Confetti Burst! 🎈
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
                  {[
                    { val: timeLeft.days, label: "Days" },
                    { val: timeLeft.hours, label: "Hours" },
                    { val: timeLeft.minutes, label: "Mins" },
                    { val: timeLeft.seconds, label: "Secs" }
                  ].map((unit, idx) => (
                    <div key={idx} className="bg-bg-pink border border-pink-100 rounded-xl p-3 shadow-inner">
                      <span className="font-display text-2xl md:text-3xl text-brand-pink block font-bold leading-none">
                        {String(unit.val).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-1 uppercase font-bold tracking-wider">{unit.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Virtual Cake Card */}
            <div className="bg-[#fffdf2] border border-amber-200 rounded-2xl p-6 shadow-md text-center flex flex-col items-center justify-between">
              <div>
                <h4 className="font-display text-base text-slate-800">🎂 Blow Out the Candles! 🎂</h4>
                <p className="text-[10px] text-slate-400 leading-tight mt-1 max-w-xs mx-auto">
                  Click on each candle's flame to extinguish it. Blow all 10 to make a wish!
                </p>
              </div>

              {/* Interactive Cake Graphic */}
              <div className="relative my-6 select-none scale-90 sm:scale-100">
                {/* 10 Candles */}
                <div className="flex gap-2 justify-center absolute -top-10 left-1/2 -translate-x-1/2 w-48 z-20">
                  {candlesLit.map((lit, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => lit && handleBlowCandle(idx)}
                      className="flex flex-col items-center cursor-pointer group"
                    >
                      {/* Flame */}
                      {lit ? (
                        <motion.div
                          animate={{ 
                            scale: [1, 1.15, 0.9, 1],
                            y: [0, -2, 0]
                          }}
                          transition={{ repeat: Infinity, duration: 0.6 + idx * 0.05 }}
                          onClick={() => handleBlowCandle(idx)}
                          className="w-3 h-5 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full shadow-lg origin-bottom"
                        ></motion.div>
                      ) : (
                        <div className="w-3 h-5 flex justify-center">
                          <span className="text-[10px] text-slate-400/80 animate-fade-out">💨</span>
                        </div>
                      )}
                      
                      {/* Candle Body */}
                      <div className={`w-2.5 h-10 border border-slate-200/50 rounded-t shadow-sm ${
                        idx % 3 === 0 ? "bg-red-300" : idx % 3 === 1 ? "bg-brand-blue" : "bg-purple-300"
                      }`}></div>
                    </div>
                  ))}
                </div>

                {/* Cake Body (SVG / styled divs) */}
                <div className="w-56 h-16 bg-pink-100 border border-pink-200 rounded-t-[15px] relative shadow-inner z-10 flex items-center justify-center">
                  <div className="w-full h-3 bg-pink-200 absolute top-4"></div>
                  <span className="font-display text-[10px] text-pink-600 font-bold uppercase tracking-wider">Turning 10 Years Old!</span>
                </div>
                <div className="w-60 h-8 bg-amber-100 border border-amber-200 rounded-b shadow-sm relative z-10 flex items-center justify-between px-3">
                  <span className="text-xl">🍓</span>
                  <span className="text-xl">🍓</span>
                  <span className="text-xl">🍓</span>
                  <span className="text-xl">🍓</span>
                </div>
                {/* Cake Stand */}
                <div className="w-64 h-3 bg-slate-300 rounded-full shadow-md z-0 mx-auto -mt-1"></div>
              </div>

              <div className="text-[10px] text-slate-500 italic bg-white/60 px-3 py-1.5 rounded border border-amber-100">
                Clicking the candles triggers sparkles. Blow them all out!
              </div>

            </div>

          </div>

          {/* Right Block: Birthday Wishes Wall */}
          <div className="lg:col-span-6 bg-amber-50/40 border border-stone-200 rounded-2xl p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
            {/* Corkboard back decoration */}
            <div className="absolute inset-0 bg-amber-900/[0.02] pointer-events-none"></div>

            <div>
              <h3 className="font-display text-lg text-slate-800 flex items-center gap-1.5 mb-4 border-b border-dashed border-stone-300 pb-2">
                📌 Birthday Wishes Wall
              </h3>

              {/* Wishes list board */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-1">
                {wishes.map((wish, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`p-3.5 rounded-lg border shadow-sm text-xs font-medium leading-relaxed rotate-${idx % 2 === 0 ? "1" : "[-1]"} ${wish.color}`}
                  >
                    {/* Push pin graphic */}
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full mx-auto -mt-2.5 shadow-sm border border-red-600"></div>
                    <p className="mt-1.5">{wish.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Input Form to post wish */}
            <form onSubmit={handlePostWish} className="mt-6 border-t border-dashed border-stone-300 pt-4 flex gap-2">
              <input
                type="text"
                value={newWish}
                onChange={(e) => setNewWish(e.target.value)}
                placeholder="Write a sweet wish for Vanshika... ❤️"
                className="flex-1 bg-white border border-slate-200 rounded-full px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-brand-pink shadow-inner"
              />
              <button
                type="submit"
                className="bg-brand-pink hover:bg-brand-pink/90 text-white p-2.5 rounded-full shadow hover:shadow-md transition shrink-0 flex items-center justify-center"
                aria-label="Send wish"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
