import Image from "next/image";
import { IBaseImage } from "./Hero";

interface HeroMobileCarouselProps {
  baseImages: IBaseImage[];
  activeImageId: number;
  setActiveImageId: (id: number) => void;
}

export default function HeroMobileCarousel({
  baseImages,
  activeImageId,
  setActiveImageId,
}: HeroMobileCarouselProps) {
  return (
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
  );
}
