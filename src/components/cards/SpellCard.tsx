import { spell } from "@/lib/types/spell";

const SpellCard = ({ spell }: { spell: spell }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" key={spell.index}>
            <h3 className="text-xl font-bold">{spell.name}</h3>
            <p className="text-sm">{spell.desc?.join(" ")}</p>
            <p className="text-sm">Level: {spell.level}</p>
        </div>
    );
}
export default SpellCard;