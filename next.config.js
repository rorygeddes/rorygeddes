/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove transpilePackages and swcMinify as they're causing issues
  images: {
    unoptimized: true,
  },
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  output: 'export'
};

module.exports = nextConfig; 