import React, { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Services from "./Services";

const Hero = () => {
  const textRef = useRef();

  useGSAP(() => {
    const split = new SplitType(textRef.current, { types: "chars" });

    gsap.from(split.chars, {
      y: 80,
      opacity: 0,
      stagger: 0.09,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger:{
        trigger : textRef.current,
        // scrub : true
      }
    });
  });

  return (
    <div>
      <div className="flex  justify-center">
        <h1
          ref={textRef}
          className="font-[f6] text-[#AA8867] text-[30px] md:text-[100px]"
        >
          WHAT WE OFFER
        </h1>
      </div>
      {/* <Services /> */}
    </div>
  );
};

export default Hero;
