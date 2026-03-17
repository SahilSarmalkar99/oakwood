import React, { useRef } from "react";
import img1 from "../../assets/display/bg.avif";
import Video from "./Video";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Image = () => {
  const imgRef = useRef();

  useGSAP(() => {
    gsap.to(imgRef.current, {
      opacity: 0.4,
      y: -200,
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true
      },
    });

   
  });

  return (
    <div className="relative">
      <div ref={imgRef} className="w-full h-screen">
        <img src={img1} alt="" className="w-full h-full object-cover" />
      </div>
        <Video />
    </div>
  );
};

export default Image;
