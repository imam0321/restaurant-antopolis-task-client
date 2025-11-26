import { Search } from "lucide-react";

export default function HeroNav() {
  return (
    <div className="flex items-center justify-between mx-1 lg:mx-4 mt-10">
      {/* Logo / Title */}
      <h1 className="hidden sm:block uppercase text-2xl lg:text-[2rem] font-bold text-white">
        Restaurant
      </h1>

      {/* Search Bar */}
      <div className="flex-1 max-w-[590px]">
        <div className="flex items-center lg:h-10 h-9 bg-white text-[#2D2D2D] rounded-lg px-4">
          <Search className="mr-3 text-[#414141]" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-base outline-none placeholder:font-medium"
          />
        </div>
      </div>
    </div>
  );
}
