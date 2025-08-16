/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
import globals from 'globals';
import { Linter } from 'eslint';
import type { ESLintRules } from 'eslint/rules';

import { CONFIG_NAME_PREFIX } from './constants.js';


const rules: Partial<ESLintRules> = {
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'one-var': [ 'error', 'never' ],
    'operator-assignment': [ 'warn', 'always' ],
    'max-depth': [ 'warn', { max: 4 } ],
    'max-lines': [ 'warn', { max: 1000, skipComments: true } ],
    // 'max-lines-per-function': [ 'warn', { max: 300, skipComments: true } ],
    'max-nested-callbacks': [ 'warn', 3 ],
    'max-params': [ 'error', 3 ],
    complexity: [ 'warn', { max: 10 } ],
    'no-else-return': [ 'error', { allowElseIf: false } ],
    'no-magic-numbers': [
        'warn',
        {
            enforceConst: true,
            ignore: [-1, 0, 1],
            ignoreArrayIndexes: true,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ignoreDefaultValues: true,
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreClassFieldInitialValues: true,
        },
    ],
    'arrow-parens': 2,
    'prefer-const': 'error',

    // Затратная операция
    'no-unused-vars': 0,

    'no-multi-spaces': 2,
    'key-spacing': 2,
    'no-trailing-spaces': 'error',
    'space-infix-ops': 'error',

    'no-multiple-empty-lines': [
        'error',
        {
            max: 2,
            maxEOF: 0,
        },
    ],
    'max-len': [
        'warn',
        {
            code: 100,
        },
    ],
    'id-denylist': [
        'error',
        'boolean',
        'number',
        'string',
        'undefined',
    ],
    'brace-style': [
        'error',
        '1tbs',
        {
            allowSingleLine: true,
        },
    ],
    'object-curly-spacing': [
        'warn',
        'always',
    ],
    'func-call-spacing': [
        'error',
        'never',
    ],
    'semi-spacing': 'error',
    'keyword-spacing': 'error',
    'comma-spacing': 'error',
    'object-shorthand': [
        'error',
        'always',
        {
            avoidQuotes: true,
        },
    ],
    'no-shadow': 'warn',
    'no-invalid-this': 'error',
    'no-this-before-super': 'error',
    'class-methods-use-this': 'warn',
    'prefer-arrow-callback': 'error',
    'prefer-object-spread': 'error',
    'no-await-in-loop': 'error',
    'no-return-await': 'error',
    'padding-line-between-statements': [
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
    quotes: [
        'error',
        'single',
    ],
    'quote-props': [
        'error',
        'as-needed',
        {
            keywords: true,
        },
    ],
    'no-useless-concat': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
        'error',
        {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        },
    ],
    eqeqeq: [
        'error',
        'smart',
    ],
    'no-undefined': 'error',
    'no-unused-expressions': 'error',
    'no-mixed-operators': 'error',
    'block-scoped-var': 'error',
    'getter-return': [
        'error',
    ],
    'no-setter-return': [
        'error',
    ],
    'no-return-assign': 'error',
    radix: 'error',
    'no-throw-literal': 'error',
    'spaced-comment': 'warn',
    'no-console': [
        'error',
        { allow: ['warn', 'error'] },
    ],
};

const config: Linter.Config = {
    name: CONFIG_NAME_PREFIX + 'base',
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },
    rules,
};

export default config;
