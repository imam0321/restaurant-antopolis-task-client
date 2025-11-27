import Dishes from "@/components/modules/Dishes/Dishes";
import LoadingDish from "@/components/modules/Dishes/LoadingDish";
import Feedback from "@/components/modules/Feedback/Feedback";
import Hero from "@/components/modules/Hero/Hero";
import Members from "@/components/modules/Members/Members";
import Footer from "@/components/shared/Footer";
import Partners from "@/components/shared/Partners";
import {
  getAllCategories,
  getAllDishes,
  getAllFeedbacks,
  getAllMembers,
} from "@/services";
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
  const feedbacks = await getAllFeedbacks();
  const members = await getAllMembers();
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingDish />}>
        <Dishes dishes={dishes?.data} categories={categories?.data} />
      </Suspense>
      <Feedback feedbacks={feedbacks?.data} />
      <Members members={members?.data} />
      <Partners />
      <Footer />
    </>
  );
}
