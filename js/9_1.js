//9_1
console.log("--------9_1-------");

//9_1_1
const SYM1_1 = Symbol();
const o1_1 =  {a: 1, b: 2, c: 3, [SYM1_1]: 4};

for(let prop in o1_1){
	if(!o1_1.hasOwnProperty(prop)) continue;
	console.log(`${prop}:${o1_1[prop]}`);
}

console.log("---------------");

const o1_1_2 = {a: 1, b:2, c:3, SYM1_1: 4};
console.log(o1_1_2.SYM1_1);
console.log(o1_1_2["SYM1_1"]);
console.log(o1_1_2[SYM1_1]);

console.log("---------------");

const o1_1_3 = {a:1, b:2, c:3};
o1_1_3[SYM1_1] = 4;
console.log(o1_1_3.SYM1_1);
console.log(o1_1_3["SYM1_1"]);
console.log(o1_1_3[SYM1_1]);

console.log("---------------");
//9_1_2

const SYM1_2 =Symbol();
const o1_2 = {a:1, b:2, c:3, [SYM1_2]: 4};
const propArray1_2 = Object.keys(o1_2);

console.log(propArray1_2);
console.log("---");
propArray1_2.forEach(prop => console.log(`${prop}: ${o1_2[prop]}`));

console.log("---------------");

const o1_2_2 = {apple:1, xochitl:2, balloon:3, guitar:4, xylophone:5, };
Object.keys(o1_2_2).filter(prop => prop.match(/^x/)).forEach(prop => console.log(`${prop}: ${o1_2_2[prop]}`));

//9_2
console.log("--------9_2-------");

//9_2_1
class Car {
	constructor() {
	}
}

const car1 = new Car();
const car2 = new Car();

console.log(car1 instanceof Car)
console.log(car2 instanceof Car)
console.log(car1 instanceof Array);

console.log("---------------");
{
	class Car {
		constructor(make, model){
	 		this.make = make;
	 		this.model = model;
	 		this.userGears = ['P', 'N', 'R', 'D'];
	 		this.userGear = this.userGears[0];
		}
		shift(gear){
			if(this.userGears.indexOf(gear) < 0) {
				throw new Error('ギア指定が正しくない: ${gear}');
			}
			this.userGear = gear;
		}
	}

	const car1 = new Car("Tesla", "Model S");
	const car2 = new Car("Mazda", "3i");
	console.log(car1);
	console.log(car2);

	car1.shift('D');
	car2.shift('R');
	console.log(car1.userGear);
	console.log(car2.userGear);
}


console.log("---------------");
//9_2_2

{
	class Car {
		constructor(make, model){
	 		this.make = make;
	 		this.model = model;
	 		this._userGears = ['P', 'N', 'R', 'D'];
	 		this._userGear = this._userGears[0];
		}

		get userGear() {return this._userGear;}
		set userGear(value) {
			if(this._userGears.indexOf(value) < 0) {
				throw new Error(`ギア指定が正しくない: ${value}`)
			}
			this._userGear = value;
		}

		shift(gear) {this.userGear = gear;}

	}

	const car1 = new Car("Tesla", "Model S");
	const car2 = new Car("Mazda", "3i");
	console.log(car1);
	console.log(car2);

	car1.shift('D');
	car2.shift('R');
	console.log(car1.userGear);
	console.log(car2.userGear);

	//car1.userGear = "X"; //error : Uncaught Error: ギア指定が正しくない: X
}




