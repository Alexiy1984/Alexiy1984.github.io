$(document).ready(function () {

	$('.content').css({"background-color": "#000"});
	$('.content h2').css({"color": "#000", "text-align": "center"});
	$('.content > h2').css({"color": "#0AF"}); /*Дочерний элемент (только непосредственно внутри тега без доп вложенности)*/
	$('.content > h2').attr("title","Дочерний элемен div-a content");
	$('li').css({"color": "#fff"});
	$('a').css({"color": "#fff","text-decoration": "none"});
	$('#list1 a').css({"color": "#0AF","font-weight": "700"}); /*выбор ссылок только внутри элемента с id list1*/
	$('hr + div').css({"background-color": "#DDDDDD", "padding": "5px 0", "border-radius": "5px"}); /*Соседний селектор (только если после hr следует div)*/
	$('hr + div').attr("title","Соседний элемент (после hr)");
	$('li[type="disc"]').css({"color": "#0AF","font-weight": "700"}); /*Выбор элементов списка с аттрибутом type со значение disc*/
	$('#list2 a:even').css({"color": "#4F0","font-weight": "700"}); /*Выбор четных элементов отсчет начинается с 0*/
	$('#list2 a:even').attr("title","Четный элемент");
	$('#list2 a:odd').css({"color": "#181","font-weight": "700"}); /*Выбор нечетных элементов отсчет начинается с 0*/
	$('#list2 a:odd').attr("title","Нечетный элемент");
	$('#list3 a:first').css({"color": "#FD0","font-weight": "700"});
	$('#list3 a:first').attr("title","Первый элемент");
	$('#list3 a:last').css({"color": "#F70","font-weight": "700"});
	$('#list3 a:last').attr("title","Последний элемент");
	$('#list3 a:contains(Четыре)').css({"color": "#C2D","font-weight": "700"});
	$('.two').css({"position": "relative",
		"height": "58px"
	}); 
	$('.two .centered').css({
		
		"width": "10.4%",
  	"height": "58px",
  	"position": "absolute",
  	"top": "0",
  	"right": "0",
  	"bottom": "0",
  	"left": "0",
  	"margin": "auto",
  	
	});

	// СКРЫТЬ - ПОКАЗАТЬ ЭЛЕМЕНТЫ
	$('#pressmy').click(function () { 
		
		if ($('.three').css("display")=="none"){
			$('div:hidden').show();
			$('.threeup').show();
		} else {
			$('.three').hide();
			$('.threeup').hide();
		}
		
	});

	// АВТОМАТИЧЕСКИЕ ЦИКЛЫ (выбираем все элементы (до 50-ти) .bad из div-a .three)
	$('.three .bad').hide();
	$('#hideimg').attr("value", "ЕСЛИ НЕ ГЛАДИТЬ КОТИКА");

	$('#hideimg').click(function () { 
		
		if ($('.three .good').css("display")=="none"){
			$('.three .bad').hide();
			$('.three .good').show();
			$(this).attr("value", "ЕСЛИ НЕ ГЛАДИТЬ КОТИКА");
		} else {
			$('.three .good').hide();
			$('.three .bad').show();
			$(this).attr("value", "ЕСЛИ ПОГЛАДИТЬ КОТИКА");
		}
		
	});	

	// Связывание функций (можно указывать одну за одной )

	$('#minimg').click(function () { 
		if (($('.three img').width()/$('.three').width()*100)>30) {
			$('.three img').css({"width": "15%", "margin": "8%"});
			$(this).attr("value", "УВЕЛИЧИТЬ КАРТИНКИ");
			
		} else {
			$('.three img').css({"width": "32%", "margin": "0.3%"});
			$(this).attr("value", "УМЕНЬШИТЬ КАРТИНКИ");
			
		}
		
	});	


});