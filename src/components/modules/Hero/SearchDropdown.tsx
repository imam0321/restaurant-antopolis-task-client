"use client";

import { IDish } from "@/types";
import { Search } from "lucide-react";
import DishItem from "./DishItem";

export default function SearchDropdown({
  filteredDishes,
}: {
  filteredDishes: IDish[];
}) {
  return (
    <div className="absolute top-full -mt-1 w-full bg-white rounded-b-lg border border-gray-200 max-h-[400px] overflow-y-auto z-50">
      {filteredDishes.length > 0 ? (
        filteredDishes.map((dish) => <DishItem key={dish._id} dish={dish} />)
      ) : (
        <div className="px-4 py-8 text-center text-gray-500">
          <Search className="mx-auto mb-2 text-gray-400" size={32} />
          <p className="font-medium">No dishes found</p>
          <p className="text-sm mt-1">Try searching with different keywords</p>
        </div>
      )}
    </div>
  );
}
