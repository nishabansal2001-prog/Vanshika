"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Brush, Zap, Layers } from "lucide-react";
import Lightbox from "./Lightbox";

export default function CreativeWorld() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const creations = [
    {
      id: 0,
      title: "A Happy Rainbow Home",
      category: "drawing",
      categoryLabel: "Arts & Crafts",
      src: "/images/art_drawing.png",
      description: "My colorful crayon and pencil drawing of a cozy house, featuring a smiling sun, clouds, and a giant rainbow stretching across the sky. Created in class!",
      rotation: "-2deg"
    },
    {
      id: 1,
      title: "Summer Flower Garden",
      category: "painting",
      categoryLabel: "Paintings",
      src: "/images/art_painting.png",
      description: "A watercolor painting showing a garden blooming with red, pink, and yellow flowers under the warm summer sun. Butterflies and bees are flying around!",
      rotation: "3deg"
    },
    {
      id: 2,
      title: "3D Pen Butterfly Model",
      category: "3dpen",
      categoryLabel: "3D Pen Projects",
      src: "/images/pen_art_model.png",
      description: "A colorful, multi-dimensional butterfly structure made with bright plastic filaments using a 3D drawing pen.",
      rotation: "-1deg"
    },
    {
      id: 3,
      title: "3D Pen Tiny Toy House",
      category: "3dpen",
      categoryLabel: "3D Pen Projects",
      src: "/images/pen_art_model.png",
      description: "A miniature toy house made of plastic wires. I love building tiny structures that stand up on my study desk!",
      rotation: "2deg"
    },
    {
      id: 4,
      title: "3D Pen Ice Cream Cone",
      category: "3dpen",
      categoryLabel: "3D Pen Projects",
      src: "/images/vanshika_icecream_3d.jpg",
      description: "A delicious-looking three-scoop ice cream cone model that I created with my 3D drawing pen! It has strawberry red, vanilla yellow, and orange layers.",
      rotation: "-3deg"
    },
    {
      id: 5,
      title: "Vansu Purple Crown",
      category: "3dpen",
      categoryLabel: "3D Pen Projects",
      src: "/images/vanshika_crown_3d.jpg",
      description: "A purple queen crown keychain made of plastic wire using my 3D pen, with my nickname 'VANSU' written right in the center!",
      rotation: "1deg"
    },
    {
      id: 6,
      title: "Happy Birthday Buaa Card",
      category: "drawing",
      categoryLabel: "Arts & Crafts",
      src: "/images/vanshika_birthday_card.jpg",
      description: "A beautiful handmade greeting card I drew for my Buaa's birthday, complete with balloons, gift boxes, and a chocolate cake!",
      rotation: "-1deg"
    },
    {
      id: 7,
      title: "3D Pen Golden Spoon",
      category: "3dpen",
      categoryLabel: "3D Pen Projects",
      src: "/images/vanshika_spoon_3d.jpg",
      description: "A golden spoon model created with my 3D drawing pen. It has a beautiful texture and looks like it is made of copper or gold wire!",
      rotation: "2deg"
    },
    {
      id: 8,
      title: "3D Pen Purple Bicycle",
      category: "3dpen",
      categoryLabel: "3D Pen Projects",
      src: "/images/vanshika_bicycle_3d.jpg",
      description: "A mini purple bicycle sculpture made with fine plastic filaments. It has two black wheels and tiny handlebars!",
      rotation: "-2deg"
    },
    {
      id: 9,
      title: "Vanshika V Keychain",
      category: "3dpen",
      categoryLabel: "3D Pen Projects",
      src: "/images/vanshika_keychain_v_3d.jpg",
      description: "A cool letter 'V' keychain that I created! It stands for Vanshika, decorated in green and yellow, with a red base nameplate.",
      rotation: "3deg"
    },
    {
      id: 10,
      title: "3D Pen Miniature Shoe",
      category: "3dpen",
      categoryLabel: "3D Pen Projects",
      src: "/images/vanshika_shoe_3d.jpg",
      description: "A tiny grey shoe model with red collar trim that I made with my 3D drawing pen. It is fully hollow inside, just like a real sneaker!",
      rotation: "-3deg"
    }
  ];

  const filteredCreations = activeTab === "all" 
    ? creations 
    : creations.filter(item => {
        if (activeTab === "art") return item.category === "drawing" || item.category === "painting";
        return item.category === activeTab;
      });

  const handleOpenLightbox = (id) => {
    const index = filteredCreations.findIndex(item => item.id === id);
    setLightboxIndex(index);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredCreations.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredCreations.length) % filteredCreations.length);
  };

  return (
    <section 
      id="creations" 
      className="py-16 px-6 border-t border-stone-200/80 bg-gradient-to-b from-bg-yellow via-white to-bg-green"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12 relative">
          <span className="washi-tape absolute -top-8 left-1/2 transform -translate-x-1/2 w-48 h-8 rotate-1 z-10 text-xs font-bold text-pink-700 pt-1 tracking-widest uppercase">
            My Creative World
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-800 mt-2">Check Out My Art & Models!</h2>
          <p className="text-slate-500 text-sm mt-2">I love bringing ideas to life with drawings, paints, and 3D pen magic.</p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {[
            { id: "all", label: "🎨 All Creations", icon: Layers, color: "hover:bg-amber-50 active:bg-amber-100" },
            { id: "art", label: "🖌️ Drawings & Paintings", icon: Brush, color: "hover:bg-pink-50 active:bg-pink-100" },
            { id: "3dpen", label: "🖋️ 3D Pen Creations", icon: Zap, color: "hover:bg-blue-50 active:bg-blue-100" }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-1.5 px-5 py-2.5 rounded-full font-display text-sm border shadow-sm transition-all duration-300
                  ${isActive 
                    ? "bg-slate-800 text-white border-slate-800 scale-105" 
                    : `bg-white text-slate-600 border-slate-200 ${tab.color}`
                  }
                `}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Polaroid Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center max-w-4xl mx-auto"
        >
          {filteredCreations.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Tape Graphic */}
              <div 
                className={`washi-tape absolute -top-5 left-1/2 transform -translate-x-1/2 w-28 h-6 z-20 opacity-80
                  ${item.category === "3dpen" ? "washi-tape-blue" : "washi-tape-yellow"}
                `}
                style={{ "--rotation": item.rotation }}
              ></div>

              {/* Polaroid Frame */}
              <div 
                onClick={() => handleOpenLightbox(item.id)}
                className="polaroid cursor-pointer group"
                style={{ "--rotation": item.rotation }}
              >
                <div className="relative w-72 h-64 overflow-hidden rounded bg-slate-100 border border-slate-200/40">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-2 left-2 bg-slate-900/75 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase">
                    {item.categoryLabel}
                  </span>
                </div>
                
                {/* Title */}
                <h4 className="font-display text-base text-slate-800 mt-3 text-center leading-none">
                  {item.title}
                </h4>
                
                {/* description */}
                <p className="text-[10px] text-slate-400 text-center font-sans mt-1.5 leading-tight max-w-[260px] mx-auto line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Pen creations section footer promo block */}
        {activeTab !== "art" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl max-w-2xl mx-auto text-center rotate-1 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-8 h-8 bg-blue-200/50 rounded-bl-full flex items-center justify-center font-bold text-xs text-blue-700">★</div>
            <h3 className="font-display text-lg text-blue-800 mb-1">
              "My Amazing 3D Pen Creations"
            </h3>
            <p className="text-xs text-blue-600 leading-relaxed max-w-lg mx-auto">
              Using colored plastic that hardens instantly, I create three-dimensional models! It feels like drawing in mid-air. I have built butterflies, small structures, and various ornaments.
            </p>
          </motion.div>
        )}

      </div>

      {/* Lightbox for creations */}
      <Lightbox
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        image={filteredCreations[lightboxIndex]}
        onNext={filteredCreations.length > 1 ? handleNext : null}
        onPrev={filteredCreations.length > 1 ? handlePrev : null}
      />
    </section>
  );
}
