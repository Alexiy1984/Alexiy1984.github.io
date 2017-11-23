$(document).ready( function () {
 var i=1;
 var i2=1;
 var im=0;
 var ImgMass = [
  '<img class="img-rep" src="images/foto1.jpg" alt="Природа">',
  '<img class="img-rep" src="images/foto2.jpg" alt="Природа">',
  '<img class="img-rep" src="images/foto3.jpg" alt="Природа">',
  '<img class="img-rep" src="images/foto4.jpg" alt="Природа">'
  ]

 $('input[type="text"]').val('Фото № '+ i);
 $('.picinfo').text('Фото № '+ i2);
  $('.img-nores').click(function () {
    if (i>=4) {
      i = 1;
    } else { ++i;}
    $(this).attr('src','images/foto'+i+'.jpg');
    $('input[type="text"]').val('Фото № '+ i);
  });

 $('.img-res').click(function () {
    if (i2>=4) {
      i2 = 1;
    } else { ++i2;}
    var newPhoto = new Image();
    newPhoto.src = 'images/foto'+i2+'.jpg';
    var photo = $(this);
    photo.attr('src',newPhoto.src);
    photo.attr('width',(newPhoto.width)/2);
    photo.attr('height',(newPhoto.heigh)/2);
    $('.picinfo').text('Фото № '+ i2);
 });

$('.content .img-rep').click(function () {
   if (im>=3) {
      im = 0;
    } else { ++im;}
    $(this).replaceWith(ImgMass[im]); 
    $('.Massnumber').text('# '+im + + 1);
});

});