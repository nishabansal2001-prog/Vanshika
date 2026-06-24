"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import Lightbox from "./Lightbox";

export default function FamilyLove() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const familyPhotos = [
    {
      id: 0,
      src: "/images/vanshika_family2.jpg",
      title: "Family Trip Memory",
      category: "Family Moments",
      description: "A beautiful memory of my parents, siblings, and me standing together on a family outing. We love exploring historical places and traveling!",
      rotation: "-2deg",
      className: "w-48 h-40 sm:w-64 sm:h-48 z-10 hover:z-30"
    },
    {
      id: 1,
      src: "/images/vanshika_family1.jpg",
      title: "Recess on the Sofa!",
      category: "Family Moments",
      description: "Sitting comfortably with my loving mother and sweet brother. I am wearing a pretty yellow dress!",
      rotation: "3deg",
      className: "w-48 h-40 sm:w-60 sm:h-48 z-20 hover:z-30"
    },
    {
      id: 2,
      src: "/images/vanshika_baby1.jpg",
      title: "Little Baby Vanshika",
      category: "Childhood Memory",
      description: "Being held in safe arms when I was a tiny baby. This photo makes me smile every time I see it!",
      rotation: "-4deg",
      className: "w-32 h-36 sm:w-44 sm:h-48 z-15 hover:z-30"
    },
    {
      id: 3,
      src: "/images/vanshika_baby2.jpg",
      title: "Baby Scholar Glasses",
      category: "Fun Times",
      description: "When I was a little toddler, I loved trying on glasses and pretending to read big books. Too cute!",
      rotation: "4deg",
      className: "w-32 h-36 sm:w-44 sm:h-48 z-10 hover:z-30"
    }
  ];

  const handleOpenLightbox = (id) => {
    setLightboxIndex(id);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % familyPhotos.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + familyPhotos.length) % familyPhotos.length);
  };

  return (
    <section 
      id="family" 
      className="py-16 px-6 border-t border-stone-200/80 bg-gradient-to-b from-bg-lavender via-white to-bg-pink"
    >
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heartfelt text card */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
            <span className="washi-tape absolute -top-8 left-1/2 lg:left-10 transform -translate-x-1/2 lg:translate-x-0 w-44 h-8 -rotate-2 z-10 text-xs font-bold text-pink-700 pt-1 text-center">
              MY LOVING FAMILY
            </span>

            <div className="mt-4">
              <h2 className="font-display text-3xl sm:text-4xl text-slate-800 flex items-center justify-center lg:justify-start gap-2.5">
                The Heart of Our Family <Heart className="w-7 h-7 text-red-500 fill-red-500 animate-pulse" />
              </h2>
              <p className="text-slate-500 text-sm mt-2">Home is where my heart sparkles brightest!</p>
            </div>

            <motion.div 
              whileHover={{ rotate: -0.5 }}
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-md relative overflow-hidden text-slate-600 leading-relaxed text-sm sm:text-base"
            >
              {/* Heart doodle in corner */}
              <div className="absolute -bottom-6 -right-6 text-pink-100 pointer-events-none">
                <Heart className="w-24 h-24 fill-pink-50" />
              </div>

              <p className="relative z-10">
                "Vanshika is one of the most lovable members of our family. Her smile lights up every gathering, her laughter brings happiness to everyone around her, and her caring nature makes her special to all who know her."
              </p>

              <div className="mt-6 flex items-center justify-center lg:justify-start gap-2.5 text-brand-pink font-display text-sm font-bold">
                <span>❤️ Mom • Dad • Brother • Me ❤️</span>
              </div>
            </motion.div>

            {/* Polaroid note sticker */}
            <div className="bg-yellow-50 border border-yellow-200/60 p-4 rounded-xl shadow-inner text-amber-800 text-xs text-center max-w-sm mx-auto lg:mx-0">
              💡 **Fun Fact:** The baby photos show how much I've grown! My smile has stayed exactly the same.
            </div>

          </div>

          {/* Right Column: Photo Album Wall Collage */}
          <div className="lg:col-span-7 flex flex-wrap justify-center items-center gap-6 relative min-h-[350px] sm:min-h-[420px]">
            
            {/* Collage board background decoration */}
            <div className="absolute inset-0 border-2 border-dashed border-stone-300/40 rounded-3xl pointer-events-none bg-stone-50/30"></div>

            {familyPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9, rotate: photo.rotation }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                onClick={() => handleOpenLightbox(photo.id)}
                className={`polaroid cursor-pointer absolute ${photo.className}`}
                style={{
                  // Position coordinates to overlay them like a real physical collage
                  top: idx === 0 ? "5%" : idx === 1 ? "15%" : idx === 2 ? "52%" : "48%",
                  left: idx === 0 ? "5%" : idx === 1 ? "42%" : idx === 2 ? "12%" : "52%",
                  transform: `rotate(${photo.rotation})`
                }}
              >
                {/* Washi tape accents on some pictures */}
                {idx % 2 === 0 && (
                  <div className="washi-tape-yellow absolute -top-3 left-1/4 w-16 h-4 rotate-3 opacity-80 z-20"></div>
                )}
                {idx % 2 === 1 && (
                  <div className="washi-tape-purple absolute -top-3 right-1/4 w-16 h-4 -rotate-3 opacity-80 z-20"></div>
                )}

                <div className="w-full h-[82%] overflow-hidden rounded bg-slate-100 border border-slate-200/30">
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[10px] text-center font-display text-slate-700 mt-2 truncate max-w-full">
                  {photo.title}
                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>

      <Lightbox
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        image={familyPhotos[lightboxIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
