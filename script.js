$(function(){

	$('.card-nav-prev').click(function(){
		$('.card-next').removeClass('card-next');
		$('.card-4').removeClass('card-4').addClass('card-next');
		$('.card-3').removeClass('card-3').addClass('card-4');
		$('.card-2').removeClass('card-2').addClass('card-3');
		$('.card-1').removeClass('card-1').addClass('card-2');
		$('.card-prev').removeClass('card-prev').addClass('card-1');

		//prepare for next round
		var prev = $('.card-1').prev('.card');
		if(prev.length==0) prev = $('.card:last');
		prev.addClass('card-prev');
	});

	$('.card-nav-next').click(function(){
		$('.card-prev').removeClass('card-prev');
		$('.card-1').removeClass('card-1').addClass('card-prev');
		$('.card-2').removeClass('card-2').addClass('card-1');
		$('.card-3').removeClass('card-3').addClass('card-2');
		$('.card-4').removeClass('card-4').addClass('card-3');
		$('.card-next').removeClass('card-next').addClass('card-4');

		//prepare for next round
		var next = $('.card-4').next('.card');
		if(next.length==0) next = $('.card:first');
		next.addClass('card-next');
	});

})