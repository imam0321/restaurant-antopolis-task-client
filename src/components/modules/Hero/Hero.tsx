/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useState } from "react";
import HeroNav from "./HeroNav";
import { ChevronLeft, ChevronRight } from "lucide-react";

const baseImages = [
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
  const activeImage =
    baseImages.find((img) => img.id === activeImageId) || baseImages[0];

  const handleNextPrev = (direction: any) => {
    const currentIndex = baseImages.findIndex(
      (img) => img.id === activeImageId
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % baseImages.length;
    } else {
      newIndex = (currentIndex - 1 + baseImages.length) % baseImages.length;
    }

    setActiveImageId(baseImages[newIndex].id);
  };

  const activeMainColor = activeImage.mainColor;
  const activeCircleColor = activeImage.circleColor;
  const mainImageSrc =
    baseImages.find((img) => img.id === activeImageId)?.image ||
    baseImages[0].image;

  return (
    <div
      className={`relative w-full lg:h-[675px] h-[780px] overflow-hidden ${activeMainColor} mb-20 transition-colors duration-75`}
    >
      <div
        className={`absolute 
        lg:w-[750px] w-[438px] 
        lg:h-[750px] h-[438px] 
        top-[-118px] lg:-top-40
        left-[-146px] lg:-left-52
        ${activeCircleColor} 
        rounded-full
        z-0 transition-colors duration-75`}
      ></div>

      <div
        className={`absolute 
        lg:w-[750px] w-[438px]
        lg:h-[750px] h-[438px]
        top-[470px] lg:top-[285px]
        left-[130px] md:left-[550px] lg:left-[918px]
        ${activeCircleColor}
        rounded-full
        z-0 transition-colors duration-75`}
      ></div>

      <div className="relative z-20 px-4">
        <HeroNav />
        {/* Hero Text */}
        <div className="text-white mt-6 max-w-lg mx-9">
          <h1 className="text-3xl font-bold">BREAKFAST</h1>
          <p className="mt-3 text-base font-medium w-[280px]">
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day.{" "}
            <span className="underline text-base font-medium">See more</span>
          </p>
        </div>
        <div className="mt-12">
          <div className="flex justify-between items-center">
            <button
              onClick={() => handleNextPrev("prev")}
              className="w-10 h-10 bg-[#F5878752] rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={3} />
            </button>
            <div className="relative w-[190px] h-[190px]">
              <Image
                src={mainImageSrc}
                fill
                alt="image"
                className="object-contain"
                key={mainImageSrc}
              />
            </div>
            <button
              onClick={() => handleNextPrev("next")}
              className="w-10 h-10 bg-[#F5878752] rounded-full flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-1 mt-16">
          {baseImages.map((baseImage) => {
            const isActive = baseImage.id === activeImageId;
            return (
              <div
                key={baseImage.id}
                className="flex-col justify-center items-center cursor-pointer"
                onClick={() => setActiveImageId(baseImage.id)}
              >
                <div className="relative w-[70px] h-[70px] mb-2">
                  <Image
                    src={baseImage.image}
                    fill
                    className="object-contain"
                    alt="Base image"
                  />
                </div>
                <div
                  className={`h-1 w-full rounded-lg ${
                    isActive ? "bg-white" : "bg-transparent"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
