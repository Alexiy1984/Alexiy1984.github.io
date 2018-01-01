
<style>
	* {
		margin: 0;
		padding: 0;
	}

	body {
		background: #111;
		color: #0F0;
		padding: 2em;

	}

	.col-1, .col-2 {
		display: inline-block;
		padding-right: 3em; 
	}
	
	.col-1 {
		color: red;
	}

	.col-2 {
		color: #fff;
	}

	.text-center {
		text-align: center;
	}
	ul {
		list-style: none;
		background: #0AF;
		margin: auto;
		width: 24em;
		min-width: 24em;
		padding: 1em;
		border: 2px solid #309;
	}

	li a {
		display: block;
		margin: auto;
		margin-bottom: 1em;
		width: 20em;
		padding: 1em;
		background: #5555FFFF;
		border: 2px solid #5555FFFF;
		text-decoration: none;
		color: #fff;
	}

	li a:hover,
	li a:active {
		border: 2px solid #fff;
		background: #959CFFFF;
	}

	ul li:last-of-type  a{
		margin-bottom: 0;
	}
 	
 	@media (max-width: 800px) {
 		body {
			font-size: 14px;
 		}
 	}
</style>

<?php 
include 'library.php';
include 'userobj.php';
$username = "Alex";
echo $username;
echo "<br>";
$current_user = "текущий пользователь: ";
echo "В этой строке указан $current_user, это $username <br>"; 
$current_user .= $username;
echo $current_user;
echo "<br>";

// Массив
$mass = array('1' => 'Первое значение' , '2' => 'Второе значение' ,'3' => 'Третье значение' ,'4' => 'Четвертое значение' ,'5' => 'Пятое значение' ,);
var_dump($mass);
echo '<br>';
$listofval = '<ul>'; 
foreach ($mass as $value) {
	echo '<br> <p class="text-center">' .$value .'</p><br>';
	$listofval .= '<li><a class="text-center" href="#">' .$value .'</a></li>'; 
};
	$listofval .= '</ul>';
	echo $listofval;

	$firstitm = 12345;
	$seconditm = 76859;
	$number = $firstitm * $seconditm;
	echo "Вычисленная переменная =  $number <br>";
	echo 'Три элемента переменной взятые начиная с 5 символа ' .substr($number, 4, 3);

	echo "<br>Эта строка " .__LINE__ ." в файле " .__FILE__ ."<br>";
  $b = 1;
	$b ? print "TRUE<br>" : print "FALSE<br>";

 	global $SOMEGLOBAL;
 	$SOMEGLOBAL = "Сегодня ";

	function LongDate($timestamp)
	{
		static $count = 0;
		$timestamp==time() ? $SOMEGLOBAL =  "Сегодня: ": $SOMEGLOBAL =  "Тогда было: ";
		$count++;
		return $SOMEGLOBAL .date("l F jS Y",$timestamp) ."<br>Количество вызовов функции = $count <br>" ;
	};

	echo "<br>";
	
	echo LongDate(time()-10*24*60*60);
	echo LongDate(time()-15*24*60*60);
	echo LongDate(time()-4*24*60*60);
	echo LongDate(time());
  
  echo "<br>";

	$fuel = 100;
	$roadtrip = 0;
	$consumption = 12;
	while ( $fuel >= $consumption) {
		$fuel -= $consumption;
		$roadtrip += 100;
		echo "Мы проехали: $roadtrip км. Осталось топлива: $fuel <br>"; 
	}
  $lowered = ucfirst(strtolower("sdsA sdsdEdd sasRe sasaEr asQwwe <br><br>"));
  echo $lowered;

  $Namesofpers = array('gEorg','MATE','willam','lEx','micHel');

 
	function FixName($nameofpers)
	{
		return $nameofpers = ucfirst(strtolower($nameofpers));
	}
  
  echo '<div class="col-1">';
  foreach ($Namesofpers as $item) {
  	print 'Исходное значение: ' .$item .'<br>';
	}
  echo '</div>';

   echo '<div class="col-2">';
  foreach ($Namesofpers as $item) {
  	print 'Исправленое: ' .FixName($item) .'<br>';
	}
  echo '</div>';

  Greatings();
  DivPrint('#0AF', '#000');

  $WebUser1 = New WebUserClass;
  $WebUser1->WebUserName="Alex"; 
  $WebUser1->WebUserPassword="12345";
	print_r($WebUser1);
	echo '<br>';
	$WebUser1->save_user(); 
	$WebUser2 = clone $WebUser1;
	$WebUser2->WebUserName="Nico"; 
  $WebUser2->WebUserPassword="23445";
	echo '<br>';
	print_r($WebUser2);
	echo '<br><br>';
	echo $WebUser1->pwd_string() .'<br>';
	echo 'Name: '.$WebUser1->get_name() . ', Password: ';
	echo $WebUser1->get_password() .'<br>';
	echo 'Name: '.$WebUser2->get_name() . ', Password: ';
	echo $WebUser2->get_password() .'<br>';
	echo "<br><br>";
	$Subscriber1 = New WebSubscriberClass;
	$Subscriber1->WebUserName="Mike"; 
  $Subscriber1->WebUserPassword="00000";
  $Subscriber1->Phone="3434-23-45-32";
  $Subscriber1->Email="MikeRamsy@gmail.com";
  $Subscriber1->display();
  echo "<br><br>"; 
  $Subscriber1->Instuction();
  $Subscriber1->Instuction_2();

	$Tiger1 = New Tiger;
	echo "У тигров есть<br>";
	echo "Мех " .$Tiger1->fur ."<br>";
	echo "Полосы " .$Tiger1->stripes ."<br>";

?>