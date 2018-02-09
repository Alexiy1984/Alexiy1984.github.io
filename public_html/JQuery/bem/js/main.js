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
		$('li').parent().css({'font-weight':'400', 'font-size': '0.75em'});
		$('li').parent('.list-style').css('list-style-type', listStyle);
	}
	function Parents() {
		$('li').parents('div').css('background', 'red');
	}
	function ParentsUntil() {
		$('li').parentsUntil('div').css('background', 'red');
	}

	$('.board').children('.board__cell_back').addClass('bg-black');

	
	function cellColorChange() {
		$('.board__cell_back').toggleClass('bg-black');
		$('.board__cell_white').toggleClass('bg-black');
	}

	$('.board__cell').mouseover(function() {
		$(this).attr('title','нажми меня');
	});
	$('.board__cell').click(function() {
		cellColorChange();
	});

	$('.listdiv__ul li').css('cursor', 'pointer');
	$('.listdiv__ul li').click(function() {
			findNext(this);
	})

	function findNext(elem) {
		$('.listdiv__ul li').css('color', 'black');
		$(elem).next().css('color', 'red');
	}
	
	/*Parents();
	ParentsUntil();*/
	listParentStyle('square');
	submitForm('.cool-form');
});
