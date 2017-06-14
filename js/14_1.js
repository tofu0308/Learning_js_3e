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