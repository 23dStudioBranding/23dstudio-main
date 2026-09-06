"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function CollageIntro() {
  const panelsRef = useRef([]);
  const textRef = useRef(null);
  const wrapperRef = useRef(null);

  const images = [
    "/images/Home1/8.webp",
    "/images/Home1/5.webp",
    "/images/Home1/6.webp",
    "/images/Home2/5.webp",
    "/images/Services1/3.webp",
    "/images/Home2/3.webp",
  ];

  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ prevents SSR crash

    const isMobile = window.innerWidth < 768;
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    if (isMobile) {
      // 📱 Mobile animation
      tl.fromTo(
        panelsRef.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 1.2, stagger: 0.15 }
      )
        .fromTo(
          ".panel-img",
          { scale: 1.2 },
          { scale: 1, duration: 1.2, stagger: 0.1, ease: "power2.out" },
          "-=0.9"
        )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" },
          "-=0.6"
        )
        .to(textRef.current, { opacity: 0, y: -20, duration: 0.8, delay: 0.6 })
        .to(
          panelsRef.current,
          {
            xPercent: 100,
            duration: 1,
            stagger: { each: 0.1, from: "edges" },
          },
          "-=0.4"
        );
    } else {
      // 💻 Desktop animation
      tl.fromTo(
        panelsRef.current,
        { height: "0%" },
        { height: "100%", duration: 1.2, stagger: 0.15 }
      )
        .fromTo(
          ".panel-img",
          { scale: 1.2 },
          { scale: 1, duration: 1.4, stagger: 0.1, ease: "power2.out" },
          "-=0.9"
        )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 40, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "back.out(1.7)" },
          "-=0.8"
        )
        .to(
          [textRef.current, panelsRef.current],
          {
            opacity: 0,
            y: -20,
            height: "0%",
            duration: 1,
            stagger: { each: 0.1, from: "center" },
          },
          "-=0.2"
        );
    }

    // ✨ Fade out wrapper so homepage shows
    tl.to(
      wrapperRef.current,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          if (wrapperRef.current) {
            wrapperRef.current.style.display = "none";
          }
        },
      },
      "-=0.5"
    );
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Panels */}
      <div className="absolute inset-0 flex md:flex-row flex-col">
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => (panelsRef.current[i] = el)}
            className="flex-1 overflow-hidden relative"
          >
            <Image
              src={src}
              alt={`panel-${i}`}
              fill
              priority
              className="panel-img object-cover"
            />
          </div>
        ))}
      </div>

      {/* Firm Name */}
      <h1
        ref={textRef}
        className="absolute text-5xl md:text-8xl font-[bitum] tracking-wide 
                 text-white md:text-zinc-800 stroke-white  bg-transparent"
      >
        23DStudio
      </h1>
    </div>
  );
}
