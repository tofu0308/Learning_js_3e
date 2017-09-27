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

//15_6
console.log("--------15_6-------");

{
	const before = { d: new Date() };
	console.log(before.d);
	console.log(before.d instanceof Date);

	const json = JSON.stringify(before);
	console.log(json);

	const after = JSON.parse(json);
	console.log(after.d instanceof Date);
	console.log(typeof after.d);

	console.log(after.d);
	//json文字列からDあてオブジェクトに復元
	after.d = new Date(after.d);
	console.log(after.d instanceof Date);
	console.log(after.d);
}

	console.log(`-------`);

{
	const before = { d: new Date().valueOf() };
	console.log(before.d);
	console.log(typeof before.d);

	const json = JSON.stringify(before);
	console.log(json);

	const after = JSON.parse(json);
	console.log(after);
	console.log(typeof after.d);

	const d = new Date(after.d);
	console.log(d);
}

//15_7
console.log("--------15_7-------");

{
	const d = new Date(Date.UTC(1930, 4, 10, 10, 0));
	console.log(d.toLocaleDateString());
	console.log(d.toLocaleTimeString());
	console.log(d.toTimeString());
	console.log(d.toUTCString());
}

//15_8
console.log("--------15_8-------");

{
 const d = new Date(Date.UTC(1815, 9, 10));

 console.log(d.getFullYear());
 console.log(d.getMonth());　//月（0から始まる）
 console.log(d.getDate());　//日
 console.log(d.getDay()); //曜日
 console.log(d.getHours());
 console.log(d.getMinutes());
 console.log(d.getSeconds());
 console.log(d.getMilliseconds());
}

//15_9
console.log("--------15_9-------");
{
	const d1 = new Date(1996, 2, 1);
	const d2 = new Date(2012, 1, 2);
	console.log(d1 > d2);
	console.log(d1 < d2);
}

//15_10
console.log("--------15_10-------");

{
	const d1 = new Date(1996, 2, 1);
	const d2 = new Date(2012, 1, 2);

	const msDiff = d2 - d1;
	console.log(msDiff);

	const dayDiff = msDiff/(1000*60*60*24);
	console.log(dayDiff);
}

console.log(`-------`);

{
	const dates = [];

	const min = new Date(2017, 0, 1).valueOf();
	const delta = new Date(2020, 0, 1).valueOf() - min;

	//2017-2020年の間の日時をランダムに抽出して配列に格納
	for (let i=0; i<10; i++){
		dates.push(new Date(min + delta*Math.random()));
	}

	console.log("ランダム");
	printDates(dates);
	
	console.log("降順ソート");
	dates.sort((a,b) => b - a);
	printDates(dates);

	console.log("昇順ソート");
	dates.sort((a,b) => a - b);
	printDates(dates);

	function printDates(dates){
		for(let i=0; i<dates.length; i++){
			const d = dates[i];
			console.log(i + ". " + d.getFullYear() + "年" + (d.getMonth()+1) + "月" + d.getDate() + "日");
		}
	}
	
}
