"use client";

import { IDish } from "@/types";
import Image from "next/image";

export default function DishItem({ dish }: { dish: IDish }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
        <Image
          src={dish?.thumbnail || "/placeholder-food.jpg"}
          alt={dish?.name}
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">{dish?.name}</h3>
        <p className="text-sm text-gray-500">
          {dish.category_id?.name || "No category"}
        </p>
      </div>

      <div className="text-sm font-semibold text-[#D3332F]">$230</div>
    </div>
  );
}
