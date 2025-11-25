'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { login } from '../../../utils/user/user-api'

function Login() {
  const router =useRouter()
    const [showPassword, setShowPassword] = useState(true)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
      })
    const showHidePassword = ()=>{
        setShowPassword(!showPassword)
    }


     const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }


const handleSubmit = async (e: any) => {
  e.preventDefault();

  const { email, password } = formData;

  // 1) Validate first
  if (!email || !password) {
    toast.error("All fields are required");
    return;
  }

  try {
    const res = await login(formData);

    if (res?.token) {
      toast.success("Login successful!");

      router.push("/"); // 
    } else {
      toast.error(res?.message || "Login failed");
    }

  } catch (error) {
    toast.error("Login failed");
    console.log(error);
  }
};



  return (
    <div className='w-[70%]'>
        <h1 className='text-2xl py-4 text-gray-700 font-semibold '>Login your account</h1>
        <div>
            <form onSubmit={handleSubmit}>
             <div className='gap-2'>
                <label htmlFor="name" > User name or email</label> <br />
                <input type="text" 
                value={formData.email}
               onChange={handleChange}
               name='email'

                placeholder='User name or email' 
                className=' w-full border mt-3 border-teal-500 rounded-lg px-4 py-2'
                />
            
             </div>

             <div className='gap-2 mt-4 relative '>
                <label htmlFor="name" > User Password</label> <br />

                <input
                 type={showPassword ? "text":"password"} 
                 value={formData.password}
                 placeholder='Enter your pas'
                 name='password'
                 onChange={handleChange}
                className=' w-full  border  border-teal-500 rounded-lg px-4 py-2'
                />

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
                <button 
                type='submit'
                className='px-10 cursor-pointer opacity-85  hover:opacity-100 py-2 bg-teal-500 rounded-full hover:text-amber-50 transition-all  '>Login</button>
             </div>
                          
            </form>
        </div>
    </div>
  )
}

export default Login