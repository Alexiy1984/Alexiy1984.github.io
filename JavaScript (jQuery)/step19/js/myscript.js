$(document).ready( function () {

	$('#hello').dialog({
		draggable : false,
		resizable : false,
		minWidth: 300,
		modal: true,
		/*show: 300,
		hide:300*/
		/*show: 'slideDown',
		hide: 'slideUp'*/
		show: 'explode',
		hide: 'scale'
	});


});