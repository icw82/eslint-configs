const a=3

const A = "2"

export const b = (): void => {};
export function c(): void {};
export const d = function D(): void {};

export class MyClass {
    a = 1;

    add(): void {
        this.a++;
    }

    static method(): void {}
}

export interface Test {
    delete(key: number): void;
}
