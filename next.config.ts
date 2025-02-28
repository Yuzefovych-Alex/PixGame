/*
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /!* config options here *!/
};

export default nextConfig;
*/
/** @type {import('next').NextConfig} */
const NextConfig = {
    output: "export",
    basePath: "/PixGame", 
    assetPrefix: "/PixGame/", 
    images: {
        unoptimized: true,
    },
};

module.exports = NextConfig;