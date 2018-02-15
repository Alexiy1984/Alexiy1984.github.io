window.onload = function () {
  if (typeof navigator.geolocation == 'undefined') alert("Геолокация не поддерживается")
  else navigator.geolocation.getCurrentPosition(granted, denied)
  function granted(position) {
    alert("Вы находитесь в точке:\n"
    + position.coords.latitude + ", "
    + position.coords.longitude)

    O('status').innerHTML = 'Доступ получен'
    S('map').border       = '1px solid black'
    S('map').margin       = 'auto'
    S('map').width        = '75%'
    S('map').height       = '50vh'

    let lat   = position.coords.latitude
    let long  = position.coords.longitude
    let gmap  = O('map')
    let gopts = { center: new google.maps.LatLng(lat, long), zoom: 9, mapTypeId: google.maps.MapTypeId.ROADMAP}
    let map = new google.maps.Map(gmap, gopts)}

    function denied(error) {
      let message

      switch(error.code) {
        case 1: message = 'В доступе отказано'; break;
        case 2: message = 'Позиыия недоступна'; break;
        case 3: message = 'Таймаут операции'; break;
        case 4: message = 'Неизвестная ошибка'; break;
      }

      alert("Ошибка геолокации: " + message)

      O('status').innerHTML = message
  }
}
