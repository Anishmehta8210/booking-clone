/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        
        { hostname: "static1.squarespace.com" },
      ],
      domains:["i.ibb.co"],
      
    },
    reactStrictMode: true,
  }
  
  module.exports = nextConfig