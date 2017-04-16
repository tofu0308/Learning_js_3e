//3_7_1
const dialog1 = "dialog1 \"escape\"";
const dialog2 = 'dialog2 \'escape\'';
const dialog3 = `dialog3 "escape"`;

const d1 = "\"\""
const d3 = `""`

console.log(dialog1);
console.log(dialog2);
console.log(dialog3);
console.log(d1 === d3);

//3_7_2
const newLine = `line1\nline2`;
const bq = `バッククォートをエスケープ=>　\``

console.log(newLine);
console.log(bq);

//3_7_3 : テンプレートリテラル
const price = `900`;
const dollor = `価格は${price}です`

console.log(dollor);

//3_7_4
const mulutiLine =`line1
line2
line3
line4`;

const mulutiLine2 = "line2_1\n" +
 "line2_2\n" +
 "line2_3\n" +
 "line2_4\n";

console.log(mulutiLine);
console.log(mulutiLine2);

//3_7_5
const result1 = 3 + '30';
const result2 = 3 * '30';

console.log(result1);
console.log(result2);

//3_8
let t = true;
let f =false;

console.log(t);
console.log(f);

//3_9 シンボル
const RED = Symbol();
const BLUE = Symbol();
const ORANGE = Symbol(`橙`);

console.log(RED);
console.log(BLUE);
console.log(ORANGE);

//3_10
let currentTemp;
console.log(currentTemp);

currentTemp = null;
console.log(currentTemp);

currentTemp = 26.5;
console.log(currentTemp);

currentTemp = undefined;
console.log(currentTemp);





































