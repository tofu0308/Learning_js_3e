//19_4
console.log("--------19_4-------");
{
	$(function(){
		const $paras = $('p');

		console.log($paras.length);
		console.log(typeof $paras);
		console.log($paras instanceof $);
		console.log($paras instanceof jQuery);

	});
}