'use client";'
import Image from "next/image";

interface MagicsSectionProps {
  id?: string;
}

const MagicsSection = ({ id }: MagicsSectionProps) => {
  return (
    <div className="flex flex-col items-center bg-red-900 w-full py-8" id={id}>
      <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-6xl">
        <Image 
          src="/types-of-magic.jpg"
          alt="Magic 1"
          width={700}
          height={700}
          className="object-cover shadow-lg m-4 mt-[-100px] md:mt-[-200px] z-20 rounded-lg max-w-[90vw] md:max-w-[700px]"
        />
        <div className="flex flex-col items-end gap-6 md:gap-10 p-4 md:p-20 w-full h-full z-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white z-20 text-right">
            Types of Magic
          </h2>
          <p className="text-xs sm:text-base md:text-xl text-white z-20 max-w-lg text-right">
            Magic in Dungeons & Dragons is divided into various schools, each with its own unique characteristics and spells. 
            From the elemental forces of Evocation to the mind-bending illusions of Illusion magic, each type offers a different way to interact with the world.
          </p>
        </div>
      </div>
    </div>
  );
}
export default MagicsSection;