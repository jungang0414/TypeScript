// 型別+方括號
let arrayNum: number[] = [1, 2, 3, 4];

console.log(arrayNum);
// 錯誤型別
// let arrayStr: string[] = ["1", "2", "3", "4", 5] // Type 'number' is not assignable to type 'string'.

console.log("------------------")

// 泛型
let arrayG: Array<number> = [1, 2, 3, 4]
console.log(arrayG);

console.log("------------------")

// 介面表示
interface arrayT {
    [arrayIndex: number]: number;
}

let arrayTnum: arrayT = [1, 2, 3, 4];
console.log(arrayTnum);

console.log("------------------")

// 類陣列物件
function sum(...arg: number[]): number{
    let args: IArguments = arguments;
    let result = 0;
    for (let i=0; i < args.length; i++) {
        result += args[i]
    }
    return result;
}

console.log(sum(1, 2, 3, 4));

let dataTime: Date = new Date();
console.log(dataTime);

console.log("------------------")

// any 使用在陣列中
let arraylist: any[] = ['fName', 25];
console.log(arraylist);
