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