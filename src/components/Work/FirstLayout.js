"use client";

import Link from "next/link";
import ButtonN from "../ButtonN";

export default function FirstLayout() {
  const sections = [
    {
      title: "Architectural Visualization",
      desc: "We bring your architectural ideas to life with stunning 3D renders and walkthroughs...",
      route: "/services/work/architectural-visualization",
      images: ["/images/Home2/1.webp", "/images/Home1/2.webp", "/images/Home3/1.webp"],
    },
    {
      title: "Product Visualization",
      desc: "Showcase your products with realistic 3D renders...",
      route: "/services/work/product-visualization",
      images: ["/images/Home2/2.webp", "/images/Home1/4.webp", "/images/Home3/2.webp"],
    },
  ];

  return (
    <div className="w-full h-fit p-4 md:p-10">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-12">
          {/* Title + Desc */}
          <div className="space-y-2 max-w-3xl mb-4">
            <h1 className="text-2xl font-semibold">{section.title}</h1>
            <p className="text-sm text-gray-600">{section.desc}</p>

            {/* Always visible on mobile */}
            <div className="block md:hidden">
              <Link href={section.route}>
                <ButtonN text="View Work" color="simple" variant="primary" />
              </Link>
            </div>
          </div>

          {/* Desktop button on top right */}
          <div className="hidden md:flex justify-end mb-4">
            <Link href={section.route}>
              <div className="w-fit h-fit group">
                <ButtonN text="View Work" color="black" variant="primary" />
              </div>
            </Link>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {section.images.map((src, i) => (
              <div
                key={i}
                className={`relative group overflow-hidden ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  src={src}
                  alt={section.title}
                />

                {/* Hover Overlay (Desktop Only) */}
                <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition items-center justify-center"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
