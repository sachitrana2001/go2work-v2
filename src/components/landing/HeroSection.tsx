"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Select from "react-select"; // Import react-select

const HeroSection = () => {
  const [cities, setCities] = useState([]);
  const [location, setLocation] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const fetchCities = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.go2work.com/v1/cities/suggestions?q=${query}`
      );
      const data = await response.json();
      const cityOptions = data.cities.map((city: any) => ({
        value: city._id,
        label: `${city.name}, ${city.state}` || city.name,
      }));
      setCities(cityOptions);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleSearch = () => {
    window.location.href = `https://go2work.com//jobseeker?role=${
      job || ""
    }&&location=${location || ""}`;
  };
  useEffect(() => {
    if (location) {
      fetchCities(location);
    }
  }, [location]);
  console.log(location, job);
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
      <div className="relative flex flex-col justify-center items-start mx-5 z-10 mt-20 md:mt-40">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-20">
          Navigating Your Job Search with{" "}
          <span className="text-blue-600">go2work</span>
        </h2>
        <div className="w-full flex mx-auto flex-col justify-between  md:flex-row gap-4  bg-black bg-opacity-30 p-8  rounded-lg">
          <div className="relative flex items-center flex-1 gap-2">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for Jobs"
              className="pl-10 active:ring-blue-600 focus-visible:ring-blue-600"
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          <div className="relative flex items-center flex-1 gap-2">
            <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-muted-foreground" />
            <Select
              className="w-full"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  paddingLeft: "1.75rem",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // backgroundColor: "transparent",
                  // borderColor: "transparent",
                  // "&:hover": {
                  //   borderColor: "transparent",
                  // },
                  // "&:focus": {
                  //   borderColor: "transparent",
                  // },
                }),
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  display: 'flex',
                  fontSize: "14px",
                })
              }}
              options={cities} // Options from API
              value={cities.find((city: any) => city.value === location)} // Set initial value
              onInputChange={(query: string) => setLocation(query)} // Update query as input changes
              onChange={(selectedOption: any) => {
                console.log(selectedOption);
                setLocation(selectedOption.label);
              }} // Handle option select
              placeholder="Select location"
            />
          </div>
          <Button
            variant="default"
            className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
            onClick={handleSearch}
          >
            Search Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
