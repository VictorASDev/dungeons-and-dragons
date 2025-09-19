import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RaceCard from "../cards/RaceCard";
import { getRaces } from "@/lib/api/dnd/getRaces";
import { race } from "@/lib/types/race";

const RacesSection = () => {
  const [allRaces, setAllRaces] = useState<race[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getRaces();
      setAllRaces(data);
    })();
  }, []);

  useLayoutEffect(() => {
    if (!allRaces.length) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".card").forEach((card: any) => {
        gsap.from(card, {
          y: 120,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",      // quando o topo do card chega a 85% da viewport
            toggleActions: "play none none reverse",
            //markers: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [allRaces]);

  return (
    <div className="flex flex-col justify-center items-center text-white">

        <h2 className="text-4xl md:text-8xl font-bold text-center my-10 text-white uppercase">Races</h2>

        <div ref={containerRef} className="w-full grid grid-cols-3 p-10 justify-center items-center gap-20 container">
            {allRaces.map(r => <RaceCard key={r.index} title={r.name} className="card mx-8" />)}
        </div>
    </div>
  );
};

export default RacesSection;
