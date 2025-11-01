'use client'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Login() {
    const [showPassword, setShowPassword] = useState(true)
    const showHidePassword = ()=>{
        setShowPassword(!showPassword)
    }
  return (
    <div className='w-[70%]'>
        <h1 className='text-2xl py-4 text-gray-700 font-semibold '>Login your account</h1>
        <div>
            <form >
             <div className='gap-2'>
                <label htmlFor="name" > User name or email</label> <br />
                <input type="text" placeholder='User name or email' className=' w-full border mt-3 border-teal-500 rounded-lg px-4 py-2'/>
             </div>

             <div className='gap-2 mt-4 relative '>
                <label htmlFor="name" > User Password</label> <br />
                <input type={showPassword ? "text":"password"} placeholder='Enter your pas' className=' w-full  border  border-teal-500 rounded-lg px-4 py-2'/>
                <div onClick={showHidePassword} className='absolute right-3 top-9 '>
                {
                showPassword ?  <FaEyeSlash /> : <FaEye /> 

                }
                </div>
             </div>
             <div className='flex justify-between itemc mt-3'>
                <div className='flex justify-center gap-4 items-center'>
                   
                    <input type="checkbox"   name='checkbox'/>
                     <label htmlFor="checkbox"> remembar me</label>
                </div>
                <div>
                <button className='text-blue-800 hover:underline cursor-pointer'>Forgat password ?</button>
                </div>
             </div>
             <div className='mt-4 flex justify-end items-center '>
                <button className='px-10 cursor-pointer opacity-85  hover:opacity-100 py-2 bg-teal-500 rounded-full hover:text-amber-50 transition-all  '>Login</button>
             </div>
                          
            </form>
        </div>
    </div>
  )
}

export default Login