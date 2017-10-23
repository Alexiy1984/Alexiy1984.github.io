$(document).ready(function () {
	$('.content').append('<hr>');
	var linklisting = '';
	$('a[href^=http]') .each (function() {
		var extLink = $ (this).attr('href');
		var extTXT = $ (this).html();
		linklisting = linklisting + '<li><a href="' + extLink + '">'+ extTXT +'</a></li>';
	});

	
	$('.content').append('<ul>'+ linklisting + '</ul>');
});
