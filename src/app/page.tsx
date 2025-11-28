import Dishes from "@/components/modules/Dishes/Dishes";
import Feedback from "@/components/modules/Feedback/Feedback";
import Hero from "@/components/modules/Hero/Hero";
import Members from "@/components/modules/Members/Members";
import Partners from "@/components/shared/Partners";
import {
  getAllCategories,
  getAllDishes,
  getAllFeedbacks,
  getAllMembers,
} from "@/services";

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
    <div>
      <Hero dishes={dishes?.data}/>
      <div className="max-w-4xl lg:mx-auto md:mx-10 mx-4">
        <Dishes dishes={dishes?.data} categories={categories?.data} />
        <Feedback feedbacks={feedbacks?.data} />
      </div>
      <Members members={members?.data} />
      <Partners />
    </div>
  );
}
