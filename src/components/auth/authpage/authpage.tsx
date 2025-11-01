"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import loginImage from '@/app/assest/images/login.png'
import register from '@/app/assest/images/register.png'
import Login from '../login/login'
import Resigstetion from '../registet/resigstetion'
function Authpage() {
    const [isLogin,setLogin] = useState(true)
  return (
    <div>
     <div className='flex mx-auto gap-10 w-full justify-center  mt-4'>
        <div>
        {
          isLogin ? (
            <Image src={loginImage} alt='login image' width={500} height={400} />
          ) :
          <Image src={register} alt='register image' width={500} height={400} />
        }
        </div>
        <div className=' w-1/2'>
        <h1 className='text-2xl font-semibold mb-4'> Welcome to MLS </h1>
        <div className='flex w-[50%] mx-auto items-center justify-center rounded-full px-3 py-2 gap-5 bg-teal-400 border'>
            <button onClick={()=>setLogin(true)} className={`${isLogin ? "bg-teal-600 text-white " : ""} rounded-full border border-black p-2  px-4`}> Login</button>
            <button onClick={()=>setLogin(false)} className={`${isLogin? "": "bg-teal-600 text-white"} rounded-full border border-black p-2  px-4`}>Register </button>
        </div>
     
     <div className='w-full'>
        
     {
        isLogin ? <div> <Login /> </div>
        :
        <div><Resigstetion /> </div>
     }
     </div>

        </div>
     </div>


    </div>

  )
}

export default Authpage