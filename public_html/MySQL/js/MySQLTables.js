$(document).ready( function () {
	var i = 0;
	$('#addfield').click(function () {
		i += 1;
		$('#addfield').before('<input id="'+ i +'FieldName" type="text" name="'+ i +'FieldName"><span class="msg-error delfield" style="padding: 0.5rem" id="delfield-'
			+i+'">Удалить поле<span>');
	});
	$( "#AddFieldForm" ).on( "click", ".delfield", function() {
		var number = $(this).attr('id');
		number = number.substr(9,10);
		$('#'+number+'FieldName').remove();
  	$(this).remove();
	});
});