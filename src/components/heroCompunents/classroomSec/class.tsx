
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import playimage from "@/app/assest/images/playbuttonimage.png"
import { FaPlay } from 'react-icons/fa'

function ClassRom() {
  return (
    <div className='md:flex justify-between w-[90%] mx-auto px-8  md:px-12 py-4'>
      <div className='md:w-1/2 '>
        <h1 className='text-2xl py-4 '>Everything you can do in a physical <br />classroom, <span className='text-teal-500'>you can do with TOTC</span></h1>
        <p className='py-12 text-gray-700'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
        <Link href={"/"} className='underline hover:text-green-700'>Learn more</Link>
      </div>
       <div className="relative flex justify-center items-center py-10 bg-white">
      {/* Outer wrapper for custom corner border */}
      <div className="relative border-4 border-transparent rounded-lg overflow-hidden shadow-lg max-w-3xl">
        {/* Top-left and bottom-right color corners */}
        <div className="absolute top-0 left-0 w-8 h-8 bg-teal-400 rounded-br-lg"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-teal-400 rounded-tl-lg"></div>

        {/* Image */}
        <Image
          src={playimage}
          alt="Classroom"
          width={700}
          height={500}
          className="rounded-lg"
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white p-4 rounded-full shadow-lg hover:scale-105 transition">
      <Link href={"/"}>
            <FaPlay className="text-teal-500 w-8 h-8" />
      </Link>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ClassRom