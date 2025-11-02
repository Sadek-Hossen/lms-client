"use client";
import React from "react";
import Image from "next/image";
import image1 from "@/app/assest/images/Rectangle 23.png";
import image2 from "@/app/assest/images/Group 23.png";

function WhatT() {
  return (
    <div className="py-16">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center px-4 md:px-6">
        <h1 className="text-3xl font-semibold py-6">
          What is <span className="text-teal-400 font-bold">TOTC?</span>
        </h1>
        <p className="w-[90%] md:w-[60%] text-gray-700">
          TOTC is a platform that allows educators to create online classes whereby
          they can store course materials, manage assignments, quizzes, and exams,
          monitor due dates, grade results, and provide students with feedback —
          all in one place.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:w-[80%] mx-auto">
        {/* Instructor Card */}
        <div className="relative flex flex-col items-center justify-center text-center rounded-2xl overflow-hidden">
          <Image
            src={image1}
            alt="Instructors"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
            <h2 className="text-white font-semibold text-lg mb-4">
              FOR INSTRUCTORS
            </h2>
            <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all">
              Start a class today
            </button>
          </div>
        </div>

        {/* Student Card */}
        <div className="relative flex flex-col items-center justify-center text-center rounded-2xl overflow-hidden">
          <Image
            src={image2}
            alt="Students"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
            <h2 className="text-white font-semibold text-lg mb-4">FOR STUDENTS</h2>
            <button className="px-6 py-3 bg-[#23BDEE] text-white rounded-full hover:bg-[#1ba8d3] transition-all">
              Enter access code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatT;
