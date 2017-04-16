const dialog1 = "dialog1 \"escape\"";
const dialog2 = 'dialog2 \'escape\'';
const dialog3 = `dialog3 "escape"`;

const d1 = "\"\""
const d3 = `""`

console.log(dialog1);
console.log(dialog2);
console.log(dialog3);
console.log(d1 === d3);