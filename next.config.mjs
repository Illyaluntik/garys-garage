/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`,
  trailingSlash: true,
  allowedDevOrigins: ['192.168.1.154'],
}

export default nextConfig