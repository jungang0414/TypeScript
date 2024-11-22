// JS函式宣告
function sum(x, y) {
    return x + y;
}
console.log(sum(10, 20));
// JS函式表達式 (透過函式操作的引數,型別推斷推斷等號左側變數之型別)
var mySum = function (x, y) {
    return x + y;
};
console.log(mySum(10, 10));
// 函式表達式定義型別 在TS中 => 表示函式的定義. 左邊表示輸入的型別, 右邊代表輸出
var myData = function (x, y) {
    return x + y;
};
console.log(myData(11, 22));
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
console.log(mySearch("one", "one"));
// 可選引數
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
console.log(tomcat, tom);
// 引數預設值
function buildAge(age, lastName) {
    if (age === void 0) { age = 22; }
    return age + ' ' + lastName;
}
var myage = buildAge(undefined, 'name');
console.log(myage);
// 取得剩餘引數 (... 為ES6中的擴展運算式)
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) { return array.push(item); });
}
var a = [];
push(a, 1, 2, 3);
console.log(a);
function add(x, y) {
    return x + y;
}
var sum1 = add(1, 2);
var sum2 = add("Hello ", "World");
console.log(sum1);
console.log(sum2);
