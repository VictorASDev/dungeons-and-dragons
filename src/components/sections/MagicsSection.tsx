'use client";'
import Image from "next/image";

const MagicsSection = () => {
  return (
    <div className="flex flex-col items-center bg-red-900 w-full">
        <div className="flex flex-row justify-around">
            <Image 
                src="/types-of-magic.jpg"
                alt="Magic 1"
                width={700}
                height={700}
                className="object-cover shadow-lg m-4 mt-[-100px] z-20"
            />
            <div className="flex flex-col items-end gap-10 p-20 w-full h-full z-10">
                <h2 className="text-2xl md:text-4xl font-extrabold text-white z-20">
                    Types of Magic
                </h2>
                <p className="text-sm md:text-xl text-white z-20 w-lg text-right">
                    Magic in Dungeons & Dragons is divided into various schools, each with its own unique characteristics and spells. 
                    From the elemental forces of Evocation to the mind-bending illusions of Illusion magic, each type offers a different way to interact with the world.
                </p>
            </div>
        </div>
    </div>
  );
}
export default MagicsSection;