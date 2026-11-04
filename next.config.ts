import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.6", "192.168.68.115", "localhost"],
};

export default nextConfig;
