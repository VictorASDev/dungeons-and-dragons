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
  const title = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        pinSpacing: true,
        end: "bottom 30%",
        pin: true,
        scrub: true,
      },
    });

    tl.from(d20Ref.current, { x: 200, opacity: 0, duration: 1 })
      .from(d12Ref.current, { x: 200, opacity: 0, duration: 1 }, "<") 
      .from(d10Ref.current, { x: 200, opacity: 0, duration: 1 }, "<")
      .from(d8Ref.current,  { x: -200, opacity: 0, duration: 1 }, "<")
      .from(d6Ref.current, { x: -200, opacity: 0, duration: 1 }, "<")
      .from(d4Ref.current, { x: -200, opacity: 0, duration: 1 }, "<")
      .to(title.current, {scale: 0, duration: 1, opacity: 0 , ease: "power1.in"}, "<");
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
    <div className="relative w-screen h-screen overflow-hidden bg-red-900 flex justify-center items-center gap-10"
    ref={sectionRef}>
      {/* D4 */}
      <Image
        src="/dice/d4.png"
        alt="d4 dice"
        width={150}
        height={150}
        unoptimized
        className="animate-float-fast z-2"
        ref={d4Ref}
      />

      {/* D6 */}
      <Image
        src="/dice/d6.png"
        alt="d6 dice"
        width={150}
        height={150}
        unoptimized
        className="animate-float-fast z-2"
        ref={d6Ref}
      />

      {/* D8 */}
      <Image
        src="/dice/d8.png"
        alt="d8 dice"
        width={150}
        height={150}
        unoptimized
        className="animate-float-fast z-2"
        ref={d8Ref}
      />

      {/* D10 */}
      <Image
        src="/dice/d10.png"
        alt="d10 dice"
        width={150}
        height={150}
        unoptimized
        className="animate-float-fast z-2"
        ref={d10Ref}
      />

      {/* D12 */}
      <Image
        src="/dice/d12.png"
        alt="d12 dice"
        width={170}
        height={170}
        unoptimized
        className="animate-float-fast z-2"
        ref={d12Ref}
      />

      {/* D20 */}
      <Image
        src="/dice/d20.png"
        alt="d20 dice"
        width={170}
        height={170}
        unoptimized
        className="animate-float-fast z-2"
        ref={d20Ref}
      />

      <div className="absolute top-1/2 left-0 w-full flex justify-center -translate-y-1/2 pointer-events-none z-1">
        <h2
          className="text-7xl uppercase text-white text-center w-2/3"
          ref={title}
        >
          Discover the magic, races and adventures
        </h2>
      </div>
    </div>
  );
}
export default FloatingDice;