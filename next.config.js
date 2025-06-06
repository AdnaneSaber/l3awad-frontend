const dotenv = require("dotenv")
const path = require("path")
const checkEnvVariables = require("./check-env-variables")

// Load environment variables in the specified order
const envPaths = [
  path.resolve(__dirname, "../.env"),
  path.resolve(__dirname, "../.env.local"),
  path.resolve(__dirname, "./.env"),
  path.resolve(__dirname, "./.env.local"),
]

envPaths.forEach((envPath) => {
  dotenv.config({ path: envPath })
})

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    "medusa-backend",
    "medusa-storefront",
    "localhost",
    "medusa-redis",
  ],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "medusa-backend",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "medusa-storefront",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pagedone.io",
      },
    ],
  },
}

module.exports = nextConfig
