import sheriff from 'eslint-config-sheriff';
import { defineFlatConfig } from 'eslint-define-config';
// import react from 'eslint-plugin-react';

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
    },
  },
  {
    files: ['**/*.astro'],
    // plugins: {
    //   react,
    // },
  },
]);
