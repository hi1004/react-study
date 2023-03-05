module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/no-static-element-interactions': [
      'off',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
        allowExpressionValues: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/function-component-definition': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'react/no-danger-with-children': 'off',
    'react/no-danger': 'off',
  },
};
