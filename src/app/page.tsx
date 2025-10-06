'use client';

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navigation/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import FloatingDice from "@/components/sections/FloatingDice";
import HorizontalSlider from "@/components/sections/HorizontalSlider";
import RacesSection from "@/components/sections/RacesSection";
import SpellSection from "@/components/sections/Spellsection";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center bg-black w-screen">
      <Navbar />
      <Header 
          imageUrl="/background.png"
          title="Dungeons & Dragons"
          description="Create heroes, build campaigns, and dive into epic adventures across magical realms and forgotten dungeons."
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
