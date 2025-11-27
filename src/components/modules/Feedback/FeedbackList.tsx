"use client"
import { IFeedback } from "@/types";
import { Circle } from "lucide-react";
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

  if (!Array.isArray(feedbacks) || feedbacks.length === 0) return null;

  const feedback = feedbacks[activeIndex];

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
      className="md:w-2/3 w-full"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Customer <span className="text-[#8B0000]">Feedback</span>
      </h2>
      <p className="text-[#3D3D3D] text-lg md:text-xl mb-6">
        {feedback?.description}
      </p>

      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
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
        <div className="flex gap-2 mt-4 md:mt-0">
          {feedbacks.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="cursor-pointer"
            >
              <Circle
                className={`text-xs ${
                  activeIndex === i ? "text-[#8B0000]" : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
