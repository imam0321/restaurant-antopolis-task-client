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
      <div className="flex justify-end items-center gap-x-2">
        <span
          onClick={() => setActiveForm("food")}
          className="bg-[#2C2C2C] text-white text-[0.485rem] lg:text-[1.75rem] px-2.5 lg:px-4 lg:py-2 rounded-xl lg:rounded-3xl cursor-pointer"
        >
          Add Food
        </span>

        <span
          onClick={() => setActiveForm("category")}
          className="bg-[#2C2C2C] text-white text-[0.485rem] lg:text-[1.75rem] px-2.5 lg:px-4 lg:py-2 rounded-xl lg:rounded-3xl cursor-pointer"
        >
          Add Category
        </span>
      </div>

      {/* Conditional Rendering */}
      {activeForm === "food" && (
        <AddFoodForm
          onSuccess={handleSuccess}
          categories={categories}
          onClose={() => setActiveForm(null)}
        />
      )}
      {activeForm === "category" && (
        <AddCategoryForm
          onSuccess={handleSuccess}
          onClose={() => setActiveForm(null)}
        />
      )}
    </>
  );
}
