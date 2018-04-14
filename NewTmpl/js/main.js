function IdGet(idname) {return typeof i == 'object' ? i : document.getElementById(idname);}

function ClassGet(classname) {return document.getElementsByClassName(classname);}

function RemoveClass(element, classname) {
  var reg = new RegExp("\\b"+ classname+"\\b","g");
  element.className = element.className.replace(reg," ");
}

function AddClass(element, classname) {
  var arr;
  arr = element.className.split(" ");
  if (arr.indexOf(classname) == -1) {
    element.className += " " + classname;
  }
  element.className = element.className.replace(/\s+/g," ");
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

  /*let svg =(IdGet('svg-1'));


  svg.addEventListener("mouseover", Overanim(svg));
  svg.addEventListener("mouseout",  Outanim(svg));


  function  Overanim (elem) {
    elem.setAttribute("class","svg-circle svg-circle-hovered");
    console.log(svg);
  }

  function  Outanim (elem) {
    elem.setAttribute("class","svg-circle");
  } ЧАСТЬ НЕРАБОЧЕГО КОДА ДЛЯ SVG*/

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
    let hiddenanimgroup = IdGet('JS-hidden-anim-group');

    console.log(secondblock);

    rotatedtext.innerHTML = 'next project';

    RemoveClass(secondblock,'video-div__centered-block_hidden');
    RemoveClass(hiddenanimgroup,'anim-group_hidden');

  }
  else if (window.pageYOffset <= document.documentElement.clientHeight){
    console.log('failure');
    let secondblock = IdGet('second-vid-block');
    let hiddenmenu = IdGet('JS-hidden-menu');
    let rotatedtext = IdGet('JS-rotated-text');
    let hiddenanimgroup = IdGet('JS-hidden-anim-group');

    rotatedtext.innerHTML = 'scroll';

    AddClass(secondblock,'video-div__centered-block_hidden');
    AddClass(hiddenanimgroup,'anim-group_hidden');
  }

  if (window.pageYOffset > ((document.documentElement.clientHeight)*0.35))  {
    let hiddenmenu = IdGet('JS-hidden-menu');

    AddClass(hiddenmenu,'appeared');
    // RemoveClass(hiddenmenu,'row__inner_hidden');
  }

}



