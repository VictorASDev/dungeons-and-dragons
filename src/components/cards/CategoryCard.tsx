import Image from "next/image";

interface CategoryCardProps {
    imageUrl: string;
    title: string;
}

const CategoryCard = (props: CategoryCardProps) => {
    return (
        <div className="flex flex-row items-center justify-between w-full h-full p-4 bg-white rounded-lg shadow-md">
            <Image
                src={props.imageUrl}
                alt={props.title}
                width={100}
                height={100}
            />    
            <h2 className="text-xl font-bold">{props.title}</h2>
        </div>
    );
}