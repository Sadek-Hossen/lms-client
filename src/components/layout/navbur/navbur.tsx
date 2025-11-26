"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "@/app/assest/images/logo.png";
import Link from "next/link";
import { getUser } from "../../../utils/user/user-api";
import Cookies from "js-cookie"
import axios from "axios";
import URL from "../../../../src/utils/user/backendUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const ResponsiveNavbar = () => {
  const router = useRouter()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const fatchUser = async () => {
      try {
        const res = await getUser();
        setUser(res?.user);
        console.log("this is coming from navbar user :", res);
      } catch (error) {
        console.log(error);
      }
    };
    fatchUser();
  }, []);

const logout = async()=>{
  try {
      const res =await axios.post(`${URL}/user/logout`,{},{
        withCredentials:true, }
      );
      if(res.status===200){
        toast.success("Logout successful");
        setUser(null);
        router.push("/")
        console.log("logout button clicked")        
      }
     
  } catch (error) {
      console.log(error);
      toast.error("Logout failed");
    
  }
}


  return (
    <nav className="flex z-10 items-center border-b-2 border-gray-600 justify-between w-full relative dark:bg-slate-900 bg-[#49BBBD] px-3 py-2">
      {/* Logo */}
      <Link href="/">
        <Image src={logo} alt="logo" width={55} height={55} className="w-14" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="items-center gap-5 text-base text-[#424242] md:flex hidden">
        <li>
          <Link
            href="/"
            className="before:w-0 hover:before:w-full before:bg-white before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-white transition-all duration-300 before:left-0 capitalize"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/courses"
            className="before:w-0 hover:before:w-full before:bg-white before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-white transition-all duration-300 before:left-0 capitalize"
          >
            Course
          </Link>
        </li>

        <li>
          <Link
            href="/blog"
            className="before:w-0 hover:before:w-full before:bg-white before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-white transition-all duration-300 before:left-0 capitalize"
          >
            Blogs
          </Link>
        </li>

        <li>
          <Link
            href="/aboutPage"
            className="before:w-0 hover:before:w-full before:bg-white before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-white transition-all duration-300 before:left-0 capitalize"
          >
            About Us
          </Link>
        </li>
      </ul>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-2">
        {user ? (
          <div className="flex items-center gap-2">
            <details className="dropdown">
              <summary className="btn m-1">{user.name}</summary>

              <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-32 p-2 shadow-sm">
                <li>
                  <Link href="/courseCreate">Add Course</Link>
                </li>

                <li>
                  <Link href="/">Profile</Link>
                </li>
              </ul>
            </details>

            <button onClick={logout} className="text-white font-semibold cursor-pointer">
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link href="/authintication">
              <button className="py-2 text-base px-6 rounded-full capitalize bg-white hover:bg-black hover:text-white transition-all duration-300 sm:flex hidden">
                Login
              </button>
            </Link>

            <Link href="/authintication">
              <button className="py-2 text-white px-5 rounded-full capitalize bg-gray-300/50 hover:text-black transition-all duration-300 sm:flex hidden">
                Sign Up
              </button>
            </Link>
          </>
        )}

        {/* Mobile Menu Icon */}
        <CiMenuFries
          className="text-2xl dark:text-[#abc2d3] mr-1 text-[#424242] cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-48 opacity-0 z-[-1]"
        } md:hidden bg-white p-4 text-center absolute top-16 dark:bg-slate-700 right-0 w-full sm:w-1/2 rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-4 text-base text-gray-600 flex flex-col">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Course</Link>
          </li>
          <li>
            <Link href="/blog">Blogs</Link>
          </li>
          <li>
            <Link href="/aboutPage">About</Link>
          </li>
        </ul>

        {!user && (
          <div className="flex flex-col">
            <Link href="/authintication">
              <button className="py-2 text-black px-5 rounded-full mt-3 bg-gray-300 mb-4">
                Login
              </button>
            </Link>

            <Link href="/authintication">
              <button className="py-2 text-black px-5 rounded-full bg-gray-300">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
