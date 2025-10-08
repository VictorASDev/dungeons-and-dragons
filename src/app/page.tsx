'use client';

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navigation/Navbar";
import AboutSection from "@/app/sections/AboutSection";
import FloatingDice from "@/app/sections/FloatingDice";
import HorizontalSlider from "@/app/sections/HorizontalSlider";
import RacesSection from "@/app/sections/RacesSection";
import SpellSection from "@/app/sections/Spellsection";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center bg-black w-screen">
      <Navbar />
      <Header 
          imageUrl="/background.png"
          title="Dungeons & Dragons"
          isMainPage
      />

      <FloatingDice />

      <HorizontalSlider />

      <AboutSection 
        img="/types-of-magic.jpg"
        title="The World of Dungeons & Dragons"
        description="..."
        isImageInLeft
      />
      <RacesSection />

      <AboutSection 
        img="/types-of-magic.jpg"
        title="The World of Dungeons & Dragons"
        description="..."
        isImageInLeft={false}
        id="spells"
      />
      <SpellSection />

      <Footer />
    </div>
  );
}
