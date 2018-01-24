// params = "url=amazon.com/gp/aw";
nocache = "&nocache=" + Math.random() * 1000000;
request = new ajaxRequest();

// request.open("POST", "urlpost.php", true);
request.open("GET", "urlget.php?url=amazon.com/gp/aw" + nocache, true);
/*request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
request.setRequestHeader("Content-length", params.length);
request.setRequestHeader("Connection", "close");*/

request.onreadystatechange = function () {
	if (this.readyState == 4) {
		if (this.status == 200) {
			if (this.responseText != null) {
				document.getElementById('info').innerHTML = this.responseText;
			}
			else alert("Ошибка AJAX: Данные не получены");
		}
		else alert("Ошибка AJAX:" +this.statusText);
	}
}

// request.send(params);
request.send(null);

function ajaxRequest() {
  try {
    var request = new XMLHttpRequest()
  }
  catch(e1) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP")
    }
    catch(e2) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP")
      }
      catch(e3) {
        request = false
      }
    }
  }
  return request
}