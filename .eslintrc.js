module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-use-before-define': 2,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0, // Disabled because is typescript who guarantees files import resolution
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'prettier/prettier': 2,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
  globals: {
    fetch: false,
    __DEV__: 'readonly',
  },
};
