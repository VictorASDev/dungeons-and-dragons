import axios from "axios";  

export async function getSpellByName(name: string) {
    const res = await axios.get(`https://www.dnd5eapi.co/api/spells/${name}`);
    return res.data;
}