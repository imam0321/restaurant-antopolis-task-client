"use client";

import { Search, X } from "lucide-react";

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setIsSearchOpen: (value: boolean) => void;
}

export default function SearchInput({
  searchQuery,
  setSearchQuery,
  setIsSearchOpen,
}: SearchInputProps) {
  const handleClear = () => setSearchQuery("");

  return (
    <div className="flex items-center lg:h-10 h-9 bg-white text-[#2D2D2D] rounded-lg px-4">
      <Search className="mr-3 text-[#414141]" size={20} />
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsSearchOpen(true)}
        className="w-full text-base outline-none placeholder:font-medium"
      />
      {searchQuery && (
        <button
          onClick={handleClear}
          className="ml-2 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
