<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Practice</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="wrapper">
		<div class="header">
			<h1>Практикум по программированию на PHP</h1>
		</div>
		<div class="content">
			<div class="inner">
				<div id="row-1" class="row">
					<div class="col">
						<h1>Функция printf</h1>
						<?php 
							printf('<p>Вывод значения 15: %d - десятичная форма<p>', 15);
							printf('<p>Вывод значения -15: %u -  беззнаковая десятичная форма<p>', 15);
							printf('<p>Вывод значения 15: %b - двоичная форма<p>', 15);
							printf('<p>Вывод значения 23: %x - шестнадцатиричная форма (симфолы в нижнем регистре)<p>', 23);
							printf('<p>Вывод значения 23: %X - шестнадцатиричная форма (симфолы в верхнем регистре)<p>', 23);
							printf('<p>Вывод значения 15: %o - восмеричная форма<p>', 15);
							printf('<p>Вывод значения 113: %c - ASCII<p>', 113);
							printf('<p>Вывод значения 15: %e - с научная форма<p>', 15);
							printf('<p>Вывод значения 15: %f - с плавающей точкой<p>', 15);
							printf('<p>Вывод значения 15: %s -  строка<p>', 15);
						?>		
					</div>
					<div class="col">
						<h1>Установка цвета HTML</h1>
						<?php
							$redclr = 125;
							$greclr = 34;
							$bluclr = 245;
							printf("<p style='color:#%X%X%X'>Цветной текст</p>",$redclr,$greclr,$bluclr);
							printf("<p style='color:#%X%X%X'>Цветной текст</p>",$redclr,$bluclr,$greclr);
							printf("<p style='color:#%X%X%X'>Цветной текст</p>",$greclr,$bluclr,$redclr);
						?>		
					</div>
					<div class="col">
						<h1>Настройка представления данных</h1>
						<?php 
							printf("<p>Результат: %.2f $</p>", 234.23 / 34);
							printf("<p>Результат: %.4f м</p>", 250.23 / 15);
							printf("<p>Результат: %.1f C</p>", 229.24 / 12);
							echo "<pre>";
							printf("Результат: $%15f\n", 123.42 / 12);
							printf("Результат: $%015f\n", 123.42 / 12);
							printf("Результат: $%15.2f\n", 123.42 / 12);
							printf("Результат: $%015.2f\n", 123.42 / 12);
							printf("Результат: $%'!15.2f\n", 123.42 / 12);
							echo "</pre>";
						?>	
					</div>
				</div>
				<div id="row-2" class="row">
					<div class="col">
						<h1>Дополнение строк</h1>
						<?php
							echo "<pre>";
							$h = 'PHPLearn';
							printf("[%s]\t",$h);
							echo "- обычный вывод\n";
							printf("[%12s]\t",$h);
							echo "- выравнивание пробелами по правому краю до ширины 12\n";
							printf("[%-12s]\t",$h);
							echo "- выравнивание пробелами по левому краю до ширины 12\n";
							printf("[%012s]\t",$h);
							echo "- дополнение нулями\n";
							$h2 = 'PHPLearn is cool';
							printf("[%12.8s]\t",$h2);
							echo "- выравнивание по правому краю с усечением до 8 символов\n";
							printf("[%-12.8s]\t",$h2);
							echo "- выравнивание по левому краю с усечением до 8 символов\n";
							printf("[%-'@12.10s]\t",$h2);
							echo "- выравнивание по левому краю, дополнение символом @, усечение до 12 символов\n";
							echo "</pre>";
						?>
					</div>
					
				</div>
				<div id="row-3" class="row">
					<div class="col">
						<h1>Функции даты и времени</h1>
						<?php 
							echo "<p>".time()." - количество секунд прошедших с начала отсчета 01.01.1970 г.</p>";
							echo "<p>";
							echo time()+7*24*60*60;
							echo " - количество секуд прошедших с начала отсчета 01.01.1970 г.  + 7 дней</p>";
							echo '<p class="important">Отметка для заданной даты: <span class="code">mktime (0,0,0,1,1, 2018)</span></p>';
							echo "<p><span class='important'>Результат: </span>";
							echo mktime(0,0,0,1,1,2018);
							echo "</p>";
							echo '<p class="important">Отображение даты: <span class="code"> date ($format, $timestamp)</span></p>';
							echo "<p>";
							echo date("l F jS, Y - g:ia", time());
							echo "</p>";
							echo "<p>";
							echo date("d m y - g:ia", time());
							echo "</p>";
							echo "<p>";
							echo date("d m y - H:i", time());
							echo "</p>";
							echo '<p class="important">Контанты для работы с датой:</p>';
							echo "<p>";
							echo date(DATE_RSS)." - (DATE_RSS)";
							echo "</p>";
							echo "<p>";
							echo date(DATE_ATOM)." - (DATE_ATOM)";
							echo "</p>";	
							echo "<p>";
							echo date(DATE_COOKIE)." - (DATE_COOKIE)";
							echo "</p>";
							echo "<p>";
							echo date(DATE_W3C)." - (DATE_W3C)";
							echo "</p>";
							echo "</p>";
							echo '<p class="important">Проверка даты: <span class="code">checkdate($month,$day,$year)</span></p>';
							echo "<p>";
							$month = 9;
							$day = 31;
							$year = 2018;
							$month1 = 9;
							$day1 = 28;
							$year1 = 2018;
							print checkdate($month,$day,$year) ? 'Допустимая дата': 'Недопустимая дата';
							echo "</p>";
							echo "<p>";
							print checkdate($month1,$day1,$year1) ? 'Допустимая дата': 'Недопустимая дата';
							echo "</p>";
						?> 
					</div>
					<div class="col">
						<h1>Работа с файлами</h1>
						<?php 
							echo '<p class="important">Проверка существования файла: <span class="code">file_exists($filepath)</span></p>';
							$filepath = 'files/file.txt';
							$filepath2 = 'files/file2.txt';
							$filepath3 = 'files/file3.txt';
							print file_exists($filepath) ? "<p>Файл $filepath существует</p>" : "<p>Файла $filepath не существует</p>";
							print file_exists($filepath2) ? "<p>Файл $filepath2 существует</p>" : "<p>Файла $filepath2 не существует</p>";
							echo '<p class="important">Создание файла: <span class="code">fopen($filepath3,"w")</span> <span class="code">fwrite($ffwr, $text)</span> 
							<span class="code">fclose($ffwr)</span></p>';
							$ffwr = fopen($filepath3,'w') or die('Создать файл не удалось');
							$text = <<<_END
	Строка 1 
		Строка 2 
	Строка 3
Строка без отступов
_END;
$text2 = <<<_END2
String 1 
String 2
String 3

_END2;

							fwrite($ffwr, $text) or die('Сбой записи файла');
							fclose($ffwr);
							$ffwr = fopen($filepath3,'w') or die('Создать файл не удалось');
							fwrite($ffwr, $text2) or die('Сбой записи файла');
							fclose($ffwr);
							print file_exists($filepath3) ? "<p>Файл $filepath3 существует</p>" : "<p>Файла $filepath3 не существует</p>";
							echo '<p class="important">Чтение строки из файла: <span class="code"> fgets($ffwr)</span></p>';
							$ffwr = fopen($filepath3,'r') or die('Файл не существует или у вас нет доступа');
							$fline = fgets($ffwr);
							fclose($ffwr);
							echo "<p>$fline</p>";
							echo '<p class="important">Чтение определенного количества символов из файла: <span class="code"> fread($ffwr,45) </span></p>';
							$ffwr = fopen($filepath3,'r') or die('Файл не существует или у вас нет доступа');
							$ftext = fread($ffwr,45);
							fclose($ffwr);
							echo "<p>$ftext</p>";
							echo '<p class="important">Копирование файла: <span class="code"> copy($filepath3,$filecopypath) </span> </p>';
							$filecopypath = 'files/copyfile.txt';
							copy($filepath3,$filecopypath) or die('Копирование невозможно');
							print file_exists($filecopypath) ? "<p>Файл $filepath3 успешно скопирован в $filecopypath </p>" : "<p>Запись файла $filepath3 завершилась неудачей</p>";
							echo '<p class="important">Перемещение (переименование) файла: <span class="code"> rename($filecopypath, $filerenpath) </span> </p>';
							$filerenpath = 'files/renamedfile.txt';
							if (!rename($filecopypath, $filerenpath)) 
								echo '<p>Переименование невозможно</p>';
							else echo "<p>Файл $filecopypath успешно переименован в $filerenpath</p>";
							echo '<p class="important">Удаление файла: <span class="code"> rename($filecopypath, $filerenpath) </span> </p>';
							if (!unlink($filerenpath)) 
								echo '<p>удаление невозможно</p>';
							else echo "<p>Файл $filerenpath успешно удален</p>";
							echo '<p class="important">Обновление файла: <span class="code"> fopen($filepath3,"r+"") fseek($ffwr,0, [SEEK_END, SEEK_SET, SEEK_CUR]) </span> </p>';
							$ffwr = fopen($filepath3,'r+') or die('Создать файл не удалось');
							$text3 = fgets($ffwr);
							fseek($ffwr,0, SEEK_END);
							fseek($ffwr,5, SEEK_SET);
							fwrite($ffwr, $text3) or die('Сбой записи файла');
							fseek($ffwr,5, SEEK_CUR);
							fwrite($ffwr, $text3) or die('Сбой записи файла');
							fclose($ffwr);
							echo '<p class="important">Блокирование файла в коллектиыном доступе: <span class="code"> flock($ffwr, LOCK_EX) flock($ffwr, LOCK_UN)</span> </p>';
							$ffwr = fopen($filepath3,'r+') or die('Создать файл не удалось');
							$text3 = fgets($ffwr);
							if (flock($ffwr, LOCK_EX)) {
							fseek($ffwr,0, SEEK_END);
							fwrite($ffwr, $text3) or die('Сбой записи файла');
							flock($ffwr, LOCK_UN);	
							}
							fclose($ffwr);
						?>
					</div>
					
				</div>
				<div class="row">
					<div class="col">
						<h1>Чтение всего файла целиком</h1>
						<?php 
							echo '<p class="important">Чтение текстового файла: <span class="code"> file_get_contents ($filepath3) </span> </p>';
							echo "<pre>";
								echo file_get_contents($filepath3);
							echo "</pre>";
							echo '<p class="important">Чтение html файла: <span class="code"> file_get_contents (__DIR__ ."/mini.html") </span> </p>';
								echo file_get_contents(__DIR__."/mini.html");
						?>
					</div>
					<div class="col">
						<h1>Загрузка файла на сервер</h1>
						<?php
							echo 
								"<form method='post' action='Practice.php' enctype='multipart/form-data'>
									Выберите файл с расширением JPG, GIF, PNG или TIF: <input type='file' name='filename' size='10'>
									<input type='submit' value='Загрузить'> 
								</form>";
							if ($_FILES) {
								$name =  $_FILES['filename']['name'];
								switch ($_FILES['filename']['type']) {
									case 'image/jpeg': $ext='jpg';  break;
									case 'image/gif': $ext='gif';  break;
									case 'image/png': $ext='png';  break;
									case 'image/tiff': $ext='tif';  break;
									default: $ext=''; ;break;
								}
								if ($ext) {
									$newname = "image.$ext";
 									move_uploaded_file($_FILES['filename']['tmp_name'],$newname);
									echo "<p>Загружаемое изображение '$newname' </p><img class='min-img' src='$newname'><br>"; 
									echo "<p>Тип файла " .$_FILES['filename']['type']."</p>";
									echo "<p>Размер файла " .$_FILES['filename']['size']." байт</p>";
									echo "<p>Ошибки загрузки файла " .$_FILES['filename']['error']."</p>";
									echo "<p>Временное имя файла " .$_FILES['filename']['tmp_name']."</p>";
								}	else echo "<p class='error'>$name - неприемлемый файл изображения</p>";
							} else echo "<p class='error'>Загрузки изображения не произошло</p>";
						?>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<h1>Системные вызовы</h1>
						<?php 
							$cmd = "ls";
							exec(escapeshellcmd($cmd),$output,$status);
							if ($status)	echo "Команда не выполнена"; 
							else {
								echo "<pre>";
								foreach ($output as $line) echo htmlspecialchars("$line\n");
								echo "</pre>";
							}	
						?>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>