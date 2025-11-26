"use client";
import { ICategory } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

export default function DishesFilter({
  categories,
}: {
  categories: ICategory[];
}) {
  const allCategories = [{ _id: "all", name: "All" }, ...categories];
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const handleCategoryClick = (name: string) => {
    const query = new URLSearchParams(searchParams.toString());

    if (name.toLowerCase() === "all") {
      query.delete("category");
    } else {
      query.set("category", name.toLowerCase());
    }

    router.push(`?${query.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-row items-center gap-[2.77px]">
      {allCategories.map((cat) => (
        <button
          key={cat._id}
          onClick={() => handleCategoryClick(cat.name)}
          className={`flex items-center justify-center rounded-xl lg:rounded-3xl h-[22px] lg:h-10 px-2.5 lg:px-4 text-[0.485rem] lg:text-[1.75rem] ${
            currentCategory === cat.name.toLowerCase()
              ? "bg-black text-white"
              : "border border-[#BABABA]"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
