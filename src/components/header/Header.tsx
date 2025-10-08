'use client';

import Image from "next/image";
import { useLayoutEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeaderProps {
    imageUrl: string;
    title: string;
    isMainPage?: boolean;
}

const Header = (props: HeaderProps) => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".dragon", {
            x: 500,
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: ".header",
                start: "top top",   
                end: "bottom top", 
                scrub: true,
            }
        })  
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".title", {
            x: -500,
            ease: "none",
            scrollTrigger: {
                trigger: ".header",
                start: "top top",   
                end: "bottom top", 
                scrub: true,
            }
        })  
    }, []);
    
    
    return (
        <header
        className="header w-screen h-96 relative flex items-center justify-center text-white overflow-hidden md:h-screen">
            <Image
                src={props.imageUrl}
                alt={props.title}
                fill
                priority
                className="object-cover z-0"
            />
            
            <div className="relative flex flex-col w-full h-full bg-black/60 z-10 px-4 py-10 md:px-12 md:py-20 gap-4 md:gap-20 justify-around items-start-safe">
                <h1 className = "title text-6xl sm:text-8xl md:text-9xl  lg:text-[200px] font-extrabold z-2 mt-5 text-center uppercase">
                    {props.title}
                </h1>

            {props.isMainPage &&
                    <Image
                        src="/rpg-dragon.png"
                        alt="Red RPG Dragon"
                        fill
                        unoptimized
                        className="object-cover md:object-cover z-3 dragon"
                        priority
                    />
            }

            </div>
        </header>
    )
}
export default Header;
