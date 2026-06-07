/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
