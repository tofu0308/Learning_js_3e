//3_12
const s = `hello`;
const s2 = s.toUpperCase();
console.log(s2);

s.rating = 3;
console.log(s.rating);

//3_13
a1 = [1,2,3,4];
a2 = [1,`two`,3,null];
a3 = [
	"abc def",
	"あいう　えお",
	"カキク　ケコ　さしす",
	"あああああああ",
];

a4 = [
 {name: "Ruby", hardness: 9},
 {name: "Diamond", hardness: 10},
 {name: "Topaz", hardness: 8},
];

a5 = [
 {名前: "ルビー", 硬度: 9},
 {名前: "ダイヤ", 硬度: 10},
 {名前: "トパーズ", 硬度: 8},
];

a6 = [
	[1,3,5],
	[2,4,6]
];

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);

a7 = [1,2,3];
console.log(a7.length);
console.log(a7[0]);
console.log(a7[a7.length - 1]);

a8 = [
 {名前: "ルビー", 硬度: 9},
 {名前: "ダイヤ", 硬度: 10},
 {名前: "トパーズ", 硬度: 8},
];

console.log(a8[1].名前);
console.log(a8[2].硬度);


a9 = [1, 2, `c`, 4, 5];
a9[2] = 3;
console.log(a9);
console.log(a9.length);

a9[81.3] = "eigth-one point theee";
a9[-2] = `まいなす2`;

console.log(a9[81.3]);
console.log(a9[-2]);
console.log(a9);
console.log(a9.length);