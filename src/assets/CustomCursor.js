"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor({ text }) {
  const cursorRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsDesktop(mq.matches);

    const handleChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handleChange);

    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isDesktop || !cursorRef.current) return;

    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleNavEnter = () => {
      gsap.to(cursor, {
        scale: 0.2,
        opacity: 0.6,
        duration: 0.2,
      });
    };

    const handleNavLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const navbar = document.querySelector("nav");
    if (navbar) {
      navbar.addEventListener("mouseenter", handleNavEnter);
      navbar.addEventListener("mouseleave", handleNavLeave);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (navbar) {
        navbar.removeEventListener("mouseenter", handleNavEnter);
        navbar.removeEventListener("mouseleave", handleNavLeave);
      }
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 w-5 h-5 rounded-full font-[bitum] flex items-center justify-center text-lg font-bold z-[9999] bg-gray-500 backdrop-blur-md"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      {text}
    </div>
  );
}
