"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Building,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
  User,
  X,
  Youtube,
} from "lucide-react";
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
                className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
                  className="border-blue-600 text-blue-600 hover:text-blue-600"
                >
                  <Menu className="h-8 w-8" aria-label="Menu" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[270px] sm:w-[400px]">
                <nav className="h-full flex flex-col justify-between gap-4 my-6">
                  <div className="flex flex-col space-y-4">
                    <Link href="https://app.go2work.com/">
                      <Button
                        variant="default"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700 ransition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        Sign up / Login
                      </Button>
                    </Link>
                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-4 text-blue-600">
                      {[
                        { label: "Job Seekers", href: "/" },
                        { label: "Employer", href: "/employer" },
                        {
                          label: "Our Story",
                          href: "https://go2work.com//about",
                        },
                        { label: "Blog", href: "https://go2work.com//blog" },
                        {
                          label: "Contact Us",
                          href: "https://go2work.com//contact-us",
                        },
                      ].map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="relative hover:text-blue-800 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full 
                              "
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="space-y-4 mb-5">
                      <h3 className="text-lg font-semibold text-blue-900">
                        Follow Us
                      </h3>
                      <div className="flex space-x-4">
                        <Link
                          href="https://facebook.com/go2workapps"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 hover:text-blue-700"
                        >
                          <Facebook size={24} />
                          <span className="sr-only">Facebook</span>
                        </Link>
                        <Link
                          href="https://instagram.com/go2workapp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 hover:text-blue-700"
                        >
                          <Instagram size={24} />
                          <span className="sr-only">Instagram</span>
                        </Link>
                        <Link
                          href="https://twitter.com/go2workapp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 hover:text-blue-700"
                        >
                          <Twitter size={24} />
                          <span className="sr-only">Twitter</span>
                        </Link>
                        <Link
                          href="https://linkedin.com/company/go2workapp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 hover:text-blue-700"
                        >
                          <Linkedin size={24} />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                          href="https://www.youtube.com/@go2workapp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 hover:text-blue-700"
                        >
                          <Youtube size={24} />
                          <span className="sr-only">Youtube</span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex space-x-4 mb-4 md:mb-0">
                      <Link
                        href="https://apps.apple.com/us/app/go2work"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/assets/app-store.svg"
                          alt="Download on the App Store"
                          width={120}
                          height={40}
                        />
                      </Link>
                      <Link
                        href="https://play.google.com/store/apps/details?id=com.go2work"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/assets/google-play.svg"
                          alt="Get it on Google Play"
                          width={135}
                          height={40}
                        />
                      </Link>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
