$(document).ready( function () {
 var i=1;
 var i2=1;
 var im=0;
 var nm=1;
 var ImgMass = [
  '<img class="img-rep" src="images/foto1.jpg" alt="Природа">',
  '<img class="img-rep" src="images/foto2.jpg" alt="Природа">',
  '<img class="img-rep" src="images/foto3.jpg" alt="Природа">',
  '<img class="img-rep" src="images/foto4.jpg" alt="Природа">'
  ]
var ImgSrc = [
  'images/foto1.jpg',
  'images/foto2.jpg',
  'images/foto3.jpg',
  'images/foto4.jpg'
]

 $('input[type="text"]').val('Фото № '+ i);
 $('.picinfo').text('Фото № '+ i2);
 $('.Massnumber').text('Фото № '+nm);
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

$('.content').on('click','.img-rep',function () {
   if (im>=3) {
      im = 0;
      nm = 1;
    } else { ++im; ++nm }
    $(this).replaceWith(ImgMass[im]); 
    $('.Massnumber').text('Фото № '+nm);
});


for (var mn = 0; mn < ImgMass.length; mn++) { //preload - предзагрузка изображений
    new Image().src = ImgMass[mn];
};

$('.content form').append('<p class="text-center">Добавленное изображение с preload (с использованием new Image)</p>',ImgMass[0]);

for (var mn = 0; mn < ImgSrc.length; mn++) { 
    $('<img class="img-center img-bordered img-new">').attr('src',ImgSrc[mn]);
};

$('.content form').append('<p class="text-center">Добавленное изображение с preload (с созданием нового элемента)</p>',$('<img class="img-center img-bordered img-new">').attr('src',ImgSrc[0]));

$('.content').on('click','.img-new',function () {
   if (im>=3) {
      im = 0;
      nm = 1;
    } else { ++im; ++nm }
    $('.img-new').remove();
    $('.content form').append($('<img class="img-center img-bordered img-new">').attr('src',ImgSrc[im]));
});

});