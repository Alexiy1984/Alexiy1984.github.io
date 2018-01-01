<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Welcome to Test!</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="header">
		<h1>Success! Virtual host is working!</h1>
	</div>
	<div class="wrapper">
		
		<div class="content">
			<?php echo "<p class='text-justify'> Quis qui dolore in irure dolor voluptate irure laboris sed. Eu dolore in ex id eu commodo tempor amet duis amet anim cupidatat culpa in dolor labore reprehenderit id. Occaecat deserunt labore cillum reprehenderit amet do velit amet. Ut elit quis irure culpa quis adipisicing in amet dolor deserunt deserunt aute velit velit quis enim sunt. Nisi et non anim cupidatat sint non laboris nulla mollit ut nisi cupidatat ut laborum adipisicing. Consectetur elit minim ut irure excepteur irure officia nisi deserunt in nulla sunt. Lorem ipsum ut anim cupidatat occaecat proident occaecat ut enim irure consectetur. Id tempor eiusmod exercitation in non eu dolore nisi quis nostrud deserunt sint elit laboris nostrud voluptate occaecat qui. Anim eiusmod occaecat in culpa duis ullamco consequat eu fugiat sint. Sint ex in amet officia nostrud commodo magna sunt consequat magna. Ullamco eu do cupidatat exercitation nostrud sunt eu aliquip ea non ea laboris aute. Officia pariatur adipisicing veniam dolor laborum ad aliquip consectetur cillum fugiat et sit anim minim. Nulla labore mollit non mollit id sed eu sint voluptate deserunt enim esse in est deserunt aliqua. Sed minim do ut sint cupidatat in do sit laborum ut in est est aliqua. Dolor aute anim in dolor velit culpa exercitation occaecat ex magna amet ut ut esse ullamco qui pariatur sunt. Lorem ipsum aliquip labore magna magna excepteur in ut culpa velit culpa exercitation ea. Sit aliquip cillum nisi magna amet in dolore nostrud laborum consectetur consequat amet magna quis duis nulla.</p>" ?>
			
		</div>
		
		<div class="aside">
			<?php $mes[0]="-";
			$mes[1]="Января";
			$mes[2]="Февраля";
			$mes[3]="Марта";
			$mes[4]="Апреля";
			$mes[5]="Мая";
			$mes[6]="Июня";
			$mes[7]="Июля";
			$mes[8]="Августа";
			$mes[9]="Сентебря";
			$mes[10]="Октября";
			$mes[11]="Ноября";
			$mes[12]="Декабря";
			
			$ned[0]="Воскресенье";
			$ned[1]="Понедельник";
			$ned[2]="Вторник";
			$ned[3]="Среда";
			$ned[4]="Четверг";
			$ned[5]="Пятница";
			$ned[6]="Субота";
			
			$nednum=(int)date("w");
			$mesnum=(int)date("m");
			
			echo "Сегодня ".$ned[$nednum]." ".date("d")." ".$mes[$mesnum]." ".date("Y")." года<br>";
			
			$today = "Сегодня ";
			$today.= strval(date("H:i:s")); 
			
			echo $today;
			
			?></div>
	</div>

</body>
</html>
