<?php
	$WebUser = New WebUserClass;
	print_r($WebUser);
	//КЛАСС
	class WebUserClass {
		public $WebUserName, $WebUserPassword;
		function save_user() {
			echo "Какой-то код в методе класа";
		}

		function get_name() {
			return $this->WebUserName;
		}

		function get_password() {
			return $this->WebUserPassword;
		}

		static function pwd_string()
		{
			echo 'Введите пожалуйста пароль';
		}

		function Instuction()
		{
			echo "СОДЕРЖАНИЕ МЕТОДА ПРЕДКА";
		}

	}

	//РАСШИРЕНИЕ КЛАССА
	class WebSubscriberClass extends WebUserClass {
		
		public $Phone, $Email;

		function display()
		{
			echo "Name: " 	.$this->WebUserName .'<br>';
			echo "Pass: " 	.$this->WebUserPassword .'<br>';
			echo "Phone: " 	.$this->Phone .'<br>';
			echo "Email: " 	.$this->Email;
		}

		function Instuction() {
			echo "СОДЕРЖАНИЕ МЕТОДА, ПЕРЕОПРЕДЕЛИВШЕГО МЕТОД ПРЕДКА<br>";
		}
		// Инструкция Parent (доступ к одноименному методу предка)
		function Instuction_2() {
			echo '<br><br>';
			parent::Instuction();
			echo '<br><br>';
			self::Instuction();
		}

	}
	//Конструкторы подклассов
	class WildCat {
		public $fur;

		function __construct()
		{
			$this->fur = "TRUE";
		}

		final function copiright()
		{
			echo "ФИНАЛЬНЫЙ МЕТОД -  НЕ ПЕРЕОПРЕДЕЛЯЕТСЯ";
		}
	}

	class Tiger extends WildCat
	{
		public $stripes;

		function __construct()
		{
			parent::__construct();
			$this->stripes = "TRUE";
		}
	}


?>