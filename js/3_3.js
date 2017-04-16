//3_11 object
const obj = {};
obj.color = `黄色`;
obj["not an identifier"] = 3;

console.log(obj.color);
console.log(obj["not an identifier"]);
console.log(obj["color"]);
console.log(obj.size);

//　下記はエラー
//console.log(obj[color]);

const SIZE = Symbol();
obj[SIZE] = 8;
obj.SIZE = 12;

console.log(obj.SIZE);
console.log(obj[SIZE]);

console.log(obj);

const sam1 = {
	name: 'Sam',
	age : 4,
}

const sam2 = {name:'Sam', age:4,}

console.log(sam1);
console.log(sam2);
console.log(sam1.name === sam2.name);
console.log(sam1.age === sam2.age);
console.log(sam1 === sam2);

const sam3 = {
	name: 'Sam',
	classification: { //プロパティの値がオブジェクト
		kingdom: 'Animalia',
		phylum: 'Chordata',
		class: 'Mamalia',
		order: 'Carnivoria',
		family: 'Felidae',
		subfamily: 'Falinae',
		genus: 'Felis',
		species: 'F. catus',
	},
};

console.log(sam3);
console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);


const タマ = {
	名前: 'タマ',
	分類:{
		界: '動物界',
		門: '脊椎動物門',
		網: '哺乳網',
		目: 'ネコ目',
		科: 'ネコ科',
		亜科: 'ネコ亜科',
		属: 'ネコ属',
		種: 'ネコ',
	},
};

console.log(タマ);
console.log(タマ.分類.科);
console.log(タマ["分類"].科);
console.log(タマ.分類["科"]);
console.log(タマ["分類"]["科"]);

sam3.speak = function(){return "Meow!";};
タマ.鳴く = function(){ return "にゃー";};

console.log(sam3.speak);
console.log(タマ.鳴く);

delete sam3.classification;
delete sam3.speak;
console.log(sam3);

delete タマ.分類;
delete タマ.鳴く;
console.log(タマ);
