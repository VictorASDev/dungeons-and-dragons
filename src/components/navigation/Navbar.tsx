'use cliente';

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="p-0.5 mt-7 fixed z-50 mx-auto flex justify-center items-center border border-white rounded-full shadow-lg w-fit max-w-3xl bg-white/10">
                <ul className="flex space-x-4 gap-2.5 p-4">
                    <li>
                    {/*TODO: corrigir os scales*/}
                    <Link href="#" className="text-white text-xs md:text-xl transition-transform duration-300 hover:text-red-900 hover:scale-110">home</Link>
                    </li>
                    <li>
                    <Link href="#spells" className="text-white text-xs transition-transform duration-300 md:text-xl hover:text-red-900 hover:scale-110">spells</Link>
                    </li>
                    <li>
                    <Link href="#" className="text-white text-xs md:text-xl hover:text-red-900 hover:scale-110 transition-transform duration-300">about</Link>
                    </li>
                    <li>
                    <Link href="#" className="text-white text-xs md:text-xl hover:text-red-900 hover:scale-110 transition-transform duration-300">contact</Link>
                    </li>
                </ul>
        </div>
    );
}
export default Navbar;