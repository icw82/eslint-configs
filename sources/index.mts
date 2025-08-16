import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';

import base from './base.mjs';
import stylistic from './stylistic.mjs';
import typescript from './typescript.mjs';

const config = tseslint.config([
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
]) as unknown as Linter.Config[];


export {
    base,
    stylistic,
    typescript,
    config,
};
