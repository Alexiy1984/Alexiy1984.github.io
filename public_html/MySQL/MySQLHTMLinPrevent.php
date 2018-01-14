<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>HTMLinPrevent</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="wrapper">
		<div class="content">
			<div class="header">
				<h1>Предотвращение внедрения HTML-кода</h1>
			</div>
			<div class="inner">
				<?php
					require_once 'adds/login.php';
					$conn = new mysqli($hn, $un, $pw, $db);
					if ($conn->connect_error) die ("<p class='msg msg-error'> Статус соединения - ошибка: ".$conn->connect_error."</p>");
					else echo "<p class='msg msg-succes'>  Статус соединения - соединение установленно: имя базы $db </p>";$conn = new mysqli($hn, $un, $pw, $db);
				?>
				<form action="MySQLHTMLinPrevent.php" method="post">
					<h1>ЗАЩИЩЕННАЯ ФОРМА</h1>
					<input type="text" name="CustomerName">
					<input type="text" name="CustomerOrderISBN">
					<input type="submit">
					<?php
						
							$CustName = mysql_entities_fix_string($conn, $_POST['CustomerName']); 	
							$CustISBN = mysql_entities_fix_string($conn, $_POST['CustomerOrderISBN']);
							$query = "SELECT $CustName FROM customers WHERE isbn='$CustISBN'";
							echo $query;

							function mysql_entities_fix_string($conn, $string) {
								return htmlentities(mysql_fix_string($conn, $string)); 
							}

							function mysql_fix_string($conn, $string) {
								if (get_magic_quotes_gpc()) $string = stripslashes($string);
								return $conn->real_escape_string($string);
							}  	
						
					?>
				</form>	

			</div>
		</div>
		<div class="content">
			<div class="header">
				<h1>Процедурный метод использования MySQL</h1>
			</div>
			<div class="inner">
				<?php
					$link = mysqli_connect($hn, $un, $pw, $db);
					if (mysqli_connect_errno()) die(mysqli_connect_error());
					$result= mysqli_query($link, "SELECT * FROM classics");
					$rows = mysqli_num_rows($result);
					echo "<p class='msg msg-info'> Количество выбранных строк таблицы : $rows </p>";
					$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
					printf ("%s (%s)\n", $row[0], $row[1]);
				?>
			</div>
		</div>
	</div>
</body>
</html>