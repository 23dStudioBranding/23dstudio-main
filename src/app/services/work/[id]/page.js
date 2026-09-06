"use client";

import { useParams } from "next/navigation";
import { sections } from "@/components/Data/SectionData";
import Loader from "@/components/Utils/Loader";
import { useState } from "react";
import CircleArrow from "@/components/Utils/CircleArrow";
import Slider from "@/components/Utils/Slider"; // 👈 import your Slider

export default function WorkDescribe() {
  const { id } = useParams();
  const section = sections.find((s) => s.id === id);
  const [openIndex, setOpenIndex] = useState(null);

  if (!section) {
    return <div className="p-10">Work not found</div>;
  }

  return (
    <>
      <Loader logo="/images/Logob.png" />
      <div className="w-full min-h-screen px-6 md:px-16 pt-28 font-[bituml]">
        
        {/* ✅ Section Slider */}
        {section.subserviceSlider && section.subserviceSlider.length > 0 && (
          <div className="mb-12">
            <Slider images={section.subserviceSlider} caption={section.title} />
          </div>
        )}

        {/* Section Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {section.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {section.desc}
          </p>
        </div>

        {/* Subservices Navigation */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          {section.subservices.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left text-lg md:text-xl font-medium text-gray-800 transition"
                >
                  <span>{service.headline}</span>
                  <CircleArrow isOpen={isOpen} />
                </button>
                {isOpen && (
                  <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                    {service.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* ✅ Subservice Gallery */}
        {section.subserviceImg && section.subserviceImg.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.subserviceImg.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden shadow-md group hover:shadow-xl transition"
              >
                <img
                  src={src}
                  alt={`subservice image ${i + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
