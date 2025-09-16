import { spell } from "@/lib/types/spell";
import Link from "next/link";
import Image from "next/image";

const SpellCard = ({ spell }: { spell: spell }) => {
    return (
        <Link href={`/spell-detail?id=${spell.index}`} >
            <div className="relative flex justify-center items-center text-white shadow-md transition-shadow duration-300 cursor-pointer h-45 overflow-hidden group" key={spell.index}>
                <Image 
                    src={`/magical-circle.png`} 
                    alt="magical circle"
                    width={100}
                    height={100}
                    className="absolute inset-0 m-auto w-35 h-35 opacity-20 pointer-events-none transition duration-300 ease-in animate-spin-slow object-cover group-hover:opacity-50 group-hover:brightness-200"
                />
                <h3 className="text-2xl z-10 lowercase transition duration-300 ease-in group-hover:brightness-200">{spell.name}</h3>
            </div>
        </Link>
    );
}
export default SpellCard;