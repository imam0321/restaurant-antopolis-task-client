"use client";
import { IFeedback } from "@/types";
import Image from "next/image";
import FeedbackList from "./FeedbackList";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Feedback({ feedbacks }: { feedbacks: IFeedback[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section ref={ref}>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-20">
        {/* Feedback section - slide from left */}
        <FeedbackList feedbacks={feedbacks} controls={controls} />
        {/* RIGHT: Image - slide from bottom */}
        <motion.div
          className="relative md:w-1/3 w-full flex justify-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { y: 200, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
            },
          }}
        >
          <div
            className="w-80 h-92 bg-[#AD1519]"
            style={{
              clipPath: "polygon(0% 40%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          ></div>
          <div className="absolute h-96 max-w-72 inset-0 m-auto mb-0 z-10">
            <Image
              fill
              src="https://res.cloudinary.com/dzmvhztng/image/upload/v1763999213/shef_lxtvm5.png"
              alt="Chef"
              sizes="(max-width: 768px) 438px, (max-width: 1024px) 538px, 750px"
              loading="eager"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
