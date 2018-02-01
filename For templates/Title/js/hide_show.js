window.onload = function () {

	let buttarr = document.getElementsByClassName('buttons');
	
	[].forEach.call(buttarr, function(arrel) {
		  arrel.onclick = function() {
		  	let buttclck = arrel.id;
		   	switch (buttclck) {
	   			case 'butt1': HideShow('main-content', 'addit-content1');
		    	break;
		    	case 'butt2': HideShow('main-content', 'addit-content2');
		    	break;
		    	case 'butt3': HideShow('main-content', 'addit-content3');
		    	break;
		    	default: HideShow('ret', 'main-content');
		    }
		   return false;		
			}
	});
	 
	/*butt.onclick = function() {
   	HideShow('main-content', 'addit-content1');
    return false;
  }*/
	
	function HideShow(elemId, action) {
		let blockToShow = document.getElementById(action);
		if (elemId == 'ret') {
			for ( i = 1; i <= 3; ++i) {
				let HideblockN = document.getElementById('addit-content'+ i);
				HideblockN.style.display = 'none';
			}
			blockToShow.style.display = 'block';
		} else {
			let blockToHide = document.getElementById(elemId);
			blockToHide.style.display = 'none'; 
			blockToShow.style.display = 'block';
		}
	}

}