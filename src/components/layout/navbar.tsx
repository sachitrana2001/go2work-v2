"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Building, Menu, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="relative bg-white border-b border-gray-200 z-10 shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="logo.svg"
              alt="go2work logo"
              width={120}
              height={40}
              className="-ml-1"
            />
          </Link>
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-2 p-2 bg-blue-900 rounded-full">
              {/* Job Seeker Link */}
              <Link
                href="/"
                className={`rounded-full flex items-center justify-center gap-2 transition-all duration-200 py-2 px-3 ${
                  pathname === "/" ? "bg-white text-black" : "text-white"
                } `}
              >
                <User
                  className={`transition-colors duration-200 ${
                    pathname === "/"
                      ? "text-black" // Active path
                      : "text-white" // Default state
                  }`} // Hover effect
                />
                Job Seeker
              </Link>

              {/* Employer Link */}
              <Link
                href="/employer"
                className={`rounded-full flex items-center justify-center gap-2 transition-all duration-200 py-2 px-3 ${
                  pathname === "/employer"
                    ? "bg-white text-black"
                    : "text-white"
                }`}
              >
                <Building
                  className={`transition-colors duration-200 ${
                    pathname === "/employer"
                      ? "text-black" // Active path
                      : "text-white" // Default state
                  }`} // Hover effect
                />
                Employer
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="https://app.go2work.com/">
              <Button
                variant="default"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Sign up / Login
              </Button>
            </Link>
          </div>
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-600 text-blue-600"
                >
                  <Menu className="h-6 w-6" aria-label="Menu" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-6">
                  <div className="flex border border-blue-600 rounded-full self-center"></div>
                  <Button
                    variant="default"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Sign up / Login
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
