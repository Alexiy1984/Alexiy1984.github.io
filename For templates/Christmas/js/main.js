$(document).ready(function () {
	$('#menumove').click(function () {
		$('.menu').toggleClass('justify-swap');
		$('a',this).text($('a',this).text() == 'Переместить меню вверх' ? 'Распределить по высоте' : 'Переместить меню вверх');
	});
});