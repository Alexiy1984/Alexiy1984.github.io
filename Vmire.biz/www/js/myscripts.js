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

var mainwidth = $('.main-col').width();
var wrapradius = ($('.btn-round > img').outerWidth()/2+10);
var btnroundheight = $('.btn-round').height();
var btnroundwidth = $('.btn-round').width();
var imgwidth = $('.btn-round > img').width();
var imgOwidth = $('.btn-round > img').outerWidth(true);
var imgOheight = $('.btn-round > img').outerHeight(true);

$('.btn-round').width(mainwidth/4);
$('.btn-round > img').width(btnroundwidth);
$('.btn-round > div').css({'display':'none'});
$('.btn-round').css({'border-radius': wrapradius });


$(window).resize(function () {
	wrapradius = ($('.btn-round > img').outerWidth()/2+10);
	$('.btn-round').css({'border-radius': wrapradius });

	wrapradius = ($('.btn-round > img').outerWidth()/2+10);
	btnroundheight = $('.btn-round').height();
	btnroundwidth = $('.btn-round').width();
	mainwidth = $('.main-col').width();
	imgwidth = $('.btn-round > img').width();
	
});

$('.btn-round').hover(

	function() {

		imgwidth = $('.btn-round > img').width();
		imgOheight = $('.btn-round > img').outerHeight(true);
		imgOwidth = $('.btn-round > img').outerWidth(true);
		$('> img',this).toggleClass('img-responsive');
		$('> div',this).css({'display':'block'});
		$(this).animate({'width':btnroundwidth},500);
		$('> img',this).width(imgwidth);
	},
	function() {
		
		imgwidth = $('.btn-round > img').outerWidth(true);
		$('> div',this).css({'display':'none'});
		$(this).animate({'width':imgOwidth,'height':imgOheight},500);
		$('> img',this).width(imgwidth);
	}

);

});
