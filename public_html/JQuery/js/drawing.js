$(function() {
	let canvas = $('#pad')[0];
	let inner = $('.inner')[0];
	let container = $('.container')[0]; 
	let context = canvas.getContext("2d");
	let pendown = false;
	
	$('#pad').mousemove(function(event) {
		let xpos = event.pageX - (canvas.offsetLeft);
		let ypos = event.pageY - (canvas.offsetTop);
	
		if (pendown) context.lineTo(xpos, ypos)
		else context.moveTo(xpos, ypos);
	
		context.stroke();
	});

	$('#pad').mousedown(function() { pendown = true});
	$('#pad').mouseup(function() { pendown = false});
});