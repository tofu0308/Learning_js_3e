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











































