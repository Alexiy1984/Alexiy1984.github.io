<?php
  $dbhost  = 'localhost';
  $dbname  = 'newAppDb';
  $dbuser  = 'alex';
  $dbpass  = 'secretpass';
  $appname = "New App";
  $connection = new mysqli($dbhost, $dbuser, $dbpass, $dbname);



  if ($connection->connect_error) die($connection->connect_error);
  function createTable($name, $query) {
    queryMysql("CREATE TABLE IF NOT EXISTS $name($query)");
    echo "Таблица '$name' создана или уже существует.<br>";
  }

  function queryMysql($query) {
    global $connection;
    $result = $connection->query($query);
    if (!$result) die($connection->error);
    return $result;
  }

  function destroySession() {
    $_SESSION=array();
    if (session_id() != "" || isset($_COOKIE[session_name()])) setcookie(session_name(), '', time()-2592000, '/');
    session_destroy();
  }

  function sanitizeString($var) {
    global $connection;
    $var = strip_tags($var);
    $var = htmlentities($var);
    $var = stripslashes($var);
    return $connection->real_escape_string($var);
  }

  function showProfile($user) {
    if (file_exists("$user.jpg")) echo "<div class='profile'><div class='profile__row profile__row_left'>".
      "<div class='profile__col profile__first-col'><img class='profile__img' src='$user.jpg'></div>";
    else  echo "<div class='profile'><div class='profile__row profile__row_left'>".
      "<div class='profile__col profile__first-col'><img  class='profile__img' src='img/PersonPlaceholder.png'></div>";
    $result = queryMysql("SELECT * FROM profiles WHERE user='$user'");

    if ($result->num_rows) {
      $row = $result->fetch_array(MYSQLI_ASSOC);
      echo "<div class='profile__col profile__second-col'>". stripslashes($row['text'])."</div></div></div>";
    } else echo "</div></div>";
  }
?>
