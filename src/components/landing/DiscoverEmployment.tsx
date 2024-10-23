import Image from "next/image";
import React from "react";

const DiscoverEmployment = () => {
  return (
    <div className="flex flex-col items-center md:h-[calc(100vh-5rem)] px-5">
      <h3 className="text-3xl md:text-4xl md:text-center font-semibold">
        Discover employment opportunities tailored to your unique preferences
      </h3>
      <Image
        src="/assets/LandingDiscoverDashboardUI.svg"
        alt="Discover employment opportunities"
        width={1000}
        height={600}
      />
    </div>
  );
};

export default DiscoverEmployment;
