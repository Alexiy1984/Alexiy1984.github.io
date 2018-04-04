function IdGet(idname) {return typeof i == 'object' ? i : document.getElementById(idname);}
function ClassGet(classname) {return document.getElementsByClassName(classname);}
function AddClass(element, classname) {
  element.className = element.className.replace(classname);
}
function RemoveClass(element, classname) {
  let arr;
  arr = element.className.split(" ");
  if (arr.indexOf(classname) == -1) {
    element.className += " " + classname;
  }
}

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
    console.log(secondblock);
    AddClass(secondblock,'video-div__centered-block_hidden');
  }
  else {
    console.log('failure');
    let secondblock = IdGet('second-vid-block');
    RemoveClass(secondblock,'video-div__centered-block_hidden');
  }
}
