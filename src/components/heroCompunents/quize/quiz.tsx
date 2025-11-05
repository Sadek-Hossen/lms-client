"use client";
import React from "react";
import Image from "next/image";
import image1 from "@/app/assest/images/Group 92.png";

const Quizzes = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-20 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
 

      {/* ====== Animated Card Section ====== */}
      <div className="group [perspective:1000px] w-full md:w-[45%] h-[350px] relative">
        <div className="relative w-full h-full transition-transform duration-[800ms] ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden shadow-xl">
            <Image
              src={image1}
              alt="animated_card"
              fill
              className="object-cover rounded-xl cursor-pointer brightness-90 group-hover:brightness-100 transition-all"
              priority
            />
            <h2 className="text-2xl font-semibold text-white absolute bottom-6 left-6 [text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]">
              Marketing Strategy
            </h2>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-white dark:bg-slate-800 rounded-xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col justify-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-[#abc2d3] mb-3">
              Quizze Strategy
            </h2>
            <p className="text-gray-600 dark:text-[#abc2d3]/80 leading-relaxed">
         Easily launch live assignments, quizzes, and tests.
          Student results are automatically entered into the online gradebook.
          Make learning interactive and insightful with smart evaluations.
            </p>
           
          </div>
        </div>
      </div>


           {/* ====== Text Section ====== */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-snug">
          Assessments, <br />
          <span className="text-teal-600 dark:text-teal-400">Quizzes</span>, Tests
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Easily launch live assignments, quizzes, and tests.
          Student results are automatically entered into the online gradebook.
          Make learning interactive and insightful with smart evaluations.
        </p>

      
      </div>
    </section>
  );
};

export default Quizzes;
