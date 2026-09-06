"use client";

import LogoLoop from "@/components/Utils/LogoLoop";

const brandLogos = [
  { src: "/images/logo/1.png", alt: "Brand 1" },
  { src: "/images/logo/2.png", alt: "Brand 2" },
  { src: "/images/logo/3.png", alt: "Brand 3" },
  { src: "/images/logo/4.png", alt: "Brand 4" },
  { src: "/images/logo/5.png", alt: "Brand 5" },
  { src: "/images/logo/6.png", alt: "Brand 6" },
  { src: "/images/logo/7.png", alt: "Brand 7" },
  { src: "/images/logo/8.png", alt: "Brand 8" },
  { src: "/images/logo/9.png", alt: "Brand 9" },
  { src: "/images/logo/10.png", alt: "Brand 10" },
  { src: "/images/logo/11.png", alt: "Brand 11" },
  { src: "/images/logo/12.png", alt: "Brand 12" },
  { src: "/images/logo/13.png", alt: "Brand 13" },
  { src: "/images/logo/14.png", alt: "Brand 14" },
  { src: "/images/logo/15.png", alt: "Brand 15" },

];

export default function Brands({
  bgColor = "bg-gray-400",
  title = "Trusted by Clients",
}) {
  return (
    <div className={`relative w-full py-5 md:py-10 overflow-hidden ${bgColor}`}>
      <h2 className="text-center text-3xl md:text-4xl font-[bituml] font-semibold text-white mb-10">
        {title}
      </h2>
      <LogoLoop
        logos={brandLogos.map((logo) => ({
          node: (
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-32 sm:h-32 md:h-40 rounded-full w-auto object-contain opacity-80 hover:opacity-100 transition"
              loading="lazy"
              decoding="async"
            />
          ),
        }))}
        speed={120}
        direction="left"
        gap={60}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#fff"
        ariaLabel="Our partner brands"
      />
    </div>
  );
}
