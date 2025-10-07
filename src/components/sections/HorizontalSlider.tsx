'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

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


{/*Todo: ajustar o tamanho das divs para ocupar menos espaço sem atrapalhar o conteúdo de baixo*/}

const HorizontalSlider = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const slides = gsap.utils.toArray<HTMLElement>(".slide");

        gsap.to(slides, {
            xPercent: -100 * (slides.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-slider",
                pin: true,
                pinSpacing: true,
                start: "top top",
                end: () => `+=${window.innerHeight * slides.length * 0.7}`, 
                scrub: 1,      
            }
        });
    }, []);

    return (
        <div className="flex shrink-0 overflow-x-hidden w-screen h-screen horizontal-slider">
            {schools.map((school) => (
                <div 
                    key={school.name}
                    className="flex items-center justify-center min-w-full h-full bg-white text-red-900 text-4xl font-bold slide"
                >
                    {school.name}
                </div>
            ))}
        </div>
    )
}
export default HorizontalSlider;