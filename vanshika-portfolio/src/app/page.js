import React from "react";
import ScrapbookLayout from "@/components/ScrapbookLayout";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import CreativeWorld from "@/components/CreativeWorld";
import TalentCorner from "@/components/TalentCorner";
import FamilyLove from "@/components/FamilyLove";
import BirthdayTimer from "@/components/BirthdayTimer";
import PhotoGallery from "@/components/PhotoGallery";
import FunFacts from "@/components/FunFacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ScrapbookLayout>
      {/* 1. Hero Welcome Section */}
      <Hero />

      {/* 2. About Me Section */}
      <AboutMe />

      {/* 3. Creative World (Art & 3D Pen Creations) */}
      <CreativeWorld />

      {/* 4. Hobbies, Skating & School Life */}
      <TalentCorner />

      {/* 5. Family Love Section */}
      <FamilyLove />

      {/* 6. Birthday Celebration Wall */}
      <BirthdayTimer />

      {/* 7. Full Photo Memories Gallery */}
      <PhotoGallery />

      {/* 8. Fun Facts & Personal Motto Quote */}
      <FunFacts />

      {/* 9. Scrapbook Footer Note */}
      <Footer />
    </ScrapbookLayout>
  );
}
