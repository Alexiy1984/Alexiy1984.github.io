window.onload = function() {
  function allow(event) {
    event.preventDefault()
  }

  function drag(event) {
    event.dataTransfer.setData('image/png', event.target.id);
  }

  function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('image/png');
    event.target.appendChild(O(data));
  }

  O('dest').ondrop = drop(event);
  O('dest').ondragover = allow(event);
  O('source1').ondragstart = drag(event);
  O('source2').ondragstart = drag(event);
  O('source3').ondragstart = drag(event);

}
