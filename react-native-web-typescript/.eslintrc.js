module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'node_modules/',
    'coverage/',
    'android/',
    'ios/',
    'src/mocks/Setup',
  ],
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'off', //Causes duplicates with typescript-eslint/no-unused-vars
  },
};
