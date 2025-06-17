module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/extensions': 'off',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
  },

  globals: {
    __IS_DEV__: true,
  },
};
