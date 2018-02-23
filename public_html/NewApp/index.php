<?php
  require_once 'fun/header.php';

  echo "<br><span class='main'>Добро пожаловать на $appname,";
  if ($loggedin) echo " $user, вы зарегистрированы.";
  else           echo ' Пожалуйста, зарегистируйтесь или войдите на сайт.';
?>
    </span><br><br>
  </body>
</html>
