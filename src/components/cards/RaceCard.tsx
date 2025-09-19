import Image from "next/image";

interface RaceCardProps {
    title: string,
    desc?: string,
    className: string
}

const RaceCard = (props: RaceCardProps) => {
    return (
        <div className={`flex flex-col w-60 h-56 bg-white rounded-2xl shadow-2xl cursor-pointer items-center ${props.className}`}>
            <div className="w-full h-1/2 bg-red-900 rounded-t-2xl">
                <Image 
                    src={`/races/${props.title}.jpg`}
                    alt={`${props.title}`}
                    width={240}
                    height={112}
                    className="object-cover w-full h-full rounded-t-2xl object-top"
                />
            </div>
            <h3 className="text-red-900 text-3xl mt-5 uppercase">
                {props.title}
            </h3>
        </div>
    );
};
export default RaceCard;