<?php

function Greatings()
{
	echo "<br><br>Подключен дополнительный файл: " .__FILE__;

	if (function_exists("array_combine")) {
		echo "<br>Функция существует<br>";
	} else {
		echo "<br>Функыия не представлена<br>";
	}

};
 
 function DivPrint($bgcol, $color) {
  $styleDiv = "<style>.wrapper{
  		margin: 1em 0; 
  		display: flex; 
  		background: $bgcol; 
  		color: $color; 
  		justify-content: center; 
  		align-items: center;
  		padding: 1em;
  	}
  	.inner {
			padding: 1em;
			border: 1px solid #000;
  	}

  	.inner span {
  		color: red;
  	}
  </style>";
 	$printDiv = $styleDiv .'<div class=wrapper><div class="inner"><p>Приветствуем вас это новый див с абзацем из файла: <span>' .__FILE__  .'</span></p></div></div>';
 	echo $printDiv;

 }

?>