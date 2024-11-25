// 型別斷言 (斷定)
// 這裡我們不確定something這個變數是 string 或 number
// 所以只能使用 string & number 共有的屬性或方法
function getLength(something) {
    return something.length; // 這裡使用了 number 中不包含的方法 length
}
/*
在編譯時會出現以下錯誤:
error TS2339: Property 'length' does not exist on type 'string | number'.
Property 'length' does not exist on type 'number'.
*/
// 這裡當我們不確定變數型別時
// 而使用其中一個型別的屬性或方法
function getLengthX(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
/*
在編譯時會出現以下錯誤:
1. error TS2339: Property 'length' does not exist on type 'string | number'.
    Property 'length' does not exist on type 'number'.

2. error TS2339: Property 'length' does not exist on type 'string | number'.
    Property 'length' does not exist on type 'number'.
*/
// 這裡我們確定變數型別時就可以使用型別斷言
// 在需要斷言的變數前加上 <型別> 即可。
function getLengthY(something) {
    if (something.length) {
        return (something.length);
    }
    else {
        return something.toString().length;
    }
}
// 而型別斷言並不是型別轉換, 所以斷言成不存在的型別是不允許的
function toBoolean(something) {
    return something;
}
