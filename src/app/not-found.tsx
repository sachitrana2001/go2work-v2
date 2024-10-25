import Link from "next/link";
import { Home } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center  bg-white text-gray-900 p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="flex justify-center">
          <Image
            src="/assets/NotFoundErrorImage.svg"
            alt="Robot"
            className="animate-float"
            width={500}
            height={120}
          />
        </div>
        <p className="text-xl mb-4">
          Something went wrong! Please try again later.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <Home className="mr-2 h-5 w-5" />
          Go Home
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    </div>
  );
}
