/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? '/delaneym' : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
}

module.exports = nextConfig

