//11_1
console.log("--------11_1-------");
{
	function validateEmail(email){
		return email.match(/@/) ? email : new Error(`無効なEmailアドレスです：${email}`);
	}

	//const email = "hoge@test.com";
	const email = "hogetest.com";

	const validatedEmail = validateEmail(email);
	if(validatedEmail instanceof Error){
		console.error(validatedEmail.message);
	}else {
		console.log(`正しい形式のEmailアドレス：${validatedEmail}`)
	}
}

//11_2
console.log("--------11_2-------");

{
	const email = null;
	//const email = "hoge@test.com";

	try {
		const validatedEmail = validateEmail(email);
		console.log(validatedEmail);
		if(validatedEmail instanceof Error){
			console.error(validatedEmail.message);
		}else {
			console.log(`正しい形式のEmailアドレス：${validatedEmail}`)
		}
	}catch(err){
		console.log(`無効なEmailアドレスです：${err.message}`);
	}
}

//11_4
console.log("--------11_4-------");


{
	function a(){
		console.log(`a:bを呼び出す前`);
		b();
		console.log(`a:終了`);
	}

	function b(){
		console.log(`b:cを呼び出す前`);
		c();
		console.log(`b:終了`);
	}

	function c(){
		console.log(`c:エラーをスローする`);
		throw new Error(`c error`);
		console.log(`:終了`);
	}

	function d(){
		console.log(`d:cを呼び出す前`);
		c();
		console.log(`d終了`);
	}

	try {
		a();
	}catch(err) {
		console.log(`---a開始前のerr.stack---`);
		console.log(err.stack);
		console.log(`---終わり---`);
	}

	try {
		d();
	}catch(err){
		console.log(`---d開始前のerr.stack---`);
		console.log(err.stack);
		console.log(`---終わり---`);		
	}
}

