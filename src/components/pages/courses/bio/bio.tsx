"use client";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import BioImage from "@/app/assest/coursImage/Bio.png"

function Bio() {
  return (
    <section className="bg-[#EAF3FF] py-12 px-6 md:px-20 rounded-3xl">
      <h2 className="text-gray-800 text-2xl font-semibold mb-8">
        What our students have to say
      </h2>

      <div className="bg-white rounded-2xl shadow-sm flex flex-col md:flex-row items-center p-6 md:p-10 gap-10">
        {/* Left: Student Image */}
        <div className="relative flex-shrink-0">
          <div className="absolute -z-10 top-4 left-4 w-56 h-56 bg-gradient-to-r from-[#C3E8FF] to-[#FDDDE6] rounded-full blur-2xl opacity-70" />
          <Image
            src={BioImage}
            alt="Student"
            width={220}
            height={220}
            className="rounded-full object-cover"
          />
        </div>

        {/* Right: Info */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Savannah Nguyen
          </h3>
          <p className="text-teal-600 font-medium">
            tanya.hill@example.com
          </p>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-3">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Small Avatars */}
        <div className="flex md:flex-col gap-3 mt-6 md:mt-0">
          {[
            "https://randomuser.me/api/portraits/men/45.jpg",
            "https://randomuser.me/api/portraits/women/65.jpg",
            "https://randomuser.me/api/portraits/men/60.jpg",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Student avatar"
              width={50}
              height={50}
              className="rounded-full object-cover border-2 border-white shadow-md cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bio;
