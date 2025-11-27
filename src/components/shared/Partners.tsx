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
    <div className="my-16 md:my-24 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#8B0000] font-semibold uppercase tracking-widest text-sm">
          Partners & Clients
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          We Work With The Best People
        </h1>
      </div>

      <div className="lg:overflow-hidden lg:mx-12">
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {infiniteClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="shrink-0 flex items-center justify-center opacity-50 hover:opacity-100 transition duration-300"
            >
              <Image
                src={client.img}
                alt="Client"
                width={239}
                height={128}
                style={{ rotate: "0deg", opacity: 1 }}
                className="object-contain"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
