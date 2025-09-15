'use client';

import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeaderProps {
    imageUrl: string;
    title: string;
    description: string;
    isMainPage?: boolean;
}

const Header = (props: HeaderProps) => {
    const [inView, setInView] = useState(false);
    const [isMainPage, setIsMainPage] = useState(false);

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
        className="header relative flex items-center justify-center w-full h-[100vh] text-white overflow-hidden">
            <Image
                src={props.imageUrl}
                alt={props.title}
                fill
                className="object-cover z-0"
            />
            
            <div className="relative flex flex-col w-full h-full bg-black/60 z-10 px-4 py-10 md:px-12 md:py-20 gap-4 md:gap-20 justify-around items-start-safe">
                <h1 className = "title text-6xl sm:text-8xl md:text-[200px] font-extrabold z-2 mt-5 text-center uppercase">
                    {props.title}
                </h1>

                {/* <p className="text-xl sm:text-2xl z-2 max-w-xl text-left mt-10 ml-18 animate-bottom-to-top">
                    {props.description}
                </p> */}
            {props.isMainPage &&
                    <Image
                    src="/rpg-dragon.png"
                    alt="Red RPG Dragon"
                    fill
                    className="object-cover z-3 dragon"
                    //Pre carrega a imagem para melhorar a performance
                    priority
                    />
            }

            </div>
        </header>
    )
}
export default Header;
