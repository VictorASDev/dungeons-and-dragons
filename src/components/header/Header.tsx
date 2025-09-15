'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
    imageUrl: string;
    title: string;
    description: string;
    isMainPage?: boolean;
}

const Header = (props: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);
    const [isMainPage, setIsMainPage] = useState(false);

    {/*Todo: Consertar isso aqui*/}
    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (headerRef.current) observer.observe(headerRef.current);
        return () => observer.disconnect();
    }, []);
    
    return (
        <header ref={headerRef} 
        className="relative flex items-center justify-center w-full h-[100vh] text-white overflow-hidden">
            <Image
                src={props.imageUrl}
                alt={props.title}
                fill
                className="object-cover z-0"
            />
            
            <div className="relative flex flex-col w-full h-full bg-black/60 z-10 px-4 py-10 md:px-12 md:py-20 gap-4 md:gap-20 justify-around items-start-safe">
                <h1 className = "text-6xl sm:text-8xl md:text-[200px] font-extrabold z-2 mt-5 text-center uppercase">
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
                    className="object-cover z-3"
                    //Pre carrega a imagem para melhorar a performance
                    priority
                    />
            }

            </div>
        </header>
    )
}
export default Header;
