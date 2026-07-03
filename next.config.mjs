/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",      // required by OpenNext for Cloudflare Workers deployment
  images: { unoptimized: true },
};
export default nextConfig;
