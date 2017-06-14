console.log("---------------");
//14_2_3
//Nodeで実行

{
	const fs = require('fs');

	const fname = "hoge.js";//存在しないファイル名を指定
	fs.readFile(fname, function(err, data){
		if(err){
			return console.error("ファイル読み込み時のエラー："+ fname+"：" + err.message);
		}
		console.log("ファイル["+ fname +"]の内容を表示します。");
	});
}
