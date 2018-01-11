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
					if (isset($_POST['delete']) && isset($_POST['isbn'])) {
						$isbn = get_post($conn , 'isbn');
						$query = "DELETE FROM classics WHERE isbn='$isbn'";
						$result = $conn->query($query);
						if (!$result) echo "Сбой при удалении даннных: $query<br>" . $conn->error ."<br><br>";
					}
					if (isset($_POST['autor']) && 
							isset($_POST['title']) && 
							isset($_POST['category']) && 
							isset($_POST['year']) &&
							isset($_POST['isbn'])) {
						$autor = get_post($conn, 'autor');
						$title = get_post($conn, 'title');
						$category = get_post($conn, 'category');
						$year = get_post($conn, 'year');
						$isbn = get_post($conn, 'isbn');

						$query = 	"INSERT INTO classics VALUES" . 
											"('$autor','$title','$category','$year','$isbn')";
						$result =	$conn->query($query);
						if (!$result) echo "Сбой при вставке даннных: $query<br>" . $conn->error ."<br><br>";
					}

				?>
				<form action="MySQL.php" method="post">
					<label for="autor">Автор</label>
					<input type="text" name="autor">
					<label for="title">название</label>
					<input type="text" name="title">
					<label for="category">Категория</label>
					<input type="text" name="category">
					<label for="year">Год</label>
					<input type="text" name="year">
					<label for="isbn">ISBN</label>
					<input type="text" name="isbn">
					<input type="submit" value="ДОБАВИТЬ ЗАПИСЬ">
				</form>
				<?php
					$query = "SELECT * FROM classics";
					$result = $conn->query($query);
					if (!$result) die ("Сбой при подключении к базе даннных: $query<br>" . $conn->error ."<br><br>");
					$rows = $result->num_rows;
					for ($j = 0; $j < $rows; ++$j) {
						$result->data_seek($j);
						$row = $result->fetch_array(MYSQLI_NUM);
						echo "<p>Автор:" .$row[0]."</p>";
						echo "<p>Название:" .$row[1]."</p>";
						echo "<p>Категория:" .$row[2]."</p>";
						echo "<p>Год издания:" .$row[3]."</p>";
						echo "<p>ISBN:" .$row[4]."</p>";
						echo  "<form action='MySQL.php' method='post'>
										<input type='hidden' name='delete' value='yes'>
										<input type='hidden' name='isbn' value='$row[4]'>
										<input type='submit' value='УДАЛИТЬ ЗАПИСЬ'>
									</form>";
					}

					$result->close();
					$conn->close();

					function get_post($conn, $var)
					{
						return $conn->real_escape_string($_POST[$var]);
					}

				?>
				
			</div>
		</div>
	</div>
</body>
</html>