import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Fixes the Turbopack warning by explicitly setting the project root.
  turbopack: {
    root: __dirname,
  },
  // Do NOT set basePath or assetPrefix for a user/organization site or custom domain.
};

export default nextConfig;
