import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const EmployerHeroSection = () => {
  return (
    <section className="hero-landing-wrapper relative mx-auto flex h-full w-full justify-center md:h-[762px]">
      <div>
        <Image
          alt="Employer Hero Background Cover"
          src="/assets/EmployerHeroBackgroundCover.svg"
          width={870}
          height={870}
          className="absolute -top-14 left-0 -z-10 md:-top-28"
        />
      </div>

      {/* Content */}
      <div className="flex w-full flex-col justify-between items-center gap-24 p-10 md:flex-row md:gap-20 md:p-20">
        {/* Left Text Section */}
        <div className="max-w-xl max-sm:mt-16">
          <h2 className="text-left text-4xl font-semibold md:text-5xl ">
            Looking to hire the best and brightest minds?
          </h2>
          <h2 className="mt-1 text-left text-4xl font-semibold md:text-5xl ">
            <span className="text-blue-800">Post a Job</span> today and find
            your next top talent!
          </h2>
          <a href="/orgsearch">
            <Button className="mt-10 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full">
              POST A JOB
            </Button>
          </a>
        </div>

        {/* Right Image Section */}
        <div>
          <Image
            alt="Employer Hero Image"
            src="/assets/EmployerHeroImage.svg"
            width={500}
            height={500}
            className="relative md:-top-[1.5rem] md:right-20"
          />
        </div>
      </div>
    </section>
  );
};

export default EmployerHeroSection;
