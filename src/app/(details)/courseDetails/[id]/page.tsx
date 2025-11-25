"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSingleCourses } from "../../../../utils/user/user-api";
import Link from "next/link";

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

const Page = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await getSingleCourses(id);
        setCourse(res?.courses || null);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!course)
    return <p className="p-10 text-center">Loading product details...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      {/* Left - Image */}
      <div>
        <Image
          src={course.img}
          alt={course.mainTitle}
          width={600}
          height={500}
          className="w-full h-auto rounded-lg shadow"
        />
      </div>

      {/* Right - Details */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{course.mainTitle}</h1>

        <p className="text-gray-700">{course.description}</p>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold text-[#0FABCA]">
            ${course.recentPrice}
          </span>

          {course.deletePrice && (
            <span className="text-gray-500 line-through text-lg">
              ${course.deletePrice}
            </span>
          )}
        </div>

        {/* Button (SEND DATA TO CASHOUT PAGE) */}
        <Link
          href={`/cashRout?title=${course.mainTitle}&price=${course.recentPrice}&img=${course.img}&desc=${course.description}`}
        >
          <button className="w-full py-3 bg-[#0FABCA] text-white rounded-md hover:bg-[#0FABCA]/80 text-lg font-medium">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
