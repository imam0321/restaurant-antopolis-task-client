"use client";
import { useState } from "react";
import HeroNav from "./HeroNav";
import HeroCircleAnimation from "./HeroCircleAnimation";
import HeroMobileCarousel from "./HeroMobileView";
import HeroDesktopLeft from "./HeroDesktopLeft";
import { IDish } from "@/types";

export interface IBaseImage {
  id: number;
  image: string;
  mainColor: string;
  circleColor: string;
}

const baseImages: IBaseImage[] = [
  {
    id: 1,
    image: "/hero/food-1.png",
    mainColor: "bg-[#880808]",
    circleColor: "bg-[#A52A2A]",
  },
  {
    id: 2,
    image: "/hero/food-2.png",
    mainColor: "bg-[#0A4669]",
    circleColor: "bg-[#0A3659]",
  },
  {
    id: 3,
    image: "/hero/food-3.png",
    mainColor: "bg-[#953553]",
    circleColor: "bg-[#A95C68]",
  },
  {
    id: 4,
    image: "/hero/food-4.png",
    mainColor: "bg-[#006666]",
    circleColor: "bg-[#003333]",
  },
];

export default function Hero({dishes}: {dishes: IDish[]}) {
  const [activeImageId, setActiveImageId] = useState(baseImages[0].id);
  const [direction, setDirection] = useState(1);

  const activeImage =
    baseImages.find((img) => img.id === activeImageId) || baseImages[0];

  const handleThumbnailClick = (id: number) => {
    const currentIndex = baseImages.findIndex(
      (img) => img.id === activeImageId
    );
    const newIndex = baseImages.findIndex((img) => img.id === id);

    // Determine direction based on index change
    const newDirection =
      newIndex > currentIndex ||
      (newIndex === 0 && currentIndex === baseImages.length - 1)
        ? 1
        : -1;

    setDirection(newDirection);
    setActiveImageId(id);
  };

  const activeMainColor = activeImage.mainColor;
  const activeCircleColor = activeImage.circleColor;
  const mainImageSrc = activeImage.image;

  return (
    <section
      className={`relative w-full lg:h-[675px] h-[780px] overflow-hidden ${activeMainColor} transition-colors duration-100 md:rounded-b-[20px] lg:rounded-b-[20px]`}
    >
      {/* Top-left decorative circle - Simple static div for decoration */}
      <div
        className={`absolute 
        lg:w-[750px] w-[438px] 
        lg:h-[750px] h-[438px] 
        top-[-118px] lg:-top-40
        left-[-146px] lg:-left-52
        ${activeCircleColor} 
        rounded-full
        z-0 transition-colors duration-100 `}
      ></div>
      {/* Bottom-right Hero Circle Animation */}
      <HeroCircleAnimation
        activeImageId={activeImageId}
        activeCircleColor={activeCircleColor}
        mainImageSrc={mainImageSrc}
        direction={direction}
      />
      <div className="relative z-20 px-4">
        <HeroNav dishes={dishes} />
        {/* desktop left section */}
        <HeroDesktopLeft
          baseImages={baseImages}
          activeImageId={activeImageId}
          handleThumbnailClick={handleThumbnailClick}
        />

        {/* Mobile Image thumbnails for Carousel */}
        <HeroMobileCarousel
          baseImages={baseImages}
          mainImageSrc={mainImageSrc}
          setDirection={setDirection}
          activeImageId={activeImageId}
          setActiveImageId={setActiveImageId}
        />
      </div>
    </section>
  );
}
