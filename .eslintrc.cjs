module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-console': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': 'off',
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,
  },
};
