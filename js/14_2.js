console.log("---------------");
//14_2_2

{
	//countdown(失敗)
	function countdown(){
		let i;
		console.log("カウントダウン(失敗)");

		for(i=5; i>=0; i--){
			setTimeout(function(){
				console.log(i===0 ? "Go!" : i);
			}, (5-i)*1000);
		}
	}
	countdown();
}

console.log("---");

{
	//countdown(成功)
	function countdown(){
		console.log("カウントダウン(成功)");
		for(let i=5; i>=0; i--){
			setTimeout(function(){
				console.log(i===0 ? "Go" : i);
			}, (5-i)*1000);
		}
	}
	countdown();
}