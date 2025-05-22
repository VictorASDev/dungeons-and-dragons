import axios from "axios";  

export async function getSpellByID(id: string) {
    const res = await axios.get(`https://www.dnd5eapi.co/api/spells/${id}`);
    return res.data;
}