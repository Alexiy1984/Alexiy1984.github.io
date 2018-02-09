$(function() {
	function submitForm(className) {
		$(className).submit(function () {
			let ErrCounter=0;
			/*if ($('#fname').val() == '' || $('#lname').val() == '') {}*/ 
			if ($('#fname').val() == '') {
				$('#fname').attr('placeholder','Введите имя');
				ErrCounter += 1;
			}	
			if ($('#lname').val() == '') {
				$('#lname').attr('placeholder','Введите фамилию');
				ErrCounter += 1;
			}
			console.log(ErrCounter);
			if (ErrCounter > 0) return false;
		});
	};
	function listParentStyle(listStyle) {
		$('li').parent().css('font-weight', 'bold');
		$('li').parent('.list-style').css('list-style-type', listStyle);
	}
	function Parents() {
		$('li').parents('div').css('background', 'red');
	}
	function ParentsUntil() {
		$('li').parentsUntil('div').css('background', 'red');
	}
	/*Parents();
	ParentsUntil();*/
	listParentStyle('square');
	submitForm('.cool-form');
});