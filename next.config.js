/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["kazkabel-back.zoom-app.kz"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "kazkabel-back.zoom-app.kz",
      port: "",
      pathname: "/account123/**",
    },
  ],
};

module.exports = nextConfig;
