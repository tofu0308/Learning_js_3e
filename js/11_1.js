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
