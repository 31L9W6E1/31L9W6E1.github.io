// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Do NOT set basePath or assetPrefix for a user/organization site or custom domain.
};

export default nextConfig;
