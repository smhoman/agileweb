/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // static HTML export -> ./out (served directly by Cloudflare Pages)
  images: { unoptimized: true },
  trailingSlash: true,       // emit /about/index.html etc. for clean static URLs
};
export default nextConfig;
