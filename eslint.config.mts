import { config } from './sources/index.mts';


// Фикстура смоук-теста нарушает правила намеренно
export default [
    ...config,
    { ignores: ['sources/tests/code.ts'] },
];
