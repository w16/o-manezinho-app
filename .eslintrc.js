module.exports = {
  env: {
    browser: true,
    es2021: true,
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
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-use-before-define': 0,
    'prettier/prettier': 2,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
  globals: {
    fetch: false,
  },
};
