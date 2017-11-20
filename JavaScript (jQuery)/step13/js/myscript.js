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
 
  $('.left').on({
    'mouseover' : function () {
      $(this).animate(
      {
        left : '+=150px'
      },
        1500
      );
    }
    
  });
  

});