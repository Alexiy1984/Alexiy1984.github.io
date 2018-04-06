document.addEventListener('DOMContentLoaded', function() {
  let container = document.getElementById('JS-container');
  let contheading = document.getElementById('JS-h-for-load');
  let stringinp = document.getElementById('JS-input-for-string');
  let button = document.getElementById('JS-button');
  let select = document.getElementById('JS-select');
  function OnloadReport() {
    try {
      if (button && stringinp && contheading && select) {
        Initialize('Успешная загрузка');
      } 
    } catch (error) {
      Initialize('Ошибка загрузки');
      alert(error.name +'\n'+ error.massage + '\n' + error.stack);
    }
    function Initialize(arg) {
      contheading.innerHTML = arg;
      contheading.style.cssText = "\
      text-align: center;\
      text-transform: uppercase;\
      font-size: 1.5em;\
      ";
      if (arg=='Успешная загрузка') {
        contheading.style.color = 'green';
      } else contheading.style.color = 'red';
    }
  }
  OnloadReport();
  function RegExpF(string,key) {
    console.log(key);
    let reg1;
    let result;
    switch (key) {
      case '1': reg1 = /^[0-9]+$/; 
        break;
      case '2': reg1 = /^[a-zA-Zа-яА-Я]+$/; 
        break;
      case '3': reg1 = /^[0-9a-zA-Zа-яА-Я]+$/; 
        break;
      default: console.log('не задано значение');
        break;
    }
    console.log(reg1.test(string));
    if (reg1.test(string)) {
      console.log('test result :' + reg1.test(string));
      result = 'Строка : ' + string + ' соответствует условиям'; 
    } else {
      console.log('test result :' + reg1.test(string));
      result = 'Строка : ' + string + ' не соответствует условиям'; 
    } 
    return result;
  }

  let div = document.createElement('div');
  let par = document.createElement('p');

  button.onclick = function() {
    container.appendChild(div); 
    for (let i = 0; i < select.options.length; i++) {
      let option = select.options[i];
      if(option.selected) {
        div.appendChild(par).innerHTML = RegExpF(stringinp.value,option.value);
      }
    }
  }
  
});


