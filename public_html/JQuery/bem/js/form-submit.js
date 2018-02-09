function submitForm(className) {
	$(className).submit(function () {
		if ($('#fname').val() == '' || $('#lname').val() == '') {
			alert('Пожалуйства введите имя и фамилию');
			return false;
		}
	});
};