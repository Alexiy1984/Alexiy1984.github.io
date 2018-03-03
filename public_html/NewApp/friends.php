<?php
  require_once 'header.php';
  if (!$loggedin) die();
  if (isset($_GET['view'])) $view = sanitizeString($_GET['view']);
  else $view = $user;
  if ($view == $user) {
    $name1 = $name2 = "Ваши";
    $name3 = "Вы";
  }
  else {
    $name1 = "<a href='members.php?view=$view'>$view</a>'s";
    $name2 = "$view's";
    $name3 = "$view is";
  }
  echo "<div class='main'>";
  // для показа профиля
  // showProfile($view);
  $followers = array();
  $following = array();
  $result = queryMysql("SELECT * FROM friends WHERE user='$view'");
  $num    = $result->num_rows;
  for ($j = 0 ; $j < $num ; ++$j) {
    $row  = $result->fetch_array(MYSQLI_ASSOC);
    $followers[$j] = $row['friend'];
  }
  $result = queryMysql("SELECT * FROM friends WHERE friend='$view'");
  $num    = $result->num_rows;
  for ($j = 0 ; $j < $num ; ++$j) {
      $row = $result->fetch_array(MYSQLI_ASSOC);
      $following[$j] = $row['user'];
  }
  $mutual    = array_intersect($followers, $following);
  $followers = array_diff($followers, $mutual);
  $following = array_diff($following, $mutual);
  $friends   = FALSE;
  if (sizeof($mutual)) {
    echo "<span class='subhead'>$name2 Друзья</span><ul class='friends-list'>";
    foreach($mutual as $friend)
      echo "<li class='friends-list__item'><a class='friends-list__link' href='members.php?view=$friend'>$friend</a>";
    echo "</ul>";
    $friends = TRUE;
  }
  if (sizeof($followers)) {
    echo "<span class='subhead'>$name2 входящие заявки в друзья</span><ul class='friends-list'>";
    foreach($followers as $friend)
      echo "<li class='friends-list__item'><a class='friends-list__link' href='members.php?view=$friend'>$friend</a>";
    echo "</ul>";
    $friends = TRUE;
  }
  if (sizeof($following)) {
    echo "<span class='subhead'>$name3 исходящие заявки в друзья</span><ul class='friends-list'>";
    foreach($following as $friend)
      echo "<li class='friends-list__item'><a class='friends-list__link' href='members.php?view=$friend'>$friend</a>";
    echo "</ul>";
    $friends = TRUE;
  }
  if (!$friends) echo "<br>У вас пока нет друзей.<br><br>";
  echo "<div class='main__footer'><div class='figure-button figure-button_float_rigth'><div><a class='figure-button__link' href='messages.php?view=$view'>"
  ."Показать $name2 сообщения</a></div></div></div>";
?>
    </div><br>
  </body>
</html>
