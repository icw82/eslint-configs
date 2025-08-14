/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
import { Linter } from 'eslint';
import stylistic, { type RuleOptions } from '@stylistic/eslint-plugin';

import { CONFIG_NAME_PREFIX } from './constants.js';


type StylisticRules = {
    [K in keyof RuleOptions]?: Linter.RuleEntry<RuleOptions[K]>;
};

const stylisticRules: StylisticRules = {
    '@stylistic/indent': ['error', 4, {
        SwitchCase: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
    }],
    '@stylistic/semi': ['error', 'always' ],
    '@stylistic/operator-linebreak': ['error', 'after', {
        overrides: { '?': 'before', ':': 'before' },
    }],
    '@stylistic/comma-dangle': [ 'error',
        {
            arrays: 'always-multiline',
            enums: 'always-multiline',
            exports: 'always-multiline',
            functions: 'ignore',
            generics: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline',
            tuples: 'always-multiline',
        },
    ],

    '@stylistic/member-delimiter-style': [
        'error',
        {
            singleline: {
                requireLast: true,
            },
        },
    ],
    '@stylistic/type-annotation-spacing': [
        'error',
    ],
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
};

const config: Linter.Config = {
    name: CONFIG_NAME_PREFIX + 'stylistic',
    plugins: {
        '@stylistic': stylistic,
    },
    rules: stylisticRules,
};

export default config;
