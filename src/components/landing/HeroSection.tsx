"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Select from "react-select";

const HeroSection = () => {
  const [locationOptions, setLocationOptions] = useState([]);
  const [location, setLocation] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [addQuery, setAddQuery] = useState<string>("");

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
      setLocationOptions(cityOptions);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleSearch = () => {
    window.location.href = `https://go2work.com/jobseeker?role=${
      job || ""
    }&location=${location || ""}`;
  };

  useEffect(() => {
    if (addQuery) {
      fetchCities(addQuery);
    }
  }, [addQuery]);

  return (
    <section
      className="relative flex flex-col justify-start items-center text-center bg-cover bg-center h-[calc(100vh-5rem)] md:h-[762px]"
      style={{
        backgroundImage: "url('/assets/LandingHeroBackgroundImage.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/75 via-blue-600/25 to-transparent" />
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
      </div>
      <div className="relative flex flex-col justify-center items-start mx-5 z-10 mt-20 md:mt-40">
        <h2 className="text-4xl md:text-5xl font-semibold text-black mb-20">
          Navigating Your Job Search With{" "}
          <span className="text-blue-600">
            go<span className="text-blue-950">2</span>work
          </span>
        </h2>
        <div className="w-full flex mx-auto flex-col justify-between md:flex-row gap-4 bg-black bg-opacity-30 p-8 rounded-lg">
          <div className="relative flex items-center flex-1 gap-2">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search for Jobs"
              className="pl-10 active:ring-blue-600 focus-visible:ring-blue-600"
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          <div className="relative flex items-center flex-1 gap-2">
            <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
            <Select
              className="w-full"
              styles={{
                container: (base) => ({
                  ...base,
                  width: "100%",
                }),
                control: (base) => ({
                  ...base,
                  paddingLeft: "1.75rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }),
                placeholder: (base) => ({
                  ...base,
                  display: "flex",
                  fontSize: "14px",
                }),
                option: (base) => ({
                  ...base,
                  display: "flex",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                  color: "#000",
                }),
                valueContainer: (base) => ({
                  ...base,
                  display: "flex",
                  fontSize: "14px",
                }),
              }}
              options={locationOptions}
              value={locationOptions.find(
                (city: any) => city.label === location
              )}
              onInputChange={(query: string) => setAddQuery(query)}
              onChange={(selectedOption: any) => {
                setLocation(selectedOption.label);
              }}
              placeholder="Select location"
            />
          </div>
          <Button
            variant="default"
            className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
