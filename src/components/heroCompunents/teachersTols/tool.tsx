import Image from 'next/image'
import React from 'react'
import heroImage from  '@/app/assest/images/Group 122.png'

function Tool() {
  return (
<div className='md:flex items-center mx-auto px-10 justify-between gap-10 '>
<div className='md:w-1/2'>
<h1 className='text-3xl font-semibold  py-3'>
    <span className='text-teal-500'>Tools</span>  For Teachers <br /> And Learners
</h1>
<p className='text-gray-700 w-[90%] md:w-[70%] '>Class has a dynamic set of teaching tools built to be deployed and used during class.
Teachers can handout assignments in real-time for students to complete and submit.</p>
</div>
<div className='md:w-1/2'>
    <Image
     src={heroImage}  
     width={300}
     height={300}
     alt='this is hero image'/>
</div>



</div>

)
}

export default Tool