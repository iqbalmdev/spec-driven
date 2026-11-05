import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Use the same host in the browser as in the terminal (localhost vs LAN IP).
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.1.6",
    "192.168.68.115",
    "192.168.1.1",
  ],
};

export default nextConfig;
