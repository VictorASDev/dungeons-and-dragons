'use client';

import Header from "@/components/header/Header";
import Navbar from "@/components/navigation/Navbar";
import { getSpellByID } from "@/lib/api/dnd/spellsByID";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const DetailPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const data = await getSpellByID(id);
                console.log(data);
            } else {
                console.error("ID is null");
            }
        }

        fetchData();

    }, [id]);

    return (
        <div className="flex flex-col items-center bg-black w-screen">
            <Navbar />
            {/* Todo: Trocar essa imagem feia horrivel*/}
            <Header
                imageUrl="/headers/casting-spell.jpg"
                title="Dungeons & Dragons"
                description="Create heroes, build campaigns, and dive into epic adventures across magical realms and forgotten dungeons." 
                />
        </div>
    );
}
export default DetailPage;