'use client';

import Image from "next/image";
import { useLayoutEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".about-image",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".section",
          start: "top 80%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        }
      }
    )
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".section-text", {
      x: 200,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".section",
        start: "top 80%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      }
    })
  }, []);
    

  return (
    <div className="section flex flex-col items-center justify-between bg-red-900 w-screen py-8">
      <div className="flex flex-col md:flex-row justify-around items-center w-full ">
        <Image 
          src="/types-of-magic.jpg"
          alt="Magic 1"
          width={700}
          height={700}
          className="about-image object-cover shadow-lg align- m-1 mt-[-100px]  z-10 rounded-lg max-w-[80vw] md:max-w-[60vw] h-auto opacity-0"
        />
        <div className="section-text flex flex-col items-center gap-2.5 md:gap-10 w-1/2 h-full z-10">
          <h2 className="text-base w-screen font-extrabold mt-2 text-white z-20 text-center md:w-3/4 md:p-1.5 md:text-2xl md:text-right">
             The World of Dungeons & Dragons
          </h2>
          <p className="section-text text-xs w-screen pr-3 pl-3 text-white z-20 text-justify md:w-3/4  md:text-justify md:text-base">
            Discover the schools of magic that define the world of Dungeons & Dragons. From fiery evocations and deceptive illusions to divine blessings and dark necromancy, each school unlocks a different way to shape reality. Explore the secrets of conjuration, the foresight of divination, the power of enchantment, and more. The path of magic is as limitless as your imagination.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;