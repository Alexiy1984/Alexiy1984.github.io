document.addEventListener('DOMContentLoaded', function() {

  console.log('works java-script  file initialized');
  
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

    let logosvg = IdGet('JS-logo-svg');
    logosvg.setAttribute("style","fill: #fff");

    let menubutton = IdGet('JS-menu-button');
    let menubuttonclicked = false;
    // console.log(menubuttonclicked);
    // console.log(menubutton);

    function GetNumeredIds(idPrefix, num) {
      let numeredIds = [];
      for (let index = 1; index <= num; index++) {
        numeredIds[index] = IdGet( idPrefix + index);
      }
      return numeredIds
    }

    AddClass(menubutton,'nav-menu__menu-button_nohide');

    let workarealinks = GetNumeredIds('JS-works-area-link-',6);

    for (let index = 3; index < workarealinks.length; index++) {
      AddClass(workarealinks[index],'works-area__inner__link_hidden');
    }

    menubutton.onclick = function() {

      let minsizemenu = IdGet('JS-min-size-menu');
      let logosvg = IdGet('JS-logo-svg');
      let worksarea = IdGet('JS-works-area');
      let menuLines = GetNumeredIds('line-',3);
      // let logosvg = IdGet('JS-logo-svg');
      
      if (!menubuttonclicked) {
        RemoveClass(minsizemenu,'block-hide');
        AddClass(worksarea,'block-hide');
        AddClass(minsizemenu,'appeared');
        menuLines.forEach(element => {AddClass(element,'nav-menu__menu-button__line_dark')});
        logosvg.setAttribute("style","fill: #000");
        menubuttonclicked = true;
      } else {
        AddClass(minsizemenu,'block-hide');
        RemoveClass(worksarea,'block-hide');
        RemoveClass(minsizemenu,'appeared');
        menuLines.forEach(element => {RemoveClass(element,'nav-menu__menu-button__line_dark')});
        logosvg.setAttribute("style","fill: #fff");
        menubuttonclicked = false;
      }
      
    }

  }

});
