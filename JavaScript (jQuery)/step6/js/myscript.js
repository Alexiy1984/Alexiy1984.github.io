$(document).ready(function () {


	function newfun() {

		var today = new Date();
		

		$('.content').append('<p class="text-center"> Сегодня ' + today.toDateString()+ ' </p>');
		$('.content').append('<p class="text-center"> Сегодня ' + today.toString() + ' </p>');
	}
	
	$('#short').click(function () {
		newfun();
	});  

});