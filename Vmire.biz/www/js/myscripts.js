$(document).ready(function() {

/*$('.btn-round').hover(
	function () {
		$('+ .hiddiv',this).width($(this).outerWidth(true));
		$(this).toggleClass('btn-round-top');
		$('+ .hiddiv',this).slideDown(500);
	},
	function () {
				
		$('+ .hiddiv',this).slideUp(500);	
		$(this).toggleClass('btn-round-top');
		/*$(this).toggleClass('btn-round-top');*/
 	/*}
);*/

/*$('.btn-round > img').toggleClass('img-responsive img-noresize');*/
$('.btn-round > img').css({'width':'100%'});
var wrapradius = ($('.btn-round > img').outerWidth()/2+10);

$('.btn-round').css({'width':'25%'});
$('.btn-round > div').css({'display':'none'});
$('.btn-round').css({'border-radius': wrapradius });


$(window).resize(function () {
	var wrapradius = ($('.btn-round > img').outerWidth()/2+10);
	$('.btn-round').css({'border-radius': wrapradius });
	
});

$('.btn-round').hover(

	function() {
	
		$('> div',this).css({'display':'block'});
		$(this).animate({'width':'80%'},300);
		$('> img',this).css({'width':'25%'});
	},

	function() {
		$('> div',this).css({'display':'none'});
		/*$('> img',this).css({'width':'100%'});*/
		$(this).animate({'width':'25%'},300);
		
	}

);

});
