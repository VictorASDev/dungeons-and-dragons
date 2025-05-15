'use client';
import { getSpellList } from "@/lib/api/dnd/spells";
import SpellCard from "../cards/SpellCard";
import { spell } from "@/lib/types/spell";

import { useEffect, useState } from "react";
import { getSpellByName } from "@/lib/api/dnd/spellsByID";
import { get } from "http";

const SpellSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [allSpells, setAllSpells] = useState<spell[]>([]);
    const [searchResults, setSearchResults] = useState<spell[]>([]);

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

            <input 
                type="text"
                placeholder="Search for a spell..."
                className="p-2 mb-4 border border-gray-300 rounded"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl px-4">
                {filteredSpells.map(spell => (
                    <SpellCard key={spell.index} spell={spell} />
                ))}
            </div>
        </div>
    );
}
export default SpellSection;