//6_1
console.log("--------6_1-------");

function getGreeting(){
	return "Hello World";
}

const message = getGreeting();
console.log(message);

//6_2
console.log("--------6_2-------");

console.log(getGreeting());//関数を呼び出す
console.log(getGreeting);//関数を参照する

const f = getGreeting;
console.log(f());

const o = {};
o.f = getGreeting;
console.log(o.f());

console.log("---------------");

const arr = [1, 2, 3];
arr[1] = getGreeting;
console.log(arr);

const message2 = arr[1]();
console.log(message2);

//6_3
console.log("--------6_3-------");

function avg(a, b) {
	return (a + b)/2;
}

console.log(avg(5,10));

const a = 10, b = 20;
console.log(avg(a, b));

console.log("---------------");

function f3(x) {
	console.log(`関数f3の中（代入前）：x= ${x} `);
	x = 5;
	console.log(`関数f3の中（代入後）：x= ${x} `);
}

let x = 3;
console.log(`関数f3を呼び出す前：x= ${x} `);
f3(x);o
console.log(`関数f3を呼び出した後：x= ${x} `);

console.log("---------------");

function f3_2(o3_2){
	console.log(`関数f3_2の中、o3_2.messageに代入する前の値:${o3_2.message}`);
	o3_2.message = "messageの値を関数内で設定した。";
	console.log(`関数f3_2の中、o.messageに代入した後の値:${o3_2.message}`);

}

let o3_2 = {
	message : "messageの初期値"
}
console.log(`関数f3_2を呼び出す前：o3_2.message = ${o3_2.message}`);
f3_2(o3_2);
console.log(`関数f3_2を呼び出した後：o3_2.message = ${o3_2.message}`);


console.log("---------------");


function f3_3(o3_3){
	console.log(`f3_3の中（2つの代入の前）:o3_3.message = ${o3_3.message}`);
	o3_3.message = "関数f3_3内でセット(1)";
	console.log(`f3_3の中（2つの代入の間）:o3_3.message = ${o3_3.message}`);

	o3_3 = {
		message : "新しいオブジェクト"
	}

	console.log(`f3_3の中（2つの代入の後）:o3_3.message = ${o3_3.message}`);
}

let o3_3 = {
	message: '初期値'
}

console.log(`f3_3呼び出し前：o3_3.message = ${o3_3.message}`);
f3_3(o3_3);
console.log(`f3_3呼び出し後：o3_3.message = ${o3_3.message}`);


//6_3_1
console.log("---------------");

function f3_4(x3_4) {
	return `f3_4内の値:${x3_4}`
}

console.log(f3_4());


//6_3_2
console.log("---------------");

function getSentense({subject, verb, object}) {
	return `${subject} ${verb} ${object}`;
}

const o3_5 = {
	subject : "I",
	verb : "love",
	object : "JavaScript",
};

console.log(getSentense(o3_5));

console.log("---------------");

function getSentense3_6([subject, verb, object]) {
	return `${subject} ${verb} ${object}`;
}

const arr3_6 = ["主語", "動詞", "目的語"];
console.log(getSentense3_6(arr3_6));

console.log("---------------");

function addPrefix(prefix, ...words){
	const prefixedWords = [];
	for (let i=0; i<words.length; i++) {
		prefixedWords[i] = prefix + words[i];
	}
	return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex"));
console.log(addPrefix("非", "プログラマー", "デザイナー", "コーダー"));

//6_3_3
console.log("---------------");
//デフォルト引数

function f3_7(a, b = "default", c = 3){
	return `${a} - ${b} - ${c}`;
}

console.log(f3_7(5, 6, 7));
console.log(f3_7(5, 6));
console.log(f3_7(5));
console.log(f3_7());

//6_4
console.log("--------6_4-------");

const o4 = {
	name : 'Wallace',
	bark : function(){return 'Woof';},
}

const o4_p2 = {
	名前 : 'ポチ',
	吠える : function() {return 'わん';},
}

console.log(o4);
console.log(o4_p2);
console.log(o4.bark);
console.log(o4_p2.吠える);

//6_4_1
console.log("---------------");

const o4_1 = {
	name: "Wallace",
	bark() { return 'Woof';}
}

const o4_1_p2 = {
	名前: "ポチ",
	吠える() { return 'わん';}
}

console.log(o4_1);
console.log(o4_1_p2);
console.log(o4_1.bark);
console.log(o4_1_p2.吠える);

//6_5
console.log("--------6_5-------");

const o5_1 = {
	name :'Wallace',
	speak() {
		return `My name is ${this.name}`;
	}
}

const o5_1_p2 = {
	名前: "ポチ",
	話す() {
		return `私の名前は${this.名前}です。`;
	}
}

console.log(o5_1);
console.log(o5_1_p2);
console.log(o5_1.speak);
console.log(o5_1_p2.話す);


const speak = o5_1.speak;

console.log(speak === o5_1.speak);//true
console.log(speak());//undefind
console.log(o5_1.speak());


console.log("---------------");

const o5_2 = {
	name : 'Julie',
	greetBackwards: function(){
		const self = this;

		function getReverseName(){
			let nameBackWards = '';
			for(let i=self.name.length-1; i>=0; i--){
				nameBackWards += self.name[i];
			}
			return nameBackWards;
		}
		return `${getReverseName()} si naem ym , olleH`;
	},
};
console.log(o5_2.greetBackwards());


//6_6
console.log("--------6_6-------");

const g6_1 = function f6_1(stop){
	if(stop){
		console.log("停止");
		return;
	} else {
		console.log("未停止");
		f6_1(true);
	}
};

g6_1(false);
g6_1(true);

//6_7
console.log("--------6_7-------");


const o7_1 = {
	name : 'Julie',
	greetBackwards: function(){
		const getReverseName = () => {
			console.log(this);
			console.log(this.name);

			let nameBackWards = '';
			for(let i=this.name.length-1; i>=0; i--){
				nameBackWards += this.name[i];
			}
			return nameBackWards;
		}
		return `${getReverseName()} si naem ym , olleH`;
	},
};
console.log(o7_1.greetBackwards());

//6_8
console.log("--------6_8-------");	'use strict';

const bruce = {名前: "ブルース"};
const madeline = {名前: "マデライン"};

function greet(){
	return `私は${this.名前}です`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

console.log("---------------");

function update(birthYear, occupation) {
	this.生年 = birthYear;
	this.職業 = occupation;
}

console.log(bruce);
update.call(bruce, 1949, '歌手');
console.log(bruce);

console.log(madeline);
update.call(madeline, 1942, '女優');
console.log(madeline);

console.log("---------------");

update.apply(bruce, [1955, "俳優"]);
console.log(bruce);

update.apply(madeline, [1918, "ライター"]);
console.log(madeline);

console.log("---------------");







