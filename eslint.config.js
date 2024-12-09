// @ts-check

import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default tsEslint.config(
    eslint.configs.recommended,
    tsEslint.configs.recommended,
    prettierRecommended,
)