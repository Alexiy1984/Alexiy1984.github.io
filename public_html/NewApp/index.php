<?php
  require_once 'header.php';

  echo "<div class='main'><h3>Добро пожаловать на $appname,";
  if ($loggedin) echo " $user, вы зарегистрированы.</h3>";
  else           echo ' Пожалуйста, зарегистируйтесь или войдите на сайт.</h3>';
?>
    </span><br><br>
  </body>
</html>
