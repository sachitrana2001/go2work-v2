// HeroSection.jsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const HeroSection = () => {
  const [cities, setCities] = useState([]);
  const [location, setLocation] = useState("");

  const fetchCities = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.go2work.com/v1/cities/suggestions?q=${query}`
      );
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    if (location) {
      fetchCities(location);
    }
  }, [location]);

  return (
    <section
      className="relative flex flex-col justify-start items-center text-center bg-cover bg-center h-[calc(100vh-5rem)] md:h-[762px]"
      style={{
        backgroundImage: "url('/assets/LandingHeroBackgroundImage.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hidden md:flex absolute inset-0">
        <Image
          width={100}
          height={100}
          alt="LandingCircularBackgroundCover"
          className="xs:hidden absolute bottom-0 -z-10 w-full md:flex md:h-[762px]"
          src="/assets/LandingCircularBackgroundCover.svg"
        />
        <Image
          width={100}
          height={100}
          alt="LandingTopEllipse"
          className="absolute -top-20 -z-10 -left-10 w-1/6 object-contain"
          src="/assets/LandingTopEllipse.svg"
        />
        <Image
          width={100}
          height={100}
          alt="LandingBottomEllipse"
          className="absolute -bottom-20 -z-10 opacity-40 -right-10 w-1/5 object-contain"
          src="/assets/LandingBottomEllipse.svg"
        />
      </div>
      <div className="relative flex flex-col justify-center items-start z-10 mt-20 md:mt-40">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-20">
          Your Next <span className="text-blue-600">Career</span> Move is
          Waiting...
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:max-w-3xl mx-auto  bg-black bg-opacity-30 p-8  rounded-lg">
          <div className="relative flex items-center gap-2">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for Jobs"
              className="pl-10 active:ring-blue-700 focus-visible:ring-blue-700"
            />
          </div>
          <div className="relative flex items-center gap-2">
            <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Select location"
              className="pl-10 active:ring-blue-700 focus-visible:ring-blue-700"
              value={location}
              onChange={(e) => setLocation(e.target.value)} // Update location state
            />
          </div>
          <Button
            variant="default"
            className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
          >
            Search Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;