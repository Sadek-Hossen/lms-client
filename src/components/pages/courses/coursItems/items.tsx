"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiAlarmOn } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import coursProfile from "@/app/assest/coursImage/coursProfile.png";

interface Course {
  id: number;
  img: string;
  icon1Title: string;
  icon2Title: string;
  mainTitle: string;
  description: string;
  profileName: string;
  deletePrice: string;
  recentPrice: string;
}

const cardItems: Course[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    icon1Title: "Design",
    icon2Title: "3 Months",
    mainTitle: "Web Design Masterclass",
    description:
      "Learn modern responsive web design using HTML, CSS & Tailwind.",
    profileName: "Nila",
    deletePrice: "$120",
    recentPrice: "$80",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1565687981296-535f09db714e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    icon1Title: "Frontend",
    icon2Title: "4 Months",
    mainTitle: "React JS Advanced Course",
    description:
      "Master React with hooks, context API, and real-world projects.",
    profileName: "Arif",
    deletePrice: "$140",
    recentPrice: "$95",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/616902766/photo/dedicated-to-software-development.webp?a=1&b=1&s=612x612&w=0&k=20&c=3IVsiWuCAD-9hoc9n0Sk8KcUNzO3U0DOHmbtGfHRGBM=",
    icon1Title: "Backend",
    icon2Title: "5 Months",
    mainTitle: "Node.js & Express Bootcamp",
    description: "Learn to build scalable backend APIs with Node.js & Express.",
    profileName: "Sadek",
    deletePrice: "$160",
    recentPrice: "$110",
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/939787416/photo/two-female-programmers-working-on-new-project-they-working-late-at-night-at-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=5Mw6Od8hj_w_yVKF26yOcDQroQ4NZnQt9JuNBNZCXfs=",
    icon1Title: "Design",
    icon2Title: "2 Months",
    mainTitle: "UI/UX Design Fundamentals",
    description: "Understand user-centered design principles with Figma.",
    profileName: "Rima",
    deletePrice: "$100",
    recentPrice: "$75",
  },
];

function CoursItems() {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#EAF3FF] to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Popular Courses
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
          >
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
              <p className="text-gray-500 text-sm flex-grow">
                {item.description}
              </p>

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
                  <span className="text-sm text-gray-700">
                    {item.profileName}
                  </span>
                </div>

                <div className="text-right">
                  <p className="text-gray-400 line-through text-sm">
                    {item.deletePrice}
                  </p>
                  <p className="text-green-600 font-bold">{item.recentPrice}</p>
                </div>
              </div>
            </div>

            {/* Hover Button with Home Link */}
            <Link
              href="/"
              className="opacity-0 group-hover:opacity-100 w-[90%] mx-auto mb-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl transition-all duration-300 transform group-hover:-translate-y-1 text-center"
            >
              Go Home
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursItems;
