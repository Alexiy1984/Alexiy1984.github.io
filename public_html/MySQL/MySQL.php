<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>MySQL+PHP</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="wrapper">
		<div class="content">
			<div class="header">
				<h1>MySQL+PHP</h1>
			</div>
			<div class="inner">
				<?php
					require_once 'adds/login.php';
					$conn = new mysqli($hn, $un, $pw, $db);
					if ($conn->connect_error) die ("<p class='msg msg-error'> Статус соединения - ошибка: ".$conn->connect_error."</p>");
					else echo "<p class='msg msg-succes'>  Статус соединения - соединение установленно:</p>";
				?>
				
			</div>
		</div>
	</div>
</body>
</html>