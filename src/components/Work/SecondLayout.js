"use client";

import Link from "next/link";
import ButtonN from "../ButtonN";

export default function SecondLayout() {
  const section = {
    title: "Branding & Identity Design",
    description:
      "We craft strong brand identities with logos, guidelines, and visuals that communicate your unique story and build lasting impressions.",
    route: "/services/work/branding-identity",
    images: [
      "/images/Home1/9.webp",
      "/images/Home1/10.webp",
      "/images/Home3/3.webp",
      "/images/Home2/4.webp",
    ],
  };

  return (
    <>
      <div className="w-full h-fit p-4 md:p-10">
        {/* Title + Desc */}
        <div className="space-y-2 max-w-3xl mb-4">
          <h1 className="text-2xl font-semibold">{section.title}</h1>
          <p className="text-sm text-gray-600">{section.description}</p>

          {/* Mobile Button (after description) */}
          <div className="block md:hidden mt-3">
            <Link href={section.route} className="group">
              <ButtonN text="View Work" color="simple" variant="primary" />
            </Link>
          </div>
        </div>

        {/* Desktop Button (right side) */}
        <div className="hidden md:flex justify-end mb-4">
          <Link href={section.route}>
            <div className="w-fit h-fit group">
              <ButtonN text="View Work" color="black" variant="primary" />
            </div>
          </Link>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-10">
        {section.images.map((src, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden group h-80"
          >
            <img
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              src={src}
              alt={`${section.title} ${idx + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
