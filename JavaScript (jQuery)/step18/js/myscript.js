$(document).ready( function () {

	$('#sum').prop("disabled",true);

	$('.numonly').blur(function () {
		var FildValue = $(this).val();
		if (typeof(FildValue)!=='number'){
			if (isNaN(FildValue)) {
				$(this).addClass('error-marker');
				alert('Пожалуйста введите число');
			}
			else {
				$(this).removeClass('error-marker');
			}
		}	
	} );

});