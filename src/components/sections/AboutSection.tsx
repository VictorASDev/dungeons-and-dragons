'use client";'
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center bg-red-900 w-full py-8">
      <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-6xl">
        <Image 
          src="/types-of-magic.jpg"
          alt="Magic 1"
          width={700}
          height={700}
          className="object-cover shadow-lg align- m-1 mt-[-100px] md:mt-[-200px] z-10 rounded-lg max-w-[80vw] md:max-w-[700px]"
        />
        <div className="flex flex-col items-end gap-2.5 md:gap-10 p-4 md:p-20 w-full h-full z-10 md:pr-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl mr-5 font-extrabold text-white z-20 text-right">
            Types of Magic
          </h2>
          <p className="text-xs sm:text-base md:text-xl mr-5 text-white z-20 max-w-lg md:w-lg  text-justify md:text-right">
            Magic in Dungeons & Dragons is divided into various schools, each with its own unique characteristics and spells. 
            From the elemental forces of Evocation to the mind-bending illusions of Illusion magic, each type offers a different way to interact with the world.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;