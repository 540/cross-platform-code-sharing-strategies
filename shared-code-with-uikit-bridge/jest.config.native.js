'use strict'
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['native.js', 'js', 'native.jsx', 'jsx', 'native.ts', 'ts', 'native.tsx', 'tsx'],
  testRegex: 'test\\.(ts|js|jsx|tsx)$',
  moduleNameMapper: {
    '^@(.*)/(.*)$': '<rootDir>/node_modules/@$1/$2',
    '^ui/(.*)$': '<rootDir>/src/ui/$1',
    '^__test__/(.*)$': '<rootDir>/src/__test__/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': '<rootDir>/node_modules/react-native/jest/assetFileTransformer.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native)'
  ],
  modulePathIgnorePatterns: ['android', 'ios'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: true
    }
  },
  resetMocks: true,
  setupFiles: ['./jest.setup.js', './node_modules/react-native-gesture-handler/jestSetup.js'],
}
