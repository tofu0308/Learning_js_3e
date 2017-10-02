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

}
