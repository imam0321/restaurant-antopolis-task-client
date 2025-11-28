"use client";

import Image from "next/image";
import { IMember } from "@/types";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Members({ members }: { members: IMember[] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 724);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardVariants: Variants = {
    hidden: (i: number) => {
      const pos = i % 4;
      const distance = isMobile ? 80 : 200;

      return [
        { x: -distance, y: -distance, opacity: 0 }, 
        { x: distance, y: -distance, opacity: 0 }, 
        { x: -distance, y: distance, opacity: 0 }, 
        { x: distance, y: distance, opacity: 0 }, 
      ][pos];
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
   if (!members) {
    return null;
  }

  return (
    <section className="mb-16 lg:mt-0 mt-10">
      {/* Header Section */}
      <div
        className="py-24 text-white text-center relative -mb-16"
        style={{
          backgroundImage: 'url("/hero/bg-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#AD1519] opacity-80"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:block md:block hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Members</h2>
          <p className="text-base text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Varius sed pharetra dictum neque massa congue
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-4xl gap-4 mx-4 md:mx-10 lg:mx-auto">
        {members && members.map((member, i) =>
          isMobile ? (
            <motion.div
              key={member._id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              className="border-b border-gray-400"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={member.profile}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 438px, (max-width: 1024px) 538px, 750px"
                />
              </div>

              <div className="text-center py-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ) : (
            <div key={member._id} className="border-b border-gray-400">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={member.profile}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 438px, (max-width: 1024px) 538px, 750px"
                />
              </div>

              <div className="text-center py-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
