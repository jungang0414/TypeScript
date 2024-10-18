# TypeScript 工具書

## 資料類型(型別)

在JS中的型別分為以下兩種

### 一、原始資料型別 [Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

原始資料型別在JS中代表的是不可改變的數值
e.g.:
```
let x = 10; // 變數 x 儲存 10 這個原始數值
x = 20; // 現在變數 x 儲存 20 這個值, 但原來的 10 這個值不會改變
```
原始資料型別分別是以下幾種:

### 布林值
```boolean```(布林值):
布林值是最基礎的資料型別,以下是使用使用布林值定義變數的型別
```
let isDone: boolean = false;
```

使用建構函數 Boolean 建立的物件不是布林值, 
它返回的是一個 Boolean 物件, 可以呼叫 Boolean 物件去取得 boolean 布林值.
在JavaSrcipt當中 大小寫有所區別 boolean 是基本型別, 而Boolean 是建構函數.
(建構函數的表達方式除了 null & undefined, 其他類型都一樣).
```
let isNewBoolean: Boolean = new Boolean(1);
console.log(isNewBoolean); // [Boolean: true]

let isByBoolean: boolean = Boolean(1);
console.log(isByBoolean);  // true
```

### 數值
```number```(數值)

使用 number 定義數值型別.
```
let isByNewNumber: Number = new Number(10);
console.log(isByNewNumber); // [Number: 10]

let isBynumber: number = Number(10);
console.log(isBynumber); // 10
```

### 字串
```string```(字串)

使用 string 定義字串型別.
```
let isByNewString: String = new String("txt");
```

### Null & Undefined

null and undefined 是所有型別的子型別, 
意思是這兩個型別所宣告的變數可以賦值給 number 型別的變數.
```
let n: null = null;
let u: undefined = undefined;

let num_n: number = n;
let num_u: number = u;
```

### void (空值)
void 在 JS 中並沒有 void(空值的概念), 在 Java 中指的是不回傳任何值.

```
// ts
function alertName(): void {
    alert('Hello World!!');
}

// java
public static void main(String[] args) {
    System.out.println("Hello World!!");
}
```

### any 任意值

任意值(any) 用來表示允許將變數賦值為任意型別.
```
// 以下為錯誤賦值 
// 將 myNumber 的型別定義為字串
let myNumber: string = 'seven';
// 再將數值 7 重新賦值給 myNumber 就會發生型別錯誤
myNumber = 7; // error 

// 但是將變數型定義為 any 任意型別時 則允許重新賦值
let myNumber: any = 'seven';
myNumber = 7;
```

意思是,當宣告一個變數為任意值後,對變數的任何操作,返回的內容的型別都是任意值.

當變數在宣告時並未指定型別, 則會自動識別為任意值.
```
let something;
something = 'seven';
something = 7;
```

### 型別推論 (未宣告型別時)

當在宣告明確型別時, TS 會依照型別推論的規則推斷型別.
```
let something = 'seven'; // 這裡將字串'seven'賦值給 something 因為沒有宣告型別 TS  則會自動做型別推論 為 string型別
console.log(typeof something);
// something = 7; // Type 'number' is not assignable to type 'string'.
let anySomething; // 當在宣告變數時沒有定義型別以及賦值 就會被 TS 推斷為是 any型別.
```

### 聯合型別

表示該變數在賦值時可以是多種型別中的一種.
```
let myNumber: string | number; // 這裡表示允許賦值給這個變數 字串 或 數字 其餘型別則無法賦值
```

存取屬性&方法 不過需要是兩種型別的都共有的屬性和方法
```
function getLength(something: string | number): number {
    return something.length; // 在 number 不存在 length 屬性 所以會報錯 
}  
```

宣告為聯合型別的變數, 在賦值時會自動推斷型別
```
let myNumber: string | number;
// myNumber = true; // 'boolean' is not assignable to type 'string | number'.
```
