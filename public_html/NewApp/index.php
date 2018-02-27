<?php
  require_once 'header.php';

  echo "<div class='main'>Добро пожаловать на $appname,";
  if ($loggedin) echo " $user, вы зарегистрированы.";
  else           echo ' Пожалуйста, зарегистируйтесь или войдите на сайт.';
?>
    </span><br><br>
  </body>
</html>
