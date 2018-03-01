<?php
  require_once 'header.php';
  if (!$loggedin) die();
  echo "<div class='main'>";
  if (isset($_GET['view'])) {
    $view = sanitizeString($_GET['view']);
    if ($view == $user) {$name = "Ваш"; $nameP ="ваши сообщения";}
    else                {$name = "$view's"; $nameP = "сообщения $name";}
    echo "<h3>$name Профиль</h3>";
    showProfile($view);
    echo "<div class='figure-button'><div><a class='figure-button__link' href='messages.php?view=$view'>Показать $nameP</a></div></div>";
    die("</div></body></html>");
  }
  if (isset($_GET['add']))
  {
    $add = sanitizeString($_GET['add']);
    $result = queryMysql("SELECT * FROM friends WHERE user='$add' AND friend='$user'");
    if (!$result->num_rows)
      queryMysql("INSERT INTO friends VALUES ('$add', '$user')");
  }
  elseif (isset($_GET['remove']))
  {
    $remove = sanitizeString($_GET['remove']);
    queryMysql("DELETE FROM friends WHERE user='$remove' AND friend='$user'");
  }
  $result = queryMysql("SELECT user FROM members ORDER BY user");
  $num    = $result->num_rows;
  echo "<h3>Другие участники</h3><ul class='members-list'>";
  for ($j = 0 ; $j < $num ; ++$j)
  {
    $row = $result->fetch_array(MYSQLI_ASSOC);
    if ($row['user'] == $user) continue;

    echo "<li class='members-list__item'><a href='members.php?view=" .
      $row['user'] . "' class='members-list__link'>" . $row['user'] . "</a>";
    $follow = "предложить дружбу";

    $result1 = queryMysql("SELECT * FROM friends WHERE
      user='" . $row['user'] . "' AND friend='$user'");
    $t1      = $result1->num_rows;
    $result1 = queryMysql("SELECT * FROM friends WHERE
      user='$user' AND friend='" . $row['user'] . "'");
    $t2      = $result1->num_rows;

    if (($t1 + $t2) > 1) echo " &harr; в друзьях";
    elseif ($t1)         echo " &larr; вы предложили дружбу";
    elseif ($t2)       { echo " &rarr; предлагает дружбу";
      $follow = "recip"; }

    if (!$t1) echo " [<a href='members.php?add="   .$row['user'] . "'>$follow</a>]";
    else      echo " [<a href='members.php?remove=".$row['user'] . "'>удалить</a>]";
  }
?>
    </ul></div>
  </body>
</html>
