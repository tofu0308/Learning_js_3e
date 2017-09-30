//16_1
console.log("--------16_1-------");

//16_1_1
{
	const x = 19.51;

	//少数点以下の桁数を指定
	console.log(x.toFixed(3));
	console.log(x.toFixed(2));
	console.log(x.toFixed(1));
	console.log(x.toFixed(0));
}

console.log(`-------`);

//16_1_2
{
	const x =3800.5;

	console.log(x.toExponential(4));
	console.log(x.toExponential(3));
	console.log(x.toExponential(2));
	console.log(x.toExponential(1));
	console.log(x.toExponential(0));
}

console.log(`-------`);

//16_1_3
{
	let x = 1000;

	console.log(x.toPrecision(5));
	console.log(x.toPrecision(4));
	console.log(x.toPrecision(3));
	console.log(x.toPrecision(2));
	console.log(x.toPrecision(1));


	console.log(`---`);

	x = 15.335;

	console.log(x.toPrecision(6));
	console.log(x.toPrecision(5));
	console.log(x.toPrecision(4));
	console.log(x.toPrecision(3));
	console.log(x.toPrecision(2));
	console.log(x.toPrecision(1));
}

console.log(`-------`);

//16_1_4
{
	const x = 12;

	console.log(x.toString());
	console.log(x.toString(10));
	console.log(x.toString(16));
	console.log(x.toString(8));
	console.log(x.toString(2));
}

//16_2
console.log("--------16_2-------");

//定数
{
	console.log(Math.E);
	console.log(Math.PI);

	console.log(Math.LN2);
	console.log(Math.LN10);
	console.log(Math.LOG2E);
	console.log(Math.LOG10E);

	console.log(Math.SQRT1_2);
	console.log(Math.SQRT2);
}

//16_3
console.log("--------16_3-------");

//16_3_1
{
	console.log(Math.pow(2, 10));
	console.log(Math.pow(1.7, 2.3));

	console.log(Math.sqrt(16));
	console.log(Math.sqrt(15.5));

	console.log(Math.cbrt(27));
	console.log(Math.cbrt(22));

	console.log(Math.exp(1));
	console.log(Math.exp(5.5));

	console.log(Math.expm1(1));
	console.log(Math.expm1(5.5));

	console.log(Math.hypot(3, 4));
	console.log(Math.hypot(2, 3, 4));
}











