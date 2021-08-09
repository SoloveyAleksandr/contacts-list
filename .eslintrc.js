module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
  ],

  plugins: [
    'react',
  ],

  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': 0,
    'object-curly-spacing': ['error', 'always', { arraysInObjects: false }],
    'quote-props': ['error', 'as-needed'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'warn',

    'react/react-in-jsx-scope': 'off',
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [1, { maximum: 1 }],
    'react/jsx-key': [2],
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': [0],
  },
};
