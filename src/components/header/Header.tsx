'use client';

import Image from "next/image";

interface HeaderProps {
    imageUrl: string;
    title: string;
    description: string;
}

const Header = (props: HeaderProps) => {
    return (
        <header className="relative flex items-center justify-center w-full min-h-[500px] text-white overflow-hidden">
            <Image
                src={props.imageUrl}
                alt={props.title}
                fill
                className="object-cover z-0"
                priority
            />
            
            <div className="absolute inset-0 flex flex-col w-full h-full bg-black/50 z-10 px-4 py-10 md:px-12 md:py-20 gap-4 md:gap-10 items-center justify-center">
                <h1 className="text-4xl sm:text-6xl md:text-6xl font-extrabold z-20 mt-5 text-center">
                    {props.title}
                </h1>
                <p className="text-sm sm:text-lg md:text-2xl z-20 max-w-xl text-center">
                    {props.description}
                </p>
            </div>
        </header>
    )
}
export default Header;
