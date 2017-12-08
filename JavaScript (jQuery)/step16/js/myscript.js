$(document).ready( function () {

$('input[value="Создать новое окно"]').click(function () {
		var HTMLHeight = $(document).height();
		var HTMLWidth = $(document).width();
		/*alert('Высота окна = ' + HTMLHeight + '\n' + 'Ширина окна = ' + HTMLWidth);*/
		var RadioSelected = $('input[type="radio"]:checked').attr('id');
		/*alert(RadioSelected);*/
		var PosL = 0.1 , PosT  = 0.25;
		switch (RadioSelected) {
  		case 'radio-left':
    	PosL = 0;
    	break;
  		case 'radio-right':
    	PosL = 0.2;
    	break;
  		case 'radio-center':
    	PosL = 0.1; 
    	break;
  		default:
    	PosL = 0.1; 
		};

		var WinProps = 'height='+(HTMLHeight*75/100)+', width='+(HTMLWidth*80/100) 
	 	+',top='+(HTMLHeight*25/100)+ ',left='+(HTMLWidth*PosL);
	 	var newWin= open('http://www.google.com','WinN', WinProps);
	 	
} );


});