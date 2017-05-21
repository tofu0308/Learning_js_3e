//7
console.log("--------7_0-------");

function  f(x){
	return x + 3;
}
console.log(f(5));
//console.log(x); //error

//7_2
console.log("--------7_2-------");

function f2_1(){
	console.log("f2_1");
}

function f2_2(){
	console.log("f2_2");
}

f2_2();
f2_1();
f2_2();

console.log("---------------");

const x2 = 3;
function f2_2_1(){
	console.log(x2);
	//console.log(y2); //error:y2 is not defined
}

f2_2_1();
const y2 =3;

//7_3
console.log("--------7_3-------");

let name = "桃太郎"; //global
let age = 25; //global

function greet(){
	console.log(`Hello, ${name}!`);
}

function getBirthYear(){
	//今年から年齢を引く
	return new Date().getFullYear() - age;
}

greet();
console.log(getBirthYear());

console.log("---------------");

let user = {
	name3_2: "桃太郎",
	age3_2: 25,
}

function greet3_2() {
	console.log(`こんにちは${user.name3_2}さん`);
}

function getBirthYear3_2() {
	return new Date().getFullYear() - user.age3_2;
}

greet3_2();
console.log(getBirthYear3_2());

console.log("---------------");

let user3_3 = {
	name3_3 : "桃太郎",
	age3_3 : 250	,
}	

function greet3_3(person) {
	console.log(`こんちわ、${person.name3_3}氏`);
}

function getBirthYear3_3(person) {
	return new Date().getFullYear() - person.age3_3;
}

greet3_3(user3_3);
console.log(getBirthYear3_3(user3_3));


//7_4
console.log("--------7_4-------");

console.log("ブロックの前");
{
	console.log("ブロック内");
	const x =300;
	console.log(x);
}
console.log("ブロックの後");
//console.log(`ブロックの外：${x}`);//error


//7_5
console.log("--------7_5-------");

{
	//block1
	const x5 = "ブロック1";
	console.log(x5);
}
console.log(typeof x5);//スコープ外のため、undefined

{
	//block2
	const x5 = 3;
	console.log(x5);
}
console.log(typeof x5);//スコープ外のため、undefined

console.log("---------------");

{
	//外block
	let x5_2 = "五の二";
	console.log(x5_2);

	{
		//内block
		let x5_2 = 52;
		console.log(x5_2);
	}

	console.log(x5_2);
}
console.log(typeof x5_2);

console.log("---------------");

{
	//外block
	let x = {color: "青"};
	let y = x;
	let z =3;

	{
		//内側Block
		let x =5;
		console.log(x);
		console.log(y.color);
		y.color = "赤";
	}

	console.log(x.color);
	console.log(y.color);
	console.log(z);
}


//7_6
console.log("--------7_6-------");

let globalFunc;

{
	let blockVar = 'a';
	globalFunc = function() {
		console.log(blockVar);
	}
}
globalFunc();

console.log("---------------");

let f6_2;

{
	let o6_2 = {note: "安全", note2: "大丈夫"};
	f = function() {
		console.log("無名関数の中:" + o6_2.note);
		return o6_2;
	}
}
let oRef = f();
oRef.note = "全く安全ではない";
console.log(oRef);


//7_7
console.log("--------7_7-------");

const message = (function() {
	const secret = "秘密です";
	return `秘密の長さは${secret.length}文字です`;
})();
console.log(message);

console.log("---------------");

const f7_2 = (function(){
 let count = 0;
 return function() {
 	return `この関数が呼ばれた回数：${++count}回`;
 } 
})();

 console.log(f7_2());
 console.log(f7_2());
 console.log(f7_2());

//7_8
console.log("--------7_8-------");

let var8_1;
let var8_1_2 = undefined;
console.log(var8_1);
console.log(var8_1_2);
//console.log(undef); //error

console.log("---------------");

/*
x8_2; //error
let x8_2 = 3;
*/

console.log("---------------");

console.log(x8_3);
var x8_3 = 83;
console.log(x8_3);

console.log("---------------");

var x8_4;
console.log(x8_4);
x8_4 = 84;
console.log(x8_4);

//7_9
console.log("--------7_9-------");

f9();
function f9() {
	console.log('関数f9');
}

console.log("---------------");

/*
f9_2();//error

let f9_2 = function() {
	console.log('関数f9_2');
}
*/

let f9_3 = function() {
	console.log('関数f9_3');
}

console.log(f9_3);
f9_3();