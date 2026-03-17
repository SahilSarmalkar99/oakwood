import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#4B3A2A] text-[#C6A27E] py-10 px-6 md:px-16">

      {/* 🔥 MAIN GRID (2 BOXES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* ✅ BOX 1 — LINKS */}
        <div className="border border-[#7a5c3f]/60 p-6 md:p-8 rounded-lg">
          <div className="space-y-4">
            {["Home", "Products", "About", "Journal", "Sustainability"].map(
              (item, i) => (
                <p
                  key={i}
                  className="text-2xl md:text-3xl font-light cursor-pointer hover:text-[#E6C7A3] transition"
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>

        {/* ✅ BOX 2 — ICONS + CONTACT */}
        <div className="border border-[#7a5c3f]/60 p-6 md:p-8 rounded-lg flex flex-col justify-between gap-6">

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">
            {[
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaXTwitter />, link: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#7a5c3f] 
                hover:bg-[#C6A27E] hover:text-[#4B3A2A] transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* CONTACT */}
          <div className="space-y-2 text-sm leading-relaxed text-[#C6A27E]/80">
            <p className="uppercase text-[10px] tracking-widest text-[#C6A27E]/60">
              Contact Us
            </p>

            <p>+91 90210 37968 / +91 98986 62687</p>

            <p>
              102, Shriash Garden, Chawan Baug, DSK Vishwa Road,
              Dhayari, Pune
            </p>
          </div>

          {/* COPYRIGHT */}
          <div className="text-xs text-[#C6A27E]/60">
            © 2026 Greenbiz Agro Industries
          </div>
        </div>
      </div>

      {/* 🔥 SMALL BRAND TEXT (REDUCED HEIGHT) */}
      <div className="mt-10">
        <h1 className="text-2xl md:text-6xl font-semibold text-[#A07A55]/90">
          Greenbiz Agro Industries
        </h1>
      </div>

    </footer>
  );
};

export default Footer;