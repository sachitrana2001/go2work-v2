import HeroSection from "@/components/landing/HeroSection"
import PopularCategories from "@/components/landing/PopularCategories"
import PopularRoles from "@/components/landing/PopularRoles"
import HowItWorks from "@/components/landing/HowItWorks"
import DiscoverEmployment from "@/components/landing/DiscoverEmployment"
import FindYourBest from "@/components/landing/FindYourBest"

export default function Home() {
  return (
    <main className="landing-container flex flex-col gap-14 md:gap-32">
       <HeroSection/>
       <PopularCategories/>
       <PopularRoles/>
       <DiscoverEmployment/>
       <FindYourBest/>
       <HowItWorks/>
    </main>
  )
}