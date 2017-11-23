$(document).ready( function () {
  $('p').hide();

  var $target = $('p');
  var hold = 5000;

  $.each($target,function(i,t){
     var $this = $(t);
     setTimeout(function(){ $this.fadeIn(5000); },i*hold);
  });
  /*$.each('p').fadeIn(5000);*/

  $('p').click( function() {
    $(this).fadeOut(5000);
  });

  $('h1').click( function() {
    
    $(this).fadeTo(600,0.2);
    $(this).text('ПРОЗРАЧНЫЙ ЗАГОЛОВОК');
  });
 
	/*alert($('.inner').outerWidth());*/
	/*var posleft = $('.left:last').position(); */ /*узнаем позицию относительно родительского элемента при условии что его position == relative || absolute*/
	/*alert('left:' + posleft.left + ' top:' + posleft.top); */
  var step = 150;
  $('.left').on({
    'mouseover' : function () {
    	
    	if( isNaN($('#step').val()))
    	{

    	} else if ($('#step').val()>1000) {
    		$('#step').val('150');
    	} 
    	else { step = $('#step').val() }

    	var posleft = $('.left').position();
    	if (posleft.left < ($('.inner').width() - $('.left').outerWidth(true) - step))
    	{
    		var direction = {};
    		direction.left ='+='+step;
    	}	else if (posleft.left < ($('.inner').width() - 200))
    	{
    		var direction = {};
    		direction.left= $('.inner').width()-155;

    	} else {
    		var direction = {};
    		direction.left='5px';
    	}

    		$(this).stop().animate( direction, 600,'linear'); // Третье значение функции animate - easing (ускорение анимации) (linear-без ускорения(равномерное), swing - ускоренно в начале) 
    }
    
  });

  $('.infront').on({
  	'mouseover' : function () {
      $(this).css({'padding-right': '400px'});
      $('.behind').stop().animate({height :140},100); // ункция stop - останавливает действующую анимацию и запускает данную
  	  $('.behind').stop().animate({width : 360, left : 160},1000);
      $('.behind a').stop().delay(1000);
      $('.behind a').stop().fadeIn(500);
      $('.behind a').css({'z-index': 150});
  	},
  	'mouseout'  : function () {
      $('.behind a').stop().fadeOut(100);
      $('.behind').stop().delay(100);
  		$('.behind').stop().animate({width : '-=360', left : 5},500);
      $(this).css({'padding-right': ''});

  	}	
  
  });
  

});