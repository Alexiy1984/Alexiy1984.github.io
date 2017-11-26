$(document).ready( function () {
 $('#link-processing').click(function () {
 	$('#linkforpr a[href^="http://"], #linkforpr a[href^="https://"]').each(function () {
 		var href = $(this).attr('href');
 		href = href.replace('http://','');
 		href = href.replace('https://','');
 		$(this).append(' ('+ href +')');
 	});
 	$(this).attr("disabled", true)
 });
var myURL = location.protocol + '//' + location.hostname;
$('#linkfortar a[href^="http://"], #linkfortar a[href^="https://"]').not('[href^="'+myURL+'"]').attr('target' , '_blank');

});