$(document).ready(function () {
	$(':header').hide(3000).slideDown(3000);
	$(':header').css({color: "red"});
	var ptext1 = $('.one').html(), ptext2 = $('.two').html();
	var ptext3 = +ptext1 + +ptext2, ptext4 = ptext1 + ptext2;

	$('.three').html(ptext3);
	$('.four').html(ptext4);

	var name = prompt('Как вас зовут?', '');
	var mass = [1 , 2 , 3, 4, 5, 6, 7];
	$('body').append('<p>Добро пожаловать, ' + name + ' 0 элемент массива равен ' + mass[0]) + '</p>';

	

});