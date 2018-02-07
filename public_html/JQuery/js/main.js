/*$(dociment).ready(function() {
	
})*/
$(function() {
	$('#first').focus();
	$('input[type="text"]').focus(function() {
		$(this).css({'background':'#9CA', 'border':'solid 1px green' });
	});
	$('input[type="text"]').blur(function() {
		$(this).css({'background':'#D99','border':'solid 1px red' });
	});
	$('input[type="button"]').click(function() {
		$(this).slideUp();
	})
  $('input[type="button"]').dblclick(function() {
		$(this).hide();
	})
})