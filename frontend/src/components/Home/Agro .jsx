import React, { useRef } from "react";
import img from "../../assets/display/bg.avif";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Agro = () => {
  const sectionRef = useRef();
  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        // select words safely inside this component only
        const words = gsap.utils.toArray(".word");

        // WORD ANIMATION
        gsap.fromTo(
          words,
          {
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              toggleActions: "play none none none",
            //   markers: true, // enable only for debugging
            },
          },
        );
      }, sectionRef);

      return () => ctx.revert(); 
    },
    { scope: sectionRef },
  );

  const text = `Based in Maharashtra, GreenBiz Agro Industries LLP is a leading B2B
manufacturer of customizable food and agro-products. We don’t just
manufacture food—we create opportunities for your brand to grow.
With advanced facilities and a focus on quality control,
traceability, and sustainability, GreenBiz ensures every product
reflects your brand’s promise. We grow with you—batch by batch,
label by label.`;

  return (
    <div className="pt-20 md:pt-30">
      <div
        ref={sectionRef}
        className="w-full min-h-screen flex flex-col md:flex-row"
      >
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 bg-[#AA8867] text-[#2f2a24] px-6 md:px-20 py-20 flex flex-col justify-center">
          {/* Logo + Title */}
          <div className="flex items-center gap-5 mb-12">
            <div className="w-14 h-14 rounded-full border-[3px] border-[#2f2a24] flex items-center justify-center">
              <div className="w-6 h-6 bg-[#2f2a24] rounded-full"></div>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
                Greenbiz
              </h1>
              <p className="text-lg md:text-xl opacity-80">Agro Industries</p>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-[20px] font-[f6] md:text-2xl leading-relaxed max-w-xl text-[#3E362E]/90">
            {text.split(" ").map((word, i) => (
              <span key={i} className="inline-block opacity-0 mr-1 word">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
          <img
            src={img}
            alt="Agro"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
  );
};

export default Agro;
