'use cliente';

import {Link as ScrollLink} from 'react-scroll'
const Navbar = () => {
    return (
        <div className="p-0.5 px-3 mt-7 fixed z-50 mx-auto flex justify-center items-center border border-white rounded-full shadow-lg w-fit max-w-3xl bg-white/10">
                <ul className="flex space-x-4 gap-2.5 p-4">
                    <li>
                        <ScrollLink 
                            to="spells" 
                            smooth="easeInOutQuad" 
                            duration={2000}
                            className="text-white text-xs md:text-xl transition-transform duration-300 hover:text-red-900 hover:scale-110 cursor-pointer"
                        >
                            Spells
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="races" 
                            smooth="easeInOutQuad" 
                            duration={2000}
                            className="text-white text-xs md:text-xl transition-transform duration-300 hover:text-red-900 hover:scale-110 cursor-pointer"
                        >
                            Races
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="about" 
                            smooth="easeInOutQuad" 
                            duration={2000}
                            className="text-white text-xs md:text-xl transition-transform duration-300 hover:text-red-900 hover:scale-110 cursor-pointer"
                        >
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="contact" 
                            smooth="easeInOutQuad" 
                            duration={2000}
                            className="text-white text-xs md:text-xl transition-transform duration-300 hover:text-red-900 hover:scale-110 cursor-pointer"
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
        </div>
    );
}
export default Navbar;