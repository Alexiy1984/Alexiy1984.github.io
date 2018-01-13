<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>MySQL prevention</title>
	<link rel="stylesheet" href="css/style.css">
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/MySQLTables.js"></script>
</head>
<body>
	<div class="wrapper">
		<div class="content">
			<div class="header">
				<h1>MySQL prevention</h1>
			</div>
			<div class="inner">
				<?php
					require_once 'adds/login.php';
					$conn = new mysqli($hn, $un, $pw, $db);
					if ($conn->connect_error) die ("<p class='msg msg-error'> Статус соединения - ошибка: ".$conn->connect_error."</p>");
					else echo "<p class='msg msg-succes'>  Статус соединения - соединение установленно: имя базы $db </p>";$conn = new mysqli($hn, $un, $pw, $db);
				?>
				<form action="MySQLprevent.php" method="post">
					<h1>Указатели мест заполнения</h1>	
					<label for="autor">Автор</label>
					<input type="text" name="autor" id="autor">
					<label for="title">Название</label>
					<input type="text" name="title" id="title">
					<label for="category">Категория</label>
					<input type="text" name="category" id="category">
					<label for="year">Год</label>
					<input type="text" name="year" id="year">
					<label for="isbn">Уникальный номер</label>
					<input type="text" name="isbn" id="isbn">
					<input type="submit" value="Подтвердить ввод">
				</form>
				<?php
					if (isset($_POST['autor']) && isset($_POST['title']) && isset($_POST['category']) 
							&& isset($_POST['year']) && isset($_POST['isbn'])) {
						$stmt = $conn->prepare('INSERT INTO classics VALUES(?,?,?,?,?)');
						$stmt->bind_param("sssss",$autor,$title,$category,$year,$isbn);
						$autor 		= $_POST['autor'];
						$title 		= $_POST['title'];
						$category = $_POST['category'];
						$year 		= $_POST['year'];
						$isbn 		= $_POST['isbn'];
						/*$autor 		= 'Emily Bronte';
						$title 		= 'Wuthering Heights';
						$category = 'Classic Fiction';
						$year 		= '1847';
						$isbn 		= '9780553212587';*/
						$stmt->execute();
						printf("%d Row inserted \n", $stmt->affected_rows);
						$stmt->close();
						$conn->close();
					}				
				?> 
			</div>
		</div>
	</div>
</body>
</html>