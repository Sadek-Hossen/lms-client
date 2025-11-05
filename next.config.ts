import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    domains:["i.ibb.co","images.unsplash.com","images.unsplash.com","encrypted-tbn0.gstatic.com","plus.unsplash.com","media.istockphoto.com", "randomuser.me"]
  }
};

export default nextConfig;
