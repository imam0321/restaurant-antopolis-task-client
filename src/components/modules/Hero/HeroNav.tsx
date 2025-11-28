"use client";

import useDebounce from "@/hooks/useDebounce";
import { IDish } from "@/types";
import { useState, useRef, useEffect, useMemo } from "react";
import SearchInput from "./SearchInput";
import SearchDropdown from "./SearchDropdown";

export default function HeroNav({ dishes }: { dishes: IDish[] }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const debouncedQuery = useDebounce(searchQuery, 200);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dishesWithLowerCase = useMemo(
    () =>
      dishes.map((dish) => ({ ...dish, lowerName: dish.name.toLowerCase() })),
    [dishes]
  );

  const filteredDishes = useMemo(() => {
    if (!debouncedQuery.trim()) return dishesWithLowerCase.slice(0, 4);
    const query = debouncedQuery.toLowerCase();
    return dishesWithLowerCase
      .filter((dish) => dish.lowerName.includes(query))
      .slice(0, 4);
  }, [dishesWithLowerCase, debouncedQuery]);

  return (
    <div className="flex items-center justify-between mx-1 lg:mx-4 mt-10">
      <h1 className="hidden sm:block uppercase text-2xl lg:text-[2rem] font-bold text-white">
        Restaurant
      </h1>

      <div className="flex-1 max-w-[590px] relative" ref={searchRef}>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setIsSearchOpen={setIsSearchOpen}
        />
        {isSearchOpen && <SearchDropdown filteredDishes={filteredDishes} />}
      </div>
    </div>
  );
}
