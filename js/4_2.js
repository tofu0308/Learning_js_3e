//4_2
//4_2_2
if(new Date().getDay() === 3){
	 const today = "水曜日";
	 console.log(today);
}else if(new Date().getDay() === 4){
	const today = "木曜日";
	console.log(today);
}else{
	 const today = "水曜でも木曜はない";
	 console.log(today);
}


//4_2_8
for(let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp)
	console.log(j);

let s = '3';
for(; s.length < 10; s = ' ' + s);
console.log(s);


