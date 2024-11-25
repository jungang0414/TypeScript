## 型別斷言

可以用來指定一個值的型別。

### 語法

```
<型別>值
```

```
值 as 型別
```

### 聯合型別的變數指定為一個更加具體的型別

當我們確定變數型別時就可以在要斷言的變數前加上 <型別>
從而去使用該型別的屬性和方法, 在編譯時就不會報錯.

```
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
```