$(document).ready( function () {

	$('.sm').smartmenus({

		showFunction: function($ul, complete) {
			$ul.slideDown(450, complete);
		},
		hideFunction: function($ul, complete) {
     $ul.slideUp(450, complete); 
    }

	});


});