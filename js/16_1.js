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
