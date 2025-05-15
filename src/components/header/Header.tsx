import Image from "next/image";

const Header = () => {
    return (
        <header className="relative flex items-center w-full h-[350px] md:h-[500px] lg:h-[600px] text-white overflow-hidden">
            <Image
                src="/rpg_dragon.jpeg"
                alt="Logo"
                fill
                className="object-cover z-0"
            />
            
            <div className="flex flex-col w-full h-full bg-black/50 z-10 px-4 py-10 md:px-12 md:py-20 gap-4 md:gap-10">
                <h1 className="text-xl sm:text-3xl md:text-6xl font-extrabold z-20">
                    Dungeons & Dragons
                </h1>
                <p className="text-xs sm:text-base md:text-xl z-20 max-w-xl">
                    Create heroes, build campaigns, and dive into epic adventures across magical realms and forgotten dungeons.
                </p>
            </div>
        </header>
    )
}
export default Header;
