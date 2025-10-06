import axios from "axios";

export async function getRaces() {
  try {
    const res = await axios.get("https://www.dnd5eapi.co/api/races");
    return res.data.results;
  } catch (error) {
    console.error("Erro ao buscar raças:", error);
    return [];
  }
}
