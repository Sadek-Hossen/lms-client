"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import { getSingleCourses } from "../../../../utils/user/user-api";

interface Course {
  _id: number;
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
  const params = useParams(); // 
  const id = params?.id;      //  
  console.log("this is id", id);

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (!id) return;   // 👈 id না থাকলে ফেচিং বন্ধ থাকব 
    const fetchUser = async () => {
      try {
        const res = await getSingleCourses(id);
        console.log("this is res.id ", res.id);
        setCourses(res?.courses || []);
        console.log("this is coming from Courses :", res?.courses);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);

  return <div className="min-h-screen">this is our id : {id}</div>;
};

export default Page;
