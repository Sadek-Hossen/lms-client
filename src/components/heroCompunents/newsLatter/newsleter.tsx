"use client";
import Image from "next/image";
import React from "react";

const NewsSection = () => {
  return (
    <div className="px-6 md:px-16 py-12 bg-white text-gray-800">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side - Main News */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2132"
              alt="main news"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <span className="text-sm text-teal-500 font-semibold">NEWS</span>
          <h2 className="text-2xl font-bold leading-snug hover:text-blue-600 transition-all">
            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
          </h2>
          <p className="text-gray-500">
            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
          </p>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            Read more
          </a>
        </div>

        {/* Right Side - Other News */}
        <div className="flex flex-col gap-6">
          {/* News Item 1 */}
          <div className="flex gap-4 items-start">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683535508528-9228dcc8fa4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcCUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="news 1"
              width={130}
              height={100}
              className="w-32 h-24 object-cover rounded-lg"
            />
            <div>
              <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-md font-semibold">
                PRESS RELEASE
              </span>
              <h3 className="font-semibold mt-2 hover:text-blue-600 transition-all">
                Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
              </h3>
              <p className="text-gray-500 text-sm">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="flex gap-4 items-start">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661481518168-fe8dba18120b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGxhcHRvcCUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="news 2"
              width={130}
              height={100}
              className="w-32 h-24 object-cover rounded-lg"
            />
            <div>
              <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-md font-semibold">
                NEWS
              </span>
              <h3 className="font-semibold mt-2 hover:text-blue-600 transition-all">
                Zoom’s earliest investors are betting millions on a better Zoom for schools
              </h3>
              <p className="text-gray-500 text-sm">
                Zoom was never created to be a consumer product. Nonetheless, the...
              </p>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="flex gap-4 items-start">
            <Image
              src="https://images.unsplash.com/photo-1760438336747-ef11cf11a08e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt="news 3"
              width={130}
              height={100}
              className="w-32 h-24 object-cover rounded-lg"
            />
            <div>
              <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-md font-semibold">
                NEWS
              </span>
              <h3 className="font-semibold mt-2 hover:text-blue-600 transition-all">
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms
              </h3>
              <p className="text-gray-500 text-sm">
                This year, investors have reaped big financial returns from betting on Zoom...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
