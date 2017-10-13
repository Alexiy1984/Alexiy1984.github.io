$(document).ready(function () {

	var mass = ['дом', 'сад', 'лес', 'дар', 'ром','мор', 'гор', 'двор', 'упор', 'кор', 'дол', 'рот', 'год', 'сом', 'нос'];
	var mass2 = [];

	$('.whilebutt').click(function() {
   	var i = 0;
		
		while	(i < mass.length) {
			
			$('#row').append('<p class="text-center"> ' + (i + 1) + ' Элемент массива = ' + mass[i] + ' (while)</p>');
			i ++;	
		}

		$('#row').append('<p class="text-center"> Размер массива ' + i + ' элементов </p>');
	});
	
	$('.forbutt').click(function () {
   	
		for (var i = 0; i < mass .length; i++) {
			$('#row').append('<p class="text-center"> ' + (i + 1) + ' Элемент массива = ' + mass[i] + ' (for)</p>');
		}

		$('#row').append('<p class="text-center"> Размер массива ' + i + ' элементов </p>');
	});

	$('.dowbutt').click(function () {
   	
   	do  {

			var number = prompt('Введите размер нового массива (число меньше 15)')

		} while(isNaN(number) || number > 15);

		
		for (var i = 0; i < number; i++) {
			mass2[i] = mass[i];
			$('#row').append('<p class="text-center"> ' + (i + 1) + ' Элемент нового массива = ' + mass2[i] + ' </p>');
		}

		$('#row').append('<p class="text-center"> Размер нового массива ' + i + ' элементов </p>');

	});
	
});