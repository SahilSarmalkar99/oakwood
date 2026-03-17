import React , {useRef} from "react";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";

const Video = () => {
    const videoRef = useRef();

    useGSAP(()=>{
         gsap.to(videoRef.current, {
      opacity: 0.2,
      y: -200,
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true
      },
    });
        })
  return (
    <div ref={videoRef} className="absolute inset-0 flex items-center justify-center px-4">
      
      {/* Outer Glass Frame */}
      <div className="p-[6px] sm:p-3 bg-gradient-to-br from-[#e8dcc5]/60 to-[#cbbfa8]/40 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        
        {/* Inner Card */}
        <div className="relative w-[90vw] max-w-[360px] h-[65vh] max-h-[520px] rounded-2xl overflow-hidden">

          {/* Video */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="https://framerusercontent.com/assets/aTNEoj1gGFlOlPuDPZljVDPQtGc.mp4" />
          </video>

          {/* Center Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#f3e7d0] to-[#e0cfaa] text-black rounded-full text-sm sm:text-base font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
              Get Started
            </button>
          </div>

          {/* Bottom Overlay */}
          <div className="absolute bottom-0 w-full px-4 sm:px-6 py-4 sm:py-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-center">
            
            <h2 className="text-lg sm:text-2xl font-[f2] tracking-wide">
              GREENBIZ AGRO
            </h2>

            <p className="text-xs sm:text-sm font-[f1] opacity-90 mt-1">
              Concept to Carton, We've Got You Covered
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;