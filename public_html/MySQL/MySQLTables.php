<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>MySQL Tables</title>
	<link rel="stylesheet" href="css/style.css">
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/MySQLTables.js"></script>
</head>
<body>
	<div class="wrapper">
		<div class="content">
			<div class="header">
				<h1>MySQL Таблицы</h1>
			</div>
			<div class="inner">
				<?php
					require_once 'adds/loginZOO.php';
					$conn = new mysqli($hn, $un, $pw, $db);
					if ($conn->connect_error) die ("<p class='msg msg-error'> Статус соединения - ошибка: ".$conn->connect_error."</p>");
					else echo "<p class='msg msg-succes'>  Статус соединения - соединение установленно: имя базы $db </p>";
				?>
				
				<form action="MySQLTables.php" method="post" id="AddFieldForm">
					<h1>Добавление таблицы</h1>
					<label for="TableNameC">Введите название таблицы</label>
					<input id="TableNameC" type="text" name="TableNameC">
					<label for="FirstFieldName">Первое поле таблицы</label>
					<input id="FirstFieldName" type="text" name="FirstFieldName">
					<input id="addfield" type="button" value="Добавить поле">	
					<input type="submit" value="Создать таблицу" name="CreateTable">				
				</form>

				<form action="MySQLTables.php" method="post" id="ShowTablesForm">
					<h1>Список таблиц (НЕ ГОТОВО!)</h1>
					<label>Показать таблиы</label>
					<input type="submit" value="Показать таблицы" name="showTables">		
				</form>
				
				<form action="MySQLTables.php" method="post" id="DelTableForm">
					<h1>Удаление таблицы</h1>
					<label for="TableNameD">Введите название таблицы</label>
					<input id="TableNameD" type="text" name="TableNameD">
					<input type="submit" value="Удалить таблицу" name="deleteTable">		
				</form>

				<form action="MySQLTables.php" method="post" id="AddData">
					<h1>Добавление данных в таблицу</h1>
					<label for="TableNameIns">Введите название таблицы</label>
					<input id="TableNameIns" type="text" name="TableNameIns">
					<label for="InsField">Введите данные для добавления</label>
					<input id="InsField" type="text" name="InsField">
					<input type="submit" value="Добавить данные">		
				</form>
				<?php	

					if (isset($_POST['deleteTable']) && isset($_POST['TableNameD'])) {
						$tablename = $_POST['TableNameD'];
						$query = "DROP TABLE $tablename"; 
						$result = $conn->query($query);
						if (!$result) die ("Сбой при доступе к данным". $conn->error);	
					}

					if (isset($_POST['CreateTable']) 
							&& isset($_POST['TableNameC'])
							&& isset($_POST['FirstFieldName'])) {
						$tablename = $_POST['TableNameC'];
						$FieldName1 = $_POST['FirstFieldName'];
						$FieldName2 = $_POST['1FieldName'];
						$FieldName3 = $_POST['2FieldName'];
						$FieldName4 = $_POST['3FieldName'];
						$FieldName5 = $_POST['4FieldName'];
						$query = "CREATE TABLE $tablename (
						$FieldName1,
						$FieldName2,
						$FieldName3,
						$FieldName4,
						$FieldName5
						)";  
						$result = $conn->query($query);
						if (!$result) die ("Сбой при доступе к данным". $conn->error);	
					}

					if (isset($_POST['TableNameIns']) && isset($_POST['InsField'])) {
						$tablename = $_POST['TableNameIns'];
						$fieldins = $_POST['InsField'];
						$query = "INSERT INTO $tablename VALUES ($fieldins)";
						$result = $conn->query($query);
						if (!$result) die ("Сбой при доступе к данным". $conn->error);
					}		
					/*$query = "CREATE TABLE cats (
					id SMALLINT NOT NULL AUTO_INCREMENT,
					family VARCHAR(32) NOT NULL,
					name VARCHAR(32) NOT NULL,
					age  TINYINT NOT NULL,
					PRIMARY KEY (id)
					)";	

					$result = $conn->query($query);
					if (!$result) die ("Сбой при доступе к данным". $conn->error);*/

					$query = "DESCRIBE cats";
					$result = $conn->query($query);
					if (!$result) die ("Сбой при доступе к данным". $conn->error);

					$rows = $result->num_rows;

					echo "<table><tr><th>Column</th><th>Type</th><th>NULL</th><th>KEY</th></tr>";

					for ($j = 0; $j < $rows; ++$j) {
						$result->data_seek($j);
						$row= $result->fetch_array(MYSQLI_NUM);
						echo "<tr>";
							for ($k = 0; $k < 4; ++$k) echo "<td>$row[$k]</td>";
						echo "</tr>";
					} 

					echo "</table>";	
				?>
			</div>
		</div>
	</div>
</body>
</html>