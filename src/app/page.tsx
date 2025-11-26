import Dishes from "@/components/modules/Dishes/Dishes";
import Hero from "@/components/modules/Hero/Hero";
import { getAllCategories, getAllDishes } from "@/services";
import { Suspense } from "react";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = await searchParams;
  const queryParams = new URLSearchParams();
  if (searchParamsObj.category && searchParamsObj.category !== "all") {
    queryParams.set("category", String(searchParamsObj.category));
  }
  if (searchParamsObj.searchTerm) {
    queryParams.set("searchTerm", String(searchParamsObj.searchTerm));
  }
  const queryString = queryParams.toString();

  const dishes = await getAllDishes(queryString);
  const categories = await getAllCategories();

  return (
    <>
      <Hero />
      <Suspense>
        <Dishes dishes={dishes.data} categories={categories.data} />
      </Suspense>
    </>
  );
}
