<?php
  session_start();

  echo "<!DOCTYPE html>\n<html><head>";
  echo "<meta name='viewport' content='width=device-width, initial-scale=1'>";

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
        "<link rel='stylesheet' href='css/main.css' type='text/css'>".
        "</head>".
        "<body>".
        "<script src='js/main.js'></script>".
        "<script src='js/checkUser.js'></script>".
        "<script src='js/addForm.js'></script>".
        "<div class='logo'>$appname</div>".
        "<div class='appname'>$appname$userstr</div>";

  if ($loggedin)
  {
    echo "<ul class='menu'>" .
         "<li class='menu__item'><a class='menu__link button' href='members.php?view=$user'>Домой</a></li>" .
         "<li class='menu__item'><a class='menu__link button' href='members.php'>Участники</a></li>".
         "<li class='menu__item'><a class='menu__link button' href='friends.php'>Друзья</a></li>".
         "<li class='menu__item'><a class='menu__link button' href='messages.php'>Сообщения</a></li>".
         "<li class='menu__item'><a class='menu__link button' href='profile.php'>Редактировать профиль</a></li>".
         "<li class='menu__item'><a class='menu__link button' href='logout.php'>Выйти</a></li></ul>";
  }
  else
  {
    echo ("<ul class='menu'>".
          "<li class='menu__item'><a class='menu__link button' href='index.php'>Домой</a></li>".
          "<li class='menu__item'><a class='menu__link button' href='signup.php'>Регистрация</a></li>".
          "<li class='menu__item'><a class='menu__link button' href='login.php'>Вход</a></li></ul>".
          "<div class='info'>&#8658; Для просмотра нужно зайти на сайт.</div>");
  }
?>
