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

let xx = 3, yy;
xx += yy	 = 6*5/2;
console.log(xx);

//5_4
console.log("--------5_4-------");
//5_4_1
const v = 5;
const w = "5";

console.log(v === w);//false
console.log(v !== w);//true
console.log(v === Number(w));//true
console.log(v !== Number(w));//false
console.log(v == w);//true
console.log(v != w);//false

console.log("---------------");

const t = {name: "あるオブジェクト"};
const u = {name: "あるオブジェクト"};

console.log(t === u);//flase
console.log(t !== u);//true
console.log(t == u );//false
console.log(t != u);//true

console.log("---------------");

//5_4_2
console.log(3 > 5);//false
console.log(3 >= 5);//false
console.log(3 < 5);//true
console.log(3 <= 5);//true

console.log(5 > 5);//false
console.log(5 >= 5);//true
console.log(5 < 5);//false
console.log(5 <= 5);//true

console.log("---------------");

//5_4_3
console.log(NaN === NaN);//false
console.log(NaN == NaN);//false
console.log(isNaN(NaN));//true
console.log(isNaN(3));//false
console.log(isNaN(3.6));//false
console.log(isNaN("hoge"));//true

console.log("---------------");

let epsilon = 0;
while(true){
    epsilon += 0.1;
    console.log(epsilon);

    if(Math.abs(epsilon - 0.3) < Number.EPSILON) break;
}
console.log(`${epsilon}で停止`);


//5_5
console.log("--------5_5-------");

console.log(3 + 5 + "8");
console.log("3" + 5 + 8);

