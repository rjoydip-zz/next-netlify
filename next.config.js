const withPlugins = require('next-compose-plugins');
const nextConfig = {
  webpack: (config, options) => {
    return config;
  }
};

module.exports = withPlugins(
  [],
  nextConfig
);
