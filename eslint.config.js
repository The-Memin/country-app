// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = defineConfig([
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "space-infix-ops": "error",
      "comma-spacing": ["error", {
        before: false,
        after: true,
      }],
      "arrow-spacing": ["error", {
        before: true,
        after: true,
      }],
      "quotes": ["error", "single", {
        avoidEscape: true,
      }],
      "semi": ["error", "always"],
      "@typescript-eslint/no-unused-vars": "error",
      // "no-console": "warn",
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    rules: {},
  },
]);
