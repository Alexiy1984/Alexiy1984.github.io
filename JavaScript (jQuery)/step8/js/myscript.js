$(document).ready(function () {

	$('#addtoend').click(function () { 

		$('.content').append($('#textar').val());
		
	});

	$('#addtobeg').click(function () { 

		$('.content').prepend($('#textar').val());
		
	});		
	
	$('#delete-p').click(function () { 

		$('.content p').remove();
		
	});

	$('#delete-li').click(function () { 

		$('.content li').remove();
		$('.content ul').remove();
		
	});		

	$('#before').click(function () { 

		$('.content').before($('#textar').val());
		
	});	

	$('#after').click(function () { 

		$('.content').after($('#textar').val());
		
	});	

	$('#list').click(function () { 
		var number = $('#numberof').val();
		var content = $('#textar').val();
		/*alert(content);*/

		content = content + '<ul>';
		for (var i = 1; i <= number; i++) {
			content = content + '<li> Элемент №' + i + '</li>';
		}
		content = content + '</ul>';
		$('#textar').text(content);
		
	});	

	$('#abz').click(function () { 

		var number = $('#numberof').val(); /*.val - содержимое элемента*/
		var content = $('#textar').val();

		for (var i = 1; i <= number; i++) {
			content = content + '<p>' + i + ' Абзац </p>';
		}
		$('#textar').text(content);
		
	});	

	$('#deltxt').click(function () { 

		$('#textar').text('');
	});	

});