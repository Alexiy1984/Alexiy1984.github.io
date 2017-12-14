$(document).ready( function () {

	$('#sum').prop("disabled",true);

	$('.numonly').blur(function () {
		var FildValue = $(this).val();
		var PriceInd = $('#price').val();
		var QuantityInd = $('#quantity').val();
		if (typeof(FildValue)!=='number'){
			if (isNaN(FildValue)) {
				$(this).addClass('error-marker');
				alert('Пожалуйста введите число');
				$('#sum').val('');
			}
			else {
				$(this).removeClass('error-marker');
				if (typeof(PriceInd)!=='number' && typeof(QuantityInd)!=='number') {
					$('#sum').val(PriceInd * QuantityInd);
					
				}	else {$('#sum').val('');}
			}
		}	
	} );

	$('.newform').submit(function (evt) {
		if ($('#FullName').val()=='') {
			alert('Введите пожалуйста имя в поле ' + $('label[for="FullName"]').text());
			return false;
			/*evt.preventDefault();*/	
		}
		if ($('#Email').val()=='') {
			alert('Введите пожалуйста имя в поле ' + $('label[for="Email"]').text());
			return false;
			/*evt.preventDefault();*/	
		}
	});


});