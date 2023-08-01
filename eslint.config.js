import astroEslintParser from 'astro-eslint-parser';
import sheriff from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';
import astro from 'eslint-plugin-astro';
import react from 'eslint-plugin-react';

const sheriffOptions = {
  react: true,
  lodash: false,
  next: false,
  playwright: false,
  jest: false,
  vitest: false,
};

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    files: ['**/*.astro'],
    plugins: {
      astro,
      react,
    },
    rules: {
      'react/jsx-sort-props': [
        2,
        {
          ignoreCase: true,
          callbacksLast: true,
          shorthandLast: true,
          noSortAlphabetically: true,
          reservedFirst: true,
        },
      ],
      'react/jsx-no-target-blank': 2,
    },
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  },
]);
