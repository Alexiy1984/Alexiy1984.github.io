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
        "<div class='wrapper'>".
        "<div class='header'>".
        "<div class='logo'>$appname</div>".
        "<div class='appname'>$appname$userstr</div>";

  if ($loggedin)
  {
    echo
          "<ul class='hor-menu'>" .
          "<li class='hor-menu__item'><a class='hor-menu__link' href='members.php?view=$user'>Домой</a></li>" .
          "<li class='hor-menu__item'><a class='hor-menu__link' href='members.php'>Участники</a></li>".
          "<li class='hor-menu__item'><a class='hor-menu__link' href='friends.php'>Друзья</a></li>".
          "<li class='hor-menu__item'><a class='hor-menu__link' href='messages.php'>Сообщения</a></li>".
          "<li class='hor-menu__item'><a class='hor-menu__link' href='profile.php'>Редактировать профиль</a></li>".
          "<li class='hor-menu__item'><a class='hor-menu__link' href='logout.php'>Выйти</a></li></ul></div>";
  }
  else
  {
    echo  "<ul class='hor-menu'>".
          "<li class='hor-menu__item'><a class='hor-menu__link' href='index.php'>Домой</a></li>".
          "<li class='hor-menu__item'><a class='hor-menu__link' href='signup.php'>Регистрация</a></li>".
          "<li class='hor-menu__item'><a class='hor-menu__link' href='login.php'>Вход</a></li></ul></div>".
          "<div class='info'>Для просмотра нужно зайти на сайт.</div>";
  }
?>
