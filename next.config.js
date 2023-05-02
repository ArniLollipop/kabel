/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    lng: "ru",

    defaultLocale: "ru",
    locales: ["ru", "kz"],
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
