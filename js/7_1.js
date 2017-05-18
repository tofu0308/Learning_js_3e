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