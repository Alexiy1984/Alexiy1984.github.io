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

				<form action="MySQLTables.php" method="post" id="DecsribeRows">
					<h1>Показать поля таблицы</h1>
					<label for="TableNameDesc">Введите название таблицы</label>
					<input id="TableNameDesc" type="text" name="TableNameDesc">
					<input type="submit" value="Показать поля таблицы">
					<?php 
						if (isset($_POST['TableNameDesc'])) {
							$tablename = $_POST['TableNameDesc'];
							$query = "DESCRIBE $tablename";
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
						}		
					?>		
				</form>

				<form action="MySQLTables.php" method="post" id="ShowData">
					<h1>
						Вывод данных таблицы<br>
						Удаление данных таблицы
					</h1>
					<select name="SelectOpt" id="SelectOpt">
						<option selected value="SHOW">Вывести</option>
						<option value="DELETE">Удалить</option>
					</select>
					<label for="TableNameShow">Введите название таблицы</label>
					<input id="TableNameShow" type="text" name="TableNameShow">
					<label for="ShowField">Введите имя поля</label>
					<input id="ShowField" type="text" name="ShowField">
					<label for="Conditions">Введите дополнительные условия</label>
					<input id="Conditions" type="text" name="Conditions">
					<input type="submit" value="Потвердить ввод">
					<?php 
						if (isset($_POST['TableNameShow']) && isset($_POST['ShowField']) && isset($_POST['Conditions'])) {
							$tablename = $_POST['TableNameShow'];
							$fieldname = $_POST['ShowField'];
							$conditions = $_POST['Conditions'];
							$selectedtedopt = $_POST['SelectOpt'];
							if ($selectedtedopt =='SHOW') {
								if (empty($conditions)) {
									$query = "SELECT $fieldname FROM $tablename";
								}	else $query = "SELECT $fieldname FROM $tablename WHERE $conditions";
								$result = $conn->query($query);
								if (!$result) die ("Сбой при доступе к данным". $conn->error);
								$rows = $result->num_rows;
								echo "<table><tr><th>ID</th><th>Family</th><th>Name</th><th>Age</th></tr>";
								for ($j = 0; $j < $rows; ++$j) {
									$result->data_seek($j);
									$row= $result->fetch_array(MYSQLI_NUM);
									echo "<tr>";
										for ($k = 0; $k < 4; ++$k) echo "<td>$row[$k]</td>";
									echo "</tr>";
								}
								echo "</table>";
							} else {
								$query = "DELETE FROM $tablename WHERE $conditions";
								$result = $conn->query($query);
								if (!$result) die ("Сбой при доступе к данным". $conn->error);
								else echo "<p>Строка где $conditions успешно удалена</p>";
							}
						}		
					?>	
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
						else echo "<p>Строка $fieldins вставлена в таблицу $tablename с id = $conn->insert_id </p>";
					}		
					
					$result->close();
					$conn->close();	
					
				?>
			</div>
		</div>
	</div>
</body>
</html>