"use client";

import Link from "next/link";
import ButtonN from "../ButtonN";
export default function ThirdLayout() {
  const sections = [
    {
      title: "Marketing & Promotional Design",
      desc: "Engaging visuals and campaigns tailored to boost your brand’s reach, captivate audiences, and drive impactful results.",
      route: "/services/work/marketing-promotional",
      images: [
        "/images/Home1/7.webp",
        "/images/Home1/9.webp",
        "/images/Home2/5.webp",
      ],
    },
    {
      title: "Event & Exhibition Design & Visualization",
      desc: "From booth designs to immersive event spaces, we create compelling 3D visuals that transform ideas into real experiences.",
      route: "/services/work/event-exhibition-design",
      images: [
        "/images/Home1/5.webp",
        "/images/Home1/6.webp",
        "/images/Home3/4.webp",
      ],
    },
  ];

  return (
    <div className="w-full h-fit p-4 md:p-10">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            idx % 2 === 0 ? "md:flex-row-reverse" : ""
          } items-start gap-6 mb-12`}
        >
          {/* Images Grid */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-4 order-2 sm:order-1 gap-3">
            {section.images.map((src, i) => (
              <div
                key={i}
                className={`relative group overflow-hidden ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  src={src}
                  alt={`${section.title} ${i + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Text + Button */}
          <div className="w-full md:w-1/3 space-y-3 order-1 sm:order-2">
            <h1 className="text-2xl font-semibold">{section.title}</h1>
            <p className="text-sm text-gray-600">{section.desc}</p>

            {/* Mobile Button (below desc) */}
            <div className="block md:hidden">
              <Link href={section.route} className="group">
                <ButtonN text="View Work" color="simple" variant="primary" />
              </Link>
            </div>

            {/* Desktop Button (aligned with text) */}
            <div className="hidden md:flex">
              <Link href={section.route}>
                <div className="w-fit h-fit group">
                  <ButtonN text="View Work" color="black" variant="primary" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
