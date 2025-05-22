'use cliente';

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="p-5 bg-transparent fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center pb-1">
            {/* TODO: Add D20 Logo */}
            <div className="text-white text-lg font-bold">
                <Image
                    src="/d20-icon.webp" 
                    alt="Logo"
                    width={50} 
                    height={50} 
                    className="h-10 w-10 rotate-12 hover:scale-110 transition-transform duration-300" 
                />
            </div>
            <ul className="flex space-x-4 gap-2.5 p-4">
            <li>
            {/*TODO: corrigir os scales*/}
            <Link href="#" className="text-white text-xs md:text-xl hover:text-red-900 hover:scale-110 transition-transform duration-300">Home</Link>
            </li>
            <li>
            <Link href="#spells" className="text-white text-xs md:text-xl hover:text-red-900 hover:scale-110 transition-transform duration-300 scroll-smooth">Spells</Link>
            </li>
            <li>
            <Link href="#" className="text-white text-xs md:text-xl hover:text-red-900 hover:scale-110 transition-transform duration-300">About</Link>
            </li>
            <li>
            <Link href="#" className="text-white text-xs md:text-xl hover:text-red-900 hover:scale-110 transition-transform duration-300">Contact</Link>
            </li>
            </ul>
        </div>
        </nav>
    );
}
export default Navbar;