//17_1
console.log("--------17_1-------");

{
	const input = "As I was going to Saint Ives";
	console.log(input.startsWith("As"));
	console.log(input.endsWith("Ives"));

	//9文字目から始まるか。（文字数は0から数える）
	console.log(input.startsWith("going" , 9));

	//先頭から14文字の長さに制限したときにgoingで終わっているか
	console.log(input.endsWith("going", 14));


	console.log(input.includes("going"));

	//going は10文字目以降にあるか
	console.log(input.includes("going", 10));

	//何文字目から始まるか
	console.log(input.indexOf("going"));

	//10文字目以降に含まれるか（ない場合は−1を返す）
	console.log(input.indexOf("going", 10));
	console.log(input.indexOf("hoge"));

	console.log(`-------`);

	const input2 = "セント・アイヴスはイギリスにある町の名前です。";

	console.log(input2.startsWith("セント"));
	console.log(input2.endsWith("です。"));
	console.log(input2.startsWith("イギリス" , 9));
	console.log(input2.includes("アメリカ"));

	//町 は10文字目以降にあるか
	console.log(input2.includes("町", 10));

	//何文字目から始まるか
	console.log(input2.indexOf("町"));

	//10文字目以降に含まれるか（ない場合は−1を返す）
	console.log(input2.indexOf("町", 10));
	
	console.log(input2.indexOf("アメリカ"));

	console.log(`-------`);

	//大文字・小文字を区別せずにマッチング
	console.log(input.toLowerCase().startsWith("as"));

	//replace処理
	const output = input.replace("going", "walking");
	console.log(output);

	let output2 = input2.replace("イギリス", "英国");
	output2 = output2.replace("名前", "名称");

	console.log(output2);
}

//17_3
console.log("--------17_3-------");

{
	const input = "As I was going to Saint Ives";
	const re = /\w{3,}/ig;

	console.log(input.match(re));
	console.log(input.search(re));
	console.log(re.test(input));

	console.log(`-------`);

	let a = re.exec(input);
	console.log(a);
	console.log(a[0]);
	console.log(a.index);
	console.log(a.input);
	console.log(a[1]);

	console.log(re.exec(input));
	console.log(re.exec(input));
	console.log(re.exec(input));

	console.log(`-------`);

	console.log(input.match(/\w{3,}/ig));
	console.log(input.match(/\w{3,}/i));
	console.log(input.search(/\w{3,}/ig));
}

//17_4
console.log("--------17_4-------");

{
	const input = "As I was going to Saint Ives";	
	const output = input.replace(/\w{4,}/ig, "****");
	console.log(output);

	console.log(`-------`);

	const input2 = "セント・アイヴスはイギリスにある町の名前です。";
	const output2 = input2.replace(/[はをにで]/g, ' ');
	console.log(output2);

}

//17_6
console.log("--------17_6-------");
{
	const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' + '<script src="stuff.js"></script>';
	const matches = html.match(/area|a|link|script|source/ig);
	console.log(matches);
}

console.log(`-------`);

{
	const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' + '<script src="stuff.js"></script>';
	const matches = html.match(/<area|<a|<link|<script|<source/ig);
	console.log(matches);
}


//17_8
console.log("--------17_8-------");
{
	const beer99 = "99 bottles of beer on the wall " + " take 1 down ans pass it around --" + "98 bottels of beer on the wall.";
	const m1 = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
	console.log(m1);

	const m2 = beer99.match(/[0-9]/g);
	console.log(m2);

	const m3 = beer99.match(/[0-9a-z\-.]/ig);
	console.log(m3);

	const m4 = beer99.match(/[-0-9a-z.]/ig);
	const m5 = beer99.match(/[a-z.0-9-]/ig);

	const m3String = JSON.stringify(m3);
	const m4String = JSON.stringify(m4);
	const m5String = JSON.stringify(m5);

	console.log(m3String);
	console.log(m3String === m4String);
	console.log(m3String === m5String);

	const match = beer99.match(/[^ 0-9a-z]/g);
	console.log(match);
}

	console.log(`-------`);

{
	const beer99j = "99本のビンが、壁に並んでいます。" + "1本取って渡しました。" + "98本のビンが、壁に並んでいます。";
	const match2 = beer99j.match(/[^0-9ァ-ヴぁ-ん。、]+/g);

	console.log(match2);
}

//17_9
console.log("--------17_9-------");

{
	const text = '８月３０日ＭＡＺ昨年四月三十日。';
	let match = text.match(/[０-９]/);
	console.log(match);

	match = text.match(/[Ａ-Ｚ]/g)
	console.log(match);

	match = text.match(/[０１２３４５６７８９]/g)
	console.log(match);

	match = text.match(/[年月日]/g)
	console.log(match);
}

	console.log(`-------`);

{
	const tShirts =
		'Small:   9\n' +
		'Medium:  5\n' +
		'Large:   2\n';

	const numbers = tShirts.match(/:\s*[0-9]/g);
	console.log(numbers);
}

{
	const phoneNumber1 = "(0269)99-9876";
	const phoneNumber2 = "0269ー99ー9875";

	console.log(phoneNumber1.replace(/\D/g, ''));
	console.log(phoneNumber2.replace(/\D/g, ''));

	const field1 = '    X      ';
	const field2 = '　　\t      ';

	console.log(/\S/.test(field1));
	console.log(/\S/.test(field2));
}

//17_10
console.log("--------17_10-------");

{
	const beer99 = "99 bottles of beer on the wall " + " take 1 down ans pass it around --" + "98 bottels of beer on the wall.";
	const matches = beer99.match(/[0-9]+/g);
	console.log(matches);
}


