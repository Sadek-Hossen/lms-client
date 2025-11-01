"use client";

import React from "react";
import Image from "next/image";
import heroImg from "@/app/assest/images/hero.png";
import profileImg from "@/app/assest/images/profile.png"
import { FaPlay } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative bg-[#49BBBD] overflow-hidden">
      {/* Wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160C360,320,1080,0,1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-20">
        {/* Left side text */}
        <div className="text-center md:text-left space-y-6 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            <span className="text-[#F48C06]">Studying </span>
            online is now <br />
            <span className="text-white">much easier</span>
          </h1>

          <p className="text-white/90 text-lg leading-relaxed">
            TOTC is an engaging platform that helps you learn interactively and
            effectively from anywhere.
          </p>

         <div className="md:flex  gap-6 items-center ">
           <button className="bg-white/30 hover:bg-white hover:text-black text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-xl">
            Join for free
          </button>
          <div className="flex justify-center pt-4 gap-4 items-center">
           <div className="p-4 cursor-pointer hover:opacity-70  transition-all bg-white rounded-full "> <FaPlay /></div>
            <p>Watch how it works</p>
          </div>
         </div>

        </div>

        {/* Right side image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src={heroImg}
            alt="Hero Image"
            className="w-[80%] max-w-md drop-shadow-2xl"
            priority
          />
        </div>
           <div className="flex gap-2 rounded-4xl mb-2  bg-gray-300  md:w-[400px] p-3">
        <Image  
        src={profileImg}
        width={100}
        height={100}
        alt="profile imagee"
        className="rounded-full w-[50px] h-[50px]"
        />
        <div className="">
          <h1 className="font-semebold text-gray-500 text-xl ">user experience class</h1>
          <p className=" text-gray-500 ">today at 12:00 pm</p>
          <div>
            <button className="px-4 py-2 bg-[#D8587E] rounded-full mt-3 text-white ">Join now</button>
          </div>
        </div>
      </div>
      </div>
   
    </section>
  );
}

export default Hero;
