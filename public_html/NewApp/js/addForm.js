function addForm(formId, Uvalue, Pvalue) {
  let signForm = O(formId);
  signForm.children[1].firstChild.innerHTML = 'Имя пользователя';
  signForm.children[1].lastChild.setAttribute('id','user');
  signForm.children[1].lastChild.setAttribute('name','user');
  signForm.children[1].lastChild.innerHTML = Uvalue;
  signForm.children[1].lastChild.setAttribute('onBlur','checkUser(this)');
  signForm.children[2].firstChild.innerHTML = 'Пароль';
  signForm.children[2].lastChild.setAttribute('name','pass');
  signForm.children[2].lastChild.innerHTML = Pvalue;
};

