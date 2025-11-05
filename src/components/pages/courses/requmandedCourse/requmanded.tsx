"use client";
import React from "react";
import Image from "next/image";
import { CiAlarmOn } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import coursProfile from "@/app/assest/coursImage/coursProfile.png";
import Link from "next/link";

interface items {
  id:number,
  img:string,
  icon1Title:string,
  icon2Title:string,
  mainTitle:string,
  description:string,
  profileName:string,
  deletePrice:string,
recentPrice:string



}

const requmandeItem: items[] = [
  {
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    icon1Title: "Development",
    icon2Title: "6 Months",
    mainTitle: "Full Stack Web Development",
    description: "Become a full-stack developer using MERN stack.",
    profileName: "Sadek",
    deletePrice: "$200",
    recentPrice: "$150",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/2193229202/photo/smiling-black-programmer-talking-to-her-colleague-late-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=jghUkjZHRU2HQ7P3SZQU4X64v_rkTdFKNgPkWzMSQYo=",
    icon1Title: "Marketing",
    icon2Title: "2 Months",
    mainTitle: "SEO & Digital Marketing",
    description: "Learn SEO, Google Ads, and social media marketing.",
    profileName: "Shanta",
    deletePrice: "$90",
    recentPrice: "$60",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/2186780921/photo/young-woman-programmer-focused-on-her-work-coding-on-dual-monitors-in-a-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=SAF-y0Rjzil_3FQi2KmAyXOAKYHaHRRbNxjQXnMsObk=",
    icon1Title: "AI/ML",
    icon2Title: "5 Months",
    mainTitle: "Machine Learning Basics",
    description: "Understand the core of ML with Python and real datasets.",
    profileName: "Jubair",
    deletePrice: "$190",
    recentPrice: "$140",
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/2188069561/photo/young-woman-programmer-focused-on-her-work-coding-on-dual-monitors-in-a-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bV9cq8PGdjorVF9kH36HT3zr01mTahlbAyOhrMzeNLI=",
    icon1Title: "Mobile",
    icon2Title: "4 Months",
    mainTitle: "Kotlin Android Development",
    description:
      "Build professional Android apps using Kotlin and Android Studio.",
    profileName: "Farhana",
    deletePrice: "$130",
    recentPrice: "$95",
  },
];

function Requmanded() {
  return (
    <div className="bg-[#E3F2FF] py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Recommended for You
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {requmandeItem.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 duration-300 group"
            >
              <div className="relative w-full h-52">
                <Image
                  src={item.img}
                  alt={item.mainTitle}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between text-gray-500 text-sm mb-3">
                  <div className="flex items-center gap-2">
                    <IoGridOutline className="text-blue-500" />
                    <span>{item.icon1Title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiAlarmOn className="text-orange-500" />
                    <span>{item.icon2Title}</span>
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-gray-800">
                  {item.mainTitle}
                </h2>
                <p className="text-gray-500 text-sm mt-2 mb-4">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Image
                      src={coursProfile}
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span>{item.profileName}</span>
                  </div>

                  <div className="text-right">
                    <span className="line-through text-gray-400 text-sm mr-1">
                      {item.deletePrice}
                    </span>
                    <span className="text-green-600 font-bold text-lg">
                      {item.recentPrice}
                    </span>
                  </div>
                </div>

                {/* Hover Button */}
              <Link href={"/"} >
               <button className="opacity-0 cursor-pointeryy group-hover:opacity-100 mt-5 w-full bg-green-500 text-white font-semibold py-2 rounded-xl transition-opacity duration-300">
                  Add to Cart
                </button>
              </Link> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Requmanded;
