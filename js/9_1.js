//9_1
console.log("--------9_1-------");

//9_1_1
const SYM1_1 = Symbol();
const o1_1 =  {a: 1, b: 2, c: 3, [SYM1_1]: 4};

for(let prop in o1_1){
	if(!o1_1.hasOwnProperty(prop)) continue;
	console.log(`${prop}:${o1_1[prop]}`);
}

console.log("---------------");

const o1_1_2 = {a: 1, b:2, c:3, SYM1_1: 4};
console.log(o1_1_2.SYM1_1);
console.log(o1_1_2["SYM1_1"]);
console.log(o1_1_2[SYM1_1]);

console.log("---------------");

const o1_1_3 = {a:1, b:2, c:3};
o1_1_3[SYM1_1] = 4;
console.log(o1_1_3.SYM1_1);
console.log(o1_1_3["SYM1_1"]);
console.log(o1_1_3[SYM1_1]);

console.log("---------------");
//9_1_2

const SYM1_2 =Symbol();
const o1_2 = {a:1, b:2, c:3, [SYM1_2]: 4};
const propArray1_2 = Object.keys(o1_2);

console.log(propArray1_2);
console.log("---");
propArray1_2.forEach(prop => console.log(`${prop}: ${o1_2[prop]}`));