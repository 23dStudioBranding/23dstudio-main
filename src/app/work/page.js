"use client";


import Loader from "@/components/Utils/Loader";

import Hero from "@/components/Home/Hero";
import FirstLayout from "@/components/Work/FirstLayout";
import SecondLayout from "@/components/Work/SecondLayout";
import ThirdLayout from "@/components/Work/ThirdLayout";


export default function Work() {
  const laptopImages = [
    "/images/Home1/2.webp",
    "/images/Home1/4.webp",
    "/images/Home1/6.webp",
    "/images/Home1/7.webp",
    "/images/Home1/9.webp",
  ];
  const mobileImages = [
    "/images/mimg/1.png",
    "/images/mimg/3.png",
    "/images/mimg/5.png",
    "/images/mimg/7.png",
    "/images/mimg/9.png",
  ];
  return (
    <>
      <Loader logo="/images/Logob.png" />
      <div className="w-full font-[bituml]">
        {/* Hero Section */}
       <Hero imagesDesktop={laptopImages} imagesMobile={mobileImages}  />

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mt-8 tracking-widest uppercase">
          Work We Do
        </h1>

        {/* Layouts */}
        <FirstLayout/>
        <SecondLayout />
        <ThirdLayout />
      </div>
    </>
  );
}
