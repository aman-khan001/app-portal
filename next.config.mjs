/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/app-portal",
    assetPrefix: "/app-portal/",
    images: {
      unoptimized: true, // Required for GitHub Pages if using images
    },
  };
  
  export default nextConfig;
  