$(document).ready(function () {
	var h2size;
	var h2bigsize;
	var psize;
	var pbigsize;
	var winwidth;
	
	function CalcOfVal (res) {
		var elem = document.getElementsByClassName('col-2');
		var colarr =[];
		var h2arr=[];
		var h2res=[];
		var parr=[];
		var pres=[];
		colarr.push.apply(colarr,elem);
		colarr.forEach(function (item ,i ) {
			var h2tagm = item.getElementsByTagName('h2');
			
			h2arr.push.apply(h2arr,h2tagm);
			h2arr.forEach(function (item ,i ) {
				item = window.getComputedStyle(item,null).getPropertyValue("font-size");
				h2res[i] = +item.replace('px','');
			});
			var ptagm = item.getElementsByTagName('p');
			
			parr.push.apply(parr,ptagm);
			parr.forEach(function (item ,i ) {
				item = window.getComputedStyle(item,null).getPropertyValue("font-size");
				pres[i] = +item.replace('px','');
			});
		});
		h2size = Math.res.apply(null, h2res);
		psize = Math.res.apply(null, pres);
		h2bigsize = h2size*1.2;
		pbigsize = psize*1.2;
	};
	CalcOfVal();
	$(window).resize(function() {
		if ($(window).width()<winwidth) {
			CalcOfVal(min);
		};
			
	});
	$('.rows').hover(function () {
		$('.col-1 img',this).css({
			filter: 'none', 
			'box-shadow': '0 0 50px 2px rgba(255,255,255,0.25)'
		});
		$('.col-2 h2',this).stop().animate({
			'font-size': h2bigsize+'px'
		}, 400);
		$('.col-2 p',this).stop().animate({
			'font-size': pbigsize+'px'
		}, 400);
	}, function () {
		$('.col-1 img',this).css({
			filter: 'grayscale(100%)', 
			'box-shadow': 'none'
		});
		$('.col-2 h2',this).stop().animate({
			'font-size': h2size+'px'
		}, 400);
		$('.col-2 p',this).stop().animate({
			'font-size': psize+'px'
		}, 400);
	}

	);

});
