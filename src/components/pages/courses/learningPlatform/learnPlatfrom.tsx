"use client";
import React from "react";
import Image from "next/image";

import supportTema1 from "@/app/assest/coursImage/supportTema (1).png";
import supportTema2 from "@/app/assest/coursImage/supportTema (2).png";
import supportTema3 from "@/app/assest/coursImage/supportTema (3).png";
import supportTema4 from "@/app/assest/coursImage/supportTema (4).png";
import supportTema5 from "@/app/assest/coursImage/supportTema (5).png";

const subtitles = [
  { item: "Free E-book, video & consultation" },
  { item: "Top instructors from around the world" },
  { item: "Top courses for your team" },
];

function LearnPlatform() {
  return (
    <div className="bg-[#9DCCFF]/40 grid md:grid-cols-2 grid-cols-1 items-center gap-8 py-16 px-6 md:px-12">
      {/* -------- Left Section -------- */}
      <div className="w-full md:w-[80%] mx-auto text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">
          Know About Our Learning Platform
        </h1>

        <div className="space-y-5">
          {subtitles.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/70 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </span>
              <p className="text-lg font-medium">{item.item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* -------- Right Section -------- */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 gap-3">
          <Image
            src={supportTema3}
            alt="meeting man"
            className="col-span-1 row-span-2 rounded-xl"
          />
          <Image src={supportTema2} alt="meeting man" className="rounded-xl" />
          <Image src={supportTema1} alt="meeting man" className="rounded-xl" />
          <Image src={supportTema4} alt="meeting man" className="rounded-xl" />
          <Image src={supportTema5} alt="meeting man" className="rounded-xl" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <a
            href="https://meet.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl py-3 px-6 bg-teal-600 text-white font-medium hover:opacity-80 transition-all text-center"
          >
            Create Account
          </a>

          <a
            href="https://meet.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl py-3 px-6 bg-yellow-600 text-white font-medium hover:opacity-80 transition-all text-center"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
}

export default LearnPlatform;
