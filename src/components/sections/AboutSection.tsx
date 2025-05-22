'use client';

import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-red-900 w-screen py-8">
      <div className="flex flex-col md:flex-row justify-around items-center w-full ">
        <Image 
          src="/types-of-magic.jpg"
          alt="Magic 1"
          width={700}
          height={700}
          className="object-cover shadow-lg align- m-1 mt-[-100px]  z-10 rounded-lg max-w-[80vw] md:max-w-[60vw] h-auto"
        />
        <div className="flex flex-col items-center gap-2.5 md:gap-10 w-1/2 h-full z-10">
          <h2 className="text-base w-screen font-extrabold mt-2 text-white z-20 text-center md:w-3/4 md:p-1.5 md:text-xl md:text-right">
             The World of Dungeons & Dragons
          </h2>
          <p className="text-xs w-screen pr-3 pl-3 text-white z-20 text-justify md:w-3/4  md:text-justify md:text-base">
            Explore fantastic lands, uncover ancient secrets, and battle mythical creatures in Dungeons & Dragons — the legendary role-playing game where imagination leads the way. Create your own hero, master powerful spells, and journey through realms filled with danger and wonder. Whether you´re delving into shadowy dungeons or soaring through enchanted skies, every choice you make shapes the story. In D&D, the adventure is yours to command — and the world is waiting.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;