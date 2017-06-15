//14_3
console.log("--------14_3-------");
//14_3_2
/*
{
	function countdown(seconds){
		return new Promise(
			function(onFulfilled, onRejected){
				for(let i=seconds; i>=0; i--){
					setTimeout(function(){
						if(i === 13){
							return onRejected(new Error("不吉な数字エラー"));
						}

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
	
	countdown(15).then(
		function(){
			console.log("カウントダウン成功");
		},
		function(err){
			console.log("カウントダウン失敗:" + err.message);

		}
	);

	const p = countdown(15);
	p.then(function(){
		console.log("カウントダウン成功(p)");
	});

	p.catch(function(err){
		console.log("カウントダウン失敗(p):" + err.message);
	});
}
*/
console.log("---------------");

{
	function countdown(seconds){
		return new Promise(
			function(onFulfilled, onRejected){
				const timeoutIds = [];
				for(let i = seconds; i>=0; i--){
					timeoutIds.push(setTimeout(
						function(){
							if(i===13){
								timeoutIds.forEach(clearTimeout);
								onRejected(new Error(`不吉な数字${i}エラー`));
							}else if(i>0){
								console.log(`${i}...`);
							}else{
								console.log("GO!");
								onFulfilled();
							}
						},(seconds-i)*1000));
				}
			}
		);
	}

	countdown(15).then(
		function(){
			console.log("カウントダウン成功(13error)")
		},
		function(err){
			console.log("カウントダウンエラー(13error)：" + err.message);
		}

	);

}