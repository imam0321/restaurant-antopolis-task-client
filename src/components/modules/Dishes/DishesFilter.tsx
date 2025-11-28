"use client";
import { ICategory } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

export default function DishesFilter({
  categories,
}: {
  categories: ICategory[];
}) {
  const allCategories = [{ _id: "all", name: "All" }, ...(categories || [])];
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
    <div className="flex lg:flex-row flex-row-reverse items-center gap-[2.77px]">
      {allCategories.map((cat) => (
        <span
          key={cat._id}
          onClick={() => handleCategoryClick(cat.name)}
          className={`text-[0.5rem] lg:text-[1.5rem] px-2 lg:px-4 lg:py-0 rounded-xl lg:rounded-3xl cursor-pointer ${
            currentCategory === cat.name.toLowerCase()
              ? "bg-black text-white"
              : "border border-[#BABABA]"
          }`}
        >
          {cat.name}
        </span>
      ))}
    </div>
  );
}
