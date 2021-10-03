module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier', 'jest', 'testing-library'],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:jest/recommended',
    'plugin:testing-library/react'
  ],
  ignorePatterns: ['node_modules/', 'coverage/', 'android/', 'ios/'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.3'
    }
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'off', //Causes duplicates with typescript-eslint/no-unused-vars,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
