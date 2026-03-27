/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

console.log('isProd', isProd);

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/garys-garage' : '',
  assetPrefix: isProd ? '/garys-garage/' : '',
  trailingSlash: true,
}

export default nextConfig
