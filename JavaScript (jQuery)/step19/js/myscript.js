$(document).ready( function () {

/*Диалоговое окно JQUeryUI*/

	$('#hello').dialog({
		autoOpen: false,
		/*draggable : false,*/
		resizable : false,
		minWidth: 300,
		/*modal: true,*/
		/*show: 300,
		hide:300*/
		/*show: 'slideDown',
		hide: 'slideUp'*/
		show: 'scale',
		hide: { effect: 'explode', delay: 350, duration: 1000, easing: 'easeInOutQuint' },
		/*position: 'right bottom'*/
		buttons: {
			'Закрыть' : function () {
				$(this).dialog('close');
			},
			'Раcширить' : function () {
				$(this).dialog({'width' : 600});
			}
		},
		position : {
			my: 'center top',
			at: 'center bottom',
			of: '.content'
		}

	});

/*Диалоговое окно JQUeryUI(end)*/

$('.content').on('click', '.openDialog', function () {
	$(this).toggleClass('openDialog');
	$(this).toggleClass('closeDialog');
	$(this).text('нажать для скрытия диалога');
	$('#hello').dialog('open');
});

$('.content').on('click', '.closeDialog', function () {
	$(this).toggleClass('closeDialog');
	$(this).toggleClass('openDialog');
	$(this).text('нажать для появления диалога');
	$('#hello').dialog('close');
});

$('#hello').dialog({ close:function(event,ui) {

	$('.closeDialog').toggleClass('openDialog');
	$('.closeDialog').text('нажать для появления диалога');
	$('.closeDialog').toggleClass('closeDialog');
}
});

/*Всплывающие подсказки*/

$('[title]').tooltip({
	show: 'scale',
	hide: 'scale',
	track: true ,
	tooltipClass: 'tooltip'
});

$('#inst').tooltip({
	content: '<img src="images/inst.png" width="400">'
});

$('#vkin').tooltip({
	content: $('#TooltipTemlate').html()
});

/*Всплывающие подсказки(end)*/

// Табы

$('.tabbedPanels').tabs({
	beforeActivate: function (evt) {
		location.hash=$(evt.currentTarget).attr('href');
	},
	/*show: 'fadeIn',
	hide: 'fadeOut',*/
	/*active: false,
	collapsible: true,*/
	/*event: 'mouseover',*/
	heightStyle: 'auto'
});
var hash = location.hash();
if (hash) {
	$('.tabbedPanels').tabs('load', hash);
}

// Табы (end)



});