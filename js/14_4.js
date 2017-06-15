//14_3
console.log("--------14_3-------");
//14_3_2
{
	function countdown(seconds){
		return new Promise(
			function(onFulfilled, onRejected){
				for(let i=seconds; i>=0; i--){
					setTimeout(function(){
						if(i>0){
							console.log(i + '...');
						}else{
							onFulfilled(console.log("Go!"));
						}
					}, (seconds- i)*1000);
				}
			}
		);
	}
	
	countdown(5).then(
		function(){
			console.log("カウントダウン成功");
		},
		function(err){
			console.log("カウントダウン失敗" + err.message);

		}
	);

	const p = countdown(5);
	p.then(function(){
		console.log("カウントダウン成功(p)");
	});

	p.catch(function(err){
		console.log("カウントダウン失敗(p)" + err.message);
	});
}
