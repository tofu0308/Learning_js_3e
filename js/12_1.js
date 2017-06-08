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

console.log("---------------");
//12_1_3

{
	class FibonacciSequence {
		[Symbol.iterator](){
			let a = 0, b = 1;
			return {
				next(){
					let rval = {value: b, done: false};
					b += a;
					a = rval.value;
					return rval;
				}
			}
		}
	}

	const fib = new FibonacciSequence();
	let i = 0;
	for(let n of fib){
		console.log(`${i+1}: ${n}`);
		if(++i > 99) {
			break;
		}
	}
}

//12_2
console.log("--------12_2-------");

{
	function* rainbow(){
		yield '赤';
		yield '青';
		yield '黄';
		yield '緑';
		yield '青';
		yield '水色';
		yield '紫';
	}	

	const it = rainbow();
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());

	for(let color of rainbow()){
		console.log(color);
	}
}

console.log("---------------");
//12_2_1

{
	function* interrogate(){
		const name = yield "お名前は?";
		const color = yield "好きな色は?"
		return `${name}さんの好きな色は${color}だそうです。`;
	}

	const it = interrogate();
	
	//最初の一回は値を渡さない（渡しても無視されるため）
	console.log(it.next());

	console.log(it.next('楓'));
	console.log(it.next('緑'));
	console.log(it.next());

}

console.log("---------------");
//12_2_2

{
	function* abc(){
		yield 'a';
		yield 'b';
		return 'c';
	}	

	const it = abc();
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	
	console.log("---");

	for(let l of abc()){
		console.log(l);
	}
}
