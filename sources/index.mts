import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';

import base from './base.mjs';
import stylistic from './stylistic.mjs';
import typescript from './typescript.mjs';


const config = tseslint.config({
    files: [
        '**/*.js',
        '**/*.jsx',
        '**/*.mjs',

        '**/*.ts',
        '**/*.tsx',
        '**/*.mts',
    ],
    // languageOptions: {
    //     parserOptions: {
    //         projectService: true,
    //         tsconfigRootDir: import.meta.dirname,
    //     },
    // },
}, {
    'extends': [
        base,
        stylistic,
        ...typescript,
    ],
}) as unknown as Linter.Config[];

export {
    base,
    stylistic,
    typescript,
    config,
};
