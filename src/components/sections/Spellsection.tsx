'use client';
import { getSpellList } from "@/lib/api/dnd/spells";
import SpellCard from "../cards/SpellCard";
import { spell } from "@/lib/types/spell";
import { useEffect, useState } from "react";
import SelectionButton from "../buttons/SelectionButton";
import SearchInput from "../inputs/SearchInput";
import SwiperSchools from "./SwiperSchools";

const SpellSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [allSpells, setAllSpells] = useState<spell[]>([]);

    const filteredSpells = allSpells.filter(spell =>
        spell.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const allLevels = Array.from(new Set(allSpells.map(spell => spell.level))).sort((a, b) => (a ?? 0) - (b ?? 0));

    const [selectedLevel, setSelectedLevel] = useState<number | string | null | undefined>(null);

    const [searchFilteredSpells, setSearchFilteredSpells] = useState<spell[]>(filteredSpells);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSpellList();
            setAllSpells(data);
            console.log(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        let levelFilteredSpells = allSpells;
        if (selectedLevel !== null) {
            levelFilteredSpells = allSpells.filter(spell => spell.level === selectedLevel);
        }
        setSearchFilteredSpells(levelFilteredSpells.filter(spell =>
            spell.name?.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }, [selectedLevel, searchTerm, allSpells]);

  

    return (
        <div className="flex flex-col gap-8 items-center w-full py-8 mt-10" id="spells">
            <SwiperSchools />

            <h2 className="relative text-4xl md:text-8xl font-bold text-center mb-4 text-white uppercase ">
                Spells
            </h2>
            
            <div className="relative w-1/2 py-3 flex flex-wrap justify-center items-center mb-4 gap-3">
                <div className="absolute z-0 w-full h-0.5 rounded-2xl bg-red-900"/>
                {allLevels.map(level => (
                    <SelectionButton 
                        key={level}
                        item={level}
                        isActive={selectedLevel === level} 
                        onClick={() => setSelectedLevel(level)} />
                ))}
            </div>            

            <SearchInput 
                type="text"
                placeholder="Search spells..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-1/2 px-2 border-2 border-gray-300 rounded-4xl shadow-sm transition-all duration-75 ease-in focus:outline-none focus:ring-2 focus:border-none focus:ring-red-900"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-15 w-full max-w-6xl px-4">
                {searchFilteredSpells.map(spell => (
                    <SpellCard key={spell.index} spell={spell}/>
                ))}
            </div>
        </div>
    );
}
export default SpellSection;