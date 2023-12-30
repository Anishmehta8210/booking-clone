/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        
        { hostname: "static1.squarespace.com" },
        { hostname: "images.unsplash.com" },
      ],
      domains:["i.ibb.co"],
      
    },
    reactStrictMode: true,
  }
  
  module.exports = nextConfig