import { Button } from "@/components/ui/button"
import HeroSection from "@/components/landing/HeroSection"
import PopularCategories from "@/components/landing/PopularCategories"
import PopularRoles from "@/components/landing/PopularRoles"
import HowItWorks from "@/components/landing/HowItWorks"

export default function Home() {
  return (
    <main className="landing-container flex flex-col gap-14 md:gap-32">
       <HeroSection/>
       <PopularCategories/>
       <PopularRoles/>
       <HowItWorks/>
    </main>
  )
}