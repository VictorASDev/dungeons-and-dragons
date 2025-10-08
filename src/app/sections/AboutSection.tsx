'use client';

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AboutSectionProps {
  img: string;
  title: string;
  description: string;
  isImageInLeft: boolean;
  id?: string;
}

const AboutSection = (props: AboutSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (imageRef.current && sectionRef.current) {
      
      gsap.fromTo(
        imageRef.current,
        { x: props.isImageInLeft ? -200 : 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    }

    if (textRef.current && sectionRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: props.isImageInLeft ? 200 : -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    }

    ScrollTrigger.refresh();

  }, [props.isImageInLeft]);

  return (
    <div
      id={props.id}
      ref={sectionRef}
      className="section flex flex-col items-center justify-between bg-red-900 w-screen py-8 mt-0"
    >
      {props.isImageInLeft ? (
        <div className="flex flex-col md:flex-row justify-around items-center w-full ">
          <Image
            ref={imageRef}
            src={props.img}
            alt="Magic 1"
            width={700}
            height={700}
            className="object-cover shadow-lg m-1 mt-[-100px] z-10 rounded-lg max-w-[80vw] md:max-w-[60vw] h-auto opacity-0"
          />
          <div ref={textRef} className="flex flex-col items-center gap-2.5 md:gap-10 w-1/2 h-full z-10 opacity-0">
            <h2 className="text-base w-screen font-extrabold mt-2 text-white z-20 text-center md:w-3/4 md:p-1.5 md:text-2xl md:text-right">
              {props.title}
            </h2>
            <p className="text-xs w-screen pr-3 pl-3 text-white z-20 text-justify md:w-3/4 md:text-base">
              {props.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-around items-center w-full ">
          <div ref={textRef} className="flex flex-col items-center gap-2.5 md:gap-10 w-1/2 h-full z-10 opacity-0">
            <h2 className="text-base w-screen font-extrabold mt-2 text-white z-20 text-center md:w-3/4 md:p-1.5 md:text-2xl md:text-left">
              {props.title}
            </h2>
            <p className="text-xs w-screen pr-3 pl-3 text-white z-20 text-justify md:w-3/4 md:text-base">
              {props.description}
            </p>
          </div>

          <Image
            ref={imageRef}
            src={props.img}
            alt="Magic 1"
            width={700}
            height={700}
            className="object-cover shadow-lg m-1 mt-[-100px] z-10 rounded-lg max-w-[80vw] md:max-w-[60vw] h-auto opacity-0 mr-10"
          />
        </div>
      )}
    </div>
  );
};

export default AboutSection;
