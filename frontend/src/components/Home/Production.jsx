import React, { useRef } from "react";
import img from "../../assets/display/bg.avif";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Production = () => {
  const sectionRef = useRef();
  const imgRef = useRef();

  useGSAP(() => {
    let ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5, // smoother
        },
      });

      // LEFT TEXT (refined)
      tl.fromTo(
        ".leftText",
        {
          x: -120,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0
      );

      // RIGHT TEXT (refined)
      tl.fromTo(
        ".rightText",
        {
          x: 120,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
        },
        0
      );

      // IMAGE SCALE (softer & premium)
      tl.fromTo(
        imgRef.current,
        { scale: 1 },
        { scale: 1.12, ease: "none" },
        0
      );

    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <div className="relative h-[200vh] bg-[#3E362E]">

      <div
        ref={sectionRef}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >

        {/* IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            ref={imgRef}
            src={img}
            alt="factory"
            className="w-[92%] md:w-[70%] lg:w-[60%] h-[55%] md:h-[65%] object-cover rounded-2xl shadow-2xl"
          />

          {/* subtle overlay for readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* TEXT BOX */}
        <div className="z-10 w-full flex justify-center px-4">
          
          <div className="bg-[#AA8867]/80 backdrop-blur-lg px-6 md:px-14 py-4 md:py-6 rounded-lg shadow-lg">
            
            <h1 className="flex flex-wrap justify-center gap-3 md:gap-6 
                           text-4xl sm:text-5xl md:text-7xl lg:text-[100px] 
                           font-semibold text-[#E6D8B5] tracking-tight text-center leading-[1.1]">
              
              <span className="leftText">Efficient</span>
              <span className="rightText">Production</span>

            </h1>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Production;