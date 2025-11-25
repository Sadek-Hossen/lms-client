"use client";

import { useRef } from "react";

export default function AboutIndex() {
  // 👉 useRef must be inside the component
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 👉 handle function component এর ভিতরে থাকবে
  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.log("Camera error:", err);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">

      <button 
        onClick={handleOpenCamera} 
        className="p-4 bg-green-400 rounded-xl"
      >
        📷 Open Camera
      </button>

      <video
        className="w-96 h-96 bg-black"
        autoPlay
        ref={videoRef}  // 👉 এখানে useRef কাজ করবে
      ></video>

    </div>
  );
}
