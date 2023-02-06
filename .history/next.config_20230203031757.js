/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org", "https://image.tmdb.org/t/p/original"],
  },
}

module.exports = nextConfig
