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

let arr2_7b = [5, 3, 2, 4, 1];
let arr2_7b_2 = arr2_7b.sort();

console.log(arr2_7b);
console.log(arr2_7b_2);

arr2_7b_2.reverse();
console.log(arr2_7b);
console.log(arr2_7b_2);

console.log("---------------");

let arr2_7c = [
	{name: "Suzanne"},
	{name: "Jim"},
	{name: "Trever"},
	{name: "Amanda"},

];

console.log(arr2_7c);

arr2_7c.sort((a, b) => a.name > b.name);
console.log(arr2_7c);

arr2_7c.sort((a, b) => a.name[1] < b.name[1]);
console.log(arr2_7c);

//8_3
console.log("--------8_3-------");

const o3_1 = {name: "ジェリー"};
const arr3_1 = [1, 5, "a", o3_1, true, 5, [1, 2], "9"];

console.log(arr3_1.indexOf(5));
console.log(arr3_1.lastIndexOf(5));
console.log(arr3_1.indexOf("a"));
console.log(arr3_1.lastIndexOf("a"));

console.log(arr3_1.indexOf({name: "ジェリー"}));
console.log(arr3_1.indexOf(o3_1));
console.log(arr3_1.indexOf([1, 2]));
console.log(arr3_1.indexOf("9"));
console.log(arr3_1.indexOf(9));

console.log(arr3_1.indexOf("a", 5));
console.log(arr3_1.indexOf(5, 5));
console.log(arr3_1.lastIndexOf(5, 4));
console.log(arr3_1.lastIndexOf(true, 3));

console.log("---------------");

const arr3_2 = [
	{id: 5, name: "太郎"},
	{id: 7, name: "花子"},
];

console.log(arr3_2.findIndex(o3_2 => o3_2.id === 5 ));
console.log(arr3_2.findIndex(o3_2 => o3_2.name === "花子" ));
console.log(arr3_2.findIndex(o3_2 => o3_2 === 3 ));
console.log(arr3_2.findIndex(o3_2 => o3_2.id === 17 ));
console.log(arr3_2.findIndex(o3_2 => o3_2.id === 7 ));

console.log("---------------");

const arr3_3 = [
	{id: 5, name: "太郎"},
	{id: 7, name: "花子"},
];

console.log(arr3_3.find(o => o.id === 5));
console.log(arr3_3.find(o => o.id === 2));
console.log(arr3_3.find(o => o.id === 7));

console.log("---------------");

const arr3_4 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr3_4.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));
console.log(arr3_4.find((x, i) => i > 5 && Number.isInteger(Math.sqrt(x))));

console.log("---------------");

class Person {
	constructor(name) {
		this.name = name;
		this.id = Person.nextId ++;
	}
}

Person.nextId = 0;
const 一郎 = new Person("一郎"),
	二郎 = new Person("二郎"),
	三郎 = new Person("三郎"),
	四郎 = new Person("四郎");
const arr3_5 = [一郎, 二郎, 三郎, 四郎];

//IDを使って直接比較
console.log(arr3_5.find(p => p.id === 三郎.id));

//thisを利用
console.log(arr3_5.find(function(p){return p.id === this.id},三郎));

//アロー関数（lexicallyに束縛される：undefind）
console.log(arr3_5.find(p => p.id === this.id, 三郎));

console.log("---------------");

const arr3_6 = [5, 7, 12, 15, 17];
console.log(arr3_6.some(x => x%2 === 0));
console.log(arr3_6.some(x => Number.isInteger(Math.sqrt(x))));//整数の二乗は存在しない

console.log("---------------");

const arr3_7 = [4, 6, 16, 36];
console.log(arr3_7.every(x => x%2 === 0));
console.log(arr3_7.every(x => Number.isInteger(Math.sqrt(x))));//6は二乗は存在しない

//8_4
console.log("--------8_4-------");

const cart = [
	{名前: "iPhone", 価格: 54800},
	{名前: "Android", 価格: 44800},
];

const names = cart.map(x => x.名前);
console.log(names);

const prices = cart.map(x => x.価格);
console.log(prices);

const discountPrices = prices.map(x => x*0.8);
console.log(discountPrices);

const lcNames = names.map(x => x.toLowerCase());
console.log(lcNames);

console.log("---------------");

const items4_2 = ["iPhone", "Android"];
const prices4_2 = [54800, 49800];
const cart4_2 = items4_2.map((x, i) => ({name: x, price: prices4_2[i]}));

console.log(cart4_2);

console.log("---------------");

const カードの束 = [];
for(let マーク of ['ハート', 'クローバー', 'ダイア', 'スペード']) {
	for(let 数字=1; 数字<=13; 数字++){
		カードの束.push({マーク, 数字});
	}
}

let 選択されたカード = カードの束.filter(カード => カード.数字 === 2);
console.log(選択されたカード);

選択されたカード = カードの束.filter(カード => カード.マーク === 'ダイア');
console.log(選択されたカード);

選択されたカード = カードの束.filter(カード => カード.数字 > 10);
console.log(選択されたカード);

選択されたカード = カードの束.filter(カード => カード.数字 > 10 && カード.マーク === 'ハート');
console.log(選択されたカード);

console.log("---------------");

function 記号表現に変換する(カード) {
	const マーク名_絵文字 = {
		'ハート': '♡',
		'クローバー': '♧',
		'ダイア': '♢',
		'スペード': '♤'
	};

	const 数字からAJQK = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'};
	for(let i=2; i<=10; i++) {
		数字からAJQK[i] = i;
	}
	return マーク名_絵文字[カード.マーク] + 数字からAJQK[カード.数字];		
}

let 選択されたカード_記号表現 = カードの束.filter(カード => カード.数字 === 2).map(記号表現に変換する);
console.log(選択されたカード_記号表現);

選択されたカード_記号表現 = カードの束.filter(カード => カード.マーク === 'ダイア').map(記号表現に変換する);
console.log(選択されたカード_記号表現);

選択されたカード_記号表現 = カードの束.filter(カード => カード.数字 > 10).map(記号表現に変換する);
console.log(選択されたカード_記号表現);

選択されたカード_記号表現 = カードの束.filter(カード => カード.数字 > 10 && カード.マーク === 'ハート').map(記号表現に変換する);
console.log(選択されたカード_記号表現);


//8_5
console.log("--------8_5-------");


const arr5_1 = [5, 7, 2, 4];
const sum5_1 = arr5_1.reduce((a, x) => a += x, 0);
console.log(sum5_1);

const sum5_1_2 = arr5_1.reduce((a, x) => a + x, 0);
console.log(sum5_1_2);

const sum5_3 = arr5_1.reduce((a, x) => a += x);
console.log(sum5_3);

const sum5_1_4 = arr5_1.reduce((a, x) => a + x);
console.log(sum5_1_4);

console.log("---------------");

const woards5_2 = [	"Beachball", "Rodeo", "Angel", "Aardvark", "Xlyophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = woards5_2.reduce((a, x) => {
	if(!a[x[0]]){
		a[x[0]] = [];
	}

	a[x[0]].push(x);
	//console.log(a[x[0]]);
	return a;}, {});

console.table(alphabetical);

console.log("---------------");

const 単語リスト = ["ビーチボール", "ルービックキューブ", "ブダペスト", "トロッコ", "コンゴ", "ゴースト", "トーラス", "スマート", "トンガ", "ガラパゴス", "ストリート", "トーマス", "ストレッチ", "チベット", "トキ", "キツツキ", "キリン"];
const 先頭文字で分類したもの = 単語リスト.reduce((a, x) => {
	if(!a[x[0]]){
		a[x[0]] = [];
	}

	a[x[0]].push(x);
	//console.log(a[x[0]]);
	return a;}, {});

console.table(先頭文字で分類したもの);

console.log("---------------");

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce((a, x) => {
	a.N++;
	let delta = x - a.mean;
	a.mean += delta/a.N;
	a.M2 = delta*(x - a.mean);
	return a;
}, {N: 0, mean: 0, M2: 0});

if(stats.N > 2) {
	stats.variance = stats.M2 / (stats.N -1);
	stats.stdev = Math.sqrt(stats.variance);
}
console.log(stats);

console.log("---------------");

const words5_5 = [	"Beachball", "Rodeo", "Angel", "Aardvark", "Xlyophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const longWords = words5_5.reduce((a, w) => w.length > 6 ?  a+" "+w : a , "").trim();
console.log(longWords);

const 単語リスト5_5 = ["ビーチボール", "ルービックキューブ", "ブダペスト", "トロッコ", "コンゴ", "ゴースト", "トーラス", "スマート", "トンガ", "ガラパゴス", "ストリート", "トーマス", "ストレッチ", "チベット", "トキ", "キツツキ", "キリン"];
const 長い単語 = 単語リスト5_5.reduce((a, w) => w.length >= 5 ?  a+" "+w : a , "").trim();
console.log(長い単語);

//8_6
console.log("--------8_6-------");

const arr6_1 = Array(10).map(function(x) {
	return 5;
});
console.log(arr6_1);

console.log("---------------");

const arr6_2 = [1, 2, 3, 4, 5];
delete arr6_2[2];
console.log(arr6_2);

const result6_2 = arr6_2.map(x => 0);
console.log(result6_2);
console.log(result6_2[2]);

//8_7
console.log("--------8_7-------");

const arr7_1 = [1, null, "hello", "world", true, undefined];
delete arr7_1[3];

let result7_1 = arr7_1.join();
console.log(result7_1);

result7_1 = arr7_1.join(' -- ');
console.log(result7_1);

console.log("---------------");

const お供 = ["キジ", "犬", "猿"];
const html = '<ul><li>' + お供.join('</li><li>') + '</li></ul>';
console.log(html);

















