"use client";

import React, { useEffect } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ isOpen, onClose, image, onNext, onPrev }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // disable scroll
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset"; // restore scroll
    };
  }, [isOpen, onNext, onPrev, onClose]);

  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
        
        {/* Backdrop Close */}
        <div className="absolute inset-0 cursor-zoom-out" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center z-10"
        >
          {/* Top Bar / Close Button */}
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <button
              onClick={onClose}
              className="bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md transition-colors border border-white/10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md transition-colors border border-white/10"
              aria-label="Previous Image"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md transition-colors border border-white/10"
              aria-label="Next Image"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          )}

          {/* Image Container */}
          <div className="w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl bg-neutral-900 border border-white/10 shadow-2xl">
            <img
              src={image.src}
              alt={image.title || "Gallery Image"}
              className="max-w-full max-h-[70vh] object-contain select-none"
            />
          </div>

          {/* Polaroid Style Caption Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl bg-white text-slate-800 rounded-xl p-4 mt-4 shadow-xl border border-stone-200 text-center"
          >
            <h4 className="font-display text-lg font-bold text-slate-800 leading-tight">
              {image.title}
            </h4>
            {image.category && (
              <span className="inline-block bg-brand-pink/15 text-brand-pink text-[10px] font-bold px-2 py-0.5 rounded-full mt-1.5 uppercase">
                {image.category}
              </span>
            )}
            {image.description && (
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                {image.description}
              </p>
            )}
          </motion.div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
