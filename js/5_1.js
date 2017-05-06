//5_2
const s = "5";

//単項プラス（文字列->数値に変換を試みる）
console.log(3 + +s);

//文字列
console.log(3 + s);

const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
console.log(-x1*1);
console.log(+x2*2);
console.log(+x3*3);
console.log(-x4*4);

console.log(10%3);
console.log(-10%3);
console.log(-10%4);
console.log(10%-3);
console.log(10%-3);
console.log(10%3.6);
console.log(10%2.5);


console.log("---------------");
let x = 2;
console.log(x++ + x++);
console.log(++x + ++x);
console.log(x++ + ++x);
console.log(++x + x++);
console.log(x);

console.log("---------------");

let y = 10;
console.log(y-- + y--);
console.log(--y + --y);
console.log(y-- + --y);
console.log(--y + y--);
console.log(y);

//5_3
console.log("--------5_3-------");
console.log(8/2+3*(4*2-1));