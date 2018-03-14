window.onload = function () {
  let submitButtonFF = document.getElementById('SubmitButton_1_JS');
  let formForValidFF = document.getElementById('SubmitForm_1_JS');
  let submitButtonSF = document.getElementById('SubmitButton_2_JS');
  let formForValidSF = document.getElementById('SubmitForm_2_JS');
  submitButtonFF.onclick = function() {
    validate(formForValidFF);
    return false;
  }
  submitButtonSF.onclick = function() {
    validate(formForValidSF);
    return false;
  }
  function validate(form) {
    fail = validateEmail(form.email.value);
    if (fail == "") return alert("The form was sent")
    else {
      alert(fail); return false
    }
  }
  function validateEmail(field) {
    if (field =="") return ("Missing fields. Please try again.\n")
    else if (!((field.indexOf(".")>0) && (field.indexOf("@")>0)) || /[^a-zA-Z0-9.@_-]/.test(field))
    return "Invalid fields. Please try again.\n"
    return ""
  }
}
