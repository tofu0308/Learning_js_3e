//3_11 object
const obj = {};
obj.color = `黄色`;
obj["not an identifier"] = 3;

console.log(obj.color);
console.log(obj["not an identifier"]);
console.log(obj["color"]);
console.log(obj.size);

//　下記はエラー
//console.log(obj[color]);

const SIZE = Symbol();
obj[SIZE] = 8;
obj.SIZE = 12;

console.log(obj.SIZE);
console.log(obj[SIZE]);

console.log(obj);