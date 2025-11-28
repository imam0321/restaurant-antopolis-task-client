import Image from "next/image";
import { IBaseImage } from "./Hero";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroMobileCarouselProps {
  baseImages: IBaseImage[];
  mainImageSrc: string;
  activeImageId: number;
  setDirection: (direction: number) => void;
  setActiveImageId: (id: number) => void;
}

export default function HeroMobileView({
  baseImages,
  mainImageSrc,
  activeImageId,
  setDirection,
  setActiveImageId,
}: HeroMobileCarouselProps) {
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

  return (
    <>
      {/* Mobile Header */}
      <header className="text-white mt-6 max-w-lg mx-5 lg:hidden md:hidden">
        <h1 className="text-[2.813rem] font-normal">BREAKFAST</h1>
        <p className="mt-3 text-base font-normal w-[280px]">
          Breakfast, often referred to as the ‘most important meal of the day’,
          provides essential nutrients to kick start our day.{" "}
          <span className="underline text-base font-normal">See more</span>
        </p>
      </header>
      {/* Carousel coder image */}
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

      <div className="lg:hidden md:hidden flex justify-center items-center gap-1 mt-16">
        {baseImages.map((baseImage) => {
          const isActive = baseImage.id === activeImageId;
          return (
            <div
              key={baseImage.id}
              className="flex-col justify-center items-center cursor-pointer"
              onClick={() => setActiveImageId(baseImage.id)}
            >
              <figure className="relative w-[70px] h-[70px] mb-2">
                <Image
                  src={baseImage.image}
                  fill
                  className="object-contain"
                  alt="Base image"
                  loading="eager"
                  sizes="(max-width: 768px) 438px, (max-width: 1024px) 538px, 750px"
                />
              </figure>
              <div
                className={`h-1 w-full rounded-lg ${
                  isActive ? "bg-white" : "bg-transparent"
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
}
