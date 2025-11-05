import Image from 'next/image'
import React from 'react'
import image1 from "@/app/assest/images/Group 124.png"

function Mang() {
  return (
    <div className='md:flex justify-around  py-10 px-10 '>
        <div>
            <h1 className=' py-6 text-3xl '><span className='text-teal-500'>Class Management</span> <br /> Tools for Educators</h1>
            <p className='text-gray-700 md:w-[70%]  py-3'>
                Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.

            </p>
        </div>
        {/* right side */}
        <div>
            <Image src={image1} alt='right images'  />
        </div>
    </div>
  )
}

export default Mang