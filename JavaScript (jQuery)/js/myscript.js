$(document).ready(function () {

	$('nav').hover(function() {
		$('.content-block').slideDown(750);
		$(this).css({"border-radius" : "5px 5px 0 0"});
		$('.content-block').css({"border-radius" : "0 0 5px 5px"});
	});

	$('.container').mouseleave(function() {
		$('.content-block').slideUp(750);
		$('nav').css({"border-radius" : "5px"});
		$('.content-block').css({"border-radius" : "5px"});
	});

	$('.adding').click(function(){
			
	});
});