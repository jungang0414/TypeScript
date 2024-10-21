// 型別+方括號
var arrayNum = [1, 2, 3, 4];
console.log(arrayNum);
// 錯誤型別
// let arrayStr: string[] = ["1", "2", "3", "4", 5] // Type 'number' is not assignable to type 'string'.
console.log("------------------");
// 泛型
var arrayG = [1, 2, 3, 4];
console.log(arrayG);
console.log("------------------");
var arrayTnum = [1, 2, 3, 4];
console.log(arrayTnum);
console.log("------------------");
// 類別陣列
function sum() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var args = arguments;
    var result = 0;
    for (var i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
console.log(sum(1, 2, 3, 4));
var dataTime = new Date();
console.log(dataTime);
console.log("------------------");
// any 使用在陣列中
var arraylist = ['fName', 25];
console.log(arraylist);
