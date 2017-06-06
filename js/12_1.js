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


//12_1_2
console.log("---------------");

{
	class Log {
		constructor() {
			this.messages = [];
		}
		add(message) {
			const now = Date.now();
			console.log(`ログ追加: ${message}（${now}）`);
			this.messages.push({ message, timestamp: now });
		}
		/*
		error
		[Symbol.iterator](){
			return this.messages.values();
		}
		*/

		[Symbol.iterator](){
			let i =0;
			const messages = this.messages;
			return {
				next: () => i >= messages.length ? {value: undefined, done: true} : {value: messages[i++], done: false}
			}
		}
	}

	
	const log = new Log();
	log.add("海の監視初日。勤務開始");

	setTimeout(function(){
		log.add("クジラを見た");
	},3*1000);

	setTimeout(function(){
		log.add("1艘の舟を見た");
	},7*1000);

	setTimeout(function(){
		log.add("監視終了");
	},9*1000);

	setTimeout(function(){
		console.log(`▶︎本日の業務報告：${new Date()}`);
		for(let entry of log) {
			const date = new Date(entry.timestamp);
			console.log(`${entry.message}(${date})`);
		}
	},10*1000)
}

console.log("---------------");


{
	class Log {
		constructor() {
			this.messages = [];
		}
		add(message) {
			const now = Date.now();
			console.log(`ログ追加: ${message}（${now}）`);
			this.messages.push({ message, timestamp: now });
		}

		[Symbol.iterator](){
			return this.messages[Symbol.iterator]();
		}
	}

	
	const log = new Log();
	log.add("海の監視初日。勤務開始(B)");

	setTimeout(function(){
		log.add("クジラを見た(B)");
	},3*1000);

	setTimeout(function(){
		log.add("1艘の舟を見た(B)");
	},7*1000);

	setTimeout(function(){
		log.add("監視終了(B)");
	},9*1000);

	setTimeout(function(){
		console.log(`▶︎本日の業務報告(B)：${new Date()}`);
		for(let entry of log) {
			const date = new Date(entry.timestamp);
			console.log(`${entry.message}(${date})`);
		}
	},10*1000)
}

console.log("---------------");

{
	const book = [
		"あるところに初老の夫婦が住んでたとさ",
		"夫は山へ妻は川へ行ったとさ。",
		"妻が川で洗濯をしていると、",
		"上流から桃が流れてきたとさ。",
		"ドンブラコッコ、スッコッコ",
		"ドンブラコッコ、スッコッコ",
	];

	const it = book[Symbol.iterator]();
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
}

