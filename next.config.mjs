import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",      // required by OpenNext for Cloudflare Workers deployment
  images: { unoptimized: true },
  turbopack: { root: projectRoot },
};
export default nextConfig;
