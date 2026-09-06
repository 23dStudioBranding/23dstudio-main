"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function SlideUp() {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    lenis.on("scroll", (e) => {
      const progress = e.animatedScroll / (e.limit - window.innerHeight);
      setScrollProgress(Math.min(progress, 1)); // clamp
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const slides = slidesRef.current;
    gsap.set(slides, { zIndex: (i) => slides.length - i });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${slides.length * 200}vh`,
        scrub: 1.2,
        pin: true,
        onUpdate: (self) => setScrollProgress(Math.min(self.progress, 1)),
      },
    });

    slides.forEach((slide, i) => {
      if (i !== slides.length - 1) {
        tl.to(
          slide,
          {
            yPercent: -100,
            scale: 0.92,
            opacity: 0.4,
            ease: "power3.inOut",
          },
          i * 1.5
        ).fromTo(
          slides[i + 1],
          { scale: 1.04, opacity: 0.9 },
          { scale: 1, opacity: 1, ease: "power3.out" },
          i * 1.5
        );
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  const data = [
    {
      img: "/images/Home2/1.webp",
      title: "Architectural Visualization",
      desc: "We bring your architectural ideas to life with stunning 3D renders and walkthroughs, helping clients visualize projects",
    },
    {
      img: "/images/Home2/2.webp",
      title: "Product Visualization",
      desc: "Detailed renders to highlight textures, shapes, and functionality of products.",
    },
    {
      img: "/images/Home2/3.webp",
      title: "Event & Exhibition Design & Visualization",
      desc: "Custom-designed booths that attract attention and enhance brand presence.",
    },
    {
      img: "/images/Home2/4.webp",
      title: "Branding & Identity Design",
      desc: "We craft strong brand identities with logos, guidelines, and visuals that communicate your unique story and build lasting impressions",
    },
    {
      img: "/images/Home2/5.webp",
      title: "Marketing & Promotional Design",
      desc: "Creative promotional campaigns and designs that make your brand stand out, from social media to print and digital marketing.",
    },
  ];

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - scrollProgress * circumference;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen font-[bitum] overflow-hidden"
    >
      {data.map((slide, i) => (
        <div
          key={i}
          ref={(el) => (slidesRef.current[i] = el)}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white"
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div
            className="bg-white/60 absolute max-w-sm p-4 px-5 text-center md:text-right md:bg-transparent
                       md:bottom-35 md:right-2 bottom-30 left-1/2 md:left-auto -translate-x-1/2 translate-y-1/2 
                       md:-translate-x-3 md:translate-y-1/2"
          >
            <h1 className="text-2xl md:text-4xl font-bold">{slide.title}</h1>
            <p className="mt-2 text-sm md:text-base font-thin font-[bituml]">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Progress Ring */}
      <div className="fixed bottom-6 left-2 md:left-6 z-50">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="transform -rotate-90"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(17, 238, 194, 0)"
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(17, 238, 194, 1)"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[#11EEC2] text-xs">
          {Math.round(scrollProgress * 100)}%
        </div>
      </div>
    </div>
  );
}
