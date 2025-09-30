/* eslint-disable @typescript-eslint/naming-convention */
import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';

import { CONFIG_NAME_PREFIX } from './constants.js';


type Config = TSESLint.FlatConfig.Config;

const rules: Config['rules'] = {
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/naming-convention': [
        'error', {
        //     selector: 'import',
        //     format: ['camelCase', 'PascalCase'],
        // }, {
        //     selector: 'variableLike',
        //     format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE' ],
        //     // leadingUnderscore: 'allow',
        // }, {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
        }, {
            selector: 'variable',
            modifiers: ['const'],
            types: ['function'],
            format: ['strictCamelCase', 'StrictPascalCase'],
            // leadingUnderscore: 'allow',
        }, {
            selector: 'variable',
            modifiers: ['exported'],
            types: ['function'],
            format: ['strictCamelCase', 'StrictPascalCase'],
            // leadingUnderscore: 'allow',
        }, {
            selector: 'variable',
            modifiers: ['const'],
            types: ['array', 'boolean', 'number', 'string'],
            format: ['strictCamelCase', 'UPPER_CASE'],
            // leadingUnderscore: 'allow',
        // }, {
        //     selector: 'variable',
        //     types: ['array', 'number', 'string'],
        //     format: null,
        //     custom: {
        //         regex: '^(?!is|should|has|can|did|will)[a-z]+[A-Z]',
        //         match: true,
        //     }
        }, {
            selector: 'function',
            format: ['strictCamelCase', 'StrictPascalCase'],
        }, {
            selector: 'typeLike',
            format: ['StrictPascalCase'],
        }, {
            selector: 'memberLike',
            format: ['strictCamelCase', 'UPPER_CASE'],
        }, {
            selector: 'enum',
            format: ['StrictPascalCase', 'UPPER_CASE'],
        }, {
            selector: 'enumMember',
            format: ['StrictPascalCase', 'UPPER_CASE'],
        }, {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['strictCamelCase'],
            leadingUnderscore: 'require',
        }, {
            selector: 'memberLike',
            modifiers: ['protected'],
            format: ['strictCamelCase'],
            leadingUnderscore: 'require',
        }, {
            selector: 'objectLiteralProperty',
            format: ['strictCamelCase', 'UPPER_CASE'],
        },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
            accessibility: 'no-public',
            overrides: {
                properties: 'no-public',
                accessors: 'no-public',
                constructors: 'no-public',
                methods: 'no-public',
                parameterProperties: 'no-public',
            },
        },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unsafe-assignment': [
        'off',
    ],
    '@typescript-eslint/no-unsafe-call': [
        'off',
    ],
    '@typescript-eslint/no-unsafe-member-access': [
        'off',
    ],
    '@typescript-eslint/no-unsafe-return': [
        'off',
    ],
    '@typescript-eslint/no-empty-function': [
        'off',
    ],
    '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
            allowExpressions: true,
            allowTypedFunctionExpressions: false,
        },
    ],
    '@typescript-eslint/array-type': [
        'error',
        {
            'default': 'array',
        },
    ],
    '@typescript-eslint/no-inferrable-types': [
        'off',
        {
            ignoreParameters: true,
        },
    ],
};

const tsconfigRootDir = process.cwd();

const config: Config = {
    name: CONFIG_NAME_PREFIX + 'typescript',
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            projectService: {
                allowDefaultProject: [
                    '*.{js,mjs,ts,mts,jsx,tsx}',
                ],
            },
            tsconfigRootDir,
        },
    },
    rules,
};


export default tseslint.config(
    ...tseslint.configs.recommendedTypeChecked,
    config,
) as unknown as Linter.Config[];
