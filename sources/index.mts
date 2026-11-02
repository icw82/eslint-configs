import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';

import base from './base.mts';
import stylistic from './stylistic.mts';
import typescript from './typescript.mts';

const config: Linter.Config[] = defineConfig([
    {
        files: [
            '**/*.{js,mjs,ts,mts,jsx,tsx}',
        ],
    },
    {
        ignores: [
            'node_modules',
            '**/dist/**',
            '**/build/**',
            '**/coverage/**',
        ],
    },
    base,
    stylistic,
    ...typescript,
]);


export {
    base,
    stylistic,
    typescript,
    config,
};
