<!--Код для распечатки одномерного массива-->

<?php

	function PrintArray($varray, $sometextkey1, $sometextkey2, $sometextval1, $sometextval2)
	 {
	 		foreach($varray as $key => $value)
			{
				echo "$sometextkey1 $key $sometextkey2";								
  		  echo "$sometextval1 $value $sometextval2";
			}
	 }
?>