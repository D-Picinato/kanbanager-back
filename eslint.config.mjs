import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importHelpers from 'eslint-plugin-import-helpers';
import eslintConfigPrettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  { ignores: ['dist', 'prisma'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: { ecmaVersion: 2020 },
    plugins: { 'import-helpers': importHelpers },
    rules: {
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            'module',
            '/@types/',
            '/configs/',
            '/app/',
            '/domain/',
            '/infra/',
            '/contexts/',
            '/middlewares/',
            '/controllers/',
            '/routes/',
            '/schemas/',
            '/utils/',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
    },
  },
  eslintConfigPrettier,
  { rules: { 'prettier/prettier': 'warn' } },
);
