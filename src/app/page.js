"use client";

import CollageIntro from "@/components/Utils/CollageIntro";
import Hero from "@/components/Home/Hero";
import Second from "@/components/Home/Second";
import SlideUp from "@/components/Home/SlideUp";
import HeroNav from "@/components/Home/HeroNav";
import Third from "@/components/Home/Third";
import Brands from "@/components/Home/Brands";

export default function HomePage() {


  const ImagesMobile = [
    "/images/mimg/1.png",
    "/images/mimg/2.png",
    "/images/mimg/3.png",
    "/images/mimg/4.png",
    "/images/mimg/5.png",
    "/images/mimg/6.png",
    "/images/mimg/7.png",
    "/images/mimg/8.png",
    "/images/mimg/9.png",
    "/images/mimg/10.png"
    

  ]
  const ImagesDesktop = [
    "/images/Home1/1.webp",
    "/images/Home1/2.webp",
    "/images/Home1/3.webp",
    "/images/Home1/4.webp",
    "/images/Home1/5.webp",
    "/images/Home1/6.webp",
    "/images/Home1/7.webp",
    "/images/Home1/8.webp",
    "/images/Home1/9.webp",
    "/images/Home1/10.webp",
  ];

  const caption = "Design should be simple, beautiful, and tell a story.";

  return (
    <>
      <CollageIntro />
      <div className="w-full text-var(--color-text) bg-var(--color-bg)">
        <Hero imagesDesktop={ImagesDesktop} imagesMobile={ImagesMobile}  caption={caption} />
        <Second />
        <SlideUp />
        <HeroNav />
        <Third />
        <Brands />
      </div>
    </>
  );
}
