<?php
  require_once 'header.php';
  echo "<div class='main'><h3>Введите пожалуйста данные для входа на сайт</h3>";
  $error = $user = $pass = "";

  if (isset($_POST['user']))
  {
    $user = sanitizeString($_POST['user']);
    $pass = sanitizeString($_POST['pass']);

    if ($user == "" || $pass == "")
        $error = "Заполнены не все поля<br>";
    else
    {
      $result = queryMySQL("SELECT user,pass FROM members
        WHERE user='$user' AND pass='$pass'");

      if ($result->num_rows == 0)
      {
        $error = "<span class='error'>Неверное Имя пользователя или пароль</span><br><br>";
      }
      else
      {
        $_SESSION['user'] = $user;
        $_SESSION['pass'] = $pass;
        die("Вы уже вошли на сайт. Пожалуйста <a href='members.php?view=$user'> щелкните на этой ссылке</a> для продолжения.<br><br>");
      }
    }
  }

  echo <<<_END
    <form method='post' action='login.php' class='form'>$error
    <div class='form__row'>
      <span class='fieldname'>Имя пользователя</span>
      <input type='text' maxlength='16' name='user' value='$user'>
    </div>
    <div class='form__row'>
      <span class='fieldname'>Пароль</span>
      <input type='password' maxlength='16' name='pass' value='$pass'>
    </div>
    <div class='form__row'>
      <input type='submit' value='Login' class='button form__button'>
      </form>
    </div>
_END;
?>
    <!-- <span class='fieldname'>&nbsp;</span> -->
   </div>
  </body>
</html>
