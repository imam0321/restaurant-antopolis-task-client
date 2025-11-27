import DishCard from "./DishCard";
import { ICategory, IDish } from "@/types";
import DishesFilter from "./DishesFilter";

export default async function Dishes({
  dishes,
  categories,
}: {
  dishes: IDish[];
  categories: ICategory[];
  }) {
  
  return (
    <div className="mb-10 max-w-5xl mx-auto">
      {/* Dish header */}
      <div className="text-center">
        <h1 className="lg:text-[3.438rem] md:text-[2rem] text-[1.875rem] text-[#1F1F1F] font-bold lg:mt-18 mt-10">
          Our Best Selling Dishes
        </h1>
        <p className="text-[#5C5C5C] lg:hidden md:hidden">
          Our fresh garden salad is a light and refreshing option.
        </p>
        <p className="text-[#5C5C5C] lg:text-[1.563rem] w-[852px] lg:block md:block hidden mx-auto">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomatoe all tossed in your choice of
          dressing.
        </p>
      </div>
      {/* Category Filter Buttons */}
      <div className="flex justify-between items-center mt-6 lg:mx-12 mx-4">
        <DishesFilter categories={categories} />
        <div className="flex items-center gap-x-[2.77px]">
          <button
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
      </div>
      {/* Food Card List */}
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 lg:mt-10 mt-4 lg:mx-12 mx-4">
        {dishes.map((dish: IDish) => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </div>
    </div>
  );
}
