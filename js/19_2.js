//19_7
console.log("--------19_7-------");
$(function(){
	let TimerID = setInterval(refreshServerInfo, 1000);

	function refreshServerInfo(){
		const $serverInfo = $('.serverInfo');

		$.get('http://localhost:7070').then(
			function(data){
				Object.keys(data).forEach(p => {
					$(`[data-replace="${p}"]`).text(data[p]);

				});

			},
			function(jqXHR, textStatus, err){
				const $errorInfo = $('.error');
				console.log("error:" + err);

				$errorInfo.text("サーバーに接続できません");
				clearInterval(TimerID);
			}
		);
	}

});
