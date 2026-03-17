import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FullscreenMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Journal", path: "/journel" },
  ];

  return (
    <>
      {/* 🔥 FIXED NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-transparent">

        {/* LOGO */}
        <Link to="/" className="text-[#C6A27E] font-semibold text-lg">
          Greenbiz Agro
        </Link>

        {/* MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#C6A27E] text-black px-6 py-2 rounded-full"
        >
          {open ? "✕" : "Menu"}
        </button>
      </div>

      {/* 🔥 OVERLAY */}
      <div
        className={`fixed inset-0 bg-[#4B3A2A] text-[#C6A27E] z-40 transition-all duration-500 
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* MAIN GRID */}
        <div className="h-full grid grid-cols-1 md:grid-cols-3 px-6 md:px-16 py-24">

          {/* LEFT SECTION */}
          <div className="hidden md:flex flex-col justify-between pr-10 border-r border-[#7a5c3f]/50">

            <div>
              <h2 className="text-lg font-semibold">GREENBIZ</h2>
              <p className="text-sm">AGRO</p>
            </div>

            <div className="space-y-4">
              <p className="text-xs">© 2026</p>

              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://picsum.photos/400/250"
                  alt=""
                  className="w-full h-full object-cover"
                />

                <button className="absolute inset-0 m-auto w-fit h-fit bg-[#C6A27E] text-black px-5 py-2 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* 🔥 CENTER LINKS (ROUTED) */}
          <div className="flex flex-col justify-center items-center gap-8 text-3xl md:text-5xl font-light text-center border-r md:border-r border-[#7a5c3f]/50">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`transition ${
                  location.pathname === link.path
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col justify-between pl-6 md:pl-10 mt-10 md:mt-0">

            {/* SOCIAL */}
            <div>
              <p className="text-xs mb-4 tracking-widest">SOCIAL</p>
              <div className="flex gap-3">
                {[FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#7a5c3f] flex items-center justify-center hover:bg-[#C6A27E] hover:text-black transition"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* CONTACT */}
            <div className="text-sm text-[#C6A27E]/80 border-t border-[#7a5c3f]/50 pt-6">
              <p className="text-xs mb-2">CONTACT US</p>
              <p>76-86 Manners Street</p>
              <p>Wellington 6140, New Zealand</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default FullscreenMenu;