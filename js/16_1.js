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

console.log(`-------`);

//16_3_2
{
	console.log(Math.log(Math.E));
	console.log(Math.log(17.5));

	console.log(Math.log10(10));
	console.log(Math.log10(16.7));

	console.log(Math.log2(2));
	console.log(Math.log2(5));

	console.log(Math.log1p(Math.E - 1));
	console.log(Math.log1p(17.5));
}

console.log(`-------`);

//16_3_3
{
	console.log(Math.abs(-5.5));
	console.log(Math.abs(5.5));

	console.log(Math.sign(-10.5));
	console.log(Math.sign(2314.12));

	console.log(Math.ceil(2.2));
	console.log(Math.ceil(-3.8));

	console.log(Math.floor(2.8));
	console.log(Math.floor(-3.2));

	console.log(Math.trunc(7.7));
	console.log(Math.trunc(-5.8));

	console.log(Math.round(7.2));	
	console.log(Math.round(7.8));	
	console.log(Math.round(-7.7));	
	console.log(Math.round(-7.2));

	console.log(Math.min(1, 2, 3, 4, 2));
	console.log(Math.min(0.2, 2, 4));
	console.log(Math.min(0.2, 2, -4));

	console.log(Math.max(1, 2, 3, 4, 2));
	console.log(Math.max(0.2, 2, 4));
	console.log(Math.max(0.2, 2, -4));
}

console.log(`-------`);

//16_3_4
{
	console.log("random");
	console.log(Math.random());
	console.log(10 + (15 - 10) * Math.random());
	
	//[m, n)
	console.log(1  + Math.floor((100 - 1) * Math.random()));
	
	//[m, n]
	console.log(1  + Math.floor((100 - +1) * Math.random()));
}

//16_4
console.log("--------16_4-------");

{
	console.log(Math.sin(Math.PI/2));
	console.log(Math.sin(Math.PI/4));

	console.log(Math.cos(Math.PI));
	console.log(Math.cos(Math.PI/4));

	console.log(Math.tan(Math.PI/4));
	console.log(Math.tan(0));

	console.log(Math.asin(0));
	console.log(Math.asin(Math.SQRT1_2));

	console.log(Math.acos(0));
	console.log(Math.acos(Math.SQRT1_2));

	console.log(Math.atan(0));
	console.log(Math.atan(Math.SQRT1_2));

	console.log(Math.atan2(0, 1));
	console.log(Math.atan2(1, 1));

	console.log(`-------`);

	const deg2rad　= (d) => {
		return d/180*Math.PI;
	}

	const deg2deg　= (r) => {
		return r/Math.PI*180;
	}

	console.log(deg2rad(60));
	console.log(deg2deg(60));
}

//16_5
console.log("--------16_5-------");

{
	console.log(Math.sinh(0));
	console.log(Math.sinh(1));
	
	console.log(Math.cosh(0));
	console.log(Math.cosh(1));

	console.log(Math.tanh(0));
	console.log(Math.tanh(1));

	console.log(Math.asinh(0));
	console.log(Math.asinh(1));

	console.log(Math.acosh(0));
	console.log(Math.acosh(1));

	console.log(Math.atanh(0));
	console.log(Math.atanh(1));
}