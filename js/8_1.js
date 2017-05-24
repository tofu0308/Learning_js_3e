//8_1
console.log("--------8_1-------");

const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 =[
	{name: "さる", type: "object", luckyNumbers: [5, 7, 13]},
	[
		{name: "キジ", type: "object"},
		{name: "鬼", type: "object"},
	],
	1,
	function() {
		return "配列の要素として関数を記憶";
	},
	"three",
];

//要素へのアクセス
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr3[1]);
console.log(arr4[1][0]);

//配列の長さ
console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

//配列の長さを大きく
arr1[4] = 5;
console.log(arr1);
console.log(arr1[3]);
console.log(arr1.length);

//配列の末尾より後ろの添え字を使用
console.log(arr2[10]);
console.log(arr2.length);

//Arrayコンストラクタ
const arr5 = new Array();
console.log(arr5);

const arr6 = new Array(1, 2, 3);
console.log(arr6);

const arr7 = new Array(2);
console.log(arr7);
console.log(arr7[1]);


const arr8 = new Array("2");
console.log(arr8);

//8_2
console.log("--------8_2-------");

//8_2_1
let arr2_1 = ["b", "c", "d"];
console.log(arr2_1.push("e"));
console.log(arr2_1);
console.log(arr2_1.pop());
console.log(arr2_1.unshift("a"));
console.log(arr2_1);
console.log(arr2_1.shift());
console.log(arr2_1);

console.log("---------------");

//8_2_2
let arr2_2 = [1, 2, 3];
let arr2_2_2 = arr2_2.concat(4, 5, 6);

console.log(arr2_2);
console.log(arr2_2_2);

arr2_2_2 = arr2_2.concat(4, 5, 6);
console.log(arr2_2_2);

arr2_2_2 = arr2_2.concat([4, 5], 6);
console.log(arr2_2_2);

arr2_2_2 = arr2_2.concat([4, 5], [6, 7]);
console.log(arr2_2_2);

arr2_2_2 = arr2_2.concat([4, [5, 6]]);
console.log(arr2_2_2);

console.log("---------------");

//8_2_3
let arr2_3 = [11, 12, 13, 14, 15];
let arr2_3_2 = arr2_3.slice(3);//[3]から後ろ
console.log(arr2_3_2);
console.log(arr2_3);

arr2_3_2 = arr2_3.slice(2, 4);//[2]~[4]の一つ前まで
console.log(arr2_3_2);

arr2_3_2 = arr2_3.slice(1, -2);//[1]~最後から二番めの一つ前まで
console.log(arr2_3_2);

arr2_3_2 = arr2_3.slice(-2, -1);//最後から２番めの一つ前~最後から１番目のひとつ前まで
console.log(arr2_3_2);


console.log("---------------");

//8_2_4
let arr2_4 = [1, 5, 7];
let arr2_4_2 = arr2_4.splice(1, 0, 2, 3, 4);//[1]~2, 3, 4 が追加される
console.log(arr2_4);
console.log(arr2_4_2);

arr2_4_2 = arr2_4.splice(5, 0, 6);
console.log(arr2_4);
console.log(arr2_4_2);

arr2_4_2 = arr2_4.splice(1, 2);
console.log(arr2_4);
console.log(arr2_4_2);

arr2_4_2 = arr2_4.splice(2, 1, "a", "b");
console.log(arr2_4);
console.log(arr2_4_2);

console.log("---------------");

//8_2_5

let arr2_5 = [11, 12, 13, 14];
let arr2_5_2 = arr2_5.copyWithin(1, 2);

console.log(arr2_5);
console.log(arr2_5_2);
console.log(arr2_5.copyWithin(2, 0, 2));
console.log(arr2_5.copyWithin(0, -3, -1));
console.log(arr2_5_2);


console.log("---------------");

//8_2_6

let arr2_6 = new Array(5).fill(1);
console.log(arr2_6);

let arr2_6_2 = arr2_6.fill("a");
console.log(arr2_6);
console.log(arr2_6_2);

console.log(arr2_6.fill("b", 1));
console.log(arr2_6.fill("c", 2, 4));
console.log(arr2_6.fill(5.5, -4));
console.log(arr2_6.fill(0, 3, -1));

console.log("---------------");

//8_2_7

let arr2_7 = [1, 2, 3, 4, 5];
let arr2_7_2 = arr2_7.reverse();

console.log(arr2_7);
console.log(arr2_7_2);

arr2_7.reverse();

console.log(arr2_7);
console.log(arr2_7_2);

console.log("---------------");
