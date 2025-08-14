import { ESLint } from 'eslint';


async function main(): Promise<void> {
    const eslint = new ESLint();

    const [ result ] = await eslint.lintFiles('./sources/tests/code.ts');

    if (result.errorCount === 0) {
        console.error('Линтер не обнаружил ни одной ошибки');

        process.exit(1);
    }

    const { messages } = result;

    const rulesIds = new Set(messages.map((m): string => m.ruleId || ''));

    const expectedRulesIds = [
        'quotes',
        'space-infix-ops',
        '@stylistic/semi',
        '@typescript-eslint/no-unused-vars',
    ];

    expectedRulesIds.forEach((id): void => {
        if (rulesIds.has(id)) return;

        console.error(
            `Ожидалось сообщение об ошибке по правилу ${id}, но получены:`,
            messages
        );

        process.exit(1);
    });
}

main().catch((e): void => {
    console.error('Smoke-тест провален:', e);
    process.exit(1);
});
