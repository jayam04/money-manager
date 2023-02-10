/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

rewrites: async () => [
  {
    source: "/public/myfile.html",
    destination: "/pages/api/myfile.js"
  }
]

