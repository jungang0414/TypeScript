// 簡單實例
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'John',
    age: 24
}

console.log(tom);

// 可選屬性
interface Animal {
    sound: string;
    leg?: number;
}

let dog: Animal = {
    sound: "woowo",
}

console.log(dog);

// 任意屬性
interface Music {
    name: string;
    sound: string;
    [propName: string]: any;
}

let jay: Music = {
    name: "周杰倫",
    sound: "青花瓷",
    wife: "昆凌",
    age: 24
}

console.log(jay);

interface Student {
    readonly id: number;
    name: string;
    age: number;
}

let ben: Student = {
    id: 1,
    name: "周餅倫",
    age: 50
}

// ben.id = 2; // Cannot assign to 'id' because it is a read-only property.

console.log(ben);