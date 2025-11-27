"use client";

import { useState, useTransition } from "react";
import { AddFoodForm } from "./AddDishForm";
import AddCategoryForm from "./AddCategoryForm";
import { ICategory } from "@/types";
import { useRouter } from "next/navigation";

export default function DishButtons({categories}: {categories: ICategory[]}) {
  const [activeForm, setActiveForm] = useState<"food" | "category" | null>(
    null
  );
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleSuccess = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <>
      <div className="flex items-center gap-x-[2.77px]">
        <button
          onClick={() => setActiveForm("food")}
          className="flex items-center justify-center
            bg-[#2C2C2C] text-white
            rounded-xl lg:rounded-3xl
            h-[22px] lg:h-10
            px-2.5 lg:px-4 lg:py-4
            text-[0.519rem] lg:text-[1.875rem]"
        >
          Add Food
        </button>

        <button
          onClick={() => setActiveForm("category")}
          className="flex items-center justify-center
            bg-[#2C2C2C] text-white
            rounded-xl lg:rounded-3xl
            h-[22px] lg:h-10
            px-2.5 lg:px-4 lg:py-4
            text-[0.519rem] lg:text-[1.875rem]"
        >
          Add Category
        </button>
      </div>

      {/* Conditional Rendering */}
      {activeForm === "food" && (
        <AddFoodForm onSuccess={handleSuccess} categories={categories} onClose={() => setActiveForm(null)} />
      )}
      {activeForm === "category" && (
        <AddCategoryForm onSuccess={handleSuccess}  onClose={() => setActiveForm(null)} />
      )}
    </>
  );
}
