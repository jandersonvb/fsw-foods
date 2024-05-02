/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'utfs.io' }] // This is the default value
  }
};

export default nextConfig;
