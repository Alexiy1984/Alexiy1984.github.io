$(document).ready(function () {

	$(document).click(function(evt){
		var xPos = evt.pageX; /*Расстояние (в пикселах) от указателя мыши до левого края окна браузера*/
		var yPos = evt.pageY; /*Расстояние (в пикселах) от указателя мыши до верхнего края окна браузера*/
		var xPosm = evt.screenX; /*Расстояние (в пикселах) от указателя мыши до левого края монитора*/
		var yPosm = evt.screenY; /*Расстояние (в пикселах) от стрелки мыши до верхнего краямонитора*/
		var isSHIFT = '';
		/*if (evt.shiftKey) { isSHIFT = 'Шифт нажат'; } else { isSHIFT = 'Шифт  не нажат'; };
		alert('X:' + xPos +' '+ xPosm + ' Y: ' + yPos +' '+ yPosm +' '+ isSHIFT);*/
		$('#XB').attr("value",evt.pageX);
		$('#YB').attr("value",evt.pageY);
		$('#XM').attr("value",evt.screenX);
		$('#YM').attr("value",evt.screenY);
		if (evt.shiftKey) {$('#IS_SHIFT').html('Шифт нажат')} else {$('#IS_SHIFT').html('Шифт  не нажат')};
		$('#targetteg').text('ТЕГ '+ evt.target);
		/*$('#clav').html(String.fromCharCode(evt.which)); КАКАЯ КАЛВИША НАЖАТА*/
	});

	$(document).mousemove(function(evt) {
		$('#XBM').attr("value",evt.pageX);
		if ($('#XB').attr("value") == $('#XBM').attr("value")) { $('#XB').css({"color":"#481","background-color":"#2F0"}) }
		else { $('#XB').css({"color":"","background-color":""}) };
		$('#YBM').attr("value",evt.pageY);
		if ($('#YB').attr("value") == $('#YBM').attr("value")) { $('#YB').css({"color":"#481","background-color":"#2F0"}) }
		else { $('#YB').css({"color":"","background-color":""}) };
		$('#XMM').attr("value",evt.screenX);
		$('#YMM').attr("value",evt.screenY);
		if (evt.shiftKey) {$('#IS_SHIFTM').html('Шифт нажат')} else {$('#IS_SHIFTM').html('Шифт  не нажат')};
		$('#targettegM').text('ТЕГ '+ evt.target);
	});
  $(document).keydown(function(evt) {
  	
  	switch(String.fromCharCode(evt.which)) {
  		case 'Q': $('.clavish[value=q]').toggleClass('clavish-pressed');
  		break;
  		case 'W': $('.clavish[value=w]').toggleClass('clavish-pressed');
  		break; 
  		case 'E': $('.clavish[value=e]').toggleClass('clavish-pressed');
  		break;
  		case 'R': $('.clavish[value=r]').toggleClass('clavish-pressed');
  		break;
  		case 'T': $('.clavish[value=t]').toggleClass('clavish-pressed');
  		break;
  		case 'Y': $('.clavish[value=y]').toggleClass('clavish-pressed');
  		break;
  		case 'U': $('.clavish[value=u]').toggleClass('clavish-pressed');
  		break;
  		case 'I': $('.clavish[value=i]').toggleClass('clavish-pressed');
  		break;
  		case 'O': $('.clavish[value=o]').toggleClass('clavish-pressed');
  		break;
  		case 'P': $('.clavish[value=p]').toggleClass('clavish-pressed');
  		break;
  		case 'A': $('.clavish[value=a]').toggleClass('clavish-pressed');
  		break; 
  		case 'S': $('.clavish[value=s]').toggleClass('clavish-pressed');
  		break;
  		case 'D': $('.clavish[value=d]').toggleClass('clavish-pressed');
  		break;
  		case 'F': $('.clavish[value=f]').toggleClass('clavish-pressed');
  		break;
  		case 'G': $('.clavish[value=g]').toggleClass('clavish-pressed');
  		break;
  		case 'H': $('.clavish[value=h]').toggleClass('clavish-pressed');
  		break;
  		case 'J': $('.clavish[value=j]').toggleClass('clavish-pressed');
  		break;
  		case 'K': $('.clavish[value=k]').toggleClass('clavish-pressed');
  		break;
  		case 'L': $('.clavish[value=l]').toggleClass('clavish-pressed');
  	}
  }); 

  $(document).keyup(function(evt) {
  	
  	switch(String.fromCharCode(evt.which)) {
  		case 'Q': $('.clavish[value=q]').toggleClass('clavish-pressed');
  		break;
  		case 'W': $('.clavish[value=w]').toggleClass('clavish-pressed');
  		break; 
  		case 'E': $('.clavish[value=e]').toggleClass('clavish-pressed');
  		break;
  		case 'R': $('.clavish[value=r]').toggleClass('clavish-pressed');
  		break;
  		case 'T': $('.clavish[value=t]').toggleClass('clavish-pressed');
  		break;
  		case 'Y': $('.clavish[value=y]').toggleClass('clavish-pressed');
  		break;
  		case 'U': $('.clavish[value=u]').toggleClass('clavish-pressed');
  		break;
  		case 'I': $('.clavish[value=i]').toggleClass('clavish-pressed');
  		break;
  		case 'O': $('.clavish[value=o]').toggleClass('clavish-pressed');
  		break;
  		case 'P': $('.clavish[value=p]').toggleClass('clavish-pressed');
  		break;
  		case 'A': $('.clavish[value=a]').toggleClass('clavish-pressed');
  		break; 
  		case 'S': $('.clavish[value=s]').toggleClass('clavish-pressed');
  		break;
  		case 'D': $('.clavish[value=d]').toggleClass('clavish-pressed');
  		break;
  		case 'F': $('.clavish[value=f]').toggleClass('clavish-pressed');
  		break;
  		case 'G': $('.clavish[value=g]').toggleClass('clavish-pressed');
  		break;
  		case 'H': $('.clavish[value=h]').toggleClass('clavish-pressed');
  		break;
  		case 'J': $('.clavish[value=j]').toggleClass('clavish-pressed');
  		break;
  		case 'K': $('.clavish[value=k]').toggleClass('clavish-pressed');
  		break;
  		case 'L': $('.clavish[value=l]').toggleClass('clavish-pressed');
  	}
  }); 
});
