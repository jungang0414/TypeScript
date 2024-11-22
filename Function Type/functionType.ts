// JS函式宣告
function sum(x: number, y: number): number {
    return x + y;
}

console.log(sum(10, 20));

// JS函式表達式 (透過函式操作的引數,型別推斷推斷等號左側變數之型別)
let mySum = function(x: number, y:number): number {
    return x + y;
}

console.log(mySum(10, 10));

// 函式表達式定義型別 在TS中 => 表示函式的定義. 左邊表示輸入的型別, 右邊代表輸出
let myData: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
} 

console.log(myData(11, 22));

// 用介面定義函式的方法
interface SearchFn {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFn;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

console.log(mySearch("one", "one"));

// 可選引數
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
console.log(tomcat, tom);

// 引數預設值
function buildAge(age: number = 22, lastName: string) {
    return age + ' ' + lastName;
}

let myage = buildAge(undefined, 'name');
console.log(myage);

// 取得剩餘引數 (... 為ES6中的擴展運算式)
function push(array: any[], ...items: any[]) {
    items.forEach(item => array.push(item));
}

let a = [];
push(a, 1, 2, 3);
console.log(a);

// 過載
function add(x: number, y: number):number;
function add(x: string, y: string):string;
function add(x: any, y: any): any {
    return x + y;
}

let sum1 = add(1, 2);
let sum2 = add("Hello ", "World");

console.log(sum1);
console.log(sum2);