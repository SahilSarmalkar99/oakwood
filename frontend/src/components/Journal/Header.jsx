import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const container = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".nav", {
        y: -40,
        autoAlpha: 0,
        duration: 0.8,
      });

      tl.from(".title", {
        y: 80,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.4");

      tl.from(".video", {
        scale: 1.2,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=1");
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="w-full min-h-screen flex flex-col md:flex-row bg-[#6B4F36] text-[#E6D3B3]"
    >

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-16 md:py-0 relative">


        {/* TEXT */}
        <h1 className="title mt-20 md:mt-0 text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.1] font-semibold tracking-[-1px] md:tracking-[-2px] max-w-xl">
          GREENBIZ <br />
          AGRO <br />
          INDUSTRIES LLP
        </h1>
      </div>

      {/* RIGHT SIDE (VIDEO/IMAGE) */}
      <div className="w-full md:w-1/2 h-[60vh] sm:h-[70vh] md:h-screen relative overflow-hidden">

        <video
          src="https://framerusercontent.com/assets/DY5dR7Wi0DX9fN3jKADiooH30.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
};

export default Header;