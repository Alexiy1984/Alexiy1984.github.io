<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Arrays</title>
	<link rel="stylesheet" href="css/nstyle.css">
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/main.js"></script>
</head>	
<body>
	<div class="wrapper">
		<div class="header">
			<h1>МАССИВЫ</h1>
		</div>
		<div class="content">
			<div class="inner">
				<div class="left-col">
					<div>
						<h1 id="one">Массивы с числовой индексацией</h1>
					</div>
					<hr>
					<p>
						<?php
							require 'printmass.php';
							require 'PhpPost.php';
							echo '<span class="white">$paper[]="Copier";<br> $paper[]="Inkjet";<br> $paper[]="Laser";<br> $paper[]="Photo";</span><br><br>'; 
							$paper[]="Copier";
							$paper[]="Inkjet";
							$paper[]="Laser";
							$paper[]="Photo";
							print_r($paper);
							echo "<br><br>";
							for ($i=0; $i < 4; $i++) { 
									echo "$i: $paper[$i] <br>";
								}		
						?>
					</p>
					<hr>
					<div>
						<h1 id="two">Ассоциативные массивы</h1>
					</div>
					<hr>
					<p>
						<?php
							echo '<span class="white">$paperA["Copier"]="Copier & Multipurpose";<br> $paperA["Inkjet"]="Inkjet Printer";<br> 
							$paperA["Laser"]="Laser Printer";<br> $paperA["Photo"]="Photographic Paper";</span><br><br>'; 
							$paperA["Copier"]='Copier & Multipurpose';
							$paperA["Inkjet"]="Inkjet Printer";
							$paperA["Laser"]="Laser Printer";
							$paperA["Photo"]="Photographic Paper";
							print_r($paperA);
							echo "<br><br>";
							foreach($paperA as $key => $value)
							{
  							$myvalue = $value;
  							echo 'Value of array $paperA: <span class="white">' .$myvalue . "</span><br>";
							}
							echo "<br>";
							foreach($paperA as $key => $value)
							{
  							$mykey = $key;
  							echo 'Key of array $paperA: <span class="white">' .$mykey . "</span><br>";
							}
						?>
					</p>
					<hr>
					<div>
						<h1 id="three">Присваивание с использованием ключевого слова array</h1>
					</div>
					<hr>
					<p>
						<?php
							echo '<span class="white">$p1 = array("Copier","Inkjet","Laser","Photo")</span><br><br>';
							$p1 = array("Copier","Inkjet","Laser","Photo");
							foreach($p1 as $key => $value)
							{
								echo "$key) Элемент массива p1: <span class='white'>$value</span> <br>";
							}
							echo '<br>';
							echo '<span class="white">array ("Copier" => "Copier & Multipurpose", "Inkjet" => "Inkjet Printer", 
							"Laser" => "Laser Printer", "Photo" => "Photographic Paper");</span><br><br>';
							$p2 = array("Copier" => 'Copier & Multipurpose',
													"Inkjet" => "Inkjet Printer",
													"Laser" => "Laser Printer",
													"Photo" => "Photographic Paper");
							foreach($p2 as $key => $value)
							{
								echo "Ключ массива p2: <span class='white'> $key </span>, Элемент массива p2: <span class='white'>$value</span>, <br>";
							}
						?>	
					</p>
					<hr>
					<div>
						<h1 id="four">Функция list</h1>
					</div>
					<hr>
					<p>
						<?php
							echo '<span class="white">while (list($item, $description) = each($paperA))</span><br><br>';
							while (list($item, $description) = each($paperA)) {
								echo "$item: <span class='white'>$description</span><br>";
							}
						?>
					</p>
					<hr>
					<div>
						<h1 id="five">Многомерные массивы</h1>
					</div>
					<hr>
					<p>
						<?php
							echo '<span class="white">$products = array(<br> <span class="red">"paper"=> $paperA, // предварительно инициализированный массив (шаг Ассоциативные массивы)</span><br> 
							"pens" => array(<br> "ball" => "Ball Point",<br>"hilite" => "Highligters",<br> 
							"marker" => "Markers"<br> ),<br> "misc" => array(<br> "tape" => "Sticky Nape",<br>
							"glue" => "Adhesives",<br> "clips" => "Paperclips"<br> ) <br> );</span><br><br>'; 
							$products = array(
								'paper'=> $paperA,
								'pens' => array(
									'ball' => 'Ball Point',
									'hilite' => 'Highligters',
									'marker' => 'Markers' 
								),
								'misc' => array(
									'tape' => 'Sticky Nape',
									'glue' => 'Adhesives',
									'clips' => 'Paperclips' 
								) 
							);

							foreach($products as $section => $items) {
								foreach ($items as $key => $value) {
									echo "$section: <span class='white'>$key</span> $value <br>";
								}
							}
						?>
					</p>
					<hr>
					<div>
						<h1 id="six">Использование функций при работе с массивами</h1>
					</div>
					<hr>
					<br>
					<h2 class="white txtdec-under">is_array</h2>
					<br>
					<br>
					<p>
						<?php
							$paperitem = 'List paper';
							echo "<span class='txtdec-under'>Функция:</span><br>";
							echo '<br><span class="white">is_array($paper)</span>';
							echo '<br><span class="white">is_array(paperitem)</span><br><br>';
							echo "<span class='txtdec-under'>Результат:</span><br>";
							echo (is_array($paper)) ? '<br><span class="white">$paper</span> Это массив' : '<br><span class="white">$paper</span> Это не массив' ;
							echo (is_array($paperitem)) ? '<br><span class="white">$paperitem</span> Это массив<br>' : 
							'<br><span class="white">$paperitem</span> Это <span class="red">не</span> массив<br>' ; 
						?>
					</p>
					<br>
					<br>
					<h2 class="white txtdec-under">count</h2>
					<br>
					<br>
					<p>
						<?php 
						  echo '<span class="white">count($paper)</span> - для одномерного массива<br>';
						  echo '<span class="white">count($products,1)</span> - для многомерного массива<br><br>';
							echo '<span class="white">'.count($paper)."</span> - элементов(а) в одномерном массиве<br>";
							echo '<span class="white">'.count($products,1)."</span> - элементов(а) в многомерном массиве<br>";
						?>
					</p>
					<br>
					<br>
					<h2 class="white txtdec-under">sort</h2>
					<br>
					<br>
					<p>
						<?php 
							$paper2 = $paper;
							$paper2[] = 'Abrazive';
							echo '<span class="white txtdec-under">Массив без сортировки</span><br><br>';
							foreach($paper2 as $key => $value)
							{
								echo 'Key of array $paper2: <span class="white">' .$key . "</span>";
  							echo ', Value of array $paper2: <span class="white">' .$value . "</span><br>";
							}
							echo "<br>";
							sort($paper2);
							echo '<span class="white txtdec-under">Отсортированный массив</span> >> sort($paper2)<br><br>';
							foreach($paper2 as $key => $value)
							{
								echo 'Key of array $paper2: <span class="white">' .$key . "</span>";
  							echo ', Value of array $paper2: <span class="white">' .$value . "</span><br>";
							}
							rsort($paper2);
							echo "<br>";
							echo '<span class="white txtdec-under">Обратная сортировка</span> >> rsort($paper2)<br><br>';
							foreach($paper2 as  $key => $value)
							{
								echo 'Key of array $paper2: <span class="white">' .$key . "</span>";								
  							echo ', Value of array $paper2: <span class="white">' .$value . "</span><br>";
							}
							sort($paper2, SORT_NUMERIC);
							echo "<br>";
							echo '<span class="white txtdec-under">Cортировка с флагами</span> >> sort($paper2, SORT_NUMERIC) <br><br>';
							foreach($paper2 as  $key => $value)
							{
								echo 'Key of array $paper2: <span class="white">' .$key . "</span>";								
  							echo ', Value of array $paper2: <span class="white">' .$value . "</span><br>";
							}
							sort($paper2, SORT_STRING);
							echo "<br>";
							echo '<span class="white txtdec-under">Cортировка с флагами</span> >> sort($paper2, SORT_STRING) <br><br>';
							foreach($paper2 as  $key => $value)
							{
								echo 'Key of array $paper2: <span class="white">' .$key . "</span>";								
  							echo ', Value of array $paper2: <span class="white">' .$value . "</span><br>";
							}
							
						?>
					</p>
					<br>
					<br>
					<br>
					<h2 class="white txtdec-under">shuffle</h2>
					<br>
					<br>
					<p>
						<?php 
							shuffle($paper2);
							echo '<span class="white txtdec-under">"Перемешивание" массива</span> >> shuffle($paper2) <br><br>';
							echo '<button class="PHPCodeBut" id="myPHPButton">shuffle</button>';
							//Функция в поключенном файле printmass.php
							PrintArray($paper2,'Key of array $paper2: <span class="white phppostdata">',"</span>",', Value of array $paper2: <span class="white">', "</span><br>"); 
						?>
					</p>
					<br>
					<br>
					<br>
					<h2 class="white txtdec-under">explode</h2>
					<br>
					<br>
					<p>
						<?php
							echo '<span class="white txtdec-under">"Разрывание" строки по указанному символу</span> >> explode(" ","Любая строка разделеннaя символами") <br><br>';
							$expstr = explode(' ','Любая строка разделеннaя символами');
							$expstr2 = explode('-','Любая строка - разделенная символами');
							echo '<span class="white">Для разделения использован символ пробела</span><br><br>';
							print_r($expstr);
							echo '<br><br>';
							echo '<span class="white">Для разделения использован символ дефиса</span><br><br>'; 
							print_r($expstr2);
							echo '<br><br>';
						?>
					</p>
					<br>
					<br>
					<h2 class="white txtdec-under">extract</h2>
					<br>
					<br>
					<p>
						<?php
							echo '<span class="white txtdec-under">Распаковка массива на пары ключ-имя перемнной значение элемента - значение переменной</span><br> >> extract($paperA)<br><br>';
							extract($paperA);
							echo '<span class="white">Результат</span><br><br>';
							echo '$Laser = '."<span class='white'>$Laser</span><br>";
							echo '$Inkjet = '."<span class='white'>$Inkjet</span><br>";
							echo '$Copier = '."<span class='white'>$Copier</span><br>";
							echo '$Photo = '."<span class='white'>$Photo</span><br>";	
						?>
					</p>
					<br>
					<br>
					<h2 class="white txtdec-under">compact</h2>
					<br>
					<br>
					<p>
						<?php
							echo '<span class="white txtdec-under">Упаковка переменных в массив</span> >> $comparray = compact("Laser","Inkjet","Copier","Photo")<br><br>';
							$comparray = compact('Laser','Inkjet','Copier','Photo');
							PrintArray($comparray,'Ключ массива созданного из переменных: <span class="white phppostdata">',"</span>",', Занчение переменной: <span class="white">', "</span><br>"); 
						?>
					</p>
					<br>
					<br>
					<h2 class="white txtdec-under">reset, end</h2>
					<br>
					<br>
					<p>
						<?php
							echo '<span class="white txtdec-under">Возвращает текущий элемент массива</span> >> reset($paper2)<br><br>';
							$firstitem = reset($paper2);
							echo "Текущий (первый) элемент массива: <span class='white'>$firstitem</span><br><br>";
							echo '<span class="white txtdec-under">Возвращает последний элемент массива</span> >> end($paper2)<br><br>';
							$lastitem = end($paper2);
							echo "Последний элемент массива: <span class='white'>$lastitem</span><br><br>"; 
						?>
					</p>
				</div>
				<div class="right-col">
					<ul>
						<li><a href="#one">Массивы с числовой индексацией</a></li>
						<li><a href="#two">Ассоциативные массивы</a></li>
						<li><a href="#three">Присваивание с использованием ключевого слова array</a></li>
						<li><a href="#four">Функция list</a></li>
						<li><a href="#five">Многомерные массивы</a></li>
						<li><a href="#six">Использование функций при работе с массивами</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer">
			<p>&#169; AVAL-2018</p>
		</div>
	</div>
</body>
</html>