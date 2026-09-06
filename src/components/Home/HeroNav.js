"use client";

import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sections } from "@/components/Data/SectionData";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HeroNav() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const linesMobileRef = useRef([]);
  const linesDesktopRef = useRef([]);
  const serviceRefs = useRef([]);

  const [hoverImg, setHoverImg] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const desktopEls = linesDesktopRef.current.filter(Boolean);
      if (desktopEls.length) {
        gsap.from(desktopEls, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
          opacity: 0,
          y: 30,
          duration: 0.9,
          stagger: 0.18,
          ease: "power2.out",
        });
      }

      const mobileEls = linesMobileRef.current.filter(Boolean);
      if (mobileEls.length) {
        gsap.from(mobileEls, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none reset",
          },
          opacity: 0,
          y: 18,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
        });
      }

      const serviceEls = serviceRefs.current.filter(Boolean);
      if (serviceEls.length) {
        gsap.from(serviceEls, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!imgRef.current) return;
    gsap.killTweensOf(imgRef.current);
    gsap.to(imgRef.current, {
      opacity: hoverImg ? 1 : 0,
      duration: 0.45,
      ease: "power2.out",
    });
  }, [hoverImg]);

  const mobilePairs = [
    ["BLENDING", "CREATIVE"],
    ["VISION", "WITH"],
    ["INNOVATIVE", "THINKING."],
  ];

  const desktopLines = [
    "BLENDING",
    "CREATIVE",
    "VISION",
    "WITH",
    "INNOVATIVE THINKING.",
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full font-[bitum] overflow-hidden
        flex flex-col md:flex-row
        items-start md:items-center
        justify-start md:justify-between
        px-6 sm:px-8 md:px-12
        py-6 sm:py-8 md:py-12
        gap-4 sm:gap-6 md:gap-8
        max-w-screen-xl mx-auto"
    >
      {/* Hover Image Preview */}
      <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full z-0 pointer-events-none overflow-hidden">
        {hoverImg && (
          <img
            ref={imgRef}
            src={hoverImg}
            alt="Preview"
            className="w-full h-full object-cover opacity-0"
          />
        )}
      </div>

      {/* Left - Headline */}
      <div className="w-full md:w-1/2 z-20 flex flex-col justify-center">
        {/* Mobile pairs */}
        <div className="block md:hidden">
          {mobilePairs.map((pair, pairIdx) => (
            <div key={pairIdx} className="flex gap-3 mb-1">
              {pair.map((word, wordIdx) => (
                <h1
                  key={wordIdx}
                  ref={(el) =>
                    (linesMobileRef.current[pairIdx * 2 + wordIdx] = el)
                  }
                  className={`text-2xl font-bold ${
                    word === "INNOVATIVE" || word === "THINKING."
                      ? "text-blue-600"
                      : "text-black"
                  }`}
                >
                  {word}
                </h1>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop stacked */}
        <div className="hidden md:block">
          {desktopLines.map((line, i) => (
            <h1
              key={i}
              ref={(el) => (linesDesktopRef.current[i] = el)}
              className={`text-5xl font-bold leading-snug ${
                line.includes("INNOVATIVE") ? "text-[#0b5791]" : "text-black"
              }`}
            >
              {line}
            </h1>
          ))}
        </div>
      </div>

      {/* Right - Services */}
      <div className="w-full md:w-1/2 relative z-30">
        {sections.map((service, index) => (
          <div
            key={service.id ?? index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="group"
          >
            <Link
              href={`/services/work/${service.id}`}
              scroll={true}
              className="flex items-center justify-between py-3 sm:py-4 md:py-5 hover:bg-gray-50 px-2 transition bg-white/70 md:bg-transparent"
              onMouseEnter={() => setHoverImg(service.image)}
              onMouseLeave={() => setHoverImg(null)}
            >
              <span className="text-base sm:text-lg font-[bituml] text-gray-800">
                {service.title}
              </span>
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-black group-hover:bg-black group-hover:text-white transition">
                <FiArrowUpRight className="text-lg" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
