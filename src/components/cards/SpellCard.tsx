import { spell } from "@/lib/types/spell";
import Link from "next/link";
import Image from "next/image";

const SpellCard = ({ spell }: { spell: spell }) => {
    return (
        <Link href={`/spell-detail?id=${spell.index}`} className="w-full">
            <div className="bg-amber-50 text-black p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-8 ornament relative h-20" key={spell.index}>
                <h3 className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">{spell.name}</h3>
                <p className="text-sm">{spell.desc?.join(" ")}</p>
                <p className="text-sm absolute bottom-0 right-10">Level: {spell.level}</p>
            </div>
        </Link>
       
    );
}
export default SpellCard;