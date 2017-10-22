$(document).ready(function () {

	$('.swich-class-h2').click(function() {
		/*$(this).addClass('colored'); Добавить класс
		$(this).removeClass('colored'); Удалить класс*/
		$(this).toggleClass('colored-h2');
		$('#dellclass').toggleClass('colored-h2');
		$('#addclass').toggleClass('colored-h2');
		$('#changecss').toggleClass('colored-h2');
	});
	
	$('.swich-class-p').click(function() {
		$(this).toggleClass('colored-p'); /*Переключение класса*/

	});
	
	$('#dellclass').click(function() {
		
		if ($('#dellclass').attr("id")=="dellclass") {
			$(this).attr("id","addclass");
			$(this).attr("value","ДОБАВИТЬ ДОП. КЛАССЫ");
			$('.swich-class-p').removeClass('colored-p');
			$('.swich-class-h2').removeClass('colored-h2');
			$('#addclass').removeClass('colored-h2');
			$('#changecss').removeClass('colored-h2');
		} else {
				$(this).attr("id","dellclass");
				$(this).attr("value","УДАЛИТЬ ДОП. КЛАССЫ");
				$('.swich-class-p').addClass('colored-p');
				$('.swich-class-h2').addClass('colored-h2');
				$('#dellclass').addClass('colored-h2');
				$('#changecss').addClass('colored-h2');
			}
	});

	$('.input-1').click(function() {
			var colorbg = $('.input-1:checked').attr("value");/* выбораный импут (статус checked)*/
			$('.content').css({"background-color": colorbg});
	});

	$('.input-2').click(function() {
			var colort = $('.input-2:checked').attr("value");
			$('.content p').css({"color": colort});
	});
});