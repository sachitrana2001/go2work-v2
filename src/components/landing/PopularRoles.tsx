import { ROLES } from "@/constants";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const PopularRoles = () => {
  return (
    <section className=" discover-jobs-wrapper w-full bg-[#FEF9F4] px-5  md:px-20">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-20 bg-[url('/assets/LandingDiscoverJobsBackground.svg')] bg-right bg-no-repeat py-14 md:flex-row">
        <div className="flex flex-col items-center justify-center gap-9 md:max-w-sm">
          <div className="flex gap-6">
            {" "}
            <Image
              alt="Search Icon"
              width={120}
              height={100}
              src="/assets/LandingDiscoverJobsSearchIcon.svg"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Discover jobs across popular roles
            </h2>
          </div>

          <h2 className="text-2xl text-gray-500">
            Select a role and we’ll show you relevant jobs for it!
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:gap-10 md:w-2/3">
          {ROLES.map((role) => (
            <Link
            key={role}
            className="shadow-xs relative whitespace-pre-wrap flex justify-between h-32 cursor-pointer items-center gap-2 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-background py-6 px-10 text-2xl font-semibold transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
            href={`https://go2work.com/jobseeker?role=${role}&&location=`}
          >
            {role}
            <ChevronRight className="transition-transform duration-300 ease-out hover:translate-x-2" />
          </Link>          
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoles;
