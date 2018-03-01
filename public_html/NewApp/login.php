<?php
  require_once 'header.php';
  echo "<div class='main'><h3>Введите пожалуйста данные для входа на сайт</h3>";
  $error = $user = $pass = "";

  if (isset($_POST['user']))
  {
    $user = sanitizeString($_POST['user']);
    $pass = sanitizeString($_POST['pass']);

    if ($user == "" || $pass == "")
        $error = "<div class='error'>!!! Заполнены не все поля !!!</div>";
    else
    {
      $result = queryMySQL("SELECT user,pass FROM members
        WHERE user='$user' AND pass='$pass'");

      if ($result->num_rows == 0)
      {
        $error = "<div class='error'>!!! Неверное Имя пользователя или пароль !!!</div>";
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
      <label for='user' class='form__row__item form__row__item_small'>Имя пользователя</label>
      <input type='text' maxlength='16' name='user' id='user' value='$user' class='form__row__item form__row__item_big form__row__text'>
    </div>
    <div class='form__row'>
      <label for='user' class='form__row__item form__row__item_small'>Пароль</label>
      <input type='password' maxlength='16' name='pass' id='pass' value='$pass' class='form__row__item form__row__item_big form__row__text'>
    </div>
    <div class='form__row'>
      <input type='submit' value='Войти' class='form__row__item button'>
    </div>
    </form>
_END;
?>
    <!-- <span class='fieldname'>&nbsp;</span> -->
   </div>
  </body>
</html>
