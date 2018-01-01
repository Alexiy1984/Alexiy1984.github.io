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
				</div>
				<div class="right-col">
					<ul>
						<li><a href="#one">Массивы с числовой индексацией</a></li>
						<li><a href="#two">Ассоциативные массивы</a></li>
						<li><a href="#three">Присваивание с использованием ключевого слова array</a></li>
						<li><a href="#four">Функция list</a></li>
						<li><a href="#five">Многомерные массивы</a></li>
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