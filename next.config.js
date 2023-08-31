/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  fallback: true,
  reactStrictMode: false,
  experimental: {
    appDir: true,
    modern: true,
    modularize: true,
    css: true,
  },
  i18n: {
    locales: ["ru", "kz"],
    defaultLocale: "ru",
  },
  images: {
    domains: ["api.cable.kz", "kazkabel-back.zoom-app.kz"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.cable.kz",
        port: "",
        pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "kazkabel-back.zoom-app.kz",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
