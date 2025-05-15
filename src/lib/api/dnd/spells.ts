import axios from 'axios';

export async function getSpellList() {
    const res = await axios.get('https://www.dnd5eapi.co/api/spells');
    return res.data.results;
}