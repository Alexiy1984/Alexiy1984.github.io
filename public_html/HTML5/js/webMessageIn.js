window.onload = function () {

	window.onmesage = function(event) {
		O('output').innerHTML =
		'<b>Oruigin: </b>' + event.origin + '<br>' +
		'<b>Source: </b>' + event.source + '<br>' +
		'<b>Data: </b>' + event.data
	}

}
