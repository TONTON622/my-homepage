import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // これを追加！
  images: {
    unoptimized: true, // これも追加！
  },
};

export default nextConfig;