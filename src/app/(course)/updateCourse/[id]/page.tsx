"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import URL from "@/utils/user/backendUrl";

export default function UpdateCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState({
    title: "",
    description: "",
    price: "",
  });

  // Load old data
  useEffect(() => {
    axios.get(`${URL}/course/${id}`).then((res) => {
      setCourse(res.data.course);
    });
  }, [id]);

  // Update state
  const handleChange = (e: any) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  // Submit update request
  const handleSubmit = async () => {
    await axios.put(`${URL}/course/${id}`, course);
    alert("Course Updated Successfully!");
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl mb-4">Update Course</h1>

      <input
        name="title"
        className="border p-2 w-full mb-2 text-black"
        value={course.title}
        onChange={handleChange}
        placeholder="Course Title"
      />

      <textarea
        name="description"
        className="border p-2 w-full mb-2 text-black"
        value={course.description}
        onChange={handleChange}
        placeholder="Description"
      />

      <input
        name="price"
        className="border p-2 w-full mb-2 text-black"
        value={course.price}
        onChange={handleChange}
        placeholder="Price"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Update Course
      </button>
    </div>
  );
}
