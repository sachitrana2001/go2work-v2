// components/HowItWorks.tsx
import Image from 'next/image'; // If you use Next.js image optimization
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 px-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">How it Works?</h2>
      </div>

      {/* Step 1: Create Profile */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="md:w-1/2 text-left">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-lg">
              1
            </div>
            <h3 className="ml-4 text-xl font-bold">Create Profile</h3>
          </div>
          <p className="text-gray-600">
            The first step is to create a profile on the go2work app. Fill out your personal and professional details,
            including your education, work experience, skills, and career goals. This will help the app provide you
            with personalized job recommendations based on your profile.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <Image src="/path-to-your-svg/profile-creation.svg" alt="Profile Creation" width={400} height={300} />
        </div>
      </div>

      {/* Step 2: Search for Jobs */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="md:w-1/2 text-left">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-lg">
              2
            </div>
            <h3 className="ml-4 text-xl font-bold">Search for Jobs</h3>
          </div>
          <p className="text-gray-600">
            Once you’ve created your profile, use the job search function to search for job openings that match your
            skills and experience. You can use filters such as location, industry, job type, and salary range to refine
            your search.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <Image src="/path-to-your-svg/job-search.svg" alt="Job Search" width={400} height={300} />
        </div>
      </div>

      {/* Step 3: Apply for Jobs */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="md:w-1/2 text-left">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-lg">
              3
            </div>
            <h3 className="ml-4 text-xl font-bold">Apply for Jobs</h3>
          </div>
          <p className="text-gray-600">
            When you find a job opening that interests you, read the job description and requirements carefully. Make
            sure that you meet the qualifications before applying. Use the swiping feature to instantly apply to the
            position.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <Image src="/path-to-your-svg/apply-for-job.svg" alt="Apply for Jobs" width={400} height={300} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
