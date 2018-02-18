window.onload = function () {

	S('frame').width = '35rem';
	S('frame').height = '20rem';

	setinterval(function() {
		O('frame').contentWindow.postMessage('Message ' + count++, '*');
	}, 1000)

}
