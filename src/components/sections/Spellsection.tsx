'use client';
import { getSpellList } from "@/lib/api/dnd/spells";
import SpellCard from "../cards/SpellCard";
import { spell } from "@/lib/types/spell";

import { useEffect, useState } from "react";

const SpellSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [allSpells, setAllSpells] = useState<spell[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSpellList();
            setAllSpells(data);
            console.log(data);
        };
        fetchData();
    }, []);

    const filteredSpells = allSpells.filter(spell =>
        spell.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );


    

    return (
        <div className="flex flex-col gap-4 items-center bg-white w-full py-8" id="spells">

            <h2 className="relative text-3xl md:text-6xl font-bold text-center mb-4 text-red-900 ">
                Spells
            </h2>
            
            <input 
                type="text"
                placeholder="Search for a spell..."
                className="p-2 mb-4 border border-gray-300 rounded text-red-900"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl px-4">
                {filteredSpells.slice(0,30).map(spell => (
                    <SpellCard key={spell.index} spell={spell} />
                ))}
            </div>
        </div>
    );
}
export default SpellSection;