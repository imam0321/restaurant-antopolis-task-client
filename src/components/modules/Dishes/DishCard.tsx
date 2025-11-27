import { IDish } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

export default function DishCard({ dish }: { dish: IDish }) {
  return (
    <div className="flex flex-col justify-between lg:shadow-md shadow-none bg-white overflow-hidden">
      <div className="relative w-full h-32 md:h-48 lg:h-56">
        <Image
          src={dish?.thumbnail || "/hero/dish-1.png"}
          fill
          alt={dish?.name}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="lg:p-4 p-2 flex flex-col justify-between flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="lg:text-xl text-sm font-medium text-black">
            {dish?.name}
          </h2>
          <span className="lg:bg-[#F03328] bg-[#A52A2A] text-white lg:text-base text-xs px-3 py-1 rounded-full">
            {dish?.category_id?.name}
          </span>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="text-[#FF9E0C] fill-[#FF9E0C] lg:w-5 lg:h-5 w-2 h-2"
              />
            ))}
          </div>
          <p className="lg:text-2xl text-base font-bold text-black">$230</p>
        </div>
      </div>
    </div>
  );
}
