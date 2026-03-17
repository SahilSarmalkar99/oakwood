import React, { useRef } from "react";
import { data } from "../../Data/Services";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".service-card", {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className="bg-[#f8f8f8] px-5 md:px-20 text-[#3E362E]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.map((item) => (
          <div key={item.id} className="service-card group">
            
            {/* Image */}
            <div className="overflow-hidden rounded-xl ">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-fit object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Text BELOW image */}
            <div className="mt-4 px-1">
              <h2 className="text-xl md:text-3xl font-[f2] text-center text-[#2b2b2b] tracking-wide">
                {item.title}
              </h2>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;