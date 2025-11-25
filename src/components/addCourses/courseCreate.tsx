"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { courseCreate } from '../../utils/user/user-api'

function CourseCreate() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    CourseName: "",
    img: "",
    icon1Title: "",
    icon2Title: "",
    mainTitle: "",
    description: "",
    profileName: "",
    deletePrice: "",
    recentPrice: ""
  })

  const [error, setError] = useState("")

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const { CourseName, img, icon1Title, icon2Title, mainTitle, description, profileName, deletePrice, recentPrice } = formData;

    if (!CourseName || !img || !icon1Title || !icon2Title || !mainTitle || !description || !profileName || !deletePrice || !recentPrice) {
      setError("All fields are required!");
      return;
    }

    setError("");

    try {

      // STEP 2: API CALL
      const res = await courseCreate(formData, router)

      console.log("Response:", res)

      // STEP 3: UI success message
      toast.success("Course created successfully!");

      // STEP 4: Redirect (if needed)
      router.push("/")

    } catch (error) {
      console.log(error)
      toast.error("Course creation failed!")
    }
  }


  return (
    <div className='w-[70%] mx-auto mt-6'>
      <h1 className='text-2xl py-4 text-gray-700 font-semibold'>Create A Course</h1>

      <form onSubmit={handleSubmit}>

        {/* Course Name */}
        <div className='mb-3'>
          <label>Course Name</label><br />
          <input
            type="text"
            name="CourseName"
            placeholder="Course name"
            value={formData.CourseName}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>

        {/* Course Image */}
        <div className='mb-3'>
          <label>Course Image Url</label><br />
          <input
            type="text"
            name="img"
            placeholder="Course image URL"
            value={formData.img}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>

        {/* Icon 1 */}
        <div className='mb-3'>
          <label>Subtitle</label><br />
          <input
            type="text"
            name="icon1Title"
            placeholder="Subtitle"
            value={formData.icon1Title}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>

        {/* Icon 2 */}
        <div className='mb-3'>
          <label>Duration</label><br />
          <input
            type="text"
            name="icon2Title"
            placeholder="Duration"
            value={formData.icon2Title}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>

        {/* Main Title */}
        <div className='mb-3'>
          <label>Main Title</label><br />
          <input
            type="text"
            name="mainTitle"
            placeholder="Main Title"
            value={formData.mainTitle}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>

        {/* Description */}
        <div className='mb-3'>
          <label>Description</label><br />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>

        {/* Profile Name */}
        <div className='mb-3'>
          <label>Profile Name</label><br />
          <input
            type="text"
            name="profileName"
            placeholder="Profile Name"
            value={formData.profileName}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>

        {/* Delete Price */}
        <div className='mb-3'>
          <label>Delete Price (Old Price)</label><br />
          <input
            type="text"
            name="deletePrice"
            placeholder="Old Price"
            value={formData.deletePrice}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>

        {/* Recent Price */}
        <div className='mb-3'>
          <label>Recent Price (New Price)</label><br />
          <input
            type="text"
            name="recentPrice"
            placeholder="New Price"
            value={formData.recentPrice}
            onChange={handleChange}
            className='w-full border mt-2 border-teal-500 rounded-lg px-4 py-2'
          />
        </div>


        {/* Error Message */}
        {error && <p className='text-red-500 mb-3'>{error}</p>}

        {/* Submit button */}
        <div className='flex justify-end'>
          <button
            type="submit"
            className='px-10 py-2 bg-teal-500 text-white rounded-full hover:opacity-90 transition-all'
          >
            Create Course
          </button>
        </div>

      </form>
    </div>
  )
}

export default CourseCreate
