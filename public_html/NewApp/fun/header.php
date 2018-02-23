<?php
  session_start();

  echo "<!DOCTYPE html>\n<html><head>";

  require_once 'functions.php';

  $userstr = ' (Гость)';

  if (isset($_SESSION['user']))
  {
    $user     = $_SESSION['user'];
    $loggedin = TRUE;
    $userstr  = " ($user)";
  }
  else $loggedin = FALSE;

  echo  "<title>$appname$userstr</title>".
        "<link rel='stylesheet' href='../css/main.css' type='text/css'>".
        "</head>".
        "<body>".
          "<center>".
            "<canvas id='logo' width='624' height='96'>$appname</canvas>".
          "</center>".
        "<div class='appname'>$appname$userstr</div>".
        "<script src='js/main.js'></script>";

  if ($loggedin)
  {
    echo "<br ><ul class='menu'>" .
         "<li><a href='members.php?view=$user'>Домой</a></li>" .
         "<li><a href='fun/members.php'>Участники</a></li>".
         "<li><a href='fun/friends.php'>Друзья</a></li>".
         "<li><a href='fun/messages.php'>Сообщения</a></li>".
         "<li><a href='fun/profile.php'>Редактировать профиль</a></li>".
         "<li><a href='fun/logout.php'>Выйти</a></li></ul><br>";
  }
  else
  {
    echo ("<br><ul class='menu'>".
          "<li><a href='index.php'>Домой</a></li>".
          "<li><a href='fun/signup.php'>Регистрация</a></li>".
          "<li><a href='fun/login.php'>Вход</a></li></ul><br>".
          "<span class='info'>&#8658; Для просомтра нужно зайти на сайт.</span><br><br>");
  }
?>
