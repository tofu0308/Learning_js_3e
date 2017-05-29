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
