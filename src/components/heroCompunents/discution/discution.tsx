"use client";
import Image from "next/image";
import React from "react";
import blurImage from "@/app/assest/images/discutionBlur.png";
import memImage1 from "@/app/assest/images/mem (1).png";
import memImage2 from "@/app/assest/images/mem (2).png";
import { IoMdPeople } from "react-icons/io";
import Link from "next/link";

function Discution() {
  return (
    <div className="w-full px-4 md:px-10 lg:px-16">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full my-20 gap-10">
        {/* Left Section */}
        <div className="relative w-full md:w-1/2 h-[300px] sm:h-[350px] flex justify-center items-center">
          {/* Background shapes */}
          <span className="absolute w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-3xl bottom-0 left-4 bg-[#73BCFF] "></span>
          <span className="absolute w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full right-0 -top-10 border-[15px]  border-[#73BCFF] "></span>

          {/* Background image */}
          <Image
            className="absolute z-10 w-[90%] sm:w-[95%] rounded-xl object-cover"
            src={blurImage}
            alt="blur image"
          />

          {/* Floating Card */}
          <div className="absolute z-20 p-6 sm:p-8 -right-4 sm:-right-10 -bottom-8 sm:-bottom-10 shadow-xl shadow-gray-400 border-t-[6px] sm:border-t-[10px] border-gray-500 w-[90%] sm:w-[380px] h-[300px] sm:h-[340px] bg-white rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            {/* Members */}
            <div className="flex gap-3 justify-between items-center mb-3">
              <Image
                src={memImage1}
                alt="Member 1"
                className="  "
              />
              <Image
                src={memImage2}
                alt="Member 2"
                className="  "
              />
            </div>

            {/* Text and button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-0 items-center">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-700">
                  Private Discussion
                </h1>
                <p className="text-gray-500 text-sm sm:text-base">
                  Your video can’t be seen by others
                </p>
              </div>
              <div className="w-full flex sm:justify-end">
                <button className="px-3 sm:px-4 py-2 rounded-full bg-amber-700 text-white hover:bg-amber-800 transition-all text-sm sm:text-base">
                  End Discussion
                </button>
              </div>
            </div>

            {/* Icon bubble */}
            <div className="p-3 sm:p-4 cursor-pointer hover:opacity-85 absolute top-0 -left-5 sm:-left-6 bg-gray-300 rounded-full border-[6px] sm:border-[10px] border-gray-500">
              <IoMdPeople className="text-lg sm:text-xl" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-10">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            <span>One-on-One </span>
            <br />
            <span className="mt-2 text-teal-600 block">Discussions</span>
          </h1>
          <p className="text-gray-600 py-4 text-base sm:text-lg">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center items-center py-10">
        <Link href={"/"}>
          <button className="px-5 py-3 border border-teal-600 rounded-full text-teal-600 hover:text-white hover:bg-teal-600 transition-all duration-300 text-sm sm:text-base">
            See more features
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Discution;
