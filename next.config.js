/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove transpilePackages and swcMinify as they're causing issues
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig; 