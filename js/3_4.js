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

//3_15
const now = new Date();
console.log(now);

const halloween = new Date(2016, 9, 31);
console.log(halloween);

const halloweenParty = new Date(2016, 9, 31, 19, 0);
console.log(halloweenParty);
console.log(halloweenParty.getFullYear());
console.log(halloweenParty.getMonth());
console.log(halloweenParty.getDate());
console.log(halloweenParty.getDay());
console.log(halloweenParty.getHours());
console.log(halloweenParty.getMinutes());
console.log(halloweenParty.getSeconds());
console.log(halloweenParty.getMilliseconds());


//3_16
const email = /\b[a-z0-9]+@[a-z_-]+(?:\.[a-z]+)+b/;
const phone = /(:?\+1)?(:?\(\d\{3}\)\s?)|\d\{3}[\s-]?d{4}/;

//3_18

//str => num
const numStr = `33.3`;
const num = Number(numStr);
console.log(numStr);
console.log(num);

// parse
const v = parseInt("16 volts", 10);
console.log(v);

const v2 = parseInt("3a", 16);
console.log(v2);

const k = parseFloat("15.5 kph");
console.log(k);

// new date => unixtime
const date = new Date;
console.log(date);

const dateTs = date.valueOf();
console.log(dateTs);

// true | false => 1|0
const t = true;
const f = false;

const n = t ? 1:0;
console.log(n);

const m = f ? 1:0;
console.log(m);
