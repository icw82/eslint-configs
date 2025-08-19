/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
import { Linter } from 'eslint';
import stylistic, { type RuleOptions } from '@stylistic/eslint-plugin';

import { CONFIG_NAME_PREFIX } from './constants.js';


type StylisticRules = {
    [K in keyof RuleOptions]?: Linter.RuleEntry<RuleOptions[K]>;
};

const stylisticRules: StylisticRules = {
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
            allowSingleLine: true,
        },
    ],
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
    '@stylistic/comma-spacing': 'error',
    '@stylistic/indent': ['error', 4, {
        SwitchCase: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
    }],
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/key-spacing': 'error',
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/quote-props': [
        'error',
        'consistent-as-needed',
        {
            keywords: true,
        },
    ],
    '@stylistic/max-len': [
        'warn',
        {
            code: 79,
            ignoreStrings: true,
            ignoreRegExpLiterals: true,
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
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/no-mixed-operators': [
        'error',
        { allowSamePrecedence: true },
    ],
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': [
        'error',
        {
            max: 2,
            maxEOF: 0,
            maxBOF: 0,
        },
    ],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/object-curly-spacing': ['warn', 'always'],
    '@stylistic/operator-linebreak': ['error', 'after', {
        overrides: { '?': 'before', ':': 'before' },
    }],
    '@stylistic/padding-line-between-statements': [
        'warn',
        {
            blankLine: 'always',
            prev: '*',
            next: 'return',
        },
        {
            blankLine: 'always',
            prev: [
                'const',
                'let',
                'var',
            ],
            next: '*',
        },
        {
            blankLine: 'any',
            prev: [
                'const',
                'let',
                'var',
            ],
            next: [
                'const',
                'let',
                'var',
            ],
        },
    ],
    '@stylistic/semi': ['error', 'always' ],
    '@stylistic/semi-spacing': 'error',
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': [
        'error',
        {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        },
    ],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/spaced-comment': 'warn',
    '@stylistic/type-annotation-spacing': 'error',
};

const config: Linter.Config = {
    name: CONFIG_NAME_PREFIX + 'stylistic',
    plugins: {
        '@stylistic': stylistic,
    },
    rules: stylisticRules,
};

export default config;
