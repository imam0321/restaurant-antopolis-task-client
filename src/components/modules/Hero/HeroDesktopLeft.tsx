import Image from "next/image";
import { IBaseImage } from "./Hero";

interface HeroDesktopLeft {
  baseImages: IBaseImage[];
  activeImageId: number;
  handleThumbnailClick: (id: number) => void;
}

export default function HeroDesktopLeft({
  baseImages,
  activeImageId,
  handleThumbnailClick,
}: HeroDesktopLeft) {
  return (
    <section className="text-white lg:mt-24 md:mt-10 mx-9 lg:block md:block hidden">
      <h1 className="lg:text-[6rem] md:text-[3rem] font-normal">BREAKFAST</h1>
      <p className="lg:text-[1.25] font-bold w-[720px] lg:-mt-6">
        Breakfast, often referred to as the ‘most important meal of the day’,
        provides essential nutrients to kick start our day. It includes a
        variety of foods, like fruits, cereals, dairy products, and proteins,
        that contribute to a balanced diet.
      </p>
      <div className="lg:flex md:flex max-w-lg hidden justify-between items-center mt-4">
        {baseImages.map((baseImage) => {
          const isActive = baseImage.id === activeImageId;
          return (
            <div
              key={baseImage.id}
              className="flex-col justify-between items-center cursor-pointer"
              onClick={() => handleThumbnailClick(baseImage.id)}
            >
              <figure className="relative w-[120px] h-[120px] mb-2">
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
    </section>
  );
}
