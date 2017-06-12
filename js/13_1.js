//13_1
console.log("--------13_1-------");

{
	const year = new Date().getFullYear();
	if(year % 4 !==0){
		console.log(`${year}年は閏年ではない`);
	}else if(year % 100 !==0){
		console.log(`${year}年は閏年である`);
	}else if(year % 400 !==0){
		console.log(`${year}年は閏年ではない`);
	}else {
		console.log(`${year}年は閏年である`);
	}
}

console.log("---------------");

{
	function printLeapYearStatus() {
		const year = new Date().getFullYear();
		if(year % 4 !==0){
			console.log(`${year}年は閏年ではない`);
		}else if(year % 100 !==0){
			console.log(`${year}年は閏年である`);
		}else if(year % 400 !==0){
			console.log(`${year}年は閏年ではない`);
		}else {
			console.log(`${year}年は閏年である`);
		}
	}

	printLeapYearStatus();
}

//13_2
console.log("--------13_2-------");

{
	function isCurrentYearLeapYear(){
		const year = new Date().getFullYear();
		if(year % 4 !==0){
			return false;
		}else if(year % 100 !==0){
			return true;
		}else if(year % 400 !==0){
			return false;
		}else {
			return true;
		}
	}

	console.log(isCurrentYearLeapYear());
}

//13_3
console.log("--------13_3-------");

{
	const colors = ['赤','橙','黄','緑','青','水色','紫'];
	let colorIndex = -1;

	function getNextRainbowColor(){
		 if(++colorIndex >= colors.length) {
		 	colorIndex = 0;
		 } 
		 return colors[colorIndex];
	}

	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());

}

console.log("---------------");

{
	function isLeapYear(year) {
		if (year % 4 !== 0){
			return false;
		}else if(year % 100 !== 0){
			return true;
		}else if(year % 400 !== 0){
			return false;
		}else{
			return true;
		}
	}

	//現在年が閏年の場合true
	console.log(isLeapYear(new Date().getFullYear()));
}

console.log("---------------");

{
	const getNextRainbowColor = (function(){
		const colors = ['赤','橙','黄','緑','青','水色','紫'];
		let colorIndex = -1;
		return function(){
			if(++ colorIndex >= colors.length){
				colorIndex = 0;
			}
			return colors[colorIndex];
		}
	})();

	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());
	console.log(getNextRainbowColor());

}

console.log("---------------");

{
	setInterval(function(){
		document.querySelector('.rainbow').style['background-color'] = getNextRainbowColor();

	},500);

	const getNextRainbowColor = (function(){
		const colors =['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
		let colorIndex = -1;
		return function(){
			if(++colorIndex >= colors.length){
				colorIndex = 0;
			}
			return colors[colorIndex];
		}
	})();
}

console.log("---");

{
	function getRainbowIterator() {
		const colors =['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
		let colorIndex = -1;
		return {
			next(){
				if(++colorIndex >= colors.length){
					colorIndex = 0;
				}
				//console.log("in iterator：" + colors[colorIndex]);
				return{value: colors[colorIndex], done:false}
			}
		};
	}

	const RainbowIterator = getRainbowIterator();
	setInterval(function(){
		document.querySelector('.rainbowIterator').style['background-color'] = RainbowIterator.next().value;
	},500);
}

//13_4
console.log("--------13_4-------");
//13_4_1

{
	const v = function(){};
	const a = [1, 2, 3];

	console.log(typeof(v));
	console.log(typeof(a));
	console.log(v instanceof Object);
}


//13_5
console.log("--------13_5-------");

{
	setTimeout(function(){
		console.log("hello");
	},1500);
}

console.log("---");

{
	//-1を１秒おきに表示
	var i;
	for(i=5; i>=0; i--){
		setTimeout(function(){
			console.log(i===0 ?  "go!" : i);
		}, (5 - i) * 1000);
	}
}

console.log("---");






























