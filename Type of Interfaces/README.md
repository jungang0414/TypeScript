## 物件的型別 - 介面

使用介面來定義物件的型別
介面是對行為的一種抽象概念, 如何操作抽象概念則需要由類別(classes)去實現(implement)。

1. [對類別的一部分進行抽象]()
2. 對物件的形狀(Shape)進行描述

這邊定義了一個介面Person, 一個變數tom, 
變數tom的型別定義為介面Person, 就約束了變數tom的形狀必須與介面(完全)一致。

e.g.
```
interface Person {
    name: string,
    age: number;
}

let tom: Person = {
    name: 'John',
    age: 24
};
```

error e.g. (變數中少定義了 age 屬性)
```
interface Person {
    name: string,
    age: number;
}

let tom: Person = {
    name: 'john'
}
```

### 可選屬性

如果都必須要完全與介面一致, 程式的靈活性就降低許多
所以可以使用可選屬性的方式來定義介面, 可選屬性(?).

使用可選屬性時, 可以不用完全與介面一致. 
但是介面未定義過的屬性, 在變數中還是沒辦法新增的.
```
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'John'
}
```

### 任意屬性

有時我們會希望一個介面可以使用任意的屬性.
可以使用 any 去定義介面, 就可以使用任意的屬性去定義變數的屬性.
不過需要注意的是如果當我們定義了任意屬性的型別後, 所有的確定屬性與可選屬性都必須是任意屬性的子集.

```
interface Music {
    name: string;
    sound: string;
    [propName: string]: any; // 若是這邊的任意屬性 有特別定義型別的話 都必須是該定義型別的子集
}

let jay: Music = {
    name: "周杰倫",
    sound: "青花瓷",
    age: 40,
    wife: "昆凌"
}
```

### 唯獨屬性

當我們希望物件中的一些屬性只可以建立的時候賦值時.
可以使用 readonly 去定義介面中的唯獨屬性.

```
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
```
