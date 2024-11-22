## 函式的型別

### 函式宣告

在JS中常見的定義函式的方法:

1. 函式宣告 function declaration
```
function sum(x, y) {
    return x + y;
}
```

2. 函式表達式 function expression
```
let mySum = function (x, y) {
    return x + y;
}
```

若是要在TS對函式進行約束, 則必須將輸入輸出都考慮進去.

#### 函式宣告的定義: (輸入過多或少的引數都是不行的)
```
function sum(x: number, y: number): number {
    return x + y;
}
```

#### 函式表達式的定義: [ES6中的箭頭函式](https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E9%A0%AD%E5%87%BD%E5%BC%8F)
```
// 事實上 這是可以通過編譯的, 不過等號左側變數的型別是透過賦值進行型別推斷推斷出來的
let mySum = function sum(x: number, y: number): number {
    return x + y;
}

// 如果想要自行定義等號左側變數型別
let mySum: (x: number, y: number) => number = function(x: number, y:number): number {
    return x + y;
}
```

### 使用介面定義函式的形狀(規格)

```
interface SearchFn {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFn;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

###　可選引數

原本定義好的函式輸入過少過多的引數皆是不允許的.
而可選引數與可選屬性相似, 用 ? 代表可選的引數,
當這個引數並不是必須一定要引入時, 可以使用? 設置為可選引數
不過需要注意的是 可選引數要接在必要引數的後面. 否則會報錯
```
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}

let tomcat = buildName('tom', 'cat');
let tom = buildName('tom');
```

### 引數預設值 [ES6](https://es6.ruanyifeng.com/#docs/function#%E5%87%BD%E5%BC%8F%E5%BC%95%E6%95%B8%E7%9A%84%E9%A0%90%E8%A8%AD%E5%80%BC)

在ES6中, 允許給函式的引數定義預設值(賦值), 而TS會將定義了預設值的引數識別為可選引數

```
function buildName(firstName: string = 'tom', lastName: string) {
    return firstName + ' ' + lastName;
}
```

### 剩餘引數

使用 ...(擴展運算符)來將不定數量的引數放進一個陣列當中

```
function push(array: any[], ...items: any[]) {
    items.forEach(item => array.push(item));
}
```

### 過載

過載允許一個函式接受不同數量或型別的引數時，作出不同的處理。
可以根據不同的參數組合，提供更具描述性的函式名稱，讓程式碼更容易理解。

```
function add(x: number, y: number):number;
function add(x: string, y: string):string;
function add(x: any, y: any): any {
    return x + y;
}
```