$(document).ready(function () {

	var properties=['14px ', 'Arial '];
	$('p').append(properties +'<br>');

	$('.lenght').click(function() {
	properties[properties.length]= 'bold '; /*Добавление в конец массива*/
	$('p').append(properties +'<br>');
	});

	$('.push').click(function() {
	properties.push('italic ' , 'uderlined '); /*Добавление в конец массива нескольких элементов*/
	$('p').append(properties +'<br>');
	});

	$('.unshift').click(function() {
	properties.unshift('red '); /*Добавление в начало массива*/
	$('p').append(properties +'<br>');
	});

	$('.pop').click(function() {
	var removedpop = properties.pop(); /*Удаление последнего элемента, возвращает значение удаленного элемента*/
	$('p').append('удаленный элемент ' + removedpop + '<br>');
	$('p').append(properties +'<br>');
	});

	$('.shift').click(function() {
	var removedshift = properties.shift(); /*Удаление первого элемента , возвращает значение удаленного элемента*/
	$('p').append('удаленный элемент ' + removedshift + '<br>');
	$('p').append(properties +'<br>');
	});
	
});