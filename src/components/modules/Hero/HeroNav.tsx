import { Search } from "lucide-react";

export default function HeroNav() {
  return (
    <div className="flex items-center justify-between mx-4 mt-10 gap-4">
      {/* Logo / Title */}
      <h1 className="hidden sm:flex uppercase text-2xl font-bold text-white z-10">
        Restaurant
      </h1>

      {/* Search Bar */}
      <div className="z-20 w-full sm:w-auto flex-1 max-w-lg">
        <div className="flex items-center bg-white text-[#2D2D2D] rounded-xl px-4 py-2 shadow-md">
          <Search className="mr-3 text-[#414141]" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-[#2D2D2D] text-base outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
