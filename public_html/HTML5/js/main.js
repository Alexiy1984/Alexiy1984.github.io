window.onload = function () {

	canvas = O('mycanvas');
	canvas2 = O('mycanvas2');
	canvas3 = O('mycanvas3');
	canvas4 = O('mycanvas4');
	canvas5 = O('mycanvas5');
	canvas6 = O('mycanvas6');
	canvas7 = O('mycanvas7');
	canvas8 = O('mycanvas8');
	canvas9 = O('mycanvas9');
	canvas10 = O('mycanvas10');
	canvas11 = O('mycanvas11');
	context = canvas.getContext('2d');
	context2 = canvas2.getContext('2d');
	context3 = canvas3.getContext('2d');
	context4 = canvas4.getContext('2d');
	context5 = canvas5.getContext('2d');
	context6 = canvas6.getContext('2d');
	context7 = canvas7.getContext('2d');
	context8 = canvas8.getContext('2d');
	context9 = canvas9.getContext('2d');
	context10 = canvas10.getContext('2d');
	context11 = canvas11.getContext('2d');
	gradient3 = context3.createLinearGradient(0, 80, 240, 240);
	gradient3.addColorStop(0, '#55F');
	gradient3.addColorStop(1, '#BBF');
	context3.fillStyle = gradient3;
	context.fillStyle = context2.fillStyle = context4.fillStyle =
	context5.fillStyle = context6.fillStyle = context7.fillStyle =
	context8.fillStyle = context9.fillStyle = '#55F';
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
	context4.font = 'bold 2.5em Times';
	context4.textBaseline = 'top';
	// context4.strokeText('Любой текст', 50, 50);
	context4.fillText('Любой текст', 25, 50);
	context4.textAlign ="center";
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
	context6.beginPath();
	context6.moveTo(20,60);
	context6.quadraticCurveTo(60,120,200,60);
	context6.quadraticCurveTo(80,160,220,120);
	context6.quadraticCurveTo(180,260,220,120);
	context6.fill();
	context6.closePath();
	context7.beginPath();
	context7.moveTo(120,20);
	context7.bezierCurveTo(300,300,-120,-120,80, 100);
	context7.stroke();
	context7.closePath();
	context8.drawImage(myimage, 20, 20, 120, 60);
	context8.drawImage(myimage, 40, 80, 150, 60);
	context8.drawImage(myimage, 120, 20, 200, 100);
	context9.shadowOffsetX = -15;
	context9.shadowOffsety = 25;
	context9.shadowBlur = 40;
	context9.shadowColor = 'rgba(0,0,0,0.5)';
	context9.fillStyle = '#DD2';
	context9.fillRect(90, 15, 120, 120);

	newimage = new Image();
	newimage.src = './images/img1.jpg';

	newimage.onload = function() {
		context10.drawImage(newimage,40,5);
		idata = context10.getImageData(40,5,newimage.width, newimage.height);
		console.log(context10.getImageData(40,5,newimage.width, newimage.height));
		for (y = 0 ; y < myimage.height ; ++y) {
      for (x = 0 ; x < myimage.width ; ++x) {
      	pos = y * myimage.width * 4 + x * 4
      	average = (idata.data[pos] + idata.data[pos + 1] + idata.data[pos + 2])/3;
      	idata.data[pos] = average - 50;
      	idata.data[pos + 1] = average;
      	idata.data[pos + 2] = average + 50;
      }
    }
		context11.putImageData(idata,40,5)
	}

	newimage2 = new Image();
	newimage2.src = './images/image.png';

	newimage2.onload = function()
      {
        types =
        [
          'source-over',     'source-in',        'source-out',
          'source-atop',     'destination-over', 'destination-in',
          'destination-out', 'destination-atop', 'lighter',
          'darker',          'copy',             'xor'
        ]

        for (j = 11 ; j < 23 ; ++j)
        {
          canvas               = O('mycanvas' + (j + 1));
          parent = $('#mycanvas' + (j + 1)).parent('.canvas-wrap');
          parent.find('h3').html(types[j-11]);
          context              = canvas.getContext('2d');
          S(canvas).background = 'lightblue';
          context.fillStyle    = 'red';

          context.arc(150, 80, 50, 0, Math.PI * 2, false);
          context.fill();
          context.globalCompositeOperation = types[j-11];
          context.drawImage(newimage2, 130, 45, 100, 100);
        }
      }
}
