import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    // Paths to ignore
    ignores: ['dist', 'vite.config.js', 'node_modules', 'build', 'public'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node, // Node environment only
      sourceType: 'module',
    },
    rules: {
      // JavaScript recommended rules
      ...js.configs.recommended.rules,

      // Prettier rules to disable conflicting formatting rules
      ...prettierConfig.rules,
    },
  },
];
