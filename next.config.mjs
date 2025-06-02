/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Coffee-App',
  assetPrefix: '/Coffee-App/',
  images: {
    unoptimized: true, // Prevents next/image issues on GitHub Pages
  },
};

export default nextConfig;
