import { ESLint } from 'eslint';

import { config } from '../index.mts';


const main = async (): Promise<void> => {
    // Проверяется собранный конфиг, а не eslint.config.mts репозитория
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: config,
    });

    const [ result ] = await eslint.lintFiles('./sources/tests/code.ts');

    if (result.errorCount === 0) {
        console.error('Линтер не обнаружил ни одной ошибки');

        process.exit(1);
    }

    const { messages } = result;

    const rulesIds = new Set(messages.map((m): string => m.ruleId || ''));

    const expectedRulesIds = new Set([
        '@stylistic/max-len',
        '@stylistic/quote-props',
        '@stylistic/quotes',
        '@stylistic/semi',
        '@stylistic/space-infix-ops',
        '@typescript-eslint/naming-convention',
        '@typescript-eslint/no-deprecated',
        '@typescript-eslint/no-empty-object-type',
        'eqeqeq',
        'no-restricted-syntax',
    ]);

    expectedRulesIds.forEach((id): void => {
        if (rulesIds.has(id)) {
            rulesIds.delete(id);

            return;
        }

        console.error(
            `Ожидалось сообщение об ошибке по правилу ${id}, но получены:`,
            messages
        );

        process.exit(1);
    });

    if (rulesIds.size > 0) {
        console.error('Линтер обнаружил неожидаемые ошибки:', rulesIds);

        process.exit(1);
    }
};

main().catch((e): void => {
    console.error('Smoke-тест провален:', e);
    process.exit(1);
});
