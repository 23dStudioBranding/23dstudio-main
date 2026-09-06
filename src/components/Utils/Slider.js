"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Slider({ images = [], caption }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // 3 sec per slide
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden  shadow-lg">
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

     

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-110" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
