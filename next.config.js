/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // enable static export
  trailingSlash: true,     // add trailing slash to URLs
  distDir: "out",          // specify output directory
  basePath: "/Perfect-Temp-Refrigeration", // GitHub Pages subdirectory
  assetPrefix: "/Perfect-Temp-Refrigeration/", // GitHub Pages asset prefix
  images: {
    unoptimized: true,     // required for static export
  },
  // Disable server-side features for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
