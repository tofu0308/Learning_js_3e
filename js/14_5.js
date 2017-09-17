//14_3_6
console.log("--------14_3_6-------");

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


	function launch(){
		return new Promise(function(onFulfilled, onRejected){
			if(Math.random() < 0.5) return;
			console.log("発射");
			setTimeout(function(){
				onFulfilled("周回軌道に乗った");
			}, 2*1000);

		});
	}

	countdown(3)
		.then(launch)
		.then(function(msg){
			console.log(msg);
		})
		.catch(function(err){
			console.error("トラブル発生:" +err );

		});
}
