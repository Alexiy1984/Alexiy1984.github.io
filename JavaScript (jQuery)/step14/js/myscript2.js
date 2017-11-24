$(document).ready( function () {
  $('aside img').each(function(i) {
  var imgFile = $(this).attr('src');
  var preloadImage = new Image();
  var imgExt = /(\.\w{3,4}$)/;
  preloadImage.src = imgFile.replace(imgExt,'_h$1');
    
  $(this).hover(
    function() {
      $(this).attr('src', preloadImage.src);
      $(this).addClass('img-bordered');
    },
    function () {
    var currentSource=$(this).attr('src');
      $(this).attr('src', imgFile);
      $(this).removeClass('img-bordered');
  }); // end hover
}); // end each

$('aside a').click(function(evt) {
  evt.preventDefault();
  var imgPath = $(this).attr('href');
  var oldImage  = $('section  img');
  var newImage = $('<img src="'+ imgPath +'">');
  newImage.hide();
  $('section').prepend(newImage); 
  newImage.fadeIn(1000);
  oldImage.fadeOut(1000,function(){
    $ (this).remove();
  });
});
$('aside a:first').click();  



});