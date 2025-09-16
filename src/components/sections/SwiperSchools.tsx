import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const schools = [
    { src: '/schools/abjuration.jpg', name: 'Abjuration' },
    { src: '/schools/conjuration.jpg', name: 'Conjuration' },
    { src: '/schools/divination.jpg', name: 'Divination' },
    { src: '/schools/enchantment.jpg', name: 'Enchantment' },
    { src: '/schools/evocation.jpg', name: 'Evocation' },
    { src: '/schools/illusion.jpg', name: 'Illusion' },
    { src: '/schools/necromancy.jpg', name: 'Necromancy' },
    { src: '/schools/transmutation.jpg', name: 'Transmutation' },
];

const SwiperSchools = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="w-full overflow-hidden flex justify-center items-center">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                speed={3000}
                loop={true}
                autoplay={{ 
                    delay: 0, 
                    disableOnInteraction: false,
                    waitForTransition: true
                }}
                centeredSlides={true}
                modules={[Autoplay]}
                className="w-full"
            >
                {schools.map((school) => (
                    <SwiperSlide
                        key={school.name}
                        className="flex flex-col items-center justify-center"
                        onMouseEnter={() => setHovered(school.name)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Image 
                            src={school.src} 
                            alt={school.name} 
                            className='w-40'
                            width={150}
                            height={150}
                        />
                        {hovered === school.name && (
                            <span className="mt-2 px-3 py-1 bg-black/80 text-white rounded text-lg transition-all duration-200">
                                {school.name}
                            </span>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>  
    )
}
export default SwiperSchools;