"use client";

import ButtonN from "@/components/ButtonN";
import { useRouter } from "next/navigation";

export default function Third() {
  const router = useRouter();

  return (
    <div className="w-full h-fit flex flex-col font-[bituml] py-14 items-center justify-start text-white bg-gray-400">
      {/* Heading & Text */}
      <div className="w-full mt-8 px-4 sm:px-8 md:px-21 flex flex-col space-y-3 text-center md:text-left">
        <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] uppercase font-semibold">
          From thought to creation — made simple
        </h1>
        <p className="text-sm sm:text-base md:text-md max-w-4xl mx-auto md:mx-0">
          At 23D Studio, we help brands tell their stories and stand out with
          fresh strategies and creative services that actually work. Our goal is
          straightforward: build brands people love and deliver results that
          help your business grow.
        </p>
        <div className="w-fit h-fit self-center sm:self-start inline-block group">
          <ButtonN
            onClick={() => router.push("/work")}
            text="View Work"
            color="white"
            variant="primary"
          />
        </div>
      </div>

      {/* Images */}
      <div className="w-full flex flex-wrap justify-center gap-4 mt-10 px-4 py-8">
        {["1.webp", "2.webp", "3.webp", "4.webp"].map((img, i) => (
          <div
            key={i}
            className="relative transition-transform duration-500 hover:z-20"
          >
            <img
              src={`/images/Home3/${img}`}
              className={`transform transition-transform duration-500 hover:scale-110
                w-[40vw] sm:w-[22vw] md:w-75 
                h-[40vw] sm:h-[22vw] md:h-75
                ${i % 2 === 0 ? "rotate-0 lg:rotate-6" : "rotate-0 lg:-rotate-6"}`}
              alt={`work-${i}`}
            />
          </div>
        ))}
      </div>

      {/* Clients Section */}
      <div className="px-4 sm:px-8 md:px-15 text-base sm:text-lg md:text-xl w-full md:w-[90%] py-8 flex flex-col md:flex-row items-start md:items-start gap-6 md:gap-50">
        <h1 className="text-2xl font-[bitum]">Clients</h1>
        <p className="max-w-3xl text-[2vh] md:text-[2.5vh]">
          We’re proud to partner with businesses of all sizes, offering services
          designed around their unique needs. Clients choose us because we
          listen, keep things simple, and consistently deliver work that makes a
          real impact.
        </p>
      </div>
    </div>
  );
}
