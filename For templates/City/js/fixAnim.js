function AddClass(elName, elClass) {
  setTimeout(function() {
    Element = document.getElementById(elName);
    Element.classList.add(elClass);
  }, 5000 );
}


