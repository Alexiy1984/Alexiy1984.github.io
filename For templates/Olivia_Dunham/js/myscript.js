$(document).ready( function () {

	$('#dialog-window').dialog({
		autoOpen: false,
		modal: true,
		dialogClass: 'dialog-big',
		closeText: 'x'

	});


 	$('.img-cont a').click(function (evt) {
 		evt.preventDefault();
 		var imagesrc = $('img',this).attr('src');
 		imagesrc = imagesrc.substr(0,9)+'_original.jpg';
 		$('#dialog-window img').attr('src', imagesrc);
 		$('#dialog-window').dialog('open');
 		
 	});


});