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

//19_5
console.log("--------19_5-------");
{
	$('p').text('全ての段落を置き換え')
	$('p').html('<span style="color:red;">段落置き換え、htmlメソッド版</span>');
	$('p').eq(2).html('<span style="color:blue;">ここだけ青</span>');

	$('p').last().remove();
	$('p').first().append('<sup>*</sup>');
	$('p').after('<hr />').before('<hr />');

	$('<sup>**</sup>').appendTo('p');
	$('<hr />').insertBefore('p');
	$('<hr />').insertAfter('p');

	$('p:odd').css('color' , 'green');

	$('hr').remove();
	$('p').after('<hr />').append('<sup>++++</sup>').filter(':odd').css('color', 'pink');
	$('p').after('<hr />').not('.highlight').css('margin-left', '72px');

}
