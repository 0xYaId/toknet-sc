// craco.config.js

const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // 1. Provide fallbacks for Node.js core modules
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        assert: require.resolve('assert/'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        url: require.resolve('url/'),
        vm: require.resolve('vm-browserify'),
        zlib: require.resolve('browserify-zlib'),
        util: require.resolve('util/'),
      };

      // 2. Provide global variables
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
        }),
      ];

      // Remove source-map-loader
      if (webpackConfig.module && webpackConfig.module.rules) {
        webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
          if (rule.use) {
            rule.use = rule.use.filter((u) => u.loader !== 'source-map-loader');
          }
          return rule;
        });
      }
      return webpackConfig;
    },
  },
};
