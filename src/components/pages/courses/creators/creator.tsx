import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Teacher {
  name: string;
  img: string;
  description: string;
}

const teachersBio: Teacher[] = [
  {
    name: "Jane Cooper",
    img: "https://plus.unsplash.com/premium_photo-1683134169138-9037062cba51?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    description:
      "An experienced English teacher with 10 years of teaching experience in language training.",
  },
  {
    name: "Robert Fox",
    img: "https://plus.unsplash.com/premium_photo-1681248156598-88d3970f0795?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    description:
      "A passionate math instructor who focuses on problem-solving and logical thinking.",
  },
  {
    name: "Courtney Henry",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    description:
      "Science educator specialized in biology and environmental studies with 8 years of experience.",
  },
  {
    name: "Leslie Alexander",
    img: "https://plus.unsplash.com/premium_photo-1661942126259-fb08e7cce1e2?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    description:
      "History teacher who loves connecting past events with modern-day lessons.",
  },
  {
    name: "Esther Howard",
    img: "https://plus.unsplash.com/premium_photo-1664300900349-afd61c20f8b8?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    description:
      "Computer science mentor with strong knowledge of web development and coding.",
  },
  {
    name: "Wade Warren",
    img: "https://images.unsplash.com/photo-1631203928493-a4e4eb2b8da1?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    description:
      "Professional art and design teacher inspiring creativity and innovation in students.",
  },
];

function Creator() {
  return (
    <div className="w-full md:px-10 px-5 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <span className="font-semibold text-2xl text-gray-800">
          Classes taught by real creators
        </span>
        <Link
          href="/"
          className="text-2xl font-bold text-teal-700 hover:text-teal-500 transition"
        >
          See All
        </Link>
      </div>

      {/* Teacher Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teachersBio.map((item, index) => (
          <Link
            href="/"
            key={index}
            className="group bg-white shadow-md rounded-xl p-5 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                width={300}
                height={300}
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 space-y-2">
              <h1 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                {item.name}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Creator;
