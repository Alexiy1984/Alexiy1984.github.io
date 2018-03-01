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
      $error = "<div class='error'>!!! Заполнены не все поля !!!</div>";
    else
    {
      $result = queryMysql("SELECT * FROM members WHERE user='$user'");

      if ($result->num_rows)
        $error = "<div class='error'>!!! Такое имя пользователя недоступно !!!</div>";
      else
      {
        queryMysql("INSERT INTO members VALUES('$user', '$pass')");
        die("<h4>Аккаунт создан</h4>Пожалуйста войдите на сайт.<br><br>");
      }
    }
  }

echo <<<_END
    <form method='post' action='signup.php' class='form'>$error
      <div class='form__row'>
        <label for='user' class='form__row__item form__row__item_small'>Имя пользователя</label>
        <input type='text' maxlength='16' name='user' id='user' value='$user'
      onBlur='checkUser(this)' class='form__row__item form__row__item_big form__row__text'>
      </div>
      <div class='form__row'>
        <div id='info'></div>
      </div>
      <div class='form__row'>
        <label for='pass' class='form__row__item form__row__item_small'>Пароль</label>
        <input type='text' maxlength='16' name='pass' id='pass' value='$pass' class='form__row__item form__row__item_big form__row__text'>
      </div>
_END;

?>

    <div class='form__row'>
      <input type='submit' value='Зарегистрироваться' class='form__row__item button'>
    </div>
    </form>
  </div>
<?php*/
  /*AddForm('post', 'signup.php', 'form', 'sign-form', 2);*/
?>
<!-- <script> addForm('sign-form',"<?php $user ?>","<?php $pass ?>")</script>
   -->  </body>
</html>

