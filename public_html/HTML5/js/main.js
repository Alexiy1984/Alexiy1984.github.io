window.onload = function () {

	canvas = O('mycanvas');
	canvas2 = O('mycanvas2');
	canvas3 = O('mycanvas3');
	canvas4 = O('mycanvas4');
	canvas5 = O('mycanvas5');
	context = canvas.getContext('2d');
	context2 = canvas2.getContext('2d');
	context3 = canvas3.getContext('2d');
	context4 = canvas4.getContext('2d');
	context5 = canvas5.getContext('2d');
	gradient3 = context3.createLinearGradient(0, 80, 240, 240);
	gradient3.addColorStop(0, '#55F');
	gradient3.addColorStop(1, '#BBF');
	context3.fillStyle = gradient3;
	context.fillStyle = context2.fillStyle = context4.fillStyle = context5.fillStyle= '#55F';
	S(canvas).boxShadow =  S(canvas2).boxShadow = S(canvas3).boxShadow ='0 0 5px 1px rgba(0,0,0,0.3)';
	

	context.beginPath();
	context.moveTo(0, 0);
	context.arc(150, 75, 60, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();

	S('myimage').boxShadow = '0 0 5px 1px rgba(0,0,0,0.3)';
	// O('myimage').src = canvas.toDataURL();
	O('myimage').src = canvas.toDataURL('image/png', 0.4);

	// context2.fillRect(90, 15, 120, 120);
	// context2.clearRect(90, 15, 120, 120);
	context2.strokeStyle = '#55F';
	context2.strokeRect(90, 15, 120, 120);
	context3.strokeStyle = 'black';
	context3.strokeRect(90, 15, 120, 120);
	context3.fillRect(90, 15, 120, 120);
	context4.font = 'bold 32px Times';
	context4.textBaseline = 'top';
	// context4.strokeText('Любой текст', 50, 50);
	context4.fillText('Любой текст', 50, 50);
	context5.lineWidth = 7;
	context5.lineCap = 'round';
	context5.lineJoin = 'bevel';
	context5.strokeStyle = '#55F';
	context5.beginPath();
	context5.moveTo(20,20);
	context5.lineTo(100,100);
	context5.lineTo(140,80);
	context5.lineTo(140,50);
	context5.lineTo(180,30);
	context5.lineTo(250,125);
	context5.stroke();
	context5.closePath();
} 
