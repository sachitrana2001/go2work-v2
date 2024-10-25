import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 pb-8 px-5 md:px-20">
      <div className="container border-t border-gray-200 pt-8">
        <div className="md:hidden flex md:col-span-1 items-start">
          <Image
            src="logo.svg"
            alt="go2work logo"
            width={160}
            height={60}
            className="mb-6 -ml-2"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="hidden md:flex md:col-span-1 items-start">
            <Image
              src="logo.svg"
              alt="go2work logo"
              width={120}
              height={40}
              className="mb-4"
            />
          </div>
          <div className="md:col-span-1">
            <h2 className="font-bold text-black mb-4">About Us</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/our-mission" className="hover:text-gray-900">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-gray-900">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-900">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="font-bold text-black mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/job-seeker" className="hover:text-gray-900">
                  Job Seeker
                </Link>
              </li>
              <li>
                <Link href="/employer" className="hover:text-gray-900">
                  Employer
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="font-bold text-black mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/faqs" className="hover:text-gray-900">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="font-bold text-black mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-gray-900"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-gray-900">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">&copy; 2024 go2work</p>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link
                href="https://apps.apple.com/us/app/go2work-app/id1659693434"
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
                href="https://play.google.com/store/apps/details?id=com.go2work.app"
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
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/go2workapps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-700 transform transition-transform duration-200 hover:scale-110"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/go2workapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-700 transform transition-transform duration-200 hover:scale-110"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com/go2workapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-700 transform transition-transform duration-200 hover:scale-110"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/go2workapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-700 transform transition-transform duration-200 hover:scale-110"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.youtube.com/@go2workapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-700 transform transition-transform duration-200 hover:scale-110"
              >
                <Youtube size={24} />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
