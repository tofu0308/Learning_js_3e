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