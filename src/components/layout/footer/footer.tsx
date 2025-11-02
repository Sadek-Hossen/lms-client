import React from 'react'
import logo from '@/app/assest/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className='bg-[#252641] flex  flex-col justify-center items-center py-10'>
      
            <div className='flex  justify-center gap-10 items-center'>
             <div className='border-r px-10 border-gray-200'>
                <Image src={logo} alt='logo for footer ' />
                </div>
             <div className=' px-10'>
                <p className='text-white font-semibold'>Virtual Class <br /> for Zoom</p>
             </div>
                  
        </div>
          <p className='text-xl mt-10  text-gray-500'>Subscribe to get our Newsletter</p>
          <div className='flex justify-around items-center gap-3 mt-4'>
            <input type="text" className='p-4 border rounded-full placeholder:text-gray-400 text-white' placeholder='your email' />
            <button className='rounded-full p-4 border bg-teal-500 ' type='submit'>Subscribe</button>
          </div>
          <div className='flex justify-center items-center py-4 mt-4'>
            <Link href='/' className='text-gray-600 border-r px-2 hover:border-b cursor-pointer   '> Careers </Link>
            <Link href='/' className='text-gray-600 border-r px-2 hover:border-b cursor-pointer '> Privacy Policy </Link>
            <Link href='/' className='text-gray-600 px-2 hover:border-b cursor-pointer '>Terms & Conditions  </Link>
          </div>
          <p className='pt-10 pb-3 text-gray-600 text-center'>© 2021 Class Technologies Inc. </p>
    </div>
  )
}

export default Footer