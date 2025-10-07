'use client';

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RaceCard from "../cards/RaceCard";
import { getRaces } from "@/lib/api/dnd/getRaces";
import { race } from "@/lib/types/race";

const RacesSection = ({ onLoaded }: { onLoaded?: () => void }) => {
  const [allRaces, setAllRaces] = useState<race[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getRaces();
      setAllRaces(data);
      setLoading(false);
    })();
  }, []);

  useLayoutEffect(() => {
    if (!allRaces.length) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".card").forEach((card) => {
        const element = card as HTMLElement; 
        gsap.from(element, {
          y: 120,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    ScrollTrigger.refresh(); 
    return () => ctx.revert();
  }, [allRaces]);

  useEffect(() => {
    if (!loading && onLoaded) {
      setTimeout(() => onLoaded(), 200);
    }
  }, [loading, onLoaded]);

  return (
    <div className="flex flex-col justify-center items-center text-white mb-10" id="races">
      <h2 className="text-4xl md:text-8xl font-bold text-center my-10 text-white uppercase">
        Races
      </h2>

      <div
        ref={containerRef}
        className="w-full grid grid-cols-3 p-10 justify-center items-center gap-20 container"
      >
        {loading ? (
          <p className="text-center text-gray-400">Loading races...</p>
        ) : (
          allRaces.map((r) => (
            <RaceCard key={r.index} title={r.name} className="card mx-8" />
          ))
        )}
      </div>
    </div>
  );
};

export default RacesSection;
