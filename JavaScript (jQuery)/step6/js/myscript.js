$(document).ready(function () {


	function newfun(dateformat) {

		var today = new Date();
		
		if (dateformat=="short") {
		$('.content').append('<p class="text-center"> Сегодня ' + today.toDateString()+ ' </p>');
		} else {
			$('.content').append('<p class="text-center"> Сегодня ' + today.toString() + ' </p>');
		}
		
	}
	
	$('#baton').click(function () {
		/*newfun($('input').attr("value"));
		alert($('input').attr("value"));*/
		 var nameRadio = $('input');
  	for (var i = 0; i < nameRadio.length; i++) {
    if (nameRadio[i].type === 'radio' && nameRadio[i].checked) {
        rezultatRadio = nameRadio[i].value;
    }
   }

   newfun(rezultatRadio);
   }); 

});