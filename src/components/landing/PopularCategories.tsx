// PopularCategories.jsx
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { CATEGORIES } from "@/constants";

const PopularCategories = () => {
  return (
    <section className="popular-roles-wrapper w-full px-5 md:px-20">
      <h3 className=" text-5xl font-semibold text-gray-900  md:text-5xl mb-16 md:text-center">
        Popular <br className="md:hidden" />
        Categories
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
        {CATEGORIES.map((category) => (
          <Card
            key={category.title}
            className="border text-card-foreground relative flex flex-col items-center rounded-2xl bg-background shadow-xl transition delay-75 ease-in-out hover:shadow-sm px-5 py-10"
          >
            <Image
              src={category.imageSrc}
              alt={category.title}
              width={300}
              height={100}
              className="mb-2"
            />
            <span className="font-semibold text-2xl text-center pt-5">
              {category.title}
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
