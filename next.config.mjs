/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/garys-garage',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
