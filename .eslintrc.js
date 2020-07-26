module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'max-len': ['error', { code: 80 }],
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-unresolved': 0,
    'linebreak-style': ['error', 'windows'],
    'import/extensions': 0,
    'no-unused-expressions': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
