/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'airbnb-base',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages', {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
      },
    ],
    'max-len': [
      'error',
      {
        ignorePattern: 'd="([\\s\\S]*?)"',
        ignoreUrls: true,
      },
    ],
  },
  settings: {
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
      '@rushstack/eslint-patch/modern-module-resolution',
    ],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
};
