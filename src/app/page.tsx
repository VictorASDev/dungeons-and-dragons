'use client';

import Header from "@/components/header/Header";
import Navbar from "@/components/navigation/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import SpellSection from "@/components/sections/Spellsection";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-black w-screen">
        <Navbar />
        <Header 
            imageUrl="/headers/rpg-dragon.jpeg"
            title="Dungeons & Dragons"
            description="Create heroes, build campaigns, and dive into epic adventures across magical realms and forgotten dungeons."
        />
         <AboutSection />
        <SpellSection /> 
    </div>
  );
}
