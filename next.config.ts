// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   images:{
//     domains:["i.ibb.co","images.unsplash.com","images.unsplash.com","encrypted-tbn0.gstatic.com","plus.unsplash.com","media.istockphoto.com", "randomuser.me","assets.weforum.org", "upload.wikimedia.org" ]
//   }
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "plus.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "media.istockphoto.com", pathname: "/**" },
      { protocol: "https", hostname: "randomuser.me", pathname: "/**" },
      { protocol: "https", hostname: "assets.weforum.org", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
    ],
  },
};

export default nextConfig;
