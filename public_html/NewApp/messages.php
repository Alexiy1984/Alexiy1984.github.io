<?php
  require_once 'header.php';
  if (!$loggedin) die();
  if (isset($_GET['view'])) $view = sanitizeString($_GET['view']);
  else $view = $user;
  if (isset($_POST['text'])) {
    $text = sanitizeString($_POST['text']);
    if ($text != "") {
      $pm   = substr(sanitizeString($_POST['pm']),0,1);
      $time = time();
      queryMysql("INSERT INTO messages VALUES(NULL, '$user',
        '$view', '$pm', $time, '$text')");
    }
  }
  if ($view != "") {
    if ($view == $user) $name1 = $name2 = "Ваши";
    else {
      $name1 = "<a href='members.php?view=$view'>$view</a>'s";
      $name2 = "$view's";
    }
    echo "<div class='main'><h3>$name1 сообщения</h3>";
    showProfile($view);
    echo <<<_END
      <form class="form" method='post' action='messages.php?view=$view'>
      <div class="form__row">Напишите здесь свое сообщение:</div>
      <div class="form__row">
        <textarea name='text' cols='40' rows='10'></textarea>
      </div>
      <div class="form__row">
        <div>
          Public<input type='radio' name='pm' value='0' checked='checked'>
          Private<input type='radio' name='pm' value='1'>
        </div>
        <div>
          <input class="button form__button" type='submit' value='Отправить сообщение'></form><br>
        </div>
      </div>
_END;
    if (isset($_GET['erase'])) {
      $erase = sanitizeString($_GET['erase']);
      queryMysql("DELETE FROM messages WHERE id=$erase AND recip='$user'");
    }
    $query  = "SELECT * FROM messages WHERE recip='$view' ORDER BY time DESC";
    $result = queryMysql($query);
    $num    = $result->num_rows;
    for ($j = 0 ; $j < $num ; ++$j) {
      $row = $result->fetch_array(MYSQLI_ASSOC);
      if ($row['pm'] == 0 || $row['auth'] == $user || $row['recip'] == $user) {
        echo date('M jS \'y g:ia:', $row['time']);
        echo " <a href='messages.php?view=" . $row['auth'] . "'>" . $row['auth']. "</a> ";
        if ($row['pm'] == 0) echo "написал(ла): &quot;" . $row['message'] . "&quot; ";
        else echo "whispered: <span class='whisper'>&quot;".$row['message']. "&quot;</span> ";
        if ($row['recip'] == $user)
          echo "[<a href='messages.php?view=$view &erase=" . $row['id'] . "'>очистить</a>]";
        echo "<br>";
      }
    }
  }
  if (!$num) echo "<br><span class='info'>Пока нет сообщений</span><br><br>";
  echo "<br><a class='button form__button button_block' href='messages.php?view=$view'>Обновить сообщения</a>";
?>
    </div><br>
  </body>
</html>
