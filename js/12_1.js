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

	/*
	同じくエラー

	const it = book.values();
	let current = it.next();
	while(!current.done) {
		console.log(current.value);
		current = it.next();
	}
	*/

	/*
	やはりエラー

	const it1 = book.values();
	const it2 = book.values();

	console.log(it1.next());
	console.log(it1.next());
	console.log(it2.next());
	console.log(it1.next());
	*/
}

