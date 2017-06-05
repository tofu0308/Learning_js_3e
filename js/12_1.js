//12_1
console.log("--------12_1-------");
//12_1_1
//12_1_1_1

{
	const book = [
		"あるところに初老の夫婦が住んでたとさ",
		"夫は山へ妻は川へ行ったとさ。",
		"妻が川で洗濯をしていると、",
		"上流から桃が流れてきたとさ。",
		"ドンブラコッコ、スッコッコ",
		"ドンブラコッコ、スッコッコ"
	];

	for (let aPage of book){
		console.log(aPage);
	}

	//book.next();//error
	/*
	現在下記のコードはエラーになる
	valuesメッソドにChrome、FireFoxなどが未対応のため。

	const it = book.values();
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	*/

}

