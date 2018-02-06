window.onload = function () {

	function getId(i) {
		return typeof i  == 'object' ? i : document.getElementById(i);
	}

 function noOpacity() {
 		getId('inner').style.opacity = 1;
 }
 setTimeout(noOpacity, 1000);

}