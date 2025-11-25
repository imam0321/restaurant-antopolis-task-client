import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

interface HeroCircleAnimationProps {
  activeImageId: number;
  activeCircleColor: string;
  mainImageSrc: string;
  direction: number;
}

const spinEnterExitVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "0%" : "-0%",
    y: direction > 0 ? "-0%" : "0%",
    rotate: direction > 0 ? 20 : -20,
    opacity: 0,
    transition: {
      duration: 1.0,
      ease: "easeOut",
    },
  }),

  center: {
    x: "0%",
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },

  exit: (direction: number) => ({
    x: direction > 0 ? "-50%" : "50%",
    y: direction > 0 ? "50%" : "-50%",
    rotate: direction > 0 ? -180 : 180,
    opacity: 0,
    backgroundColor: "transparent",
    z: 10,
    transition: {
      duration: 1.0,
      ease: "easeInOut",
    },
  }),
};

export default function HeroCircleAnimation({
  activeImageId,
  activeCircleColor,
  mainImageSrc,
  direction,
}: HeroCircleAnimationProps) {
  return (
    <>
      {/* Mobile view */}
      <div
        className={`absolute 
          w-[438px]
          h-[438px]
          top-[470px] 
          left-[130px] 
          ${activeCircleColor}
          rounded-full
          z-0 transition-colors duration-75 lg:hidden md:hidden`}
      ></div>
      {/* Desktop view */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`circle-br-${activeImageId}`}
          custom={direction}
          variants={spinEnterExitVariants}
          initial={"enter"}
          animate={"center"}
          exit={"exit"}
          className={`absolute 
          w-[438px] h-[438px] top-[470px] left-[130px] 
          md:w-[538px] md:h-[538px] md:top-[470px] md:left-[400px] 
          lg:w-[750px] lg:h-[750px] lg:top-[285px] lg:left-[918px] 
          ${activeCircleColor} rounded-full z-0 transition-colors duration-75 lg:block md:block hidden`}
        >
          {/* Image only shows on md/lg */}
          <figure
            className="relative hidden md:block lg:block 
          md:w-[400px] md:h-[400px] lg:w-[470px] lg:h-[470px] 
          top-[-85px] left-[-60px]"
          >
            <Image
              src={mainImageSrc}
              fill
              alt="image"
              className="object-contain"
              loading="eager"
              sizes="(max-width: 768px) 438px, (max-width: 1024px) 538px, 750px"
            />
          </figure>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
