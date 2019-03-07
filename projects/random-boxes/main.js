

$(function() {
	$('.button').click(function(){
		var number = (Math.floor(Math.random() * 5) + 1);
	

	$('.box').removeClass('color');
	$('.box').eq(number).addClass('color');
	console.log("number")
	
	});
});

