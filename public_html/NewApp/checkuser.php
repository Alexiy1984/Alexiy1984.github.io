<?php
  require_once 'functions.php';
  if (isset($_POST['user'])) {
    $user   = sanitizeString($_POST['user']);
    $result = queryMysql("SELECT * FROM members WHERE user='$user'");
    if ($result->num_rows)
      echo  "<div class='error'>&nbsp;&#x2718; Это имя пользователя занято</div>";
    else
      echo "<div class='succes'>&nbsp;&#x2714; Это имя пользователя свободно</div>";
  }
?>
