module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          ui: './src/ui',
          core: './src/core',
          __test__: './src/__test__'
        }
      }
    ]
  ]
};
