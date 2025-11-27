"use client";

import { motion } from "framer-motion";

export default function LoadingDish() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <motion.div
        className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
