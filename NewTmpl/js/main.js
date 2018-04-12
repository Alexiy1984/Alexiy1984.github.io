function IdGet(idname) {return typeof i == 'object' ? i : document.getElementById(idname);}
function ClassGet(classname) {return document.getElementsByClassName(classname);}
function RemoveClass(element, classname) {
  var reg = new RegExp("\\b"+ classname+"\\b","g");
  /*console.log(reg);*/
  element.className = element.className.replace(reg," ");
}
function AddClass(element, classname) {
  var arr;
  arr = element.className.split(" ");
  /*console.log(arr);
  console.log(classname);*/
  if (arr.indexOf(classname) == -1) {
    element.className += " " + classname;
  }
  element.className = element.className.replace(/\s+/g," ");
}

//ФУНКЦИЯ НЕ ПРОВЕРЕНА
function ToggleClass(element, classname) {
  if (element.classList) {
    element.classList.toggle(classname);
} else {
    var classes = element.className.split(" ");
    var i = classes.indexOf(classname);

    if (i >= 0)
        classes.splice(i, 1);
    else
        classes.push(classname);
        element.className = classes.join(" ");
}
}
//ФУНКЦИЯ НЕ ПРОВЕРЕНА

window.onload = function () {

  // вычисление высоты окна с учетом особенностей браузеров НАЧАЛО
  var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  console.log( 'Высота с учетом прокрутки: ' + scrollHeight );
  // вычисление высоты окна с учетом особенностей браузеров КОНЕЦ
}

window.onresize = function() {
  console.log( 'Размер окна: ' + document.documentElement.clientHeight );
}

window.onscroll = function() {
  console.log( 'Текущая прокрутка сверху: ' + window.pageYOffset );

  if (window.pageYOffset > document.documentElement.clientHeight) {
    console.log('succes');
    let secondblock = IdGet('second-vid-block');
    let rotatedtext = IdGet('JS-rotated-text');

    console.log(secondblock);

    rotatedtext.innerHTML = 'next project';

    RemoveClass(secondblock,'video-div__centered-block_hidden');
  }
  else if (window.pageYOffset <= document.documentElement.clientHeight){
    console.log('failure');
    let secondblock = IdGet('second-vid-block');
    let hiddenmenu = IdGet('JS-hidden-menu');
    let rotatedtext = IdGet('JS-rotated-text');

    rotatedtext.innerHTML = 'scroll';

    AddClass(secondblock,'video-div__centered-block_hidden');
  }

  if (window.pageYOffset > ((document.documentElement.clientHeight)*0.35))  {
    let hiddenmenu = IdGet('JS-hidden-menu');

    AddClass(hiddenmenu,'appeared');
    // RemoveClass(hiddenmenu,'row__inner_hidden');
  }

}


