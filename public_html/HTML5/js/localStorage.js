window.onload = function () {
  if (typeof localStorage == 'undefined') {
    alert('Локальное хранилище недоступно');
  }
  else {
    username = localStorage.getItem('username');
    password = localStorage.getItem('password');
    alert("Текущие значения пользователя и пароля\n\n" +
    username + "/" + password + "\n\nНажмите ОК для продолжения");
    localStorage.setItem('username','ceastwood');
    localStorage.setItem('password','mmdder21');
    username = localStorage.getItem('username');
    password = localStorage.getItem('password');
    alert("Текущие значения пользователя и пароля\n\n" +
    username + "/" + password + "\n\nНажмите ОК для удаления данных");
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    username = localStorage.getItem('username');
    password = localStorage.getItem('password');
    alert("Текущие значения пользователя и пароля\n\n" +
    username + "/" + password);
  }
}
