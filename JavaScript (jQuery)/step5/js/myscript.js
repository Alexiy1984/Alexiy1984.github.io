$(document).ready(function () {

	$('.whilebutt').click(function () {
   
		var i = 0;

		while	(i < 10) {

			i ++;
			$('#row').append('i = ' + i + '<br>');


		}




	});
	
	
});