/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://kim-jiseong.github.io/DaoomBrandingFrontend"
      : "",
};
// module.exports = {
//   images: {
//     domains: ["images.unsplash.com"],
//   },
// };

module.exports = nextConfig;
