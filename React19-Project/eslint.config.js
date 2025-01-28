import js from '@eslint/js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  reactRecommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        React: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettier,
];
