// PopularCategories.jsx
import Image from "next/image";
import { Card } from "../ui/card";
import { CATEGORIES } from "@/constants";
import Link from "next/link";

const PopularCategories = () => {
  return (
    <section className="popular-roles-wrapper w-full px-5 md:px-20">
      <h3 className="text-[2.5rem] font-semibold text-gray-900 md:text-5xl mb-8 md:mb-16 md:text-center">
        Popular <br className="md:hidden" />
        Categories
      </h3>
      <div className="flex flex-wrap justify-center gap-5">
        {CATEGORIES.map((category) => (
          <Link
            key={category.title}
            className="border text-card-foreground relative flex flex-col items-center rounded-2xl bg-background shadow-xl transition-transform transform-gpu delay-75 ease-in-out hover:scale-105 hover:shadow-2xl px-5 py-10 cursor-pointer"
            href={`https://go2work.com/jobseeker?role=${category.title}&&location=`}
          >
            <Image
              src={category.imageSrc}
              alt={category.title}
              width={250}
              height={100}
              className="mb-2 transition-transform transform-gpu duration-300 ease-in-out"
            />
            <span className="font-semibold text-2xl text-center pt-5 opacity-90 transition-opacity duration-300 hover:opacity-100">
              {category.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
