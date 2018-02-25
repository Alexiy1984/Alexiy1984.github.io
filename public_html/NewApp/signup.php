<?php
  require_once 'header.php';
  require_once 'addForm.php';
  echo "<div class='main'><h3>Пожалуйста, введите регистрационные данные</h3>";
  $error = $user = $pass = "";
  if (isset($_SESSION['user'])) destroySession();

  if (isset($_POST['user']))
  {
    $user = sanitizeString($_POST['user']);
    $pass = sanitizeString($_POST['pass']);

    if ($user == "" || $pass == "")
      $error = "Заполнены не все поля <br><br>";
    else
    {
      $result = queryMysql("SELECT * FROM members WHERE user='$user'");

      if ($result->num_rows)
        $error = "Такое имя пользователя недоступно<br><br>";
      else
      {
        queryMysql("INSERT INTO members VALUES('$user', '$pass')");
        die("<h4>Account created</h4>Пожалуйста войдите на сайт.<br><br>");
      }
    }
  }

  /*echo <<<_END
    <form method='post' action='signup.php' class='form'>$error
    <span class='fieldname'>Имя пользователя</span>
    <input type='text' maxlength='16' name='user' value='$user'
      onBlur='checkUser(this)'><span id='info'></span><br>
    <span class='fieldname'>Пароль</span>
    <input type='text' maxlength='16' name='pass'
      value='$pass'><br>
_END;

?>

    <span class='fieldname'>&nbsp;</span>
    <input type='submit' value='Зарегистрироваться'>
    </form></div><br>
<?php*/
  AddForm('post', 'signup.php', 'form', 'sign-form', 2);
?>
<script> addForm('sign-form',"<?php $user ?>","<?php $pass ?>")</script>
  </body>
</html>

