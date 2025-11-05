"use client";
import Image from "next/image";
import { Video, Users, BarChart } from "lucide-react";
import image2 from '@/app/assest/images/image 10.png'
import image3 from '@/app/assest/images/image 11.png'
import image4 from '@/app/assest/images/Mask Group (1).png'
import image6 from '@/app/assest/images/portrait-teacher-giving-online-class 1.png'

export default function Feature() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side (Video Call Mockup) */}
      <div className="relative bg-gray-100 p-6 rounded-2xl shadow-lg max-w-lg w-full">
        {/* Top browser-like bar */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <Image
              src={image6}
              alt="Evony Howard"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <p className="absolute bottom-2 left-2 bg-gray-800/80 text-white text-xs px-2 py-1 rounded">
              Instructor: Evony Howard
            </p>
          </div>

          <div className="relative">
            <Image
              src={image2}
              alt="Tamara Clarke"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <p className="absolute bottom-2 left-2 bg-gray-800/80 text-white text-xs px-2 py-1 rounded">
              Tamara Clarke
            </p>
          </div>

          <div className="relative">
            <Image
              src={image3}
              alt="Adam Levin"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <p className="absolute bottom-2 left-2 bg-gray-800/80 text-white text-xs px-2 py-1 rounded">
              Adam Levin
            </p>
          </div>

          <div className="relative">
            <Image
              src={image4}
              alt="Patricia Mendoza"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <p className="absolute bottom-2 left-2 bg-gray-800/80 text-white text-xs px-2 py-1 rounded">
              Patricia Mendoza
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition">
            Present
          </button>
          <button className="bg-pink-500 text-white px-5 py-2 rounded-full shadow hover:bg-pink-600 transition">
            Call
          </button>
        </div>
      </div>

      {/* Right Side (Text Content) */}
      <div className="max-w-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          A <span className="text-teal-500 font-bold">user interface</span> designed <br /> for the classroom
        </h2>

        <div className="mt-6 space-y-6 text-gray-600">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Users className="text-blue-600 w-5 h-5" />
            </div>
            <p>
              Teachers don’t get lost in the grid view and have a dedicated Podium space.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Video className="text-yellow-600 w-5 h-5" />
            </div>
            <p>
              TA’s and presenters can be moved to the front of the class.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <BarChart className="text-indigo-600 w-5 h-5" />
            </div>
            <p>
              Teachers can easily see all students and class data at one time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
