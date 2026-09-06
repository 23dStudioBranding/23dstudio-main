"use client";

import { useRouter } from "next/navigation";

import { sections } from "../Data/SectionData";
import ButtonN from "../ButtonN";

// Custom hook for card actions
function useServiceCard(router, id) {
  const handleNavigate = () => router.push(`/services/work/${id}`);
  return { handleNavigate };
}

export default function ServiceCard() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full py-14 px-6 space-y-12">
        {/* First row (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.slice(0, 3).map((service) => (
            <Card key={service.id} service={service} router={router} />
          ))}
        </div>

        {/* Second row (2 cards centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-center max-w-4xl mx-auto">
          {sections.slice(3).map((service) => (
            <Card key={service.id} service={service} router={router} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ service, router }) {
  const { handleNavigate } = useServiceCard(router, service.id);

  return (
    <div className="relative flex flex-col overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image + Content wrapper (hover group only here) */}
      <div className="group flex flex-col flex-grow">
        {/* Image */}
        <div className="w-full h-60 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            src={service.image}
            alt={service.title}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h1 className="text-xl font-semibold text-gray-800 group-hover:text-[#0b5791] transition-colors duration-300">
            {service.title}
          </h1>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
            {service.desc}
          </p>
        </div>
      </div>

      {/* Button (not affected by group hover anymore) */}
      <div className="px-6 pb-6">
        <ButtonN
          text="View Work"
          color="black"
          variant="primary"
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
}
