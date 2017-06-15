//14_3
console.log("--------14_3-------");
//14_3_1
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
	countdown(5);
}

