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