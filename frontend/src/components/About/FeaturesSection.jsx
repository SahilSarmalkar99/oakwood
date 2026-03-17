import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "Pan-India Production Capability",
    desc: "Equipped with state-of-the-art food processing infrastructure, we serve customers across India with consistent quality, hygiene, and reliability—no matter the scale.",
  },
  {
    id: 2,
    title: "End-to-End Automation",
    desc: "From mixing and grinding to filling and packaging, our fully automated systems streamline every stage of production, ensuring precision, efficiency, and uniform output.",
  },
  {
    id: 3,
    title: "Global Quality Standards",
    desc: "Built for durability and accuracy, our high-speed machinery meets international food safety and industrial performance standards—delivering faster production without compromising product integrity.",
  },
];

const FeaturesSection = () => {
  const container = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {

      gsap.from(".heading", {
        y: 80,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".subtext", {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".card", {
        y: 80,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".cards",
          start: "top 85%",
          once: true,
        },
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="w-full bg-[#E8E0C8] text-[#6B4F36] px-6 sm:px-10 md:px-20 py-16 md:py-24"
    >
      

      {/* HEADING */}
      <h1 className="heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-[-1px] md:tracking-[-2px] max-w-5xl">
        Advanced Manufacturing. Nationwide Reach.
      </h1>

      {/* SUBTEXT */}
      <p className="subtext mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-[#6B4F36]/80 max-w-2xl">
        Engineered for scale. Designed for quality. Trusted nationwide.
      </p>

      {/* CARDS */}
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-12 md:mt-20">

        {features.map((item) => (
          <div
            key={item.id}
            className="card bg-[#6B4F36] text-[#E6D3B3] p-6 sm:p-8 md:p-10 rounded-lg transition duration-300 hover:scale-[1.03]"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light">
              {item.id}
            </h2>

            <h3 className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 md:mt-4 text-xs sm:text-sm text-[#E6D3B3]/80">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FeaturesSection;