window.onload = function () {

	let sheet = (function() {
	let style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
	return style.sheet;
	})();

	let firstRule = "body:before {" +
																"z-index: 1;" + 
																"content: '';" +
																"position: fixed;" +
																"top:0;" +
																"left: 0;" +
																"width: 100vw;" +
																"height: 100vh;" +
																"background: linear-gradient(45deg, rgba(191,117,135,0.639) 0%, rgba(214,255,255,0.631) 100%), url();" +
																"background-size: cover, cover;" +
																"background-position: 0 0, center;" +
																"background-repeat: repeat, no-repeat;" +
																"transition: background-image 3s;}"; 
	let secondRule = "body:before {" +
																"z-index: 1;" + 
																"content: '';" +
																"position: fixed;" +
																"top:0;" +
																"left: 0;" +
																"width: 100vw;" +
																"height: 100vh;" +
																"background: linear-gradient(45deg, rgba(191,117,135,0.639) 0%, rgba(214,255,255,0.631) 100%), url('./images/bg(1).jpg');" +
																"background-size: cover, cover;" +
																"background-position: 0 0, center;" +
																"background-repeat: repeat, no-repeat;" +
																"transition: background-image 3s;}"; 

	sheet.insertRule(firstRule, 0);

	setTimeout(addimg, 3000);

	function addimg() {
		sheet.insertRule(secondRule, 1);
	}

	console.log(document.styleSheets[1]);

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
			opacity(blockToShow, 10);
		} else {
			let blockToHide = document.getElementById(elemId);
			blockToHide.style.display = 'none'; 
			blockToHide.style.opacity = 0; 
			blockToShow.style.display = 'block';	
			opacity(blockToShow, 10);
		}
	}

	function opacity(element, speed){
    let interv = setInterval(function(){    
    	if (element.style.opacity > 1) clearInterval(interv);
       element.style.opacity = +element.style.opacity + 0.01;
    }, speed)
	}

}