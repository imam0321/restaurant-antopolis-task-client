"use client";
import Image from "next/image";
import { useState } from "react";
import HeroNav from "./HeroNav";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroCircleAnimation from "./HeroCircleAnimation";
import HeroMobileCarousel from "./HeroMobileCarousel";
import HeroDesktopLeft from "./HeroDesktopLeft";

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

export default function Hero() {
  const [activeImageId, setActiveImageId] = useState(baseImages[0].id);
  const [direction, setDirection] = useState(1);

  const activeImage =
    baseImages.find((img) => img.id === activeImageId) || baseImages[0];

  const handleNextPrev = (moveDirection: "next" | "prev") => {
    const currentIndex = baseImages.findIndex(
      (img) => img.id === activeImageId
    );
    let newIndex;
    let newDirection;

    if (moveDirection === "next") {
      newIndex = (currentIndex + 1) % baseImages.length;
      newDirection = 1;
    } else {
      newIndex = (currentIndex - 1 + baseImages.length) % baseImages.length;
      newDirection = -1;
    }

    setDirection(newDirection);
    setActiveImageId(baseImages[newIndex].id);
  };

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
      {/* Content container */}
      <div className="relative z-20 px-4">
        <HeroNav />
        {/* desktop left section */}
        <HeroDesktopLeft
          baseImages={baseImages}
          activeImageId={activeImageId}
          handleThumbnailClick={handleThumbnailClick}
        />
        {/* Mobile Header */}
        <header className="text-white mt-6 max-w-lg mx-9 lg:hidden md:hidden">
          <h1 className="text-[2.813rem] font-normal">BREAKFAST</h1>
          <p className="mt-3 text-base font-normal w-[280px]">
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day.{" "}
            <span className="underline text-base font-normal">See more</span>
          </p>
        </header>
        {/* Mobile main image carousel */}
        <div className="mt-12 lg:hidden md:hidden">
          <div className="flex justify-between items-center">
            <button
              onClick={() => handleNextPrev("prev")}
              className="w-10 h-10 bg-[#F5878752] rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={3} />
            </button>
            <figure className="relative w-[190px] h-[190px]">
              <Image
                src={mainImageSrc}
                fill
                alt="image"
                className="object-contain"
                key={mainImageSrc}
                loading="eager"
                sizes="(max-width: 768px) 438px, (max-width: 1024px) 538px, 750px"
              />
            </figure>
            <button
              onClick={() => handleNextPrev("next")}
              className="w-10 h-10 bg-[#F5878752] rounded-full flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>
        {/* Mobile Image thumbnails for Carousel */}
        <HeroMobileCarousel
          baseImages={baseImages}
          activeImageId={activeImageId}
          setActiveImageId={setActiveImageId}
        />
      </div>
    </section>
  );
}
