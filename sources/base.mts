/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
import globals from 'globals';
import { Linter } from 'eslint';
import type { ESLintRules } from 'eslint/rules';

import { CONFIG_NAME_PREFIX } from './constants.js';


const rules: Partial<ESLintRules> = {
    // Затратная операция
    'no-unused-vars': 0,
    // 'max-lines-per-function': [ 'warn', { max: 300, skipComments: true } ],
    'block-scoped-var': 'error',
    'class-methods-use-this': 'warn',
    'complexity': [ 'warn', { max: 10 } ],
    'eqeqeq': ['error', 'smart'],
    'getter-return': 'error',
    'id-denylist': [ 'error', 'boolean', 'number', 'string', 'undefined'],
    'max-depth': [ 'warn', { max: 4 } ],
    'max-lines': [ 'warn', { max: 1000, skipComments: true } ],
    'max-nested-callbacks': [ 'warn', 3 ],
    'max-params': [ 'error', 3 ],
    'no-await-in-loop': 'error',
    'no-console': [ 'error', { allow: ['warn', 'error'] }],
    'no-else-return': [ 'error', { allowElseIf: false } ],
    'no-invalid-this': 'error',
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
    'no-nested-ternary': 'error',
    'no-restricted-syntax': [
        'warn',
        {
            selector: ':not(MethodDefinition) > FunctionExpression',
            message: 'Функциональное выражение запрещено',
        },
        {
            selector: 'FunctionDeclaration',
            message: 'Объявление функции запрещено, используйте стрелочные функции',
        },
        {
            selector: 'MethodDefinition[static=true]',
            message: 'Статические методы запрещены',
        },
    ],
    'no-return-assign': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'warn',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undefined': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-concat': 'error',
    'object-shorthand': [ 'error', 'always', { avoidQuotes: true }],
    'one-var': [ 'error', 'never' ],
    'operator-assignment': [ 'warn', 'always' ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'radix': 'error',
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
