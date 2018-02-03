window.onload = function () {

	let body = document.getElementById('bodyblock');
	let backgrimg =document.createElement('div');
	backgrimg.style.cssText = "z-index: 0; position: fixed; top:0;left: 0; width: 100vw; height: 100vh;"+ 
														"background: linear-gradient(45deg, rgb(191,117,135) 0%, rgb(214,255,255) 100%), url(); opacity: 1;" +
														"background-size: cover, cover; background-position: 0 0, center; background-repeat: repeat, no-repeat; transition: background-image 3s;";

	document.body.insertBefore(backgrimg, document.body.firstChild);
	let content = document.getElementById('container');
	content.style.opacity = 0;
	content.style.position = 'relative';
	content.style.top = '+1.5em';

	opacity(backgrimg, 10, 'minus' );
	opacity(content, 5, 'plus' );
	toTop(content, 1);

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
				HideblockN.style.opacity = 0;
			}
			blockToShow.style.display = 'block';
			opacity(blockToShow, 10, 'plus');
		} else {
			let blockToHide = document.getElementById(elemId);
			blockToHide.style.display = 'none'; 
			blockToHide.style.opacity = 0; 
			blockToShow.style.display = 'block';	
			opacity(blockToShow, 10, 'plus');
		}
	}

	function opacity(element, speed, vart){
		if (vart == 'plus') {
    	let interv = setInterval(function(){    
    		if (element.style.opacity > 1) clearInterval(interv);
       	element.style.opacity = +element.style.opacity + 0.01;
    	}, speed)	
		} else if (vart == 'minus') {
			let interv = setInterval(function(){    
    		if (element.style.opacity <= 0) clearInterval(interv);
       	element.style.opacity = +element.style.opacity - 0.01;
    	}, speed)	
		}
	}

	function toTop(element, speed) {
		let TOP = element.style.top.substr(0,1);
		let toTopInt = setInterval(function(){
			if (TOP <= 0) clearInterval(toTopInt)
			TOP -=	0.025;
			element.style.top = TOP + 'em';
		} , speed)
	}

}