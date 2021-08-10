'use strict'
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testRegex: 'test\\.(ts|js|jsx|tsx)$',
  moduleNameMapper: {
    '^@(.*)/(.*)$': '<rootDir>/node_modules/@$1/$2',
    '^ui/(.*)$': '<rootDir>/src/ui/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': '<rootDir>/node_modules/react-native/jest/assetFileTransformer.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?native-base|react-native|react-navigation|react-navigation-redux-helpers|@react-navigation/.*)'
  ],
  modulePathIgnorePatterns: ['android', 'ios'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: true
    }
  },
  resetMocks: true,
  setupFiles: ['./jest.setup.js', './node_modules/react-native-gesture-handler/jestSetup.js']
}
