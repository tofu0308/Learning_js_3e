//14_2
console.log("--------14_2-------");

{
	console.log("setTimeoutの前" + new Date());
	function f(){
		console.log("関数fの中" + new Date());
	}

	//10秒後にfを実行
	setTimeout(f, 10*1000);

	console.log("setTimeoutの後");
	console.log("こちらもsetTimeoutの後");
}

console.log("---");

{
	console.log("setTimeoutの前(無名関数)" + new Date());
	setTimeout(
		function(){
			console.log("setTimeoutに指定された無名関数の中" + new Date());
		},10*1000);

	console.log("setTimeoutの後(無名関数)");
	console.log("こちらもsetTimeoutの後(無名関数)");
}

console.log("---");

{
	console.log("setTimeoutの前(アロー関数)" + new Date());
	setTimeout(()=> console.log("setTimeoutに指定されたアロー関数の中" + new Date()), 10*1000);

	console.log("setTimeoutの後(アロー関数)");
	console.log("こちらもsetTimeoutの後(無名アロー関数)");

}

console.log("---------------");
//14_2_1

{
	const start = new Date();
	let i = 0;

	const intervalId = setInterval(function(){
		let now = new Date();
		if(now.getMinutes() !== start.getMinutes() || ++i > 10){
			return clearInterval(intervalId);
		}
		console.log(`14_2_1の処理 :${i} : ${now}`)
	},1*1000);
}
