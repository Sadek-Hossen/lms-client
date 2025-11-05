import Image from "next/image";
import React from "react";
import courseHeroImage from "@/app/assest/coursImage/coursHero.png";

function CoursHero() {
  return (
    <div className="">
      <div className="relative w-full h-[400px]">
        {/* Hero Image */}
        <Image
          src={courseHeroImage}
          alt="course hero image"
          fill
          className="object-cover rounded-xl"
        />

        {/* Search & Filter Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 ">
          {/* Search Bar */}
          <div className="flex items-center bg-white/90 backdrop-blur-md rounded-xl p-2 shadow-lg w-full max-w-2xl border border-gray-300">
            <input
              type="text"
              placeholder="Search Here"
              className="flex-grow px-5 py-3 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 focus:bg-amber-500 transition-all">
              Search
            </button>
          </div>

          {/* Filter Section */}
          <div className="flex flex-wrap justify-center gap-3 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg  max-w-3xl border border-gray-300">
            {/* Filter Item */}
            <div className="flex flex-col items-start">
              <label htmlFor="subject" className="text-sm font-medium text-gray-600">
                Subject
              </label>
              <select
                name="subject"
                id="subject"
                className="mt-1  py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                <option value="bangla">Bangla</option>
                <option value="english">English</option>
                <option value="math">Math</option>
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="partner" className="text-sm font-medium text-gray-600">
                Partner
              </label>
              <select
                name="partner"
                id="partner"
                className="mt-1 px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="programmer" className="text-sm font-medium text-gray-600">
                Programmer
              </label>
              <select
                name="programmer"
                id="programmer"
                className="mt-1 px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                <option value="beginner">Beginner</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="language" className="text-sm font-medium text-gray-600">
                Language
              </label>
              <select
                name="language"
                id="language"
                className="mt-1 px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                <option value="english">English</option>
                <option value="bangla">Bangla</option>
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="eligibility" className="text-sm font-medium text-gray-600">
                Eligibility
              </label>
              <select
                name="eligibility"
                id="eligibility"
                className="mt-1 px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                <option value="student">Student</option>
                <option value="graduate">Graduate</option>
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="type" className="text-sm font-medium text-gray-600">
                Learning Type
              </label>
              <select
                name="type"
                id="type"
                className="mt-1 px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursHero;
