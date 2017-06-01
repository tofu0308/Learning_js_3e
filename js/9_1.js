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


console.log("---------------");

{
	const Car = (function(){
		const carProps =  new WeakMap();
		class Car {
			constructor(make, model){
		 		this.make = make;
		 		this.model = model;
		 		this._userGears = ['P', 'N', 'R', 'D'];
		 		this._userGear = this._userGears[0];
		 		carProps.set(this, {userGear: this._userGears[0]});
			}

			get userGear() {return carProps.get(this).userGear;}
			set userGear(value) {
				if(this._userGears.indexOf(value) < 0) {
					throw new Error(`ギア指定が正しくない: ${value}`)
				}
				carProps.get(this).userGear = value;
			}

			shift(gear) {this.userGear = gear;}

		}//class Car

		return Car;
	})();

	const car1 = new Car("Tesla", "Model S");
	const car2 = new Car("Mazda", "3i");
	console.log(car1);
	console.log(car2);

	car1.shift('D');
	car2.shift('R');
	console.log(car1.userGear);
	console.log(car2.userGear);

	car1.userGear = "N";
	console.log(car1.userGear);

	//car1.userGear = "X"; //error : Uncaught Error: ギア指定が正しくない: X
}

console.log("---------------");
//9_2_3

{
	class Es2015Car {
		constructor(make, model) {
			this.make = make;
			this.model = model;
			this._userGears = ['P', 'N', 'R', 'D'];
			this._userGear = this._userGears[0];
		}

		get userGear() { return this._userGear;}
		set userGear(value) {
			if(this._userGears.indexOf(value) < 0) {
				throw new Error(`ギアが正しくない：${value}`);
			}
			this._userGear = value;
		}
		shift(gear) {this.userGear = gear;}
	}

	function Es5Car(make, model) {
		this.make = make;
		this.model = model;
		this._userGears = ['P', 'N', 'R', 'D'];
		this._userGear = this._userGears[0];
	}

	console.log(typeof Es2015Car);
	console.log(typeof Es5Car);

}

console.log("---------------");
//9_2_4

{
	const Car = (function(){
		const carProps =  new WeakMap();
		class Car {
			constructor(make, model){
		 		this.make = make;
		 		this.model = model;
		 		this._userGears = ['P', 'N', 'R', 'D'];
		 		this._userGear = this._userGears[0];
		 		carProps.set(this, {userGear: this._userGears[0]});
			}

			get userGear() {return carProps.get(this).userGear;}
			set userGear(value) {
				if(this._userGears.indexOf(value) < 0) {
					throw new Error(`ギア指定が正しくない: ${value}`)
				}
				carProps.get(this).userGear = value;
			}

			shift(gear) {this.userGear = gear;}

		}//class Car

		return Car;	
	})();

	const car1 = new Car();
	const car2 = new Car();
	console.log(car1.shift === Car.prototype.shift);
	console.log(car2.shift === car2.shift);
	car1.shift("D");
	console.log(car1.userGear);

	//car2.shift('d'); //error
}

console.log("---------------");
//9_2_5

{
	class Car {
		static getNextVin() {
			return Car.nextVin++;
		}
		constructor(make, model) {
			this.make = make;
			this.model = model;
			this.vin = Car.getNextVin();
		}
		static areSimilar(car1, car2) {
			return car1.make === car2.make && car1.model === car2.model;
		}
		static areSame(car1, car2) {
			return car1.vin === car2.vin;
		}
	}
	Car.nextVin = 0;

	const car1 = new Car("Tesla", "Model S");
	const car2 = new Car("Mazda", "3i");
	const car3 = new Car("Mazda", "3i");

	console.log(car1.vin);
	console.log(car2.vin);
	console.log(car3.vin);

	console.log(Car.areSimilar(car1, car2));
	console.log(Car.areSimilar(car2, car3));
	console.log(Car.areSame(car2, car3));
	console.log(Car.areSame(car2, car2));
}

console.log("---------------");
//9_2_6

{
	class Vehicle { //乗り物
		constructor() {
			this.passengers = [];	//乗客
			console.log("Vehicleが生成された");
		}
		
		addPassenger(p) {
			//乗客を追加
			this.passengers.push(p);
		}
	}

	class Car extends Vehicle { //車はの乗り物のサブクラス
		constructor() {
			super(); //スーパークラスのコンストラクタを呼び出す
			console.log("Carが生成された");
		}
		deployAirbags() {
			//エアバッグを動作させる
			console.log(`ﾊﾟｰﾝ`);
		}
	}

	const v = new Vehicle();
	v.addPassenger("太郎");
	v.addPassenger("花子");
	console.log(v.passengers);

	const c =new Car();
	c.addPassenger("景子");
	c.addPassenger("ミドリ");
	console.log(c.passengers);
	//v.deployAirbags();//error
	c.deployAirbags();
}
