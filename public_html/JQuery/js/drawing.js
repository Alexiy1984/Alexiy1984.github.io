$(function() {
	let canvas = $('#pad')[0];
	let context = canvas.getContext("2d");
	let pendown = false;
	
	$('#pad').mousemove(function(event) {
		let xpos = event.pageX - (canvas.offsetLeft);
		console.log(xpos+":"+canvas.offsetLeft);
		let ypos = event.pageY - (canvas.offsetTop);
		console.log(ypos);
	
		if (pendown) context.lineTo(xpos, ypos)
		else context.moveTo(xpos, ypos);
	
		context.stroke();
	});

	$('#pad').mousedown(function() { pendown = true});
	$('#pad').mouseup(function() { pendown = false});
});