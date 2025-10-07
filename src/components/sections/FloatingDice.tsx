'use client';

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

{/*TODO: Refatorar essa seção pra melhorar o design*/}

const FloatingDice = () => {

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const d20Ref = useRef<HTMLImageElement | null>(null);
  const d12Ref = useRef<HTMLImageElement | null>(null);
  const d10Ref = useRef<HTMLImageElement | null>(null);
  const d8Ref = useRef<HTMLImageElement | null>(null);
  const d6Ref = useRef<HTMLImageElement | null>(null);
  const d4Ref = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    tl.from(d20Ref.current, { x: -200, opacity: 0, duration: 1})
      .from(d12Ref.current, { x: 200, opacity: 0, duration: 1 }, "<") 
      .from(d10Ref.current, { x: 200, opacity: 0, duration: 1 }, "<")
      .from(d8Ref.current,  { x: 200, opacity: 0, duration: 1 }, "<")
      .from(d6Ref.current, { x: -200, opacity: 0, duration: 1 }, "<")
      .from(d4Ref.current, { x: -200, opacity: 0, duration: 1 }, "<");
    gsap.to(
      [d20Ref.current, d12Ref.current, d10Ref.current, d8Ref.current, d6Ref.current, d4Ref.current],
      {
        y: "+=10",
        rotation: "+=10",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      }
    );
  }, []);



  return (
    <div className="relative w-screen h-[500px] overflow-hidden bg-red-900 flex justify-center items-center"
    ref={sectionRef}>
      {/* D4 */}
      <Image
        src="/dice/d4.png"
        alt="d4 dice"
        width={100}
        height={100}
        unoptimized
        className="absolute animate-float-slow top-[10%] left-[20%]"
        ref={d4Ref}
      />

      {/* D6 */}
      <Image
        src="/dice/d6.png"
        alt="d6 dice"
        width={100}
        height={100}
        unoptimized
        className="absolute animate-float-medium top-[50%] left-[10%]"
        ref={d6Ref}
      />

      {/* D8 */}
      <Image
        src="/dice/d8.png"
        alt="d8 dice"
        width={100}
        height={100}
        unoptimized
        className="absolute animate-float-fast top-[50%] right-[10%]"
        ref={d8Ref}
      />

      {/* D10 */}
      <Image
        src="/dice/d10.png"
        alt="d10 dice"
        width={100}
        height={100}
        unoptimized
        className="absolute animate-float-medium bottom-[10%] right-[20%]"
        ref={d10Ref}
      />

      {/* D12 */}
      <Image
        src="/dice/d12.png"
        alt="d12 dice"
        width={100}
        height={100}
        unoptimized
        className="absolute animate-float-slow top-[10%] right-[20%]"
        ref={d12Ref}
      />

      {/* D20 */}
      <Image
        src="/dice/d20.png"
        alt="d20 dice"
        width={100}
        height={100}
        unoptimized
        className="absolute animate-float-fast bottom-[10%] left-[20%]"
        ref={d20Ref}
      />

      <h2 className="text-4xl uppercase text-white">Discover the magic, races and adventures</h2>
    </div>
  );
}
export default FloatingDice;