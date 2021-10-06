module.exports = {
  preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: true
    }
  },
  modulePathIgnorePatterns: ['native'],
  verbose: false,
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '^@(.*)/(.*)$': '<rootDir>/node_modules/@$1/$2',
    '^ui/(.*)$': '<rootDir>/src/ui/$1',
    '^__test__/(.*)$': '<rootDir>/src/__test__/$1'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'css'],
  setupFiles: ['./jest.setup.js']
};
