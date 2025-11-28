"use client"
import { IFeedback } from "@/types";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function FeedbackList({
  feedbacks,
  controls,
}: {
  feedbacks: IFeedback[];
  controls: ReturnType<typeof useAnimation>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!Array.isArray(feedbacks) || feedbacks?.length === 0) return null;

  const feedback = feedbacks[activeIndex];

  const handleNextPrev = (moveDirection: "next" | "prev") => {
    const total = feedbacks?.length;
    setActiveIndex((prev) => {
      if (moveDirection === "next") {
        return (prev + 1) % total;
      } else {
        return (prev - 1 + total) % total;
      }
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { x: -200, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      className="lg:w-3/5 md:w-3/4 w-full space-y-10 mb-10"
    >
      <div>
        <h2 className="text-2xl md:text-5xl font-bold mb-4">
          Customer <span className="text-[#8B0000]">Feedback</span>
        </h2>
        <p className="text-[#3D3D3D] lg:text-xl md:text-xl text-sm mb-6">
          {feedback?.description}
        </p>
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center lg:gap-4 gap-2">
          <Image
            height={56}
            width={56}
            src={feedback?.profile}
            alt={feedback?.name}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="text-[#8B0000] font-bold">{feedback?.name}</h4>
            <p className="text-sm text-gray-600">{feedback?.position}</p>
          </div>
        </div>

        {/* DOTS */}
        <div className="lg:flex md:flex hidden items-center gap-1 mt-4 md:mt-0">
          {feedbacks && feedbacks.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="cursor-pointer"
            >
              <Circle
                className={`h-3 w-3 ${
                  activeIndex === i
                    ? "fill-[#8B0000] text-[#8B0000]"
                    : "text-[#8B0000]"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="lg:hidden md:hidden">
          <div className="flex justify-between items-center gap-2">
            <button
              onClick={() => handleNextPrev("prev")}
              className="w-6 h-6 bg-[#F5878752] rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="w-3 h-3 text-white" strokeWidth={3} />
            </button>
            <button
              onClick={() => handleNextPrev("next")}
              className="w-6 h-6 bg-[#F5878752] rounded-full flex items-center justify-center"
            >
              <ChevronRight className="w-3 h-3 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
