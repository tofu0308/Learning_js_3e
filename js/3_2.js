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

const price = `900`;
const dollor = `価格は${price}です`

console.log(newLine);
console.log(bq);
console.log(dollor);