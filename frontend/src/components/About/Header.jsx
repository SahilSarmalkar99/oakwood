import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const container = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      tl.from(".nav", {
        y: -50,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.from(".title", {
        y: 80,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.4");

      tl.from(".desc", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
      }, "-=0.6");

      tl.from(".btn", {
        scale: 0.8,
        autoAlpha: 0,
        duration: 0.6,
        immediateRender: false, // 🔥 IMPORTANT FIX
      }, "-=0.5");

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
      className="w-full min-h-screen flex flex-col md:flex-row bg-[#6B4F36] text-[#E6D3B3] overflow-hidden"
    >
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-16 md:py-0">

        <h1 className="title text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-[1.1] font-semibold max-w-xl">
          About Greenbiz Agro Industries LLP
        </h1>

        <p className="desc mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-[#E6D3B3]/80 max-w-md">
          We specialize in sustainable food processing solutions, connecting
          farmers to global markets while ensuring quality, efficiency, and
          innovation in every product.
        </p>

        <button className="btn mt-6 md:mt-8 w-fit px-6 md:px-8 py-3 md:py-4 bg-[#C6A27E] text-black rounded-full text-sm md:text-lg hover:scale-105 transition-all duration-300 shadow-lg">
          Explore More →
        </button>
      </div>

      {/* RIGHT SIDE VIDEO */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
        <video
          src="https://framerusercontent.com/assets/DY5dR7Wi0DX9fN3jKADiooH30.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
};

export default Header;