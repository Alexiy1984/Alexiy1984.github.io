$(document).ready(function () {
	var h2size;
	var h2bigsize;
	var p2size;
	var p2bigsize;
	function CalcOfVal () {
		h2size = $('.col-2 h2',this).css('font-size');
		h2bigsize = +h2size.replace('px','')+5;
		p2size = $('.col-2 p',this).css('font-size');
		p2bigsize = +p2size.replace('px','')+5;
	};
	CalcOfVal();
	$(window).resize(function() {
		CalcOfVal();	
	});
	$('.rows').hover(function () {
		$('.col-1 img',this).stop().animate({
			filter: 'none', 
			'box-shadow': '0 0 50px 2px rgba(255,255,255,0.25)'
		},'fast');
		$('.col-2 h2',this).stop().animate({
			'font-size': h2bigsize+'px'
		}, 400);
		$('.col-2 p',this).stop().animate({
			'font-size': p2bigsize+'px'
		}, 400);
	}, function () {
		$('.col-2 h2',this).stop().animate({
			'font-size': h2size
		}, 400);
		$('.col-2 p',this).stop().animate({
			'font-size': p2size
		}, 400);
	}

	);

});
