'use client';

import Header from "@/components/header/Header";
import Navbar from "@/components/navigation/Navbar";
import AboutSection from "@/components/sections/AboutSection";
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
            isMainPage={true}
        />

        {/* <AboutSection 
          img="/races/dragonborn.jpg"
          title="The Races of Dungeons & Dragons"
          description=""
        /> */}

        {/*TODO: Mudar esse título*/}
        <AboutSection 
            img="/types-of-magic.jpg"
            title="The World of Dungeons & Dragons"
            description="Discover the schools of magic that define the world of Dungeons & Dragons. From fiery evocations and deceptive illusions to divine blessings and dark necromancy, each school unlocks a different way to shape reality. Explore the secrets of conjuration, the foresight of divination, the power of enchantment, and more. The path of magic is as limitless as your imagination."
        />
        <SpellSection /> 

        <RacesSection />
    </div>
  );
}
