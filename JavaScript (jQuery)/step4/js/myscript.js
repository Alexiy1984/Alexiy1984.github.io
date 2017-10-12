$(document).ready(function () {


	var enteredColor = prompt('Введите название цвета на английском', '');  /*возвращает то, что ввёл посетитель – строку или специальное значение null, если ввод отменён.*/
	if (enteredColor == 'red' ) {
		document.body.style.backgroundColor='red';
		$('h1').css({'color' : 'white'});
	} else  if (enteredColor == 'blue' ){
		 	document.body.style.backgroundColor='blue';
		 	$('h1').css({'color' : 'white'});
	} else {
			document.body.style.backgroundColor='black';
		 	$('h1').css({'color' : 'white'});
	}
	
});