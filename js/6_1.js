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


console.log("---------------");

//6_3_1
function f3_4(x3_4) {
	return `f3_4内の値:${x3_4}`
}

console.log(f3_4());
