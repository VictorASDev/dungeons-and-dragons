'use cliente';

import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="p-5 bg-transparent fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
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
            <ul className="flex space-x-4 gap-2.5">
            <li>
            {/*TODO: corrigir os scales*/}
            <a href="/" className="text-white hover:text-red-900 hover:scale-110 transition-transform duration-300">Home</a>
            </li>
            <li>
            <a href="/about" className="text-white hover:text-red-900 hover:scale-110 transition-transform duration-300">About</a>
            </li>
            <li>
            <a href="/contact" className="text-white hover:text-red-900 transform hover:scale-110 transition-transform duration-300">Contact</a>
            </li>
            </ul>
        </div>
        </nav>
    );
}
export default Navbar;