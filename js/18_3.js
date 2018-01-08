//18_10
console.log("--------18_10-------");
{
	function refreshSereverInfo(){
		const req = new XMLHttpRequest();
		req.addEventListener('load', function(){
			//console.log(this.responseText);

			const data = JSON.parse(this.responseText);

			const serverInfo = document.querySelector('.serverInfo');

			Object.keys(data).forEach(p => {
				const replacements =serverInfo.querySelectorAll(`[data-replace="${p}"]`);

				for(let r of replacements){
					//console.log(data[p]);
					r.textContent = data[p];
				}
			});
		});

		req.open('GET', 'http://localhost:7070', true);
		req.send();
	}
	//refreshSereverInfo();
	setInterval(refreshSereverInfo, 1000);
}