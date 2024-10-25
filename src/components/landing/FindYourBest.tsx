import Image from "next/image";

export default function FindYourBest() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between pl-6 md:pl-20 md:pr-0 bg-blue-50">
      <div className=" lg:w-1/3 p-8 md:p-12 bg-white shadow-lg rounded-lg m-5">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Find your next career move with the go2work platform
        </h1>
        <p className="text-gray-600 mb-6">
          go2work is dedicated to helping job seekers find the right job
          opportunities quickly and easily. Our app and website streamline the
          job search process, providing access to thousands of job postings
          across multiple industries.
        </p>
        <p className="text-gray-600">
          At go2work, we believe that finding the right job goes beyond matching
          skills to a description. We understand that job seekers want
          fulfilling work that aligns with their values, passions, and career
          goals.
        </p>
      </div>
      <div className="w-full md:w-3/5 flex items-center justify-center rounded-l-full bg-blue-100  my-5 p-8 md:py-0">
        <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl">
          <Image
            src="/assets/LandingNextCareerMoveCoverImage.svg"
            alt="Job Search"
            width={700}
            height={300}
            className="w-[70vw] h-auto py-10 animate-in"
          />
        </div>
      </div>
    </div>
  );
}
