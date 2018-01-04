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
				<div id="row-3" class="row">33</div>
			</div>
		</div>
	</div>
</body>
</html>