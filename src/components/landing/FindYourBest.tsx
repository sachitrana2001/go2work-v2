import Image from "next/image";

export default function FindYourBest() {
  return (
    <div className="min-h-screen relative flex items-center justify-center md:px-20">
      <div className="flex flex-col md:flex-row  bg-blue-50">
        <div className="md:w-1/3 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Find your next career move with the go2work platform
          </h1>
          <p className="text-gray-600 mb-6">
            go2work is dedicated to helping job seekers find the right job
            opportunities quickly and easily. Our app and website are designed
            to streamline the job search process, providing users with access to
            thousands of job postings from a variety of employers across
            multiple industries.
          </p>
          <p className="text-gray-600">
            At go2work, we believe that finding the right job is not just about
            matching skills and qualifications to a job description. We
            understand that job seekers are looking for more than just a
            paycheck; they want fulfilling work that aligns with their values,
            passions, and career goals.
          </p>
        </div>
        <div className="md:w-2/3 bg-blue-50 flex items-center justify-center p-8">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 -z-10 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
            <Image
              className="animate-pulse md:absolute md:-right-10 md:-bottom-10"
              src="/assets/LandingNextCareerMoveCoverImage.svg"
              alt="Job Search"
              width={700}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
