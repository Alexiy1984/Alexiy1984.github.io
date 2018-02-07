/*$(dociment).ready(function() {
	
})*/
$(function() {
	$('#first').focus();
	$('input').focus(function() {
		$(this).css({'background':'#9CA', 'border':'solid 1px green' });
	});
	$('input').blur(function() {
		$(this).css({'background':'#D99','border':'solid 1px red' });
	});
})