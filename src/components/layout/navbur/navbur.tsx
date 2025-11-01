"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import logo from '@/app/assest/images/logo.png'
import Link from "next/link";

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center border-b-2 border-gray-600 justify-between w-full relative dark:bg-slate-900 bg-[#49BBBD]  px-3 py-2">
    <Image
        src={logo}
        alt="logo"
        width={55}
        height={55}
        className="w-14"
      />

      {/* nav links */}
      <ul className="items-center gap-5 text-base text-[#424242] md:flex hidden">
        <li className="before:w-0 hover:before:w-full before:bg-white before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-white transition-all duration-300 before:left-0 cursor-pointer capitalize">
          home
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-white before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-white transition-all duration-300 before:left-0 cursor-pointer capitalize">
          features
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-white before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-white transition-all duration-300 before:left-0 cursor-pointer capitalize">
          blogs
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-white before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-white transition-all duration-300 before:left-0 cursor-pointer capitalize">
          shop
        </li>
      </ul>

      {/* action buttons */}
      <div className="items-center gap-2 flex">
       <Link href={"/authintication"}>
        <button className="py-2 text-base px-6  rounded-full capitalize bg-white hover:bg-black hover:text-white  transition-all duration-300 sm:flex hidden">
         Login
        </button>
       </Link>
       <Link href={"/authintication"}>
        <button className="py-2 text-white px-5 rounded-full capitalize bg-gray-300/50 hover:text-black   transition-all duration-300 sm:flex hidden">
          Sign Up
        </button>
        </Link>

        <CiMenuFries
          className="text-2xl dark:text-[#abc2d3] mr-1 text-[#424242] cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-48 opacity-0 z-[-1]"
        } md:hidden bg-white p-4 text-center absolute top-16 dark:bg-slate-700 right-0 w-full sm:w-1/2 rounded-md transition-all duration-300`}
      >
        

        <ul className="items-center gap-4 text-base text-gray-600 flex flex-col">
          <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            home
          </li>
          <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            features
          </li>
          <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            blogs
          </li>
          <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            shop
          </li>
        
         
        </ul>
        <div className="flex flex-col ">
            <button className="py-2 text-black px-5 rounded-full mt-3  bg-gray-300 mb-4 ">
         Login
        </button>
        <button className="py-2 text-black px-5 rounded-full  bg-gray-300     ">
          Sign Up
        </button>
        </div>
       
        <div>
          
        </div>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
