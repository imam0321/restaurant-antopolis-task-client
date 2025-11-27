"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Partners() {
  const clients = [
    { id: 1, img: "/icons/image-1.png", alt: "Bakery Client" },
    { id: 2, img: "/icons/image-2.png", alt: "Restaurant Client" },
    { id: 3, img: "/icons/image-3.png", alt: "Sweet Bakery Client" },
    { id: 4, img: "/icons/image-4.png", alt: "Fork & Spoon Client" },
    { id: 5, img: "/icons/image-5.png", alt: "Wolf Coffee Client" },
    { id: 6, img: "/icons/image-6.png", alt: "Bistro Client" },
  ];

  const infiniteClients = [...clients, ...clients];

  return (
    <div className="my-16 md:my-24 max-w-4xl lg:mx-auto md:mx-auto">
      <div className="text-center mb-2">
        <p className="text-[#A52A2A] tracking-widest text-sm">
          Partners & Clients
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#333333]">
          We Work With The Best People
        </h1>
      </div>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "linear",
          }}
        >
          {infiniteClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="shrink-0 flex items-center justify-center"
            >
              <Image
                src={client.img}
                alt={client.alt}
                width={150}
                height={80}
                className="object-contain opacity-20 hover:opacity-100 transition-all duration-75"
                draggable={false}
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
