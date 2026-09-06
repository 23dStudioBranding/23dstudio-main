"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Simple media query hook
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function Hero({ imagesDesktop = [], imagesMobile = [], caption }) {
  const isMobile = useMediaQuery("(max-width: 768px)"); // <768px => mobile
  const images = isMobile && imagesMobile.length > 0 ? imagesMobile : imagesDesktop;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className={`relative w-full overflow-hidden ${
        isMobile ? "h-[100vh]" : "h-screen"
      }`}
    >
      {/* Sliding Wrapper */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Caption */}
      {caption && (
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 
            font-normal w-full tracking-wide 
            text-center font-[bitum] uppercase
            text-xl md:text-4xl text-white shadow-sm md:text-gray-700
            px-4 mb-3 md:mb-0 md:py-2 
            rounded-lg drop-shadow-lg"
        >
          {caption}
        </div>
      )}

      {/* Dots */}
      <div className=" md:absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-110" : "bg-gray-800"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
