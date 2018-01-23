<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Validate</title>
	<link rel="stylesheet" href="css/min-style.css">
	<script type="text/javascript" src="js/main.js"></script>

	<script>
		function validate(form) {
			fail = validateForename(form.forename.value);
			fail += validateSurname(form.surname.value);
			fail += validateUsername(form.username.value);
			fail += validatePassword(form.password.value);
			fail += validateAge(form.age.value);
			fail += validateEmail(form.email.value);
			if (fail == "") return true
			else {
				alert(fail); return false
			}
		}

		function validateForename(field) {
			return (field=="") ? "Не введено имя.\n" : "";
		}
		function validateSurname(field) {
			return (field=="") ? "Не введена фамилия.\n" : "";
		}
		function validateUsername(field) {
			if (field=="") return "Не введено имя пользователя.\n"
			else if (field.length < 5) return "В имени пользователя должно быть не менее 5 символов. \n"
			else if (/[^a-zA-Z0-9_-]/.test(field)) return "В имени пользователя разрешены только символы A-Z, цифры и символы -_.\n"
			return "";	
		}
		function validatePassword(field) {
			if (field=="") return "Не введен пароль.\n"
			else if (field.length < 6) return "В пароле должно быть не менее 6 символов. \n"
			if (!/[a-z]/.test(field) || !/[A-Z]/.test(field) || !/[0-9]/.test(field))
			return "Для пароля необходимо ввести прописные, заглавные буквы и цифры\n"
			return ""	
		}
		function validateAge(field) {
			if (field=="" || isNaN(field)) return "Не введен возраст.\n"
			else if (field < 18 || field > 110) return "Возраст должен быть между 18 и 110.\n"
			return "" 
		}
		function validateEmail(field) {
			if (field=="") return "Не введен пароль.\n"
			else if (!((field.indexOf(".")>0) && (field.indexOf("@")>0)) || /[^a-zA-Z0-9.@_-]/.test(field))
			return "Электронный адрес имеет неверный формат.\n"
			return ""	
		}
	</script>
</head>
<body>
	<div class="wrapper">
		<div class="content">
			<div class="header">
				<h1 class="text-uppecase text-midspacing">Страница валидации</h1>
			</div>
			<div class="inner">
				<form action="adduser.php" method="post" onSubmit="return validate(this)">
					<h2 class="text-uppecase">Регистрационная форма</h2>
					<div class="row">
						<div class="col-1">
							<label for="forename">Имя</label>
						</div>
						<div class="col-2">
							<input type="text" id="forename" name="forename">
						</div>
					</div>
					<div class="row">
						<div class="col-1">
							<label for="surname">Фамилия</label>
						</div>
						<div class="col-2">
							<input type="text" id="surname" name="surname">
						</div>
					</div>
					<div class="row">
						<div class="col-1">
							<label for="username">Имя пользователя</label>
						</div>
						<div class="col-2">
							<input type="text" id="username" name="username">
						</div>
					</div>
					<div class="row">
						<div class="col-1">
							<label for="password">Пароль</label>
						</div>
						<div class="col-2">
							<input type="text" id="password" name="password">
						</div>
					</div>
					<div class="row">
						<div class="col-1">
							<label for="age">Возраст</label>
						</div>
						<div class="col-2">
							<input type="text" id="age" name="age">
						</div>
					</div>
					<div class="row">
						<div class="col-1">
							<label for="email">Почта</label>
						</div>
						<div class="col-2">
							<input type="text" id="email" name="email">
						</div>
					</div>
					<div class="row"><input type="submit" value="Подтвердить" class="text-uppecase"></div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>

<?php

if (isset($_POST['forename']))
	$forename = fix_string($_POST['forename']);
if (isset($_POST['surname']))
	$surname = fix_string($_POST['surname']);
if (isset($_POST['username']))
	$username = fix_string($_POST['username']);
if (isset($_POST['password']))
	$password = fix_string($_POST['password']);
if (isset($_POST['age']))
	$age = fix_string($_POST['age']);
if (isset($_POST['email']))
	$email = fix_string($_POST['email']);

$fail  = validate_forename($forename);
$fail .= validate_surname($surname);
$fail .= validate_username($username);
$fail .= validate_password($password);
$fail .= validate_age($age);
$fail .= validate_email($email);

if ($fail == "") {
	echo "</head><body>Form data successfully validated: $forename,
		$surname, $username, $password, $age, $email.</body></html>";
	exit;
}
?>


<?php
function validate_forename($field) {
	if ($field == "") return "Не введено имя<br>";
	return "";
}

function validate_surname($field) {
	if ($field == "") return "Не введена фамилия<br>";
	return "";
}

function validate_username($field) {
	if ($field == "") return "Не введено имя пользователя<br>";
	else if (strlen($field) < 5)
		return "Usernames must be at least 5 characters<br>";
	else if (preg_match("/[^a-zA-Z0-9_-]/", $field))
		return "В имени пользователя допустимы только буквы и цифры<br>";
	return "";
}

function validate_password($field) {
	if ($field == "") return "Не введен пароль<br>";
	else if (strlen($field) < 6)
		return "Пароль должен содеражать 6 символов<br />";
	else if ( !preg_match("/[a-z]/", $field) ||
			!preg_match("/[A-Z]/", $field) ||
			!preg_match("/[0-9]/", $field))
		return "Для пароля необходимо ввести прописные, заглавные буквы и цифры<br>";
	return "";
}

function validate_age($field) {
	if ($field == "") return "Не введен возраст<br>";
	else if ($field < 18 || $field > 110)
		return "Возраст должен быть между 18 и 110<br>";
	return "";
}

function validate_email($field) {
	if ($field == "") return "Не введен Email<br>";
		else if (!((strpos($field, ".") > 0) &&
			      (strpos($field, "@") > 0)) ||
			    preg_match("/[^a-zA-Z0-9.@_-]/", $field))
		return "Неверный дрес электронной почты<br>";
	return "";
}

function fix_string($string) {
	if (get_magic_quotes_gpc()) $string = stripslashes($string);
	return htmlentities ($string);
}
?>