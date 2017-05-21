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




