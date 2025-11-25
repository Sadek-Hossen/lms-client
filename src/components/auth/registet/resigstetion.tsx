"use client"
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { singup } from '../../../utils/user/user-api'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

function Registration() {
   const router = useRouter()
  const [formData, setFormData] = useState({
   name: "",
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
  try {
      const res = await singup(formData)
    router.push("/")
    console.log(res)

    const { email, name, password } = formData

    if (!name || !email || !password) {
      setError("All fields are required!")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address!")
      return
    }
    

    if (password.length < 6) {
      setError("Password must be at least 6 characters!")
      return
    }

    
    toast.success("Registration successful!")

  
  } catch (error) {
    toast.error("user create faild")
    console.log(error)

    
  }}

  return (
    <div className='w-[70%] mx-auto mt-6'>
      <h1 className='text-2xl py-4 text-gray-700 font-semibold'>Register your account</h1>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className='mb-3'>
          <label>User Email</label><br />
          <input
            type="email"
            name="email"
            placeholder="User email"
            value={formData.email}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>

        {/* name */}
        <div className='mb-3'>
          <label>User Name</label><br />
          <input
            type="text"
            name="name"
            placeholder="User name"
            value={formData.name}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>

        {/* Password */}
        <div className='mb-4 relative'>
          <label>User Password</label><br />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-10 cursor-pointer text-gray-600'
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Error Message */}
        {error && <p className='text-red-500 mb-3'>{error}</p>}

        {/* Submit */}
        <div className='flex justify-end'>
          <button
            type="submit"
            className='px-10 py-2 bg-teal-500 text-white rounded-full hover:opacity-90 transition-all'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Registration
