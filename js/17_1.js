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

//17_11
console.log("--------17_11-------");

{
	const input = 'Adress: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.';
	const match = input.match(/.*\d{5}/);
	console.log(match[0]);

	const equation = "(2 + 3.5) * 7";
	const match2 = equation.match(/\(\d \+ \d\.\d\) \* \d/);
	console.log(match2[0]);

	//17_11_1
	const beer99 = 
		"99 bottles of beer on the wall " + 
		" take 1 down ans pass it around --" + 
		"98 bottels of beer on the wall.";

	const match3 = beer99.match(/[\s\S]*/);
	console.log(match3[0] === beer99);
}

//17_12
console.log("--------17_12-------");

{
	const text = "Visit oreilly.com today!";
	const match = text.match(/[a-z0-9]+(?:\.com|\.org|\.edu)/ig);
	console.log(match);
}

{
	const html = 
		'<link rel="stylesheet" href="http://insure.com/stuff.css">\n' +
		'<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
		'<link rel="stylesheet" href="//anything.com/flexible.css">';

	const matches = html.match(/(?:https?:)?\/\/[a-z0-9][a-z0-9.-]+[a-z0-9]+/ig);
	console.log(matches);
}

//17_13
console.log("--------17_13-------");

{
	const input = 
		"Regex pros know the difference between\n" +
		"<i>greedy</i> and <i>lazy</i> matching.";

		const output = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
		console.log(output);

		const output2 = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
		console.log(output2);
}

//17_14
console.log("--------17_14-------");

{
	const html = 
		`<img alt='A "simple" example'>` +
		`<img alt="Don't abuse it!">`;
	const imageTags = html.match(/<img alt=(['"']).*?\1>/g);

	for(let i=0; imageTags && i<imageTags.length; i++){
		console.log(imageTags[i]);
	}
}

//17_15
console.log("--------17_15-------");

{
	let chapter2 = 
		"第2章　あああhogehoge\n" +
		"第1章ではいいいfugaえええ\n" +
		"hogefuga第12章ではいよいよaaa\n";

	chapter2 = chapter2.replace(/第(\d+)章/g, '$1章');
	console.log(chapter2);

	console.log(`-------`);

	let html = '<a class="hoge" href="/www.xxx.yyy" id="zzz">xxxのサイト</a>';
	html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
	console.log(html);
}

{
	let html1 = `<a class='abc' href="www.xx.yyy">サイトXX</a>`;
	let html2 = `<a class='abc' href='www.xx.yyy'>サイトXX</a>`;

	r = html1.replace(/<a .*?(href=(["']).*?\2).*?>/, '<a $1>');
	console.log(r);

	r = html2.replace(/<a .*?(href=(["']).*?\2).*?>/, '<a $1>');
	console.log(r);

}

console.log(`-------`);

{
	let html = `<a class='abc' id ='s' href="/www.xx.yyy">サイトxx</a>`;
	r = html.replace(/<a .*?(class=(["']).*\2) .*?(href=(["']).*?\4).*?>/, '<a $3 $1>');
	console.log(r);
}

console.log(`-------`);

{
	const input = `One two three`;
	let r = input.replace(/two/, '($`)');
	console.log(r);

	r = input.replace(/\w+/g, '($&)');
	console.log(r);

	r = input.replace(/two/, '($$)');
	console.log(r);
}

//17_16
console.log("--------17_16-------");

{

	const html = 
		`○○<a onclick="alert(!!!)" class="cl1" href="/foo" id="id1">XXX</a>△△`;
	console.log(sanitizedAtag(html));

	function sanitizedAtag(aTag) {
		const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
		//console.log(`parts[1]=${parts[1]}`);
		//console.log(`parts[1]=${parts[2]}`);

		const attributes = parts[1].split(/\s+/);
		return '<a ' +  attributes.filter(attr => /^(?:class|id|href)[\s=]/i.test(attr)).join(' ') + '>' + parts[2] + '</a>';
	}

	html.replace(/<a .*?>(.*?)<\/a>/ig, function(match, group1, offset, origin){
		console.log(`<a>タグが${offset+1}文字目から見つかった`);
		console.log(`リンク対象文字列は「${group1}」`);
		console.log(`元々の文字列は「${origin}」`);
		console.log(`マッチしたのは「${match}」`);
	});

	console.log(`-------`);

	const r = html.replace(/<a .*?>.*?<\/a>/ig, function(m){
		return sanitizedAtag(m);
	});
	console.log(r);

	console.log(`-------`);

	const r2 = html.replace(/<a .*?<\/a>/ig, sanitizedAtag);
	console.log(r2);
}

//17_17
console.log("--------17_17-------");

{
	const input = "It was the best of times, it was the worst of times";
	const beginning = input.match(/^\w+/);
	console.log(beginning);
	console.log(beginning[0]);

	const end = input.match(/\w+$/);
	console.log(end);
	console.log(end[0]);

	const everything = input.match(/^.*$/);
	console.log(everything);
	console.log(everything[0]);

	const nomatch1 = input.match(/^best/i);
	console.log(nomatch1);

	const nomatch2 = input.match(/worst$/i);
	console.log(nomatch2);

	console.log(`-------`);

	const input2 = "あの頃が最高だったな〜。まあ、あの頃は最悪でもあったな〜。";
	const beginning2 = input2.match(/^.*?[はが]/);
	console.log(beginning2);
	console.log(beginning2[0]);

	const end2 = input2.match(/[^。]+。$/);
	console.log(end2[0]);	
}

console.log(`-------`);

{
	const input = "One line\nTwo lines\nThree lines\nFour";
	const beginnings = input.match(/^\w+/mg);
	console.log(beginnings);

	const endings = input.match(/\w+$/mg);
	console.log(endings);

	const input2 = "あの頃が最高だったな〜。\nあの頃は最悪でもあったな〜。\nあいつは元気かな〜。"
	const beginning2 = input2.match(/^.*?[はが]/mg);
	console.log(beginning2);
}

//17_18
console.log("--------17_18-------");

{
	const inputs = [
		"john@doe.com",
		"john@doe.com is my email.",
		"my email is john@doe.com",
		"use john@doe.com, my email",
		"my email:john@doe.com",
	];

	const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
	const r = inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
	console.log(r);
}

//17_19
console.log("--------17_19-------");

{
	function validPassWord(p) {
		return /[A-Z]/.test(p) && /[0-9]/.test(p) && /[a-z]/.test(p) && !/[^a-zA-Z0-9]/.test(p);
	}

	console.log(validPassWord("aiueo"));
	console.log(validPassWord("3aiuEo"));
	console.log(validPassWord("traveLer2"));
	console.log(validPassWord("日本語3Ab"));
	console.log(validPassWord("Pocke3"));
	console.log(validPassWord("Pocké3"));	
}

console.log(`-------`);

{
	function validPassWord(p){
		return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])^[a-zA-Z0-9]+$/.test(p);
	}

	console.log(validPassWord("aiueo"));
	console.log(validPassWord("3aiuEo"));
	console.log(validPassWord("traveLer2"));
	console.log(validPassWord("日本語3Ab"));
	console.log(validPassWord("Pocke3"));
	console.log(validPassWord("Pocké3"));	
}

//17_20
console.log("--------17_20-------");

{
	const users = ["mary", "nick", "arthur", "sam", "yvette"];
	const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g');
	console.log(userRegex);

	const text = 
		"User @arthur started the backup and 15:15, " +
		"and @nick and @yvette restored it at 18:35.";

	console.log(text.match(userRegex));

	console.log(`-------`);

	const users2 = ["浦島太郎", "一寸法師", "桃太郎", "金太郎", "かぐや姫"];
	const userRegex2 = new RegExp(`(?:${users2.join('|')})`, 'g');
	console.log(userRegex2);

	const text2 = 
		"浦島太郎がバックアップを開始(15:15)\n" +
		"かぐや姫と金太郎がリストア(18:35)\n"

	console.log(text2.match(userRegex2));
}