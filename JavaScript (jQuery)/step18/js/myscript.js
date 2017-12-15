$(document).ready( function () {

	var percent = 1;
	var PriceInd;
	var QuantityInd;
	$('#sum').prop("disabled",true);
	/*$('#quantity').focus();*/
	$(':text:nth-of-type(1)').focus();
	$('#taxes').hide();


	$('.numonly').blur(function () {
		var FildValue = $(this).val();
		PriceInd = $('#price').val();
		QuantityInd = $('#quantity').val();
		if (typeof(FildValue)!=='number'){
			if (isNaN(FildValue)) {
				$(this).addClass('error-marker');
				alert('Пожалуйста введите число');
				$('#sum').val('');
			}
			else {
				$(this).removeClass('error-marker');
				if (typeof(PriceInd)!=='number' && typeof(QuantityInd)!=='number') {
					$('#sum').val(PriceInd * QuantityInd * percent).toFixed(2);
					
				}	else {$('#sum').val('');}
			}
		}	
	} );

	$('#FullName, #Email').focus(function () {
		var field = $(this);
		if (field.val()==field.prop('defaultValue')) {
			field.val('');
		}
	});

	$('#Country').change(function () {
		if ($(this).val()=='--Выберите страну--') {
			alert('Пожалуйста выберите страну из списка');
		}
		var dop = 'Дополнительный сбор';
		switch ($(this).val()) {
			case 'Россия':
				$('#taxes').hide();
				percent = 1;
				$('#sum').val(PriceInd * QuantityInd * percent).toFixed(2);
				break;
			case 'Украина':
				$('#taxes').text(dop + ' 15%');
				$('#taxes').show();
				percent = 1.15;
				$('#sum').val(PriceInd * QuantityInd * percent).toFixed(2);
				break;
			case 'Белоруссия':
				$('#taxes').text(dop + ' 10%');
				$('#taxes').show();
				percent = 1.10;
				$('#sum').val(PriceInd * QuantityInd * percent).toFixed(2);
				break;
			case 'Казахстан':
				$('#taxes').text(dop + ' 20%');
				$('#taxes').show();
				percent = 1.20;
				$('#sum').val(PriceInd * QuantityInd * percent).toFixed(2);
				break;
			case 'Армения':
				$('#taxes').text(dop + ' 20%');
				$('#taxes').show();
				percent = 1.20;
				$('#sum').val(PriceInd * QuantityInd * percent).toFixed(2);
				break;
			default:
				$('#taxes').show();
		}
	});

	$('.newform').submit(function (evt) {
		var ErrorList='';
		var ErrorCounter=0;
		if ($('#quantity').val()=='') {
			ErrorList = ErrorList +'Введите пожалуйста имя в поле ' + $('label[for="quantity"]').text() +'\n';
			ErrorCounter = ErrorCounter + 1;
			/*evt.preventDefault();*/	
		}
		if ($('#price').val()=='') {
			ErrorList = ErrorList +'Введите пожалуйста имя в поле ' + $('label[for="price"]').text() +'\n';
			ErrorCounter = ErrorCounter + 1;
			/*evt.preventDefault();*/	
		}
		if ($('#FullName').val()=='') {
			ErrorList = ErrorList +'Введите пожалуйста имя в поле ' + $('label[for="FullName"]').text() +'\n';
			ErrorCounter = ErrorCounter + 1;
			/*evt.preventDefault();*/	
		} else if ($('#FullName').val() == $('#FullName').prop('defaultValue')) {
			ErrorList = ErrorList +'Введите пожалуйста имя в поле ' + $('label[for="FullName"]').text() +'\n';
			ErrorCounter = ErrorCounter + 1;
		}
		if ($('#Email').val()=='') {
			ErrorList = ErrorList +'Введите пожалуйста имя в поле ' + $('label[for="Email"]').text();
			ErrorCounter = ErrorCounter + 1;
			/*evt.preventDefault();*/	
		} else if ($('#Email').val() == $('#Email').prop('defaultValue')) {
			ErrorList = ErrorList +'Введите пожалуйста имя в поле ' + $('label[for="Email"]').text();
			ErrorCounter = ErrorCounter + 1;
		}
		if (ErrorCounter > 0) {
			alert('Количество ошибок ' + ErrorCounter + '\n' + ErrorList);
			return false;
		}
	});


});