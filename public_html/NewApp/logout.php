<?php
  require_once 'header.php';
  if (isset($_SESSION['user'])) {
    destroySession();
    echo "<div class='main'>Вы покинули сайт. Пожалуйста <a href='index.php'>кликните здесь</a> для обновления страницы.";
  }
  else echo "<div class='main'><br>Вы не можете завершить сеанс, так как вы не входили на сайт.";
?>
    <br><br></div>
  </body>
</html>
