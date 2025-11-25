"use client"; // <-- add this at the very top

import React from 'react';
import CountUp from 'react-countup';

const stateData = [
    {number: "15000", title: "Students"}, 
    {number: "75", title: "Top success"}, 
    {number: "35", title: "Main content"},
    {number: "26", title: "Chief expert"},
    {number: "16", title: "Years of experience"},
];

function State() {
  return (
      <div className='grid md:grid-cols-5 grid-cols-2 justify-around items-center mt-4 mb-4'>
        {stateData.map((e, id) => (
           <div key={id} className='flex flex-col items-center '>
              <span className="text-[50px] font-semibold text-center bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] bg-clip-text text-transparent">
                <CountUp 
                  end={parseInt(e.number)} 
                  duration={2} 
                  separator="," 
                />{e.number.includes("K") ? "K+" : ""}
              </span>
              <p className='md:text-2xl text-gray-700'>{e.title}</p>
           </div>
        ))}
      </div>
  );
}

export default State;
