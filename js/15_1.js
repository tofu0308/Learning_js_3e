//15_1
console.log("--------15_1-------");
{
	const d = new Date();
	console.log(d);
	console.log(d.valueOf());
}


//15_2
console.log("--------15_2-------");
{
	let d = new Date();

	console.log(`現在時刻 => ${d}`);

	d = new Date(2017, 0);
	console.log(`指定年月を取得（月は０から始まる） => ${d}`);

	d = new Date(2017, 1);
	console.log(`指定年月を取得（月は０から始まる） => ${d}`);

	d = new Date(2017, 1, 14);
	console.log(`指定年月日を取得 => ${d}`);

	d = new Date(2017, 1, 14, 13);
	console.log(`指定年月日,時刻を取得 => ${d}`);

	d = new Date(2017, 1, 14, 13, 25);
	console.log(`指定年月日,時刻(分まで)を取得 => ${d}`);

	d = new Date(2017, 1, 14, 13, 25, 10);
	console.log(`指定年月日,時刻(分,秒まで)を取得 => ${d}`);

	d = new Date(2017, 1, 14, 13, 25, 45, 800);
	console.log(`指定年月日,時刻(分、秒、ミリ秒まで)を取得 => ${d}`);

	console.log(`-------`);

	d  = new Date(0);
	console.log(`UNIXエポックからの経過時刻（0ms経過）=> ${d}`);

	d  = new Date(1000);
	console.log(`UNIXエポックからの経過時刻（1s経過）=> ${d}`);

	d  = new Date(1463443200000);
	console.log(`UNIXエポックからの経過時刻 => ${d}`);

	d  = new Date(-365 * 24 * 60 * 60 * 1000);
	console.log(`UNIXエポックからの経過時刻(マイナス) => ${d}`);

	console.log(`-------`);

	d  = new Date('June 14, 1903');
	console.log(`文字列を指定 => ${d}`);

	d  = new Date('June 14, 1902 GMT-0000');
	console.log(`文字列を指定 => ${d}`);

	/*
	日本語表記は不可
	d  = new Date('2020年7月10日');
	console.log(`文字列を指定 => ${d}`);
	*/
}

//15_5
console.log("--------15_5-------");
{
	const d = new Date(Date.UTC(2017, 1, 14));
	console.log(d);
}

