/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org", "developers.themoviedb.org"],
  },
}

module.exports = nextConfig
