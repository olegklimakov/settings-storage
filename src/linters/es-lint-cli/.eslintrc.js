module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
  },
};
