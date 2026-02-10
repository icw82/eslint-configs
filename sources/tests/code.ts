/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
const a=3 // ❌

const A = "2" // ❌

export const b = (): void => {};
export function c(): void {}; // ⚠️
export const d = function D(): void {}; // ⚠️

export class MyClass {
    a = 1;

    add(): void {
        this.a++;
    }

    static method(): void {} // ⚠️
}

export interface Test {
    delete(key: number): void;
}

// ===== Проверка @typescript-eslint/naming-convention =====

// Переменные: camelCase или UPPER_CASE (не PascalCase, не snake_case)
const validVar = 1;
const VALID_CONST = 2;
const Invalid_Snake = 3; // ❌
const InvalidPascal = 4; // ❌

// Функции: strictCamelCase или StrictPascalCase
const validFunc = (): void => {};
const invalid_func = (): void => {}; // ❌

// Типы: только StrictPascalCase
interface invalid_interface {} // ❌
type invalid_type = string; // ❌
class invalid_class {} // ❌

// Члены класса
class TestNaming {
    validProp = 1;
    Invalid_Prop = 2; // ❌

    // Private/protected: обязательно _ в начале
    private _validPrivate = 1;
    private invalidPrivate = 2; // ❌
    protected invalidProtected = 3; // ❌

    // Приватные поля через #
    #validPrivateField = 1;
    #invalid_private_field = 2; // ❌

    #validPrivateMethod(): void {}
    #invalid_private_method(): void {} // ❌
}

// Деструктурированные переменные: любой формат (приходят из внешних API)
const { some_external_value, AnotherValue } = JSON.parse('{}');

// Импорты: camelCase или PascalCase
// import { some_thing } from 'module'; // ❌ (если бы был реальный модуль)

// Параметры типов: PascalCase
type Container<Value> = { value: Value; };
type BadContainer<value> = { value: value; }; // ❌

// Enum и объекты
enum invalid_enum {} // ❌
const obj = {
    Invalid_Prop: 1, // ❌
    'Invalid_Quoted_Prop': 2, // ❌ (валидный идентификатор — кавычки не спасают)
    'valid-kebab-case': 3, // ✅ (requiresQuotes — не проверяется)
    'Content-Type': 'text/html', // ✅ (requiresQuotes)
};
