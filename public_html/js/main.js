$(document).ready(function () {

	$('.right-col li a').hover(function () {
		var liahref = $(this).attr('href');
		liahref = 'h1[id="'+liahref.substr(1)+'"]';
		$(liahref).parent().addClass('choosenH1');
	}, function () {
		var liahref = $(this).attr('href');
		liahref = 'h1[id="'+liahref.substr(1)+'"]';
		$(liahref).parent().removeClass('choosenH1');
	}
	);

});