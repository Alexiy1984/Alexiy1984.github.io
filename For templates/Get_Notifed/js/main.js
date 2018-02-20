window.onload = function () {
  let submitButton = document.getElementById('SubmJS');
  let formForValid = document.getElementById('FormJS');
  submitButton.onclick = function() {
    validate(formForValid);
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
