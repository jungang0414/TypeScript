## 陣列的型別

陣列在TS中有許多定義的方法

### 1. 型別 + 方括號

根據定義的型別,陣列的項目中不允許存在其他的型別
e.g. 此陣列定義為字串陣列, 若在陣列中新增數字則會出現錯誤
```
let arrayStr: string[] = [1, 2, 3, 4, "5"];
```

### 2. 陣列[泛型]()

使用Array<elemType>來表示陣列.

```let arrayNum: Array<number> = [1, 2, 3, 4]```

### 3. 介面表示

在介面部分有提到, 要依照介面所定義的屬性框架來填入變數的屬性.
陣列也可以使用事先定義介面的方式來表示陣列, 不過比起上面兩種方式較為複雜.

```
interface ArrayT {
    [arrayIndex: number]: number;
}

let arrayNum: ArrayT = [1, 2, 3, 4];
```

### 4. 類陣列物件

類陣列物件是指具有類似於陣列結構, 但並非是真的陣列的物件.
例如: arguments 或 NodeList.
而類陣列物件通常具有length屬性還有數字索引, 但不具備陣列的push、pop方法.
```
function sum(...arg: number[]): number{
    let args: IArguments = arguments;
    let result = 0;
    for (let i=0; i < args.length; i++) {
        result += args[i]
    }
    return result;
}
```

在TS中有內建物件, 可以被當作定義好的型別.
如: Date, RegExp, Error
```
let dataTime: Date = new Date();
```

### 5. 在陣列中使用 any

any 表示陣列中可以使用任意的型別.

```
let list: any[] = ['fName', 25, {website: 'http://google.com'} ]
```