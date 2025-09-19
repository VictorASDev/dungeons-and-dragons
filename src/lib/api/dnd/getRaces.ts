import axios from "axios";

export async function getRaces() {
    const res = await axios.get('https://www.dnd5eapi.co/api/races');
    console.log(res.data.results);
    return res.data.results;
}