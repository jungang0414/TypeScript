// Primitive Data
// boolean
var inDone = false;
// 基本型別 & 建構函數
var isByNewBoolean = new Boolean(0);
console.log(isByNewBoolean); // [Boolean: true]
//直接呼叫 Boolean 物件返回 boolean 值
var isByboolean = Boolean(1);
console.log(isByboolean); // true
console.log("-------------------");
// number
var isNum = 10;
console.log(isNum); // 10
// 基本型別 & 建構函數
var isByNewNumber = new Number(10);
console.log(isByNewNumber); // [Number: 10]
//直接呼叫 Number 物件返回 數值
var isBynumber = Number(10);
console.log(isBynumber); // 10
console.log("-------------------");
// string
var isString = "txt";
console.log(isString); // txt
// 基本型別 & 建構函數
var isByNewString = new String("建構函數");
console.log(isByNewString); // [String: '建構函數']
//直接呼叫 String 物件返回 字串
var isBystring = String("呼叫String物件並返回字串");
console.log(isBystring); // 呼叫String物件並返回字串
console.log("-------------------");
// null and undefined
var n = null;
var u = undefined;
console.log(n);
console.log(u);
console.log("-------------------");
// void 在 JS 中並沒有 void(空值的概念), 在 Java 中指的是不回傳任何值
// ts
// function alertName(): void {
//     alert('Hello World!!');
// }
// java
// public static void main(String[] args) {
//     System.out.println("Hello World!!");
// }
// any
//不使用 any 的錯誤賦值
// let noAnyNumber: string = 'seven';
// noAnyNumber = 7; // Type 'number' is not assignable to type 'string'.
var myNumber = 'seven';
console.log(typeof myNumber);
myNumber = 7;
console.log(typeof myNumber);
// 允許呼叫任意方法
var anyThing = 'Tom';
console.log(typeof anyThing);
// anyThing.setName('John');
// 型別推論
var something = 'seven'; // 這裡將字串'seven'賦值給 something 因為沒有宣告型別 TS  則會自動做型別推論 為 string型別
console.log(typeof something);
// something = 7; // Type 'number' is not assignable to type 'string'.
var anySomething; // 當在宣告變數時沒有定義型別以及賦值 就會被 TS 推斷為是 any型別.
console.log("-------------------");
