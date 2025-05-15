import Header from "@/components/header/Header";
import Navbar from "@/components/navigation/Navbar";
import MagicsSection from "@/components/sections/MagicsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-w-screen min-h-screen">
        <Navbar />
        <Header />
        <MagicsSection id="spells" />
    </div>
  );
}
