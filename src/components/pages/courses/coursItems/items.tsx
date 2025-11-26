"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiAlarmOn } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import coursProfile from "@/app/assest/coursImage/coursProfile.png";
import { getCourses } from "../../../../utils/user/user-api";

interface Course {
  _id: number;
  img: string;
  icon1Title: string;
  icon2Title: string;
  mainTitle: string;
  description: string;
  profileName: string;
  deletePrice: string;
  recentPrice: string;
}

function CoursItems() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getCourses();
        setCourses(res?.courses || []);
        console.log("Courses from API:", res?.courses);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#EAF3FF] to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Popular Courses
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {courses?.map((item) => (
          <Link href={`/courseDetails/${item._id}`} key={item._id}>
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
              {/* Image Section */}
              <div className="relative w-full h-52">
                <Image
                  src={item.img}
                  alt={item.mainTitle}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-gray-500 text-sm mb-3">
                  <span className="flex items-center gap-2">
                    <IoGridOutline className="text-blue-500" /> {item.icon1Title}
                  </span>
                  <span className="flex items-center gap-2">
                    <CiAlarmOn className="text-orange-500" /> {item.icon2Title}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.mainTitle}
                </h3>
                <p className="text-gray-500 text-sm flex-grow">{item.description}</p>

                {/* Profile & Price */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={coursProfile}
                      alt={item.profileName}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-700">{item.profileName}</span>
                  </div>

                  <div className="text-right">
                    <p className="text-gray-400 line-through text-sm">{item.deletePrice}</p>
                    <p className="text-green-600 font-bold">{item.recentPrice}</p>
                  </div>
                </div>
              </div>

              {/* Hover Buttons */}
              <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 w-[90%] mx-auto mb-4 transition-all duration-300 transform group-hover:-translate-y-1">
                {/* Enroll Button */}
                <div className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl text-center cursor-pointer">
                  Enroll Course
                </div>

                {/* Edit Button */}
                <Link href={`/updateCourse/${item._id}`}>
                  <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl text-center cursor-pointer">
                    Edit
                  </div>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CoursItems;
