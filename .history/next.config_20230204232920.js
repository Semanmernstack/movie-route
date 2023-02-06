/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org", "developers.themoviedb.org"],
  },
  experimental: {
    appDir: true,
  },
 
}

module.exports = nextConfig
