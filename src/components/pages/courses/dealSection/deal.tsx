import Link from "next/link";
import React from "react";
import Image from "next/image";
import image1 from "@/app/assest/coursImage/Rectangle 187.png";
import image2 from "@/app/assest/coursImage/Rectangle 188.png";
import image3 from "@/app/assest/coursImage/Rectangle 189.png";

const dealItems = [
  {
    img: image1,
    percent: "50%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    img: image2,
    percent: "10%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    img: image3,
    percent: "50%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
];

function Deal() {
  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Top Education Offers and Deals
        </h1>
        <Link
          href="/"
          className="text-green-600 font-semibold hover:underline text-lg"
        >
          See All
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {dealItems.map((e, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            {/* Image */}
            <Image
              src={e.img}
              alt={e.title}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
            />

            {/* Discount badge */}
            <span className="absolute top-4 left-4 bg-cyan-500 text-white font-bold text-xl px-4 py-2 rounded-xl">
              {e.percent} 
            </span>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Text content */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="text-xl font-semibold mb-2">{e.title}</h2>
              <p className="text-sm opacity-90">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Deal;
