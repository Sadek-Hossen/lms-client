"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getSingleCourses } from "../../../../utils/user/user-api";
import URL from "../../../../utils/user/backendUrl";

interface Course {
  _id: string;
  img: string;
  icon1Title: string;
  icon2Title: string;
  mainTitle: string;
  description: string;
  profileName: string;
  deletePrice: string;
  recentPrice: string;
}

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch Data
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await getSingleCourses(id);
        setCourse(res?.course || null);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Update Course Handler
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!course) {
      alert("Course data not loaded");
      return;
    }

    try {
      const res = await fetch(`${URL}/course/${course._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mainTitle: course.mainTitle,
          description: course.description,
          recentPrice: course.recentPrice,
          deletePrice: course.deletePrice,
          img: course.img,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Course updated successfully!");
        router.refresh();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  // Loading State
  if (loading) {
    return <div className="max-w-5xl mx-auto px-4 py-12">Loading...</div>;
  }

  // Not Found
  if (!course) {
    return <div className="max-w-5xl mx-auto px-4 py-12">Course not found</div>;
  }

  // Main JSX
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      {/* Left - Image */}
      <div>
        <Image
          src={course.img}
          alt={course.mainTitle}
          width={600}
          height={500}
          className="w-full h-auto rounded-lg shadow"
        />
      </div>

      {/* Right - Form */}
      <div className="space-y-6">
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            value={course.mainTitle}
            onChange={(e) => setCourse({ ...course, mainTitle: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Course Title"
          />

          <textarea
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            placeholder="Course Description"
          />

          <input
            type="text"
            value={course.recentPrice}
            onChange={(e) =>
              setCourse({ ...course, recentPrice: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            placeholder="Recent Price"
          />

          <input
            type="text"
            value={course.deletePrice}
            onChange={(e) =>
              setCourse({ ...course, deletePrice: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            placeholder="Delete Price"
          />

          <input
            type="text"
            value={course.img}
            onChange={(e) => setCourse({ ...course, img: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Image URL"
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#0FABCA] text-white rounded-md hover:bg-[#0FABCA]/80 text-lg font-medium"
          >
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
