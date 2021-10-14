const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const absolutePath = path.join(__dirname, '../core');

const core = path.join(
  __dirname,
  './node_modules/@540/core',
);

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader'),
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat(absolutePath, core);
      }

      return webpackConfig;
    },
  },

};
