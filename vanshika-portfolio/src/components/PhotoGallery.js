"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Layers, Heart, School, Sparkles, Award } from "lucide-react";
import Lightbox from "./Lightbox";

export default function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const galleryItems = [
    {
      id: 0,
      src: "/images/vanshika_wig.jpg",
      title: "Wiggin' Out! 🤪",
      categories: ["school", "fun", "birthday"],
      categoryLabel: "Fun Times",
      description: "Dressing up in a bright red wig and hat for a fun party event. I love being silly!",
      rotation: "-2deg"
    },
    {
      id: 1,
      src: "/images/vanshika_family1.jpg",
      title: "Warm Family Hugs",
      categories: ["family", "fun"],
      categoryLabel: "Family Moments",
      description: "Chilling on the sofa with my awesome mother and big brother. Wearing my favoritest yellow outfit!",
      rotation: "3deg"
    },
    {
      id: 2,
      src: "/images/vanshika_family2.jpg",
      title: "Outdoors Trip!",
      categories: ["family", "fun"],
      categoryLabel: "Family Moments",
      description: "A trip to a historical site in Agra/Delhi. Traveling and walking around with my family is the best!",
      rotation: "-1deg"
    },
    {
      id: 3,
      src: "/images/vanshika_baby1.jpg",
      title: "Baby Steps 👶",
      categories: ["family", "childhood"],
      categoryLabel: "Childhood",
      description: "A throwback picture of me when I was just a tiny, cute baby. My family loved cuddling me!",
      rotation: "2deg"
    },
    {
      id: 4,
      src: "/images/vanshika_baby2.jpg",
      title: "Pretend Scholar",
      categories: ["fun", "childhood"],
      categoryLabel: "Fun Times",
      description: "Wearing oversized glasses and reading a book as a toddler. I've always been super curious!",
      rotation: "-3deg"
    },
    {
      id: 5,
      src: "/images/art_drawing.png",
      title: "My Rainbow Home Drawing",
      categories: ["art", "school"],
      categoryLabel: "Art Creations",
      description: "Crayon and colored pencil illustration showing a house under a giant rainbow. Drew this at school!",
      rotation: "1deg"
    },
    {
      id: 6,
      src: "/images/art_painting.png",
      title: "Spring Watercolor Garden",
      categories: ["art"],
      categoryLabel: "Art Creations",
      description: "A watercolor canvas of a flowery meadow with butterflies and bees buzzing around.",
      rotation: "-2deg"
    },
    {
      id: 7,
      src: "/images/pen_art_model.png",
      title: "My 3D Pen Butterfly",
      categories: ["art"],
      categoryLabel: "3D Pen Projects",
      description: "A plastic model butterfly I drew in mid-air using my colorful 3D pen wires.",
      rotation: "2deg"
    },
    {
      id: 8,
      src: "/images/skating_adventure.png",
      title: "Skating Adventures",
      categories: ["skating", "fun"],
      categoryLabel: "Skating",
      description: "Rolling through paths in Firozabad! Skating makes me feel like I am flying.",
      rotation: "-3deg"
    },
    {
      id: 9,
      src: "/images/vanshika_icecream_3d.jpg",
      title: "3D Pen Ice Cream",
      categories: ["art", "fun"],
      categoryLabel: "3D Pen Projects",
      description: "A yummy-looking three-scoop ice cream cone model that I created with my 3D drawing pen! It has strawberry red, vanilla yellow, and orange layers.",
      rotation: "-2deg"
    },
    {
      id: 10,
      src: "/images/vanshika_crown_3d.jpg",
      title: "3D Vansu Purple Crown",
      categories: ["art", "fun"],
      categoryLabel: "3D Pen Projects",
      description: "A purple queen crown keychain made of plastic wire using my 3D pen, with my nickname 'VANSU' written right in the center!",
      rotation: "1deg"
    },
    {
      id: 11,
      src: "/images/vanshika_toddler_saree.jpg",
      title: "Precious Saree Dressup",
      categories: ["childhood", "family", "fun"],
      categoryLabel: "Childhood",
      description: "Dressed up in a beautiful traditional blue lehenga/saree style as a toddler, holding a piece of paper. So sweet!",
      rotation: "-3deg"
    },
    {
      id: 12,
      src: "/images/vanshika_birthday_card.jpg",
      title: "Happy Birthday Buaa Drawing",
      categories: ["art", "school", "birthday"],
      categoryLabel: "Art Creations",
      description: "A beautiful handmade greeting card I drew for my Buaa's birthday, complete with balloons, gift boxes, and a chocolate cake!",
      rotation: "2deg"
    },
    {
      id: 13,
      src: "/images/vanshika_grid_collage.jpg",
      title: "My Joyful Life Collage",
      categories: ["family", "fun", "childhood", "skating"],
      categoryLabel: "Family Moments",
      description: "A compilation of 16 happy moments of me growing up: playing, amusement park rides, go-karts, and family pictures.",
      rotation: "-1deg"
    },
    {
      id: 14,
      src: "/images/vanshika_spoon_3d.jpg",
      title: "3D Pen Golden Spoon",
      categories: ["art"],
      categoryLabel: "3D Pen Projects",
      description: "A golden spoon model created with my 3D drawing pen. It has a beautiful texture and looks like it is made of copper or gold wire!",
      rotation: "2deg"
    },
    {
      id: 15,
      src: "/images/vanshika_bicycle_3d.jpg",
      title: "3D Pen Purple Bicycle",
      categories: ["art", "fun"],
      categoryLabel: "3D Pen Projects",
      description: "A mini purple bicycle sculpture made with fine plastic filaments. It has two black wheels and tiny handlebars!",
      rotation: "-2deg"
    },
    {
      id: 16,
      src: "/images/vanshika_keychain_v_3d.jpg",
      title: "Vanshika V Keychain",
      categories: ["art"],
      categoryLabel: "3D Pen Projects",
      description: "A cool letter 'V' keychain that I created! It stands for Vanshika, decorated in green and yellow, with a red base nameplate.",
      rotation: "3deg"
    },
    {
      id: 17,
      src: "/images/vanshika_shoe_3d.jpg",
      title: "3D Pen Miniature Shoe",
      categories: ["art"],
      categoryLabel: "3D Pen Projects",
      description: "A tiny grey shoe model with red collar trim that I made with my 3D drawing pen. It is fully hollow inside, just like a real sneaker!",
      rotation: "-3deg"
    }
  ];

  const filterOptions = [
    { id: "all", label: "✨ All Photos" },
    { id: "family", label: "👨‍👩‍👧 Family" },
    { id: "school", label: "🎒 School Days" },
    { id: "fun", label: "🎈 Fun Times" },
    { id: "birthday", label: "🎂 Birthday" },
    { id: "art", label: "🎨 Art & 3D Pen" },
    { id: "skating", label: "⛸️ Skating" },
    { id: "childhood", label: "👶 Childhood" }
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.categories.includes(activeFilter));

  const handleOpenLightbox = (id) => {
    const index = filteredItems.findIndex(item => item.id === id);
    setLightboxIndex(index);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section 
      id="gallery" 
      className="py-16 px-6 border-t border-stone-200/80 bg-gradient-to-b from-bg-lavender via-white to-bg-blue"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Sticky Note heading */}
        <div className="text-center mb-10 relative">
          <span className="washi-tape-purple absolute -top-8 left-1/2 transform -translate-x-1/2 w-48 h-8 -rotate-1 z-10 text-xs font-bold text-purple-800 pt-1 tracking-widest uppercase">
            PHOTO ALBUM
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-800 mt-2">My Photo Memories Gallery</h2>
          <p className="text-slate-500 text-sm mt-2">Flip through my album containing school days, family trips, art, and childhood memories!</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap max-w-3xl mx-auto">
          {filterOptions.map((opt) => {
            const isActive = activeFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`
                  px-4 py-2 rounded-full font-display text-xs sm:text-sm border shadow-sm transition-all duration-300
                  ${isActive 
                    ? "bg-brand-purple text-white border-brand-purple scale-105" 
                    : "bg-white text-slate-600 border-slate-200 hover:bg-purple-50"
                  }
                `}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Masonry Columns Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 md:columns-3 gap-6 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleOpenLightbox(item.id)}
                className="break-inside-avoid mb-6 relative group"
              >
                {/* Polaroid Frame */}
                <div 
                  className="polaroid cursor-pointer bg-white p-3 pb-8 rounded border border-slate-200/50 shadow-md group-hover:scale-[1.03] transition-all duration-300"
                  style={{ 
                    "--rotation": item.rotation,
                    transform: `rotate(${item.rotation})` 
                  }}
                >
                  {/* Washi Tape */}
                  <div className="washi-tape absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-4 rotate-1 opacity-70 z-20"></div>

                  <div className="w-full overflow-hidden rounded bg-slate-100 border border-slate-100">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full object-cover max-h-72"
                    />
                  </div>
                  
                  {/* Photo Title */}
                  <h4 className="font-display text-xs sm:text-sm text-slate-700 mt-3 text-center truncate">
                    {item.title}
                  </h4>
                  
                  {/* Category Tag */}
                  <div className="text-center mt-1">
                    <span className="inline-block bg-slate-100 text-slate-500 text-[8px] font-bold px-1.5 py-0.5 rounded">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white border border-stone-200 rounded-2xl max-w-sm mx-auto shadow-sm">
            <span className="text-4xl">📸</span>
            <p className="font-display text-slate-600 mt-2">No photos in this category yet!</p>
          </div>
        )}

      </div>

      {/* Lightbox for gallery images */}
      <Lightbox
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        image={filteredItems[lightboxIndex]}
        onNext={filteredItems.length > 1 ? handleNext : null}
        onPrev={filteredItems.length > 1 ? handlePrev : null}
      />
    </section>
  );
}
