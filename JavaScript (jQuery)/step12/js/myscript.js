$(document).ready( function () {
  var linkVar = {message:'Привет от ссылки'};
  var pVar = {message:'Привет от абзаца #'};
	function showMessage(evt) {
    var tag = $(this).get(0).tagName; /* .get(0).tagName - позволяет  получить имя тега элемента */
    if (tag == 'A')
      {
        alert(evt.data.message +' '+ $(this).html());
      }
    else {
        alert(evt.data.message +' '+ $(this).index());
    }
  }
  $ ('a').on('mouseover',linkVar,showMessage);
  $ ('p').on('click',pVar,showMessage);

 /* $(document).on('click keypress', function () {
    $('img').toggleClass('grayscale');
  });*/


  $('img').on({
      'mousemove' : function (evt) 
      { 
        var tooltiptxt =  $(this).attr('data-tooltip');
        $('.content').append('<div id=tooltip>'+tooltiptxt+'</div>');
        if ($(this).hasClass('grayscale')) {
          var tooltiptxt =  $(this).attr('data-tooltip');
          $('#tooltip').css({'top' : evt.pageY + 5, 'left' : evt.pageX + 5}).text('Дожмакался я теперь серая');
        } 
        else {
          $('#tooltip').css({'top' : evt.pageY + 5, 'left' : evt.pageX + 5}).text(tooltiptxt);
        } 
        $('#tooltip').css({'top' : evt.pageY + 5, 'left' : evt.pageX + 5}).show();
      },
      'mouseout' : function (evt) 
      {
        if ($(this).hasClass('grayscale')) {
          var tooltiptxt =  $(this).attr('data-tooltip');
          $('#tooltip').css({'top' : evt.pageY + 5, 'left' : evt.pageX + 5}).text('Дожмакался я теперь серая');
        } 
        else {
          $('#tooltip').css({'top' : evt.pageY + 5, 'left' : evt.pageX + 5}).text(tooltiptxt);
        } 
        $('#tooltip').css({'top' : 0, 'left' : 0}).hide();
      },
      'click' : function (evt) 
      {
        
        if ($(this).hasClass('grayscale')) {
          var tooltiptxt =  $(this).attr('data-tooltip');
          $('#tooltip').css({'top' : evt.pageY + 5, 'left' : evt.pageX + 5}).text('Дожмакался я теперь серая');
        } 
        else {
          $('#tooltip').css({'top' : evt.pageY + 5, 'left' : evt.pageX + 5}).text(tooltiptxt);
        } 
        $(this).toggleClass('grayscale'); 
      }  
  });

  $('#addd').on('click', function() {
    var textli = $('#textsp').val();
    if ($('ul li').hasClass('li-selected')) {
      $('ul .li-selected').before('<li>'+ textli+'</li>');
    }
    else {
      $('ul').append('<li>'+ textli+'</li>');
    }
  });

  $('ul').on('dblclick', 'li', function() {
  $(this).toggleClass('line-through');
  $(this).removeClass('li-selected');
  }); // Делегирование - указывается родительский элемент существующий на странице для динамически добавляемого контента

  $('ul').on('click', 'li', function() {
  if ($(this).hasClass('li-selected'))
    {
      $(this).removeClass('li-selected');
      $('#addd').val('Добавить новое');
    }
    else {
      $('ul .li-selected').removeClass('li-selected');
      $(this).toggleClass('li-selected');
      $('#addd').val('Добавить перед выбранным');
    }
  }); 

  $('#deld').on('click', function() {
    $('ul .line-through').remove();
  });

});