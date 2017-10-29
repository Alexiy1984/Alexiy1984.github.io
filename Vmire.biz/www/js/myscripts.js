$(document).ready(function() {

$('.btn-round').hover(
	function () {
		$('+ .hiddiv',this).width($(this).outerWidth(true));
		$(this).toggleClass('btn-round-top');
		$('+ .hiddiv',this).slideDown(500);
	},
	function () {
				
		$('+ .hiddiv',this).slideUp(500);	
		$(this).toggleClass('btn-round-top');
		/*$(this).toggleClass('btn-round-top');*/
 	}
);
	
});
