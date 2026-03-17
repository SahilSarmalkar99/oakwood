import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScatterLayout = () => {
  const containerRef = useRef();
  const imagesRef = useRef([]);
  const textRef = useRef();

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    const positions = isMobile
      ? [
          { x: -220, y: -260 },
          { x: 220, y: -260 },
          { x: -220, y: 260 },
          { x: 220, y: 260 },
          { x: 0, y: -320 },
          { x: 0, y: 320 },
          { x: -140, y: 320 },
          { x: 140, y: -320 },
        ]
      : [
          { x: -500, y: -300 },
          { x: 500, y: -300 },
          { x: -500, y: 300 },
          { x: 500, y: 300 },
          { x: 0, y: -420 },
          { x: 0, y: 420 },
          { x: -250, y: 420 },
          { x: 250, y: -420 },
        ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=900",
        scrub: 1.5,
      },
    });

    // Initial stack
    gsap.set(imagesRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
    });

    // ✅ Images scatter (NO BLUR)
    imagesRef.current.forEach((img, i) => {
      // Phase 1: Scatter + shrink (VISIBLE)
      tl.to(
        img,
        {
          x: positions[i].x,
          y: positions[i].y,

          scale: 0.65, // 🔥 smaller = better depth
          rotate: (i % 2 === 0 ? -1 : 1) * 10,

          opacity: 0.85, // 🔥 FIX: keep visible (was 0.4)

          ease: "expo.out",
          duration: 0.5,
        },
        0,
      );

      // Phase 2: Settle (sharp + clean)
      tl.to(
        img,
        {
          scale: 0.75, // slight grow back
          opacity: 1, // full clarity
          ease: "power2.out",
          duration: 0.6,
        },
        0.5, // 🔥 earlier than 0.8 (important)
      );
    });

    // ✅ TEXT REVEAL EARLIER + SHARP
    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1,
      },
      0, // 🔥 earlier (was 0.25)
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[130vh] flex items-center justify-center bg-[#f5f5f5] relative overflow-hidden"
    >
      {/* 🔥 TEXT (keep behind but visible due to clean center) */}
      <div
        ref={textRef}
        className="absolute text-center z-50 max-w-xl md:max-w-2xl px-4"
      >
        <h1 className="text-3xl md:text-6xl font-bold text-[#725D45]">
          WHY CHOOSE US?
        </h1>
        <p className="mt-4 md:mt-6 text-sm md:text-lg text-[#B49679] leading-relaxed">
          Modern facility with versatile capabilities, flexibility in products
          and packaging, easy access to high-quality raw materials, and
          strategically located for seamless B2B solutions.
        </p>
      </div>

      {/* IMAGES */}
      <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px]">
        {[...Array(8)].map((_, i) => (
          <img
            key={i}
            ref={(el) => (imagesRef.current[i] = el)}
            src={`https://picsum.photos/400/400?random=${i}`}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl"
            style={{ zIndex: 20 - i }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScatterLayout;
